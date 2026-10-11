"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode =
  | "dark-neon"
  | "dark-elegant"
  | "light-clean"
  | "light-vibrant";

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  category: "dark" | "light";
  badgeColor: string;
  dotColor: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "dark-neon",
    name: "neon",
    nameEn: "neon",
    tagline: "High-Tech & Cyber con accenti neon glow",
    taglineEn: "High-Tech & Cyber with neon glow accents",
    category: "dark",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    dotColor: "#38bdf8",
  },
  {
    id: "dark-elegant",
    name: "scura",
    nameEn: "dark",
    tagline: "Executive Minimal: grafite matte e accenti oro",
    taglineEn: "Executive Minimal: matte graphite and gold accents",
    category: "dark",
    badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    dotColor: "#d4af37",
  },
  {
    id: "light-clean",
    name: "chiara",
    nameEn: "clear",
    tagline: "Accademica & Essenziale: sfondo bianco e massima leggibilità",
    taglineEn: "Academic & Essential: crisp white and optimal clarity",
    category: "light",
    badgeColor: "bg-slate-200 text-slate-800 border-slate-300",
    dotColor: "#0284c7",
  },
  {
    id: "light-vibrant",
    name: "vivace",
    nameEn: "vibrant",
    tagline: "Gameful Learning: sfondo chiaro con accenti dinamici",
    taglineEn: "Gameful Learning: light background with dynamic accents",
    category: "light",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-300",
    dotColor: "#8b5cf6",
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  options: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "am_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark-neon");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (
        saved &&
        ["dark-neon", "dark-elegant", "light-clean", "light-vibrant"].includes(
          saved
        )
      ) {
        setThemeState(saved);
        applyTheme(saved);
      } else {
        applyTheme("dark-neon");
      }
    } catch {
      applyTheme("dark-neon");
    }
    setMounted(true);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);

    if (mode.startsWith("dark")) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    applyTheme(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // localStorage error fallback
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__setTheme = setTheme;
    }
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, options: THEME_OPTIONS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
