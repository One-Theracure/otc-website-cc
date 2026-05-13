import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n/LanguageProvider";
import rutik from "@/assets/team-rutik.png";

export function FounderStory() {
  const { t } = useLang();
  return (
    <section id="founder" className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow={t("founder.eyebrow")}
          title={t("founder.title")}
        />

        <div className="mt-14 space-y-6 text-base sm:text-lg text-foreground/75 leading-relaxed">
          <p className="text-pretty">{t("founder.p1")}</p>
          <p className="text-pretty">{t("founder.p2")}</p>
          <p className="text-navy font-semibold text-pretty">{t("founder.p3")}</p>
        </div>

        <div className="mt-12 flex items-center gap-4 pt-8 border-t border-border">
          <img
            src={rutik}
            alt="Rutik Thorat"
            loading="lazy"
            decoding="async"
            width={144}
            height={144}
            style={{ objectPosition: "center 25%" }}
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-navy/10"
          />
          <div className="min-w-0">
            <div className="text-base font-semibold text-navy leading-tight">
              Rutik Thorat
            </div>
            <div className="text-sm text-muted-foreground text-pretty">
              {t("founder.role")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
