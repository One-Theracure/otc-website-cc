import { cpSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as esbuild from 'esbuild'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, '.vercel', 'output')
const fnDir = join(outDir, 'functions', 'index.func')

mkdirSync(join(outDir, 'static'), { recursive: true })
mkdirSync(fnDir, { recursive: true })

// Copy client assets → served as static files at /assets/...
cpSync(join(root, 'dist', 'client'), join(outDir, 'static'), { recursive: true })

// Bundle the SSR server as CJS so that require() is defined and the
// esbuild-generated __require shim works correctly at runtime.
await esbuild.build({
  entryPoints: [join(root, 'dist', 'server', 'server.js')],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  outfile: join(fnDir, 'server.cjs'),
})

// Entry wrapper — adapts Node.js (req, res) to server.fetch (Web API).
// Vercel's launcherType:"Nodejs" always calls handlers with IncomingMessage/ServerResponse.
writeFileSync(
  join(fnDir, 'index.js'),
  `'use strict'
const { default: server } = require('./server.cjs')

module.exports = async function handler(req, res) {
  try {
    const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim()
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost'
    const url = new URL(req.url, proto + '://' + host)

    const headers = new Headers()
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue
      if (Array.isArray(v)) v.forEach(val => headers.append(k, val))
      else headers.set(k, v)
    }

    const init = { method: req.method, headers }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = []
      for await (const chunk of req) chunks.push(chunk)
      if (chunks.length) init.body = Buffer.concat(chunks)
    }

    const response = await server.fetch(new Request(url.toString(), init))

    res.statusCode = response.status
    for (const [k, v] of response.headers) res.setHeader(k, v)

    if (response.body) {
      const reader = response.body.getReader()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        res.write(value)
      }
    }
    res.end()
  } catch (err) {
    console.error('SSR handler error:', err)
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}
`,
)

// Override parent "type":"module" — the function dir must be CommonJS.
writeFileSync(join(fnDir, 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2))

writeFileSync(
  join(fnDir, '.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.js', launcherType: 'Nodejs' }, null, 2),
)

writeFileSync(
  join(outDir, 'config.json'),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: 'filesystem' },
        { src: '/(.*)', dest: '/index' },
      ],
    },
    null,
    2,
  ),
)

console.log('Vercel output written to .vercel/output/')
