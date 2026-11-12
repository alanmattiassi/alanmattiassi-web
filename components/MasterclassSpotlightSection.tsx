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
  Compass,
  Lock
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
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-canvas)] border-2 border-amber-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-amber-500/20 via-sky-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-left">
              {/* Eyebrow badge: Prelazione e data apertura pubblica */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>
                    {isEn
                      ? "PUBLIC REGISTRATION OPEN • OVER 50% OF SEATS CONFIRMED"
                      : "ISCRIZIONI PUBBLICHE APERTE • PIÙ DEL 50% DELL'AULA CONFERMATO"}
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
                      An intensive weekend with a strictly capped cohort (max 18 attendees, minimum quorum 12) to master the psychological mechanisms of play applied to your real professional context.
                    </>
                  ) : (
                    <>
                      Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi.
                      Un fine settimana intensivo a numero chiuso (max 18 iscritti, la classe parte con 12) per padroneggiare i meccanismi psicologici del gioco applicato al tuo contesto professionale.
                    </>
                  )}
                </p>
              </div>

              {/* Due Giornate Intensive Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 items-stretch">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2 border-t-2 border-t-sky-400 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
                      <Brain className="w-4 h-4 shrink-0" />
                      <span>{isEn ? "Saturday 23 Jan • Full Day Immersive" : "Sabato 23 Gennaio • Full Day Immersivo"}</span>
                    </div>
                    <div className="font-bold text-[var(--text-main)] text-sm leading-snug">
                      {isEn ? (
                        <>Cognitive Models &amp;<br className="hidden sm:inline" /> Game Architecture</>
                      ) : (
                        <>I Modelli Cognitivi &amp;<br className="hidden sm:inline" /> L&apos;Architettura del Gioco</>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {isEn
                        ? "A full day to debunk gaming myths and explore mental mechanisms: cerebral play system, executive functions, decision biases, procedural rhetoric, and debriefing."
                        : "Una giornata per smontare i falsi miti e comprendere cosa accade nella mente: play system cerebrale, funzioni esecutive, bias decisionali, retorica procedurale e debriefing."}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-2 border-t-2 border-t-emerald-400 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <Layers className="w-4 h-4 shrink-0" />
                      <span>{isEn ? "Sunday 24 Jan • Hands-on Lab" : "Domenica 24 Gennaio • Laboratorio Applicato"}</span>
                    </div>
                    <div className="font-bold text-[var(--text-main)] text-sm leading-snug">
                      {isEn ? (
                        <>Co-Design Lab &amp;<br className="hidden sm:inline" /> Continuous Supervision</>
                      ) : (
                        <>Laboratorio di Co-Design &amp;<br className="hidden sm:inline" /> Supervisione Continua</>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {isEn
                        ? "A full second day working directly on attendees' real projects (corporate workshops, GBL units, game prototypes) with 1-on-1 supervision from Alan Mattiassi."
                        : "Quasi un'intera seconda giornata dedicata a lavorare direttamente sui progetti dei partecipanti con la supervisione 1-a-1 di Alan Mattiassi."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Badges Strip (matching landing page exactly) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Friuli (Udine/Pordenone)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-amber-500/40 font-semibold text-[var(--text-main)]">
                  <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{isEn ? "January 23–24, 2027" : "23–24 Gennaio 2027"}</span>
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{isEn ? "Starts with 12 signups" : "Si parte con 12 iscrizioni"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <Utensils className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
                  <span>{isEn ? "2 Lunches included" : "2 Pranzi inclusi"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>{isEn ? "Course material included" : "Materiale didattico incluso"}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/masterclass-psicologia-del-gioco#iscrizione"
                  className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Ticket className="w-4 h-4 mr-1.5 text-white shrink-0" />
                  <span>{isEn ? "Join the Masterclass (750€)" : "Iscriviti alla Masterclass (750€)"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
                </Link>

                <Link
                  href="/masterclass-psicologia-del-gioco"
                  className="inline-flex items-center space-x-2 px-5 py-4 rounded-xl font-medium text-sm text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all"
                >
                  <Compass className="w-4 h-4 mr-1.5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{isEn ? "Explore Program" : "Esplora il Programma"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 shrink-0 opacity-70" />
                </Link>
              </div>
            </div>

            {/* Right Card: Reserved Presale & Public Countdown Box (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-[var(--bg-surface)] border-2 border-amber-500/40 p-6 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden">
                <div className="text-center space-y-2">
                  <div className="pt-1">
                    <div className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">
                      {isEn ? "Public Registration Fee" : "Quota Iscrizione Pubblica"}
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight mt-0.5">
                      750€
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400 pt-1">
                    {isEn
                      ? "Early bird quota (490€) fully booked by Priority List."
                      : "Posti a tariffa Early Bird (490€) esauriti."}
                  </p>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {isEn
                      ? "Over 50% of seats are already confirmed. Remaining seats open publicly at standard fee (max 18 attendees)."
                      : "Più del 50% dell'aula è già confermato. Posti residui limitati a numero chiuso (max 18 iscritti)."}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "Confirmed dates: Saturday 23 & Sunday 24 January" : "Date confermate: Sabato 23 e Domenica 24 Gennaio"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "1-on-1 project supervision with Alan Mattiassi" : "Supervisione 1-a-1 sui tuoi progetti reali"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "2 lunches & continuous coffee" : "2 pranzi e coffee break continui"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "Availability: Over 50% of seats confirmed (max 18)" : "Disponibilità: Più del 50% dell'aula confermato (max 18)"}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/masterclass-psicologia-del-gioco#iscrizione"
                    className="w-full block text-center py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 transition-colors shadow-md"
                  >
                    <span>{isEn ? "Join the Masterclass (750€)" : "Iscriviti alla Masterclass (750€)"}</span>
                    <ArrowRight className="w-4 h-4 shrink-0 inline-block ml-1.5" />
                  </Link>
                </div>

                <div className="text-center pt-2 border-t border-[var(--border-color)] text-[11px] text-[var(--text-subtle)]">
                  <span>{isEn ? "Can&apos;t make it in January? " : "Non riesci a partecipare a Gennaio? "}</span>
                  <Link
                    href="/masterclass-psicologia-del-gioco#iscrizione"
                    className="text-sky-600 dark:text-sky-400 hover:underline font-semibold"
                  >
                    {isEn ? "Join 2nd Edition waitlist" : "Segnala interesse per la 2ª Edizione"}
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
