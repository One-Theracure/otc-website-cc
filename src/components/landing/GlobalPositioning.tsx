import { SectionHeading } from "./SectionHeading";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function GlobalPositioning() {
  const { t } = useLang();
  const cards = [0, 1, 2].map((i) => ({
    t: t(`global.${i}.t`),
    d: t(`global.${i}.d`),
  }));

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("global.eyebrow")}
          title={t("global.title")}
          subtitle={t("global.subtitle")}
        />

        <StaggerGroup className="mt-20 grid gap-8 md:grid-cols-3">
          {cards.map((c, i) => (
            <StaggerItem key={i}>
              <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-card">
                <h3 className="h-display text-xl sm:text-2xl text-navy text-pretty">{c.t}</h3>
                <p className="mt-4 text-sm text-foreground/65 leading-relaxed text-pretty">
                  {c.d}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-16 text-center text-base sm:text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed text-pretty">
          {t("global.closing")}
        </p>
      </div>
    </section>
  );
}
