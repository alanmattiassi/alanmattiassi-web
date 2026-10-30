"use client";

import React, { useState, useEffect } from "react";
import Link from "next/navigation";
import NextLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  BookOpen,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "./ThemeProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { theme } = useTheme();
  const { isEn } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="relative z-[60] bg-[var(--nav-top-bg)] border-b border-[var(--border-color)] text-xs text-[var(--text-muted)] py-2 px-4 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+393926808384"
              className="flex items-center space-x-1.5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>+39 392 6808384</span>
            </a>
            <span className="text-[var(--border-color)] hidden sm:inline">|</span>
            <a
              href="mailto:alan.mattiassi@gmail.com"
              className="flex items-center space-x-1.5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>alan.mattiassi@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4 ml-auto">
            <span className="hidden md:inline text-[var(--text-subtle)]">
              {isEn ? "Follow me:" : "Seguimi:"}
            </span>
            <a
              href="https://www.linkedin.com/in/alanmattiassi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-primary)] transition-colors text-[var(--text-muted)] font-medium"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@gameinsightsAM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors text-[var(--text-muted)] font-medium"
              title="YouTube Game Insights"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/alanmattiassi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors text-[var(--text-muted)] font-medium"
              title="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] shadow-xl shadow-black/10 py-3"
            : "bg-[var(--nav-bg)] backdrop-blur-sm border-b border-[var(--nav-border)] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <NextLink href={isEn ? "/en" : "/"} className="group flex items-center space-x-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
              <Image
                src="/images/am-logo-white.png"
                alt="Logo Alan Mattiassi"
                width={44}
                height={44}
                priority
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain theme-logo-white"
              />
              <Image
                src="/images/am-logo-black.png"
                alt="Logo Alan Mattiassi"
                width={44}
                height={44}
                priority
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain theme-logo-black"
              />
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight leading-tight">
                Alan Mattiassi<span className="text-[var(--accent-primary)]">, PhD</span>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)] tracking-normal mt-0.5">
                {isEn ? "Game Psychologist" : "Psicologo del Gioco"}
              </div>
            </div>
          </NextLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
            <NextLink
              href={isEn ? "/en/about" : "/about"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/about" : "/about") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "About" : "Chi sono"}
            </NextLink>

            <NextLink
              href={isEn ? "/en/docenti" : "/docenti"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/docenti" : "/docenti") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "Education" : "Docenti & Scuola"}
            </NextLink>

            <NextLink
              href={isEn ? "/en/aziende-corporate" : "/aziende-corporate"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/aziende-corporate" : "/aziende-corporate") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "Corporate" : "Aziende"}
            </NextLink>

            <NextLink
              href={isEn ? "/en/research-ricerca" : "/research-ricerca"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/research-ricerca" : "/research-ricerca") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "Publications" : "Pubblicazioni"}
            </NextLink>

            <NextLink
              href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco")
                  ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold"
                  : ""
              }`}
            >
              <span className="inline-flex items-center space-x-1.5">
                <span>{isEn ? "Book" : "Libro"}</span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  {isEn ? "2026" : "Novità"}
                </span>
              </span>
            </NextLink>

            <NextLink
              href="/masterclass-psicologia-del-gioco"
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === "/masterclass-psicologia-del-gioco"
                  ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold"
                  : ""
              }`}
            >
              <span className="inline-flex items-center space-x-1.5">
                <span>Masterclass</span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                  2027
                </span>
              </span>
            </NextLink>

            <NextLink
              href={isEn ? "/en/talks-interventi" : "/talks-interventi"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/talks-interventi" : "/talks-interventi") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "Talks" : "Talks"}
            </NextLink>


            <NextLink
              href={isEn ? "/en/blog" : "/blog"}
              className={`px-3 py-1.5 rounded-lg transition-colors text-[var(--text-nav-link)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] ${
                pathname === (isEn ? "/en/blog" : "/blog") ? "text-[var(--accent-primary)] bg-[var(--bg-card-hover)] font-semibold" : ""
              }`}
            >
              {isEn ? "Blog" : "Notizie"}
            </NextLink>
              <NextLink
                href="/masterclass-psicologia-del-gioco"
                className="px-3 py-2.5 rounded-lg text-sky-600 dark:text-sky-400 font-bold hover:bg-[var(--bg-card-hover)] transition-colors flex items-center justify-between"
              >
                <span>{isEn ? "In-Person Masterclass" : "Masterclass in Presenza"}</span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30">
                  {isEn ? "Early 2027" : "Inizio 2027"}
                </span>
              </NextLink>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <NextLink
              href={isEn ? "/en/hire-me-lavora-con-me" : "/hire-me-lavora-con-me"}
              className={`relative group overflow-hidden rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
                theme === "dark-elegant"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500"
                  : theme === "light-clean"
                  ? "bg-gradient-to-r from-sky-600 to-teal-700 text-white shadow-sky-600/20 hover:from-sky-500 hover:to-teal-600"
                  : theme === "light-vibrant"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-purple-500/25"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/20"
              }`}
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <span>{isEn ? "Work with me" : "Lavora con me"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </NextLink>

            <ThemeSwitcher variant="nav" />
            <LanguageSwitcher variant="nav" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--border-color)] bg-[var(--bg-card)] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
            <div className="grid grid-cols-1 gap-1 text-base font-medium">
              <NextLink
                href={isEn ? "/en" : "/"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Home" : "Home"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/about" : "/about"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "About me // Bio" : "Chi sono // About me"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
                className="px-3 py-2.5 rounded-lg text-emerald-600 dark:text-emerald-400 font-bold hover:bg-[var(--bg-card-hover)] transition-colors flex items-center justify-between"
              >
                <span>{isEn ? "📖 New Book: Psychology of Games" : "📖 Nuovo Libro: Psicologia del gioco"}</span>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  {isEn ? "2026" : "Novità"}
                </span>
              </NextLink>
              <NextLink
                href={isEn ? "/en/docenti" : "/docenti"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Schools & Game-Based Learning" : "Docenti & Game-Based Learning"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/aziende-corporate" : "/aziende-corporate"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Corporate Training & HR" : "Aziende & Formazione Corporate"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/ricerca-consulenza" : "/ricerca-consulenza"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Game Design Consulting & Research" : "Ricerca & Game Design"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/psychology-of-games-framework" : "/framework-psicologia-del-gioco"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Psychology of Games Framework" : "Framework Psicologia del Gioco"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/come-lavoro" : "/come-lavoro"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Systemic Method: Hidden in Systems" : "Ciò che i sistemi nascondono"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/research-ricerca" : "/research-ricerca"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Scientific Publications" : "Pubblicazioni & Ricerca"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/talks-interventi" : "/talks-interventi"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Talks & Keynotes" : "Talks // Interventi"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/topics-temi" : "/topics-temi"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Topics & Key Themes" : "Topics // Temi di intervento"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/blog" : "/blog"}
                className="px-3 py-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Blog & Updates" : "Blog & Aggiornamenti"}
              </NextLink>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex flex-col gap-2.5">
              <NextLink
                href={isEn ? "/en/hire-me-lavora-con-me" : "/hire-me-lavora-con-me"}
                className={`w-full text-center py-2.5 px-4 rounded-xl font-semibold shadow-md transition-all ${
                  theme === "dark-elegant"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-amber-500/20"
                    : theme === "light-clean"
                    ? "bg-gradient-to-r from-sky-600 to-teal-700 text-white shadow-sky-600/20"
                    : theme === "light-vibrant"
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-purple-500/25"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-emerald-500/20"
                }`}
              >
                {isEn ? "Work with me // Hire me!" : "Lavora con me // Hire me!"}
              </NextLink>
              <NextLink
                href={isEn ? "/en/scegli-la-tua-formazione" : "/scegli-la-tua-formazione"}
                className="w-full text-center py-2.5 px-4 rounded-xl font-medium bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--btn-secondary-text)] hover:bg-[var(--bg-surface)] transition-colors"
              >
                {isEn ? "Choose your training path" : "Scegli la tua formazione"}
              </NextLink>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] space-y-3">
              <LanguageSwitcher variant="mobile" />
              <ThemeSwitcher variant="mobile" />
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-center space-x-5 text-xs text-[var(--text-muted)]">
              <span className="text-[var(--text-subtle)]">{isEn ? "Follow me:" : "Seguimi:"}</span>
              <a
                href="https://www.linkedin.com/in/alanmattiassi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-primary)] transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@gameinsightsAM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors font-medium"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/alanmattiassi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
