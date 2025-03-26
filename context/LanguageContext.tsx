"use client";

import { createContext, useContext, useState, useEffect } from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

type Language = "pt" | "en";
type LanguageContextType = {
  lang: Language;
  changeLanguage: (language: Language) => void;
  t: typeof pt;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const locales = { pt, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Language) || "pt";
    }
    return "pt";
  });

  const [translations, setTranslations] = useState(locales[lang]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    setTranslations(locales[lang]);
  }, [lang]);

  const changeLanguage = (language: Language) => {
    setLang(language);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
