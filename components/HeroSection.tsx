"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, PlayCircle, BookOpen } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  const { isEn } = useLanguage();

  const getCtaBtnClasses = () => {
    switch (theme) {
      case "dark-elegant":
        return "text-slate-950 font-bold bg-gradient-to-r from-[#d4af37] to-[#b38f28] shadow-lg shadow-amber-950/40 hover:from-[#e2d4a8] hover:to-[#d4af37]";
      case "light-clean":
        return "text-white font-semibold bg-gradient-to-r from-sky-600 to-teal-600 shadow-lg shadow-sky-600/25 hover:from-sky-500 hover:to-teal-500";
      case "light-vibrant":
        return "text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-600/25 hover:from-purple-500 hover:to-pink-500";
      case "dark-neon":
      default:
        return "text-white font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40";
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--bg-canvas)] pt-12 pb-20 lg:pt-16 lg:pb-28 transition-colors">
      {/* Decorative ambient background glows */}
      <div className="ambient-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="ambient-glow absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isEn
                    ? "Evidence-Based Research • Training • Consulting"
                    : "Ricerca Evidence-Based • Formazione • Consulenza"}
                </span>
              </div>

              <Link
                href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-emerald-600 dark:text-emerald-300 text-xs font-bold tracking-wide transition-all group shadow-sm hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {isEn
                    ? "New Book (2026): Psychology of Games (Hogrefe) →"
                    : "Nuovo libro (2026): «Psicologia del gioco» →"}
                </span>
              </Link>
            </div>

            {/* Main Title & Roles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-main)]">
                Alan D.A. Mattiassi<span className="text-[var(--accent-primary)]">, PhD</span>
              </h1>
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                {isEn ? "Game Psychologist" : "Psicologo del Gioco"}
              </div>
              <p className="text-sm sm:text-base font-medium text-[var(--text-muted)] tracking-wide">
                {isEn
                  ? "psychologist • researcher • trainer • keynote speaker"
                  : "psicologo • ricercatore • formatore • divulgatore"}
              </p>
            </div>

            {/* Manifesto Quote */}
            <blockquote className="border-l-2 border-[var(--accent-primary)] pl-4 py-2 text-[var(--text-muted)] text-base sm:text-lg italic leading-relaxed text-left max-w-2xl mx-auto lg:mx-0 bg-[var(--bg-card-subtle)] border-y border-r border-[var(--border-color)] rounded-r-xl pr-4">
              {isEn
                ? "“For over ten years I have helped individuals and organizations understand games and discover how to harness their potential.”"
                : "“Da oltre dieci anni aiuto persone ed organizzazioni a capire il gioco e a comprendere come utilizzarlo.”"}
            </blockquote>

            {/* Brief Bio Intro */}
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isEn ? (
                <>
                  I bridge psychological sciences and game design to foster learning, innovation, and personal growth.
                  I integrate neuroscientific research, cognitive ergonomics, and game mechanics to deliver high-impact interventions: from teacher training in <strong>Game-Based Learning</strong> to <strong>corporate gamification</strong>, from <strong>serious games consulting</strong> to scientific validation of educational and healthcare projects.
                </>
              ) : (
                <>
                  Unisco le scienze psicologiche e il gioco per favorire apprendimento, innovazione e sviluppo personale. Metto a sistema ricerca neuroscientifica, ergonomia cognitiva e design ludico per offrire interventi ad alto impatto: dalla formazione docenti sul <strong>Game-Based Learning</strong> alla <strong>gamification aziendale</strong>, dalla consulenza sui <strong>serious games</strong> alla validazione scientifica di progetti educativi e sanitari.
                </>
              )}
            </p>

            {/* Action Buttons: Distributed in two rows */}
            <div className="pt-2 space-y-3">
              {/* Row 1: Primary Discovery CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href={isEn ? "/en/hire-me-lavora-con-me" : "/hire-me-lavora-con-me"}
                  className={`inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] transition-all ${getCtaBtnClasses()}`}
                >
                  <span>{isEn ? "Discover what I can do for you" : "Scopri cosa posso fare per te"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={isEn ? "/en/about" : "/about"}
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] hover:scale-[1.02] transition-all"
                >
                  <span>{isEn ? "About me // Bio" : "About me // chi sono"}</span>
                </Link>
              </div>

              {/* Row 2: Book & Free Video Course */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-[var(--text-main)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)] transition-all shadow-sm hover:scale-[1.02] group"
                >
                  <BookOpen className="w-4 h-4 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
                  <span>{isEn ? 'Book "Psychology of Games"' : 'Libro "Psicologia del gioco"'}</span>
                </Link>

                <a
                  href="https://www.youtube.com/playlist?list=PLCiGJGDiXfMY0wCIYjjR4dNB0IaW-Aavx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-amber-500 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:scale-[1.02] transition-all"
                >
                  <PlayCircle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>{isEn ? "Free Video Course (3h 30m)" : "Corso Gratuito (3h 30m)"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Visual & Floating Trust Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-teal-500/20 to-indigo-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 -z-10"></div>

              {/* Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl p-3">
                <div className="relative aspect-square sm:aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/profiloam.jpg"
                    alt={isEn ? "Alan D.A. Mattiassi, PhD - Game Psychologist" : "Alan D.A. Mattiassi, PhD - Psicologo del Gioco"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Overlay badge at bottom (always dark over photo) */}
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-slate-900/90 backdrop-blur-md rounded-xl py-2 px-3 border border-white/10 text-white">
                    <p className="text-xs font-bold text-white">Alan D.A. Mattiassi, PhD</p>
                    <p className="text-[11px] text-sky-300 font-medium">
                      {isEn ? "Game Psychologist • Independent Researcher" : "Psicologo del Gioco • Ricercatore Indipendente"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right: TEDx */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-3 shadow-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-500 font-bold text-xs">
                  TEDx
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[var(--text-main)] leading-tight">TEDx Speaker</div>
                  <div className="text-[10px] text-[var(--text-muted)]">TEDx Udine</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
