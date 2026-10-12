"use client";

import React from "react";
import { useLanguage, Language } from "./LanguageProvider";
import ItFlag from "./icons/ItFlag";
import UkFlag from "./icons/UkFlag";

interface LanguageSwitcherProps {
  variant?: "topbar" | "nav" | "mobile";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "topbar",
  className = "",
}: LanguageSwitcherProps) {
  const { lang, switchLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`space-y-1.5 ${className}`}>
        <div className="flex items-center justify-between text-xs text-[var(--text-subtle)] font-medium px-1">
          <span>Lingua // Language:</span>
          <span className="text-[11px] font-bold text-[var(--accent-primary)] uppercase">
            {lang === "it" ? "Italiano" : "English"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => switchLanguage("it")}
            className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
              lang === "it"
                ? "bg-[var(--bg-surface)] border-[var(--accent-primary)] text-[var(--text-main)] shadow-sm ring-1 ring-[var(--accent-primary)]"
                : "bg-[var(--bg-card-subtle)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
            }`}
          >
            <ItFlag className="w-4 h-3 rounded-[2px] shadow-sm flex-shrink-0" />
            <span>Italiano (ITA)</span>
          </button>

          <button
            type="button"
            onClick={() => switchLanguage("en")}
            className={`flex items-center justify-center space-x-2 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
              lang === "en"
                ? "bg-[var(--bg-surface)] border-[var(--accent-primary)] text-[var(--text-main)] shadow-sm ring-1 ring-[var(--accent-primary)]"
                : "bg-[var(--bg-card-subtle)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
            }`}
          >
            <UkFlag className="w-4 h-3 rounded-[2px] shadow-sm flex-shrink-0" />
            <span>English (ENG)</span>
          </button>
        </div>
      </div>
    );
  }

  // Topbar and Navbar: Sleek segmented toggle
  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-subtle)] text-xs shadow-sm ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => switchLanguage("it")}
        title="Passa all'italiano"
        className={`flex items-center justify-center space-x-1 px-2 py-1 min-w-[52px] rounded-md transition-all ${
          lang === "it"
            ? "bg-[var(--bg-card)] text-[var(--text-main)] font-bold shadow-xs border border-[var(--border-strong)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] font-medium"
        }`}
      >
        <ItFlag className="w-3.5 h-2.5 rounded-[1px] shadow-xs flex-shrink-0" />
        <span className="text-[11px] tracking-wider">ITA</span>
      </button>

      <span className="text-[var(--border-color)] px-0.5 select-none opacity-40">|</span>

      <button
        type="button"
        onClick={() => switchLanguage("en")}
        title="Switch to English"
        className={`flex items-center justify-center space-x-1 px-2 py-1 min-w-[52px] rounded-md transition-all ${
          lang === "en"
            ? "bg-[var(--bg-card)] text-[var(--text-main)] font-bold shadow-xs border border-[var(--border-strong)]"
            : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] font-medium"
        }`}
      >
        <UkFlag className="w-3.5 h-2.5 rounded-[1px] shadow-xs flex-shrink-0" />
        <span className="text-[11px] tracking-wider">ENG</span>
      </button>
    </div>
  );
}
