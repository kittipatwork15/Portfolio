"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type Language = "th" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  isThai: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageChangeEvent = "portfolio-language-change";

function subscribeToLanguage(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(languageChangeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(languageChangeEvent, callback);
  };
}

function getLanguageSnapshot(): Language {
  const savedLanguage = window.localStorage.getItem("portfolio-language");
  return savedLanguage === "en" ? "en" : "th";
}

function getServerLanguageSnapshot(): Language {
  return "th";
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(new Event(languageChangeEvent));
  };

  const value = useMemo(
    () => ({ language, setLanguage, isThai: language === "th" }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
