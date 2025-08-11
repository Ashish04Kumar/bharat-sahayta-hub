"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type LanguageCode = "en" | "hi" | "ta" | "pa" | "bn";

interface LanguageContextType {
  language: LanguageCode;
  changeLanguage: (langCode: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>("en");


  useEffect(() => {
    const savedLang = localStorage.getItem("appLang") as LanguageCode | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.body.setAttribute("lang", savedLang);
    } else {
      document.body.setAttribute("lang", "en");
    }
  }, []);

  const changeLanguage = (langCode: LanguageCode) => {
    setLanguage(langCode);
    localStorage.setItem("appLang", langCode);
    document.body.setAttribute("lang", langCode);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};