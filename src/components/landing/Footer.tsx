import { Instagram, Linkedin, Twitter } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { handleHashClick } from "@/lib/smooth-scroll";
import { useActiveSection } from "@/hooks/use-active-section";

export function Footer() {
  const { t } = useLang();
  const sectionIds = [
    "about",
    "platform",
    "flow",
    "solutions",
    "trust",
    "team",
    "cta",
  ];
  const active = useActiveSection(sectionIds);
  const cols = [
    {
      h: t("footer.col.platform"),
      links: [
        { l: t("footer.col.platform.0"), href: "#platform" },
        { l: t("footer.col.platform.1"), href: "#platform" },
        { l: t("footer.col.platform.2"), href: "#flow" },
        { l: t("footer.col.platform.3"), href: "#solutions" },
      ],
    },
    {
      h: t("footer.col.company"),
      links: [
        { l: t("footer.col.company.0"), href: "#about" },
        { l: t("footer.col.company.1"), href: "#trust" },
        { l: t("footer.col.company.2"), href: "#team" },
        { l: t("footer.col.company.3"), href: "#cta" },
      ],
    },
  ];

  const socials = [
    {
      label: "One TheraCure on X",
      href: "https://x.com/onetheracure?s=20",
      Icon: Twitter,
    },
    {
      label: "One TheraCure on LinkedIn",
      href: "https://www.linkedin.com/company/one-theracure/",
      Icon: Linkedin,
    },
    {
      label: "One TheraCure on Instagram",
      href: "https://www.instagram.com/onetheracure?igsh=Y2R2cWg0MWo3cWFs&utm_source=qr",
      Icon: Instagram,
    },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <a
              href="#top"
              onClick={handleHashClick("#top")}
              aria-label="One TheraCure — Enhancing Life."
              className="inline-flex items-center gap-3 group"
            >
              <img
                src={logoIcon}
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                className="h-12 w-12 rounded-lg object-contain bg-white/5 ring-1 ring-white/10 p-1.5"
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg font-semibold tracking-tight text-white">
                  one theracure
                </span>
                <span className="mt-1 font-display text-[12px] leading-none tracking-[0.01em] text-gradient-tagline">
                  Enhancing Life.
                </span>
              </span>
            </a>
            <div className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">
              {t("footer.tagline")}
            </div>
            <p className="mt-5 text-sm text-white/60 max-w-sm leading-relaxed text-pretty">
              {t("footer.desc")}
            </p>
            <a
              href="mailto:info@onetheracure.com"
              className="mt-6 inline-block text-sm text-white/80 hover:text-white border-b border-white/20 hover:border-white break-all"
            >
              info@onetheracure.com
            </a>
            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">
                {t("footer.col.social")}
              </div>
              <ul aria-label="Social media" className="mt-4 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {cols.map((col, ci) => (
            <div key={ci} className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-semibold">
                {col.h}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l, li) => (
                  <li key={li}>
                    <a
                      href={l.href}
                      onClick={handleHashClick(l.href)}
                      aria-current={active === l.href.slice(1) ? "true" : undefined}
                      className={`transition-colors ${
                        active === l.href.slice(1)
                          ? "text-white font-medium"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {l.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} One TheraCure. {t("footer.rights")}</div>
          <div>{t("footer.made")}</div>
        </div>
      </div>
    </footer>
  );
}
