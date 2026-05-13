import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BeforeMockup, DuringMockup, AfterMockup } from "./mockups/MiniMockups";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function ProductShowcase() {
  const { t } = useLang();
  const panels = [
    { key: "0", mockup: <BeforeMockup /> },
    { key: "1", mockup: <DuringMockup /> },
    { key: "2", mockup: <AfterMockup /> },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("product.eyebrow")}
          title={t("product.title")}
          subtitle={t("product.subtitle")}
        />

        <div className="mt-20 sm:mt-24 space-y-24 sm:space-y-32">
          {panels.map((p, i) => (
            <Reveal
              key={p.key}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-teal font-semibold">
                  {t(`product.${p.key}.eyebrow`)}
                </div>
                <h3 className="h-display mt-4 text-3xl sm:text-4xl text-pretty">{t(`product.${p.key}.title`)}</h3>
                <p className="mt-4 text-base text-foreground/65 leading-relaxed max-w-sm text-pretty">
                  {t(`product.${p.key}.desc`)}
                </p>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan/10 to-teal/5 blur-3xl -z-10" />
                {p.mockup}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
