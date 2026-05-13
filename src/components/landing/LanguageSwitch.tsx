import { ChevronDown, Globe } from "lucide-react";
import { LANGS, type Lang } from "@/lib/i18n/dictionaries";
import { useLang } from "@/lib/i18n/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitch({ scrolled }: { scrolled: boolean }) {
  const { lang, setLang, t } = useLang();
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("lang.label")}
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors focus:outline-none ${
          scrolled
            ? "bg-navy/5 ring-1 ring-navy/10 text-navy hover:bg-navy/10"
            : "bg-white/5 ring-1 ring-white/15 text-white hover:bg-white/10"
        }`}
      >
        <Globe className="h-3.5 w-3.5 opacity-70" />
        <span>{current.short}</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLang(l.code as Lang)}
            className={`text-sm ${l.code === lang ? "font-semibold" : ""}`}
          >
            {l.full}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}