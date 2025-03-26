import { useState, useEffect } from "react";
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

type Language = "pt" | "en";

const locales = { pt, en };

export const useLanguage = () => {
  const getStoredLang = (): Language => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang");
      return storedLang === "pt" || storedLang === "en" ? storedLang : "pt";
    }
    return "pt";
  };

  const [lang, setLang] = useState<Language>(getStoredLang);
  const [translations, setTranslations] = useState(locales[lang]);
  const [, setForceRender] = useState(0); // Estado para forçar re-render

  useEffect(() => {
    localStorage.setItem("lang", lang);
    setTranslations(locales[lang]);
    setForceRender((prev) => prev + 1); // Força re-render
  }, [lang]);

  const changeLanguage = (language: Language) => {
    setLang(language);
  };

  return { lang, changeLanguage, t: translations };
};