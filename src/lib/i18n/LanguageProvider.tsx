import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Lang } from "./dictionaries";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ot.lang";

function isLang(v: unknown): v is Lang {
  return v === "en" || v === "hi" || v === "mr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    const dict = dictionaries[lang];
    return dict[key] ?? dictionaries.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // graceful fallback if a component renders outside the provider
    return {
      lang: "en",
      setLang: () => {},
      t: (k: string) => dictionaries.en[k] ?? k,
    };
  }
  return ctx;
}