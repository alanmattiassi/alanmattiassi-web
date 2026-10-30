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
  Clock
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
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {isEn ? "FLAGSHIP MASTERCLASS ? EARLY 2027" : "ALTA FORMAZIONE IN PRESENZA ? INIZIO 2027"}
                  </span>
                </span>
                <span className="text-xs text-[var(--text-subtle)] font-medium">
                  {isEn ? "Max 18 Attendees ? Friuli" : "Max 18 Partecipanti ? Friuli"}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--text-main)] tracking-tight leading-tight">
                  {isEn ? (
                    <>
                      Masterclass in Game Psychology: <br className="hidden sm:inline" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                        Designing Environments, Choices &amp; Deep Learning
                      </span>
                    </>
                  ) : (
                    <>
                      Masterclass in Psicologia del Gioco: <br className="hidden sm:inline" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500">
                        Dalla Neurocognizione alla Progettazione di Esperienze e Ambienti
                      </span>
                    </>
                  )}
                </h2>

                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {isEn ? (
                    <>
                      An intensive in-person weekend for corporate trainers, HR managers, game designers, and consultants.
                      Move beyond points and badges: master game psychology as a cognitive, decision-making, and behavioral environment with 1-on-1 supervised co-design on your own real project.
                    </>
                  ) : (
                    <>
                      Un fine settimana intensivo in presenza per formatori aziendali, responsabili HR, game designer e consulenti.
                      Supera la superficie di punti e classifiche: impara a padroneggiare il gioco come ambiente cognitivo, decisionale e comportamentale, con la supervisione 1-a-1 di Alan Mattiassi direttamente sul tuo progetto reale.
                    </>
                  )}
                </p>
              </div>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <Brain className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[var(--text-main)] block">
                      {isEn ? "Saturday: Cognitive & Neural Models" : "Sabato: Modelli Cognitivi & Neuroscienze"}
                    </span>
                    <span className="text-[var(--text-muted)]">
                      {isEn ? "Play system, executive functions, bias & debriefing" : "Play system, funzioni esecutive, bias decisionali e debriefing"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <Layers className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[var(--text-main)] block">
                      {isEn ? "Sunday: Hands-on Co-Design Lab" : "Domenica: Laboratorio di Co-Design"}
                    </span>
                    <span className="text-[var(--text-muted)]">
                      {isEn ? "Bring your workshop, game or training prototype" : "Porti il tuo workshop aziendale, gioco o prototipo formativo"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Badges Strip */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-color)]">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>Friuli (Udine/Pordenone)</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-color)]">
                  <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>{isEn ? "Jan / Feb 2027" : "Gennaio / Febbraio 2027"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-color)]">
                  <Users className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                  <span>{isEn ? "Max 18 Attendees" : "Numero chiuso: 18 posti"}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-2.5 py-1 rounded-lg border border-[var(--border-color)]">
                  <Utensils className="w-3.5 h-3.5 text-teal-500 dark:text-teal-400" />
                  <span>{isEn ? "2 Light Lunches Included" : "2 Light Lunch inclusi"}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/masterclass-psicologia-del-gioco#priority-list"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>
                    {isEn
                      ? "??? Join Priority List (490?) ?"
                      : "??? Unisciti alla Priority List (Sconto 490?) ?"}
                  </span>
                </Link>

                <Link
                  href="/masterclass-psicologia-del-gioco"
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all"
                >
                  <span>{isEn ? "View Full Curriculum & Details" : "Programma & Dettagli completi"}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                </Link>
              </div>
            </div>

            {/* Right Card: Pricing & Priority Pass (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[var(--bg-surface)] border-2 border-emerald-500/40 p-6 space-y-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase rounded-bl-xl tracking-wider">
                  {isEn ? "Early Bird Offer" : "Offerta Early Bird"}
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    {isEn ? "Priority List Price" : "Tariffa Riservata Priority List"}
                  </span>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-4xl sm:text-5xl font-black text-[var(--text-main)]">490?</span>
                    <span className="text-xl sm:text-2xl font-semibold text-[var(--text-subtle)] line-through decoration-rose-500/70 decoration-2">
                      750?
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--text-subtle)] block">
                    {isEn ? "+ VAT (where applicable) ? 100% tax deductible" : "+ IVA ove applicabile ? Deducibile come formazione"}
                  </span>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "2 full days of training & co-design" : "2 giorni intensivi (sabato e domenica)"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "1-on-1 supervision on your project" : "Supervisione 1-a-1 sul tuo progetto reale"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "2 buffet light lunches + continuous coffee" : "2 light lunch a buffet + coffee station"}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{isEn ? "No purchase obligation at signup" : "Nessun obbligo di acquisto all'iscrizione"}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/masterclass-psicologia-del-gioco#priority-list"
                    className="w-full block text-center py-3 px-4 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md"
                  >
                    {isEn ? "Block Early Bird Price (490?) ?" : "Blocca la Quota Agevolata (490?) ?"}
                  </Link>
                </div>

                <div className="text-center pt-1 border-t border-[var(--border-color)] text-[11px] text-[var(--text-subtle)]">
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
