import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { handleHashClick } from "@/lib/smooth-scroll";
import appScreenshot from "@/assets/app-screenshot-clinical.png";

const headline = ["AI", "Healthcare", "Operating", "System."];

export function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden text-white bg-hero"
    >
      {/* upper-left grid mask */}
      <div className="pointer-events-none absolute inset-0 medical-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_10%,black,transparent_70%)]" />
      {/* single slow drifting cyan glow */}
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[#4a7fb5]/25 blur-3xl animate-ambient" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60"
            >
              {t("hero.eyebrow")}
            </motion.div>

            <h1 className="font-display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.04] text-white text-balance">
              {headline.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 1, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.95,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-[0.28em] ${
                    i >= 2 ? "text-[#9ec3e8]" : "text-white"
                  }`}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-base sm:text-lg text-white/70 max-w-xl lg:max-w-lg leading-relaxed font-light text-pretty mx-auto lg:mx-0"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.p
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-sm sm:text-base text-[#9ec3e8] max-w-xl lg:max-w-md leading-relaxed mx-auto lg:mx-0"
            >
              {t("hero.human")}
            </motion.p>

            <motion.div
              initial={{ opacity: 1, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 sm:gap-4 lg:justify-start justify-center"
            >
              <motion.a
                href="#cta"
                onClick={handleHashClick("#cta")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy px-7 py-3.5 text-sm font-semibold ring-1 ring-white/40 shadow-[0_18px_40px_-18px_rgba(74,127,181,0.55)] hover:ring-cyan/60 w-full sm:w-auto"
              >
                {t("hero.cta.primary")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-500" />
              </motion.a>
              <motion.a
                href="#platform"
                onClick={handleHashClick("#platform")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/70 w-full sm:w-auto"
              >
                {t("hero.cta.secondary")}
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-[13px] sm:text-sm text-white/75 max-w-md mx-auto lg:mx-0 leading-[1.7] tracking-[0.005em]"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan/70 mr-2 align-middle" />
              {t("hero.proof.a")}
              <br className="hidden sm:block" />{" "}
              {t("hero.proof.b")}
            </motion.p>
          </div>

          {/* mockup */}
          <motion.div
            initial={{ opacity: 1, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 animate-float-slow"
          >
            <div className="relative">
              {/* Premium ambient glow under the window */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(56,189,248,0.22),transparent_70%)] blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 h-10 w-[80%] rounded-full bg-cyan/30 blur-3xl -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-white ring-1 ring-white/40 shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_30px_60px_-20px_rgba(2,8,23,0.55),0_60px_120px_-40px_rgba(2,8,23,0.5)]">
                {/* outer hairline against navy bg */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />

                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-b from-white to-slate-50/80 border-b border-slate-200/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]" />
                  <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-500 font-medium">
                    Clinical Workspace · One TheraCure
                  </span>
                </div>
                <img
                  src={appScreenshot}
                  alt="One TheraCure Clinical Workspace — AI scribing, decision support and live preview"
                  loading="eager"
                  className="relative block w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
