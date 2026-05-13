import { Check, Stethoscope, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n/LanguageProvider";

function Card({
  tag,
  title,
  desc,
  icon: Icon,
  features,
  variant,
  priceLabel,
  priceUnit,
}: {
  tag: string;
  title: string;
  desc: string;
  icon: typeof Stethoscope;
  features: string[];
  variant: "navy" | "light";
  priceLabel?: string;
  priceUnit?: string;
}) {
  const isNavy = variant === "navy";
  return (
    <div
      className={`relative rounded-3xl p-8 sm:p-10 overflow-hidden border ${
        isNavy
          ? "bg-gradient-to-br from-navy to-navy-deep text-white border-navy/40 shadow-elegant"
          : "bg-white border-border shadow-card"
      }`}
    >
      <div className="relative">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10.5px] font-semibold tracking-wide ${
            isNavy ? "bg-white/10 text-cyan" : "bg-navy/5 text-navy"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
          {tag}
        </div>
        <h3
          className={`h-display mt-5 text-3xl sm:text-[2rem] leading-tight text-pretty ${
            isNavy ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed max-w-sm text-pretty ${
            isNavy ? "text-white/65" : "text-foreground/65"
          }`}
        >
          {desc}
        </p>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {features.map((f) => (
            <li
              key={f}
              className={`flex items-start gap-2.5 text-[13px] ${
                isNavy ? "text-white/85" : "text-foreground/80"
              }`}
            >
              <span
                className={`mt-0.5 h-3.5 w-3.5 grid place-items-center rounded-full shrink-0 ${
                  isNavy ? "bg-cyan/20 text-cyan" : "bg-teal/15 text-teal"
                }`}
              >
                <Check className="h-2 w-2" strokeWidth={3} />
              </span>
              <span className="text-pretty">{f}</span>
            </li>
          ))}
        </ul>
        {isNavy && priceLabel && (
          <div className="mt-8 pt-5 border-t border-white/10 text-[12px] text-white/75">
            {priceLabel} <span className="text-white font-semibold">₹1,499</span> {priceUnit}
          </div>
        )}
      </div>
    </div>
  );
}

export function PlatformSection() {
  const { t } = useLang();
  const clinic = [0, 1, 2, 3, 4, 5].map((i) => t(`platform.clinic.f${i}`));
  const patient = [0, 1, 2, 3, 4, 5].map((i) => t(`platform.patient.f${i}`));

  return (
    <section id="platform" className="relative py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("platform.eyebrow")}
          title={t("platform.title")}
          subtitle={t("platform.subtitle")}
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-2 relative">
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative flex items-center">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-cyan to-cyan/50" />
              <div className="relative h-10 w-10 rounded-full bg-white border border-border grid place-items-center text-xs font-semibold text-navy shadow-card">
                <span className="absolute inset-0 rounded-full bg-cyan/10 animate-pulse-dot" />
                <span className="relative">⇄</span>
              </div>
              <span className="h-px w-10 bg-gradient-to-l from-transparent via-cyan to-cyan/50" />
            </div>
          </div>

          <Card
            variant="navy"
            tag={t("platform.clinic.tag")}
            icon={Stethoscope}
            title={t("platform.clinic.title")}
            desc={t("platform.clinic.desc")}
            features={clinic}
            priceLabel={t("platform.clinic.price")}
            priceUnit={t("platform.clinic.priceUnit")}
          />
          <Card
            variant="light"
            tag={t("platform.patient.tag")}
            icon={HeartHandshake}
            title={t("platform.patient.title")}
            desc={t("platform.patient.desc")}
            features={patient}
          />
        </div>
      </div>
    </section>
  );
}
