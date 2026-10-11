"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, ThemeMode, ThemeOption } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Moon, Sparkles, Sun, Palette, Check, ChevronDown } from "lucide-react";

interface ThemeSwitcherProps {
  variant?: "topbar" | "nav" | "mobile";
  className?: string;
}

export default function ThemeSwitcher({
  variant = "nav",
  className = "",
}: ThemeSwitcherProps) {
  const { theme, setTheme, options } = useTheme();
  const { isEn } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const getThemeIcon = (id: ThemeMode, className = "w-3.5 h-3.5") => {
    switch (id) {
      case "dark-neon":
        return <Moon className={`${className} text-sky-400`} />;
      case "dark-elegant":
        return <Sparkles className={`${className} text-amber-300`} />;
      case "light-clean":
        return <Sun className={`${className} text-sky-600`} />;
      case "light-vibrant":
        return <Palette className={`${className} text-purple-500`} />;
    }
  };

  const currentOption =
    options.find((opt) => opt.id === theme) || options[0];

  const getOptName = (opt: ThemeOption) => (isEn ? opt.nameEn : opt.name);
  const getOptTagline = (opt: ThemeOption) => (isEn ? opt.taglineEn : opt.tagline);
  const currentDisplayName = getOptName(currentOption);

  // Mobile drawer variant: full button list
  if (variant === "mobile") {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center justify-between text-xs text-[var(--text-subtle)] font-medium px-1">
          <span>{isEn ? "Visual Style & Theme:" : "Stile & Tema Grafico:"}</span>
          <span className="text-[11px] text-[var(--text-muted)] font-semibold">{currentDisplayName}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {options.map((opt) => {
            const isActive = theme === opt.id;
            const optName = getOptName(opt);
            return (
              <button
                key={opt.id}
                onClick={() => setTheme(opt.id)}
                type="button"
                className={`flex items-center space-x-2.5 p-2.5 rounded-xl border text-left text-xs transition-all ${
                  isActive
                    ? "bg-[var(--bg-surface)] border-[var(--accent-primary)] text-[var(--text-main)] shadow-md font-semibold ring-1 ring-[var(--accent-primary)]"
                    : "bg-[var(--bg-card-subtle)] border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"
                }`}
              >
                <div className="flex-shrink-0">{getThemeIcon(opt.id, "w-4 h-4")}</div>
                <div className="flex-grow min-w-0">
                  <div className="truncate font-medium">{optName}</div>
                </div>
                {isActive && (
                  <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Sticky navbar compact pill / dropdown
  if (variant === "nav") {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          title={isEn ? `Theme: ${currentDisplayName}` : `Tema: ${currentDisplayName}`}
          className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card)] text-[var(--text-nav-link)] text-xs font-medium transition-all shadow-sm"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {getThemeIcon(theme, "w-3.5 h-3.5")}
          <span className="inline text-[11px]">{currentDisplayName}</span>
          <ChevronDown
            className={`w-3 h-3 text-[var(--text-subtle)] transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)] border-b border-[var(--border-color)]">
              {isEn ? "Select Visual Theme" : "Scegli lo stile visivo"}
            </div>
            <div className="p-1 space-y-1">
              {options.map((opt) => {
                const isActive = theme === opt.id;
                const optName = getOptName(opt);
                const optTagline = getOptTagline(opt);
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTheme(opt.id);
                      setIsOpen(false);
                    }}
                    type="button"
                    className={`w-full flex items-start space-x-3 p-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? "bg-[var(--bg-surface)] border border-[var(--accent-primary)] text-[var(--text-main)] shadow-sm font-semibold"
                        : "hover:bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-transparent"
                    }`}
                  >
                    <div className="mt-0.5 p-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
                      {getThemeIcon(opt.id, "w-4 h-4")}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs">{optName}</span>
                        {isActive && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                      </div>
                      <p className="text-[11px] text-[var(--text-subtle)] leading-tight mt-0.5 font-normal">
                        {optTagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Topbar variant (clean inline pill)
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-subtle)] hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] text-xs transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={isEn ? "Change website theme" : "Cambia tema del sito"}
      >
        {getThemeIcon(theme, "w-3 h-3")}
        <span className="text-[11px] font-medium">{currentDisplayName}</span>
        <ChevronDown
          className={`w-2.5 h-2.5 text-[var(--text-subtle)] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-2xl p-2 z-[70] animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--text-subtle)] border-b border-[var(--border-color)]">
            {isEn ? "Select Theme" : "Scegli il tema"}
          </div>
          <div className="p-1 space-y-1">
            {options.map((opt) => {
              const isActive = theme === opt.id;
              const optName = getOptName(opt);
              const optTagline = getOptTagline(opt);
              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  type="button"
                  className={`w-full flex items-start space-x-3 p-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-[var(--bg-surface)] border border-[var(--accent-primary)] text-[var(--text-main)] shadow-sm font-semibold"
                      : "hover:bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-transparent"
                  }`}
                >
                  <div className="mt-0.5 p-1 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
                    {getThemeIcon(opt.id, "w-3.5 h-3.5")}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs">{optName}</span>
                      {isActive && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)]" />}
                    </div>
                    <p className="text-[10px] text-[var(--text-subtle)] leading-tight mt-0.5 font-normal">
                      {optTagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
