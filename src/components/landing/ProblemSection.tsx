import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function ProblemSection() {
  const { t } = useLang();
  const problems = [0, 1, 2, 3, 4, 5].map((i) => ({
    n: String(i + 1).padStart(2, "0"),
    t: t(`problem.${i}.t`),
    d: t(`problem.${i}.d`),
  }));

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow={t("problem.eyebrow")}
          title={t("problem.title")}
          subtitle={t("problem.subtitle")}
        />

        <StaggerGroup className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 divide-hairline sm:divide-y-0">
          {problems.map((p) => (
            <StaggerItem key={p.n}>
              <div className="py-7 sm:py-8 sm:border-t sm:border-border h-full">
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-teal">
                    {p.n}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-navy text-pretty">
                    {p.t}
                  </h3>
                </div>
                <p className="mt-2 ml-[2.6rem] text-sm text-foreground/65 leading-relaxed max-w-sm text-pretty">
                  {p.d}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-16 text-center text-base sm:text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed text-pretty">
          {t("problem.closing")}
        </p>
      </div>
    </section>
  );
}
