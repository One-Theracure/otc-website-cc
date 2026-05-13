import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { LanguageSwitch } from "./LanguageSwitch";
import { useActiveSection } from "@/hooks/use-active-section";
import { handleHashClick } from "@/lib/smooth-scroll";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const links = [
  { href: "#about", key: "nav.about" },
  { href: "#platform", key: "nav.platform" },
  { href: "#flow", key: "nav.flow" },
  { href: "#solutions", key: "nav.solutions" },
  { href: "#trust", key: "nav.trust" },
  { href: "#team", key: "nav.team" },
];

const sectionIds = links.map((l) => l.href.slice(1));

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = handleHashClick;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <a
        href="#main"
        onClick={handleNavClick("#main")}
        className="sr-only-focusable absolute left-4 top-4 z-[60] rounded-full bg-navy text-white px-4 py-2 text-sm font-semibold shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-6xl px-4">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-full border px-4 sm:px-6 py-2.5 transition-all ${
            scrolled
              ? "glass border-border/60 shadow-elegant"
              : "border-white/15 bg-white/5 backdrop-blur-sm"
          }`}
        >
          <a
            href="#top"
            onClick={handleNavClick("#top")}
            aria-label="One TheraCure — back to top"
            className="flex items-center gap-2 sm:gap-3 min-w-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <img
              src={logoIcon}
              alt="One TheraCure"
              width={385}
              height={648}
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain shrink-0 transition-all"
            />
            <span className="hidden sm:flex flex-col justify-center leading-none min-w-0 gap-[2px]">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: -4 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { letterSpacing: "0.02em" }}
                className={`group/wordmark text-[15px] sm:text-[15.5px] font-semibold tracking-tight leading-none transition-colors truncate ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                {"one theracure".split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.025,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: scrolled ? 0.85 : 1, y: scrolled ? -1 : 0 }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block font-display text-[11px] sm:text-[12px] leading-none tracking-[0.01em] text-gradient-tagline"
              >
                Enhancing Life.
              </motion.span>
            </span>
          </a>
          <div
            className={`hidden lg:flex items-center gap-6 text-sm transition-colors ${
              scrolled ? "text-muted-foreground" : "text-white/70"
            }`}
          >
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              const activeColor = scrolled ? "text-navy" : "text-white";
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleNavClick(l.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative transition-colors ${
                    isActive
                      ? `${activeColor} font-semibold`
                      : scrolled
                        ? "hover:text-navy"
                        : "hover:text-white"
                  } after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:rounded-full after:transition-opacity ${
                    isActive
                      ? scrolled
                        ? "after:bg-navy after:opacity-100"
                        : "after:bg-white after:opacity-100"
                      : "after:opacity-0"
                  }`}
                >
                  {t(l.key)}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <LanguageSwitch scrolled={scrolled} />
            <a
              href="#cta"
              onClick={handleNavClick("#cta")}
              className={`rounded-full text-[12.5px] sm:text-sm font-semibold px-4 sm:px-5 py-2.5 min-h-[40px] inline-flex items-center transition-all whitespace-nowrap ${
                scrolled
                  ? "bg-navy text-white hover:bg-navy-deep hover:shadow-elegant"
                  : "bg-white text-navy hover:shadow-glow"
              }`}
            >
              {t("nav.cta")}
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border transition-colors ${
                    scrolled
                      ? "border-border/60 text-navy hover:bg-navy/5"
                      : "border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[82%] sm:w-[360px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-navy">Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
                  {links.map((l) => {
                    const isActive = active === l.href.slice(1);
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={handleNavClick(l.href, () => setOpen(false))}
                        aria-current={isActive ? "true" : undefined}
                        className={`text-base py-3 px-2 border-b border-border/50 transition-colors ${
                          isActive
                            ? "font-semibold text-navy bg-navy/5 rounded-md"
                            : "font-medium text-navy/85 hover:text-navy"
                        }`}
                      >
                        {t(l.key)}
                      </a>
                    );
                  })}
                  <a
                    href="#cta"
                    onClick={handleNavClick("#cta", () => setOpen(false))}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-navy text-white py-3 px-5 text-sm font-semibold"
                  >
                    {t("nav.cta")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
