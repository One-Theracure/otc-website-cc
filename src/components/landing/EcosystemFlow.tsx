import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function EcosystemFlow() {
  const { t } = useLang();
  const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`flow.${i}`));

  return (
    <section id="flow" className="relative py-20 sm:py-28 md:py-40 bg-background overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("flow.eyebrow")}
          title={t("flow.title")}
          subtitle={t("flow.subtitle")}
        />

        <div className="mt-24 hidden lg:block relative">
          <svg
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-5 w-full h-20 pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="flowGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#7aa9d8" stopOpacity="0" />
                <stop offset="15%" stopColor="#7aa9d8" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#4a7fb5" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4a7fb5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.line
              x1="40"
              x2="960"
              y1="40"
              y2="40"
              stroke="url(#flowGrad)"
              strokeWidth="1.5"
              initial={{ pathLength: 1 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          <div className="grid grid-cols-9 gap-2 relative">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <div className="relative z-10 h-10 w-10 rounded-full bg-white border border-border grid place-items-center shadow-card">
                  <span className="text-[11px] font-semibold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 text-[12.5px] font-medium text-navy text-center max-w-[14ch] leading-snug text-pretty break-words">
                  {s}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ol className="mt-16 lg:hidden relative pl-8">
          <span className="absolute left-[14px] top-2 bottom-2 w-px bg-border" />
          {steps.map((s, i) => (
            <li key={i} className="relative pb-7 last:pb-0">
              <span className="absolute -left-8 top-0 h-7 w-7 rounded-full bg-white border border-border grid place-items-center shadow-card">
                <span className="text-[10px] font-semibold text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <div className="text-[14px] font-medium text-navy">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
