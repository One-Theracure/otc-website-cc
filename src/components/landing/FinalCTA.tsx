import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal as="div" y={24} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-deep text-white p-8 sm:p-14 md:p-20 text-center shadow-elegant">
          <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan/20 blur-3xl animate-ambient" />

          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.22em] text-cyan font-semibold">
              {t("cta.eyebrow")}
            </div>
            <h2 className="h-display mt-4 text-3xl sm:text-5xl md:text-6xl text-white max-w-3xl mx-auto text-pretty leading-[1.08]">
              {t("cta.title")}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed text-pretty">
              {t("cta.subtitle")}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="mailto:info@onetheracure.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-navy px-7 py-3.5 text-sm font-semibold shadow-glow ring-1 ring-cyan/30 hover:ring-cyan/60 w-full sm:w-auto"
              >
                {t("cta.primary")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-500" />
              </motion.a>
              <motion.a
                href="mailto:rutik@onetheracure.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white/70 w-full sm:w-auto"
              >
                <Mail className="h-4 w-4" /> {t("cta.secondary")}
              </motion.a>
            </div>
            <div className="mt-8 text-xs text-white/70 tracking-wide break-words">
              rutik@onetheracure.com  ·  www.onetheracure.com
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
