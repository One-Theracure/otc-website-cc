import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n/LanguageProvider";
import msftLogo from "@/assets/logo-microsoft-startups.svg";
import nvidiaLogo from "@/assets/logo-nvidia-inception.png";

export function AboutBrand() {
  const { t } = useLang();
  const pairs: [string, string][] = [
    [t("about.pair.0.a"), t("about.pair.0.b")],
    [t("about.pair.1.a"), t("about.pair.1.b")],
    [t("about.pair.2.a"), t("about.pair.2.b")],
    [t("about.pair.3.a"), t("about.pair.3.b")],
  ];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="mt-20 rounded-3xl border border-border bg-white p-10 sm:p-14 shadow-card">
          <div className="text-[11px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
            {t("about.mission.label")}
          </div>
          <p className="mt-5 h-display text-2xl sm:text-3xl text-navy max-w-3xl text-pretty">
            {t("about.mission.body")}
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 sm:divide-x divide-border">
            {pairs.map(([less, more], i) => (
              <div
                key={i}
                className={`px-0 sm:px-6 ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <div className="text-[11px] text-foreground/70 uppercase tracking-wider">
                  {less}
                </div>
                <div className="mt-1 text-base font-semibold text-navy">
                  {more}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <div className="text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
            {t("about.backed")}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5 text-center">
            <img src={msftLogo} alt="Microsoft for Startups" loading="lazy" decoding="async" width={180} height={48} className="h-10 sm:h-12 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition" />
            <img src={nvidiaLogo} alt="NVIDIA Inception Program" loading="lazy" decoding="async" width={231} height={79} className="h-12 sm:h-14 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
