"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  Dice5,
  Play,
  Radio,
  Sparkles,
  ArrowRight,
  PlayCircle,
  ExternalLink
} from "lucide-react";
import { audienceTracks } from "@/data/services";
import { useLanguage } from "./LanguageProvider";

const getTrackTheme = (trackId: string) => {
  if (trackId === "track-docenti") {
    return {
      text: "text-[var(--pillar-scuola)]",
      bg: "bg-[var(--pillar-scuola-bg)]",
      border: "border-[var(--pillar-scuola-border)]",
      hoverBorder: "hover:border-[var(--pillar-scuola)]",
      hoverText: "group-hover:text-[var(--pillar-scuola)]",
      glowColor: "via-[var(--pillar-scuola)]",
    };
  }
  if (trackId === "track-aziende") {
    return {
      text: "text-[var(--pillar-aziende)]",
      bg: "bg-[var(--pillar-aziende-bg)]",
      border: "border-[var(--pillar-aziende-border)]",
      hoverBorder: "hover:border-[var(--pillar-aziende)]",
      hoverText: "group-hover:text-[var(--pillar-aziende)]",
      glowColor: "via-[var(--pillar-aziende)]",
    };
  }
  return {
    text: "text-[var(--pillar-gamedesign)]",
    bg: "bg-[var(--pillar-gamedesign-bg)]",
    border: "border-[var(--pillar-gamedesign-border)]",
    hoverBorder: "hover:border-[var(--pillar-gamedesign)]",
    hoverText: "group-hover:text-[var(--pillar-gamedesign)]",
    glowColor: "via-[var(--pillar-gamedesign)]",
  };
};

export default function PathFinder() {
  const { isEn } = useLanguage();
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Building2,
    Dice5,
  };

  return (
    <section id="formazioni" className="py-20 bg-[var(--bg-canvas)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
            <span>{isEn ? "TAILORED PATHWAYS" : "PERCORSI SU MISURA"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {isEn ? "A Dedicated Path for Every Professional Profile" : "Ad ogni professionalità, il suo percorso"}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {isEn
              ? "Whether you operate in school education, corporate development, or game production and aim to apply play with scientific rigor, explore the dedicated pathway:"
              : "Se lavori in ambito scolastico, nella formazione aziendale o nello sviluppo di giochi e desideri applicare il medium ludico con rigore scientifico, ho un percorso dedicato:"}
          </p>
        </div>

        {/* 3 Main Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audienceTracks.map((track) => {
            const Icon = iconMap[track.iconName] || BookOpen;
            const themeStyle = getTrackTheme(track.id);
            const badge = (isEn && track.badgeEn) ? track.badgeEn : track.badge;
            const title = (isEn && track.titleEn) ? track.titleEn : track.title;
            const description = (isEn && track.descriptionEn) ? track.descriptionEn : track.description;
            const ctaText = (isEn && track.ctaTextEn) ? track.ctaTextEn : track.ctaText;
            const href = (isEn && track.hrefEn) ? track.hrefEn : track.href;

            return (
              <div
                key={track.id}
                className={`group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] ${themeStyle.hoverBorder} p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Top accent glow line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${themeStyle.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${themeStyle.bg} border ${themeStyle.border} ${themeStyle.text} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold tracking-wider uppercase ${themeStyle.text} px-2.5 py-1 rounded-md ${themeStyle.bg} border ${themeStyle.border}`}>
                      {badge}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-[var(--text-main)] ${themeStyle.hoverText} transition-colors`}>
                    {title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[var(--border-color)]">
                  <Link
                    href={href}
                    className={`inline-flex items-center space-x-1.5 text-sm font-semibold ${themeStyle.text} group-hover:underline transition-colors`}
                  >
                    <span>{ctaText.replace(/ →$/, "")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free YouTube Course Banner */}
        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-[var(--bg-card)] to-amber-500/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500 dark:text-amber-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "Free Online Resource" : "Risorsa Gratuita Online"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              {isEn
                ? "Free Course: Introduction to Game Psychology (3h 30m)"
                : "Corso Gratuito: Introduzione alla Psicologia del Gioco (3h 30m)"}
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
              {isEn
                ? "A complete video course in 6 modules, available for free on the Game Insights YouTube channel. Ideal for teachers, trainers, psychologists, and game designers to explore the cognitive foundations of play."
                : "Un videocorso completo in 6 moduli, disponibile gratuitamente sul canale YouTube Game Insights. Ideale per docenti, formatori, psicologi, genitori e game designer per esplorare le basi cognitive del gioco."}
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center space-x-3">
            <a
              href="https://www.youtube.com/@gameinsightsAM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <PlayCircle className="w-5 h-5 text-slate-950" />
              <span>{isEn ? "Watch the free video course" : "Guarda il corso gratuito"}</span>
            </a>
          </div>
        </div>

        {/* Channels & Lab Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <a
            href="https://www.youtube.com/@gameinsightsAM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] flex items-center space-x-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all group"
          >
            <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--text-main)]">Game Insights</div>
              <div className="text-[11px] text-[var(--text-muted)]">
                {isEn ? "Science communication channel" : "Canale YouTube di divulgazione"}
              </div>
            </div>
          </a>

          <a
            href="https://www.patreon.com/AlanMattiassi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] flex items-center space-x-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all group"
          >
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--text-main)]">Game Insights’ LAB</div>
              <div className="text-[11px] text-[var(--text-muted)]">
                {isEn ? "Ongoing research community (Patreon)" : "Laboratorio permanente (Patreon)"}
              </div>
            </div>
          </a>

          <Link
            href={isEn ? "/en/blog" : "/blog/podcast-di-gif-game-information"}
            className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] flex items-center space-x-3 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-all group"
          >
            <div className="p-2 rounded-lg bg-[var(--bg-card-subtle)] text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[var(--text-main)]">GiF – Game InFormation</div>
              <div className="text-[11px] text-[var(--text-muted)]">
                {isEn ? "Scientific game podcast" : "Podcast scientifico sul gioco"}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
