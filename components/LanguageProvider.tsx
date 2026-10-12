"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
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

const SCROLL_STORAGE_KEY = "agy_lang_switch_scroll";

interface StoredScrollContext {
  id?: string;
  sectionIndex?: number;
  offsetFromTop?: number;
  ratio: number;
  scrollY: number;
  timestamp: number;
}

const ID_ALIASES: Record<string, string[]> = {
  dimensions: ["dimensioni"],
  dimensioni: ["dimensions"],
  why: ["perche"],
  perche: ["why"],
  formazioni: ["formazioni"],
  ambiti: ["ambiti"],
  servizi: ["servizi"],
  pubblicazioni: ["pubblicazioni"],
  contatto: ["contatto"],
};

function captureScrollContext(): StoredScrollContext | null {
  if (typeof window === "undefined") return null;

  const scrollY = window.scrollY;
  // If user is near the very top, keep them at the top
  if (scrollY < 120) {
    return {
      ratio: 0,
      scrollY: 0,
      timestamp: Date.now(),
    };
  }

  const scrollHeight = document.documentElement.scrollHeight;
  const innerHeight = window.innerHeight;
  const maxScroll = Math.max(1, scrollHeight - innerHeight);
  const ratio = Math.min(1, Math.max(0, scrollY / maxScroll));

  // Find all sections or major containers inside <main>
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section, section[id]")
  );

  const navOffset = 90;
  let bestSection: HTMLElement | null = null;
  let bestIndex = -1;
  let minDistance = Infinity;

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const rect = sec.getBoundingClientRect();
    if (rect.bottom > navOffset && rect.top <= innerHeight * 0.55) {
      const distance = Math.abs(rect.top - navOffset);
      if (distance < minDistance) {
        minDistance = distance;
        bestSection = sec;
        bestIndex = i;
      }
    }
  }

  let id: string | undefined = undefined;
  let offsetFromTop = 0;

  if (bestSection) {
    id = bestSection.id || undefined;
    const rect = bestSection.getBoundingClientRect();
    offsetFromTop = Math.max(0, navOffset - rect.top);
  }

  return {
    id,
    sectionIndex: bestIndex >= 0 ? bestIndex : undefined,
    offsetFromTop,
    ratio,
    scrollY,
    timestamp: Date.now(),
  };
}

function restoreScroll(saved: StoredScrollContext) {
  if (typeof window === "undefined") return;

  if (saved.scrollY === 0) {
    window.scrollTo({ top: 0, behavior: "instant" });
    return;
  }

  const navOffset = 90;

  // 1. Try matching by section ID (and known language aliases)
  if (saved.id) {
    const candidates = [saved.id];
    if (ID_ALIASES[saved.id]) {
      candidates.push(...ID_ALIASES[saved.id]);
    }
    for (const cid of candidates) {
      const el = document.getElementById(cid);
      if (el) {
        const rect = el.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - navOffset + (saved.offsetFromTop || 0);
        window.scrollTo({ top: Math.max(0, targetY), behavior: "instant" });
        return;
      }
    }
  }

  // 2. Try by section index in <main>
  if (typeof saved.sectionIndex === "number") {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section, section[id]")
    );
    if (sections[saved.sectionIndex]) {
      const el = sections[saved.sectionIndex];
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - navOffset + (saved.offsetFromTop || 0);
      window.scrollTo({ top: Math.max(0, targetY), behavior: "instant" });
      return;
    }
  }

  // 3. Fallback: percentage scroll ratio
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const targetY = saved.ratio * maxScroll;
  window.scrollTo({ top: Math.max(0, targetY), behavior: "instant" });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const pendingScrollRef = useRef<StoredScrollContext | null>(null);

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

    const ctx = captureScrollContext();
    if (ctx) {
      pendingScrollRef.current = ctx;
      try {
        sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(ctx));
      } catch (e) {}
    }

    const targetPath = getEquivalentPath(targetLang);
    router.push(targetPath, { scroll: false });
  };

  // Restore scroll when pathname changes
  useEffect(() => {
    let saved = pendingScrollRef.current;
    if (!saved && typeof window !== "undefined") {
      try {
        const raw = sessionStorage.getItem(SCROLL_STORAGE_KEY);
        if (raw) {
          saved = JSON.parse(raw);
          sessionStorage.removeItem(SCROLL_STORAGE_KEY);
        }
      } catch (e) {}
    }

    if (saved && Date.now() - saved.timestamp < 4000) {
      pendingScrollRef.current = null;
      const executeRestore = () => restoreScroll(saved!);

      requestAnimationFrame(executeRestore);
      const t1 = setTimeout(executeRestore, 50);
      const t2 = setTimeout(executeRestore, 160);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [pathname]);

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
