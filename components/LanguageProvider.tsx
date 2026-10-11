"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Language = "it" | "en";

interface LanguageContextType {
  lang: Language;
  isEn: boolean;
  switchLanguage: (targetLang: Language) => void;
  getEquivalentPath: (targetLang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "it",
  isEn: false,
  switchLanguage: () => {},
  getEquivalentPath: () => "/",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Determine current language from URL pathname
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const lang: Language = isEn ? "en" : "it";

  // Calculate equivalent path in the other language
  const getEquivalentPath = (targetLang: Language): string => {
    if (targetLang === lang) return pathname;

    // Special path aliases
    if (targetLang === "en") {
      if (pathname === "/") return "/en";
      if (pathname === "/framework-psicologia-del-gioco") return "/en/psychology-of-games-framework";
      return `/en${pathname}`;
    } else {
      // Switching to Italian
      if (pathname === "/en") return "/";
      if (pathname === "/en/psychology-of-games-framework" || pathname === "/en/framework-psicologia-del-gioco") return "/framework-psicologia-del-gioco";
      const stripped = pathname.replace(/^\/en/, "");
      return stripped || "/";
    }
  };

  const switchLanguage = (targetLang: Language) => {
    if (targetLang === lang) return;
    const targetPath = getEquivalentPath(targetLang);
    router.push(targetPath);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isEn,
        switchLanguage,
        getEquivalentPath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
