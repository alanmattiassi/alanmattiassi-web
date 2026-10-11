import React from "react";
import Link from "next/link";
import {
  Dice5,
  Sparkles,
  Gamepad2,
  CheckCircle2,
  Brain,
  Microscope,
  ArrowRight,
  Target,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Ricerca & Consulenza Game Design – Alan Mattiassi, PhD",
  description:
    "Consulenza psicologica per game studio, editori e ricercatori: motivazioni (PMPVG), game feel, ergonomia cognitiva e playtesting.",
};

export default function RicercaConsulenzaPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
          <Dice5 className="w-3.5 h-3.5" />
          <span>RICERCA SCIENTIFICA &bull; GAME DESIGN PSICOLOGICO &bull; VALIDAZIONE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Psicologia Applicata al Game Design &amp; Serious Games:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-sky-400">
            Dalla Mente del Giocatore all&apos;Architettura delle Meccaniche
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Supporto scientifico per autori, game studio, editori ed enti che vogliono comprendere
          a fondo come il gioco modella percezione, motivazione ed emozioni, prevenendo la frustrazione
          e ottimizzando l&apos;esperienza utente.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
          >
            📅 Richiedi una consulenza sul tuo gioco →
          </Link>
          <Link
            href="/research-ricerca"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          >
            🔬 Esplora i Modelli Scientifici (PMPVG, mcSQ)
          </Link>
        </div>
      </section>

      {/* 2. Core Pillars of Psychological Game Consulting */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">
            I 4 PILASTRI DELLA CONSULENZA
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Cosa fa lo psicologo del gioco per un game designer o un editore
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-purple-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              1. Analisi delle Motivazioni del Giocatore (PMPVG)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Attraverso modelli psicometrici validati (come la scala PMPVG pubblicata su <em>Simulation &amp; Gaming</em>),
              mappiamo i diversi profili motivazionali: dal bisogno di competenza e autonomia all&apos;immersione narrativa,
              dalla socialità al senso di progressione. Questo permette di calibrare il gioco sul target effettivo.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-sky-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              2. Ergonomia Cognitiva &amp; Teoria del Carico
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Un gioco troppo complicato genera abbandono precoce; un gioco privo di attrito genera noia.
              Valutiamo il carico cognitivo intrinseco ed estraneo del regolamento, dell&apos;interfaccia grafica e
              della componentistica fisica, garantendo che lo sforzo mentale sia focalizzato sulle decisioni strategiche significative.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              3. Playtesting Psicologico &amp; Misurazione Comportamentale
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I playtest tradizionali si basano su opinioni verbali soggettive (&quot;mi è piaciuto / non mi è piaciuto&quot;).
              Il playtesting psicologico analizza i comportamenti effettivi: tempi di reazione, esitazioni, dinamiche di debriefing
              e reazioni emotive per diagnosticare con precisione dove le regole generano attriti indesiderati.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-pink-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              4. Validazione di Serious Games per Salute &amp; Terzo Settore
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Se stai sviluppando un gioco destinato alla sanità, all&apos;inclusione sociale o alla prevenzione
              (come il progetto <em>DIVING</em> al Policlinico Gemelli o <em>Free to Choose</em>), supportiamo il team
              con protocolli sperimentali rigorosi di validazione pre/post intervento per dimostrarne l&apos;impatto concreto.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Theoretical Unification Framework */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RICERCA DI PUNTA &bull; 2026</span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            Redefining the Psychology of Games: Il Nuovo Framework Teorico
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Nel recente lavoro scientifico pubblicato su <em>Canadian Journal of Experimental Psychology</em>,
            Alan Mattiassi propone un modello epistemologico integrato che connette psicologia sperimentale,
            ergonomia cognitiva e game design, fornendo una bussola teorica essenziale sia per la ricerca che per l&apos;industria ludica.
          </p>
          <div className="pt-2">
            <Link
              href="/framework-psicologia-del-gioco"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center space-x-1"
            >
              <span>Esplora il framework e consulta il paper pubblicato →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Hai un prototipo o un progetto da analizzare?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Valutiamo insieme lo stato di avanzamento del gioco e definiamo una sessione di advisory mirata.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-500/25"
          >
            Richiedi una call conoscitiva sul tuo gioco →
          </Link>
        </div>
      </section>
    </div>
  );
}
