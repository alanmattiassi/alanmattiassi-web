"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Utensils,
  ArrowRight,
  CheckCircle2,
  Brain,
  Layers,
  Building2,
  Clock,
  BookOpen,
  Ticket,
  Compass
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function MasterclassSpotlightSection() {
  const { isEn } = useLanguage();

  return (
    <section
      id="masterclass-spotlight"
      className="py-16 sm:py-20 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] relative transition-colors overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-canvas)] border-2 border-emerald-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-left">
              {/* Eyebrow badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                  <span>
                    {isEn
                      ? "PROFESSIONAL TRAINING • IN-PERSON INTENSIVE WEEKEND • MAX 18 ATTENDEES"
                      : "ALTA FORMAZIONE PROFESSIONALE • WEEKEND INTENSIVO IN PRESENZA • MAX 18 ISCRITTI"}
                  </span>
                </span>
              </div>

              {/* Title & Subtitle - EXACT TITLE AND SUBTITLE */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text-main)] tracking-tight leading-[1.15]">
                  Masterclass in <br className="hidden sm:inline" />
                  Psicologia del Gioco
                </h2>
                <p className="text-lg sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 dark:from-sky-400 dark:via-teal-300 dark:to-emerald-400 leading-snug">
                  {isEn
                    ? "Understanding and Designing Environments, Choices, and Deep Learning"
                    : "Capire e Progettare Ambienti, Scelte e Apprendimento Profondo"}
                </p>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
                  {isEn ? (
                    <>
                      From the workings of the playing mind to the design of game-based activities for training, corporate, and educational settings.
                      An intensive weekend with a strictly capped cohort (max 18 attendees) to master the psychological mechanisms of play applied to your real professional context.
                    </>
                  ) : (
                    <>
                      Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi.
                      Un fine settimana intensivo a numero chiuso (max 18 iscritti) per padroneggiare i meccanismi psicologici del gioco applicato al tuo contesto professionale.
                    </>
                  )}
                </p>
              </div>

              {/* Due Giornate Intensive Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-1.5 border-t-2 border-t-sky-400">
                  <div className="flex items-center space-x-2 text-sky-500 dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                    <Brain className="w-4 h-4 shrink-0" />
                    <span>{isEn ? "Saturday • Full Day Immersive" : "Sabato • Full Day Immersivo"}</span>
                  </div>
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    {isEn ? "Cognitive Models & Game Architecture" : "I Modelli Cognitivi & L'Architettura del Gioco"}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {isEn
                      ? "Play system, reward circuits, executive functions, decision biases, procedural rhetoric, and metacognitive debriefing."
                      : "Core psicologico del gioco, play system cerebrale, funzioni esecutive, bias decisionali, retorica procedurale e debriefing."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-1.5 border-t-2 border-t-emerald-400">
                  <div className="flex items-center space-x-2 text-emerald-500 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>{isEn ? "Sunday • Hands-on Lab" : "Domenica • Laboratorio Applicato"}</span>
                  </div>
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    {isEn ? "Co-Design Lab & 1-on-1 Supervision" : "Laboratorio di Co-Design & Supervisione Continua"}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {isEn
                      ? "A full second day working directly on attendees' real projects (corporate workshops, GBL units, game prototypes) with Alan Mattiassi."
                      : "Quasi un'intera seconda giornata dedicata a lavorare direttamente sui progetti dei partecipanti con la supervisione 1-a-1 di Alan Mattiassi."}
                  </p>
                </div>
              </div>

              {/* Feature Badges Strip (matching landing page exactly) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Friuli</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{isEn ? "Early 2027 (Jan/Feb)" : "Inizio 2027 (gennaio/febbraio)"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <Clock className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                  <span>{isEn ? "Saturday & Sunday" : "Sabato e domenica"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <Users className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                  <span>{isEn ? "Max 18 attendees" : "Massimo 18 partecipanti"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>{isEn ? "Starts with 12 signups" : "Si parte con 12 iscrizioni"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <Utensils className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
                  <span>{isEn ? "2 Light Lunches included" : "2 Light Lunch inclusi"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>{isEn ? "Course material included" : "Materiale didattico incluso"}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/masterclass-psicologia-del-gioco#priority-list"
                  className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Ticket className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>
                    {isEn
                      ? "Join Priority List (Discounted at 490€)"
                      : "Unisciti alla Priority List (Posti Scontati a 490€)"}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
                </Link>

                <Link
                  href="/masterclass-psicologia-del-gioco"
                  className="inline-flex items-center space-x-2 px-5 py-4 rounded-xl font-medium text-sm text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all"
                >
                  <Compass className="w-4 h-4 mr-1.5 text-emerald-500 shrink-0" />
                  <span>{isEn ? "Explore Tentative Program" : "Esplora il Programma Provvisorio"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0 opacity-70" />
                </Link>
              </div>
            </div>

            {/* Right Card: Pricing Callout Box with Strikethrough Price (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-[var(--bg-surface)] border-2 border-emerald-500/40 p-6 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span>Prezzo Early Bird</span>
                  </div>

                  <div className="flex items-baseline justify-center space-x-3 pt-0.5">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                      490€
                    </span>
                    <span className="text-2xl sm:text-3xl font-semibold text-[var(--text-subtle)] line-through decoration-rose-500/70 decoration-2">
                      750€
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-main)]">
                    {isEn ? "Reserved for early signups on the Priority List." : "Riservato ai primi ad iscriversi alla Priority List."}
                  </p>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {isEn
                      ? "Secure one of only 18 in-person seats before public ticket sales open."
                      : "Per assicurarti uno dei soli 18 posti in presenza prima dell'apertura pubblica delle iscrizioni."}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "Saturday full day + Sunday hands-on lab" : "Sabato full day + domenica laboratorio"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "1-on-1 project supervision with Alan Mattiassi" : "Supervisione 1-a-1 sui tuoi progetti reali"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "2 buffet light lunches + continuous catering" : "2 light lunch a buffet + coffee station"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "No purchase obligation at signup" : "Nessun vincolo di acquisto all'iscrizione"}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/masterclass-psicologia-del-gioco#priority-list"
                    className="w-full block text-center py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                  >
                    <span>{isEn ? "Block Early Bird Price (490€)" : "Blocca la Quota Agevolata (490€)"}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 inline-block ml-1.5" />
                  </Link>
                </div>

                <div className="text-center pt-2 border-t border-[var(--border-color)] text-[11px] text-[var(--text-subtle)]">
                  <span>{isEn ? "Corporate team or sponsor? " : "Sei un'azienda o un team HR? "}</span>
                  <Link
                    href="/masterclass-psicologia-del-gioco"
                    className="text-sky-500 hover:underline font-semibold"
                  >
                    {isEn ? "View B2B packages" : "Scopri le opzioni B2B"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
