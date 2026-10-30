import React from "react";
import Link from "next/link";
import PathFinder from "@/components/PathFinder";
import {
  Compass,
  GraduationCap,
  Briefcase,
  Dice5,
  PlayCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Scegli la tua formazione – Alan Mattiassi, PhD",
  description:
    "Trova il percorso formativo sulla psicologia del gioco più adatto al tuo profilo: docenti, aziende, game designer e corsi gratuiti.",
};

export default function ScegliFormazionePage() {
  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>PERCORSI FORMATIVI &bull; ORIENTAMENTO &bull; COMMUNITY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Scegli la tua Formazione
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Ad ogni ruolo professionale, il suo percorso ideale
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Che tu sia un insegnante in cerca di metodi didattici attivi, un HR manager che vuole potenziare
          il proprio team, o un game designer che vuole perfezionare l&apos;esperienza psicologica del giocatore,
          ho strutturato percorsi su misura per te.
        </p>
      </section>

      {/* 2. PathFinder Component */}
      <PathFinder />

      {/* 3. Deep Dive Comparison Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">
            Confronta i Percorsi
          </h2>
          <p className="text-slate-400 text-sm">
            Tutti i corsi combinano fondamenti teorici, sperimentazione sul campo e debriefing professionale.
          </p>
        </div>

        {/* Flagship Highlight: Masterclass in Presenza */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#0d1424] to-sky-950/40 border-2 border-emerald-500/50 space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
              ?? ALTA FORMAZIONE IN PRESENZA &bull; DUE GIORNATE INTENSIVE &bull; MAX 18 ISCRITTI
            </span>
            <span className="text-xs text-slate-300 font-semibold">
              Friuli &bull; Inizio 2027 (gennaio/febbraio)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Masterclass in Psicologia del Gioco
              </h3>
              <p className="text-sm sm:text-base font-bold text-sky-400">
                Capire e Progettare Ambienti, Scelte e Apprendimento Profondo
              </p>
              <p className="text-xs text-emerald-400 font-semibold">
                Target: Formatori &amp; HR Specialist, Game Designer &amp; Creator, Consulenti &amp; Coach, Psicologi &amp; Clinici
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dal funzionamento della mente che gioca alla progettazione di attivit? game-based per contesti formativi, aziendali ed educativi.
                Sabato full day immersivo su modelli cognitivi, play system, bias e debriefing; domenica quasi intera seconda giornata di laboratorio
                di co-design con supervisione continua 1-a-1 di Alan Mattiassi sui tuoi progetti reali.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <div className="text-left lg:text-right">
                <span className="text-xs text-slate-400 block">Prezzo Early Bird (Priority List)</span>
                <span className="text-3xl font-black text-emerald-400">490 ? <span className="text-lg line-through text-slate-500 font-normal">750 ?</span></span>
              </div>
              <Link
                href="/masterclass-psicologia-del-gioco"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center w-full sm:w-auto"
              >
                Scopri la Masterclass (Posti Scontati) &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Scuola</span>
              <h3 className="text-xl font-bold text-white">Game-Based Learning (GBL-02)</h3>
              <p className="text-xs text-slate-400">Target: Docenti scuola primaria, secondaria e università</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focus su progettazione didattica inclusiva (UGDL), gestione dell&apos;errore come leva di apprendimento,
                riduzione del carico cognitivo estraneo e conduzione del debriefing curricolare.
              </p>
            </div>
            <Link
              href="/docenti"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center space-x-1"
            >
              <span>Vedi programma completo Docenti →</span>
            </Link>
          </div>

          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Aziende</span>
              <h3 className="text-xl font-bold text-white">Leadership &amp; Gamification (GBL-01)</h3>
              <p className="text-xs text-slate-400">Target: HR Director, C-Level, Team Leader, Manager</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focus su dinamiche relazionali nei team, superamento dei silos comunicativi, decision making
                in condizioni di incertezza e progettazione di sistemi di motivazione interna.
              </p>
            </div>
            <Link
              href="/aziende-corporate"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center space-x-1"
            >
              <span>Vedi programma completo Aziende →</span>
            </Link>
          </div>

          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Game Design</span>
              <h3 className="text-xl font-bold text-white">Psicologia del Giocatore (GBL-03)</h3>
              <p className="text-xs text-slate-400">Target: Autori di giochi, sviluppatori, editori</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Focus su leve motivazionali (scala PMPVG), ergonomia cognitiva, playtesting comportamentale,
                game feel e serious games per l&apos;impatto sociale e la salute.
              </p>
            </div>
            <Link
              href="/ricerca-consulenza"
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center space-x-1"
            >
              <span>Vedi programma Game Design →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
