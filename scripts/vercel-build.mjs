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

// Bundle the SSR server + all npm deps into one self-contained file.
// --external:node:* keeps Node built-ins (async_hooks, stream, etc.) as-is.
await esbuild.build({
  entryPoints: [join(root, 'dist', 'server', 'server.js')],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  external: ['node:*'],
  outfile: join(fnDir, 'server.mjs'),
})

// Thin entry wrapper — adapts server.fetch (Web API) to what Vercel invokes.
writeFileSync(
  join(fnDir, 'index.mjs'),
  `import server from './server.mjs'
export default async function handler(request) {
  return server.fetch(request)
}
`,
)

writeFileSync(
  join(fnDir, '.vc-config.json'),
  JSON.stringify({ runtime: 'nodejs22.x', handler: 'index.mjs', launcherType: 'Nodejs' }, null, 2),
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
