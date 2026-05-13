import { ShieldCheck, UserCheck, Eye, Lock, Hand, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/i18n/LanguageProvider";

const icons = [UserCheck, ShieldCheck, Eye, Lock, Hand, HeartHandshake];

export function TrustSafety() {
  const { t } = useLang();
  const items = icons.map((Icon, i) => ({
    Icon,
    title: t(`trust.${i}.t`),
    desc: t(`trust.${i}.d`),
  }));

  return (
    <section id="trust" className="py-20 sm:py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow={t("trust.eyebrow")}
          title={t("trust.title")}
          subtitle={t("trust.subtitle")}
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-card">
              <h3 className="h-display text-2xl sm:text-3xl text-pretty">
                {t("trust.headline")}
              </h3>
              <p className="mt-5 text-sm text-foreground/65 leading-relaxed text-pretty">
                {t("trust.body")}
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-teal font-semibold">
                {t("trust.tag")}
              </p>
            </div>
          </div>

          <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 divide-hairline sm:divide-y-0">
            {items.map((it, i) => (
              <li
                key={i}
                className="flex items-start gap-4 py-6 sm:py-7 sm:border-t sm:border-border"
              >
                <div className="h-8 w-8 shrink-0 rounded-md bg-navy/5 grid place-items-center text-navy">
                  <it.Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-navy text-pretty">{it.title}</h4>
                  <p className="mt-1 text-[13px] text-foreground/65 leading-relaxed text-pretty">
                    {it.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
