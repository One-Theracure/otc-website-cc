import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function Differentiation() {
  const { t } = useLang();
  const blocks = [0, 1, 2, 3].map((i) => ({
    a: t(`diff.${i}.a`),
    b: t(`diff.${i}.b`),
  }));

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow={t("diff.eyebrow")}
          title={t("diff.title")}
          subtitle={t("diff.subtitle")}
        />

        <StaggerGroup className="mt-20 divide-hairline">
          {blocks.map((b, i) => (
            <StaggerItem key={i}>
              <div className="grid sm:grid-cols-12 gap-4 sm:gap-10 py-10 sm:py-12 items-baseline">
                <div className="sm:col-span-5 text-base sm:text-lg text-foreground/70 text-pretty">
                  {b.a}
                </div>
                <div className="sm:col-span-7 h-display text-2xl sm:text-3xl md:text-[2.25rem] text-pretty">
                  {b.b}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
