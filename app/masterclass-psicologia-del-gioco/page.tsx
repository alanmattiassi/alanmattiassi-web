import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Brain,
  Sparkles,
  Target,
  Compass,
  Layers,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Utensils,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Award,
  X,
  Building2,
} from "lucide-react";
import MasterclassPriorityForm from "@/components/MasterclassPriorityForm";

export const metadata: Metadata = {
  title: "Masterclass in Psicologia del Gioco – Capire e Progettare Ambienti, Scelte e Apprendimento Profondo | Alan Mattiassi, PhD",
  description:
    "Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi. Weekend intensivo a inizio 2027 in Friuli (max 18 iscritti) con Alan Mattiassi, PhD. Priority List con tariffa agevolata a 490€ (invece di 750€).",
  openGraph: {
    title: "Masterclass in Psicologia del Gioco – Capire e Progettare Ambienti, Scelte e Apprendimento Profondo",
    description:
      "Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi. Weekend intensivo con Alan Mattiassi, PhD. Tariffa agevolata a 490€ (invece di 750€) riservata alla Priority List.",
    url: "https://alanmattiassi.com/masterclass-psicologia-del-gioco",
    siteName: "Alan Mattiassi, PhD",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/profiloam.jpg",
        width: 1200,
        height: 630,
        alt: "Masterclass in Psicologia del Gioco – Alan Mattiassi, PhD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masterclass in Psicologia del Gioco – Capire e Progettare Ambienti, Scelte e Apprendimento Profondo",
    description:
      "Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi. Priority List a 490€ (invece di 750€).",
    images: ["/images/profiloam.jpg"],
  },
};

export default function MasterclassPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ALTA FORMAZIONE PROFESSIONALE &bull; WEEKEND INTENSIVO IN PRESENZA &bull; MAX 18 ISCRITTI</span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-main)] tracking-tight leading-[1.08]">
            Masterclass in <br />
            Psicologia del Gioco
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 dark:from-sky-400 dark:via-teal-300 dark:to-emerald-400 max-w-4xl mx-auto leading-snug">
            Capire e Progettare Ambienti, Scelte e Apprendimento Profondo
          </p>
        </div>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi,
          aziendali ed educativi. Un fine settimana intensivo a numero chiuso per padroneggiare i meccanismi
          psicologici del gioco applicato al tuo contesto.
        </p>

        {/* Priority List Callout Box with Strikethrough Price */}
        <div className="inline-flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 max-w-2xl mx-auto text-center space-y-2.5 shadow-sm">
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

          <p className="text-sm font-semibold text-[var(--text-main)]">
            Riservato ai primi ad iscriversi alla Priority List.
          </p>

          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-lg">
            Per assicurarti uno dei <strong>soli 18 posti in presenza</strong> prima dell&apos;apertura pubblica delle iscrizioni.
          </p>
        </div>

        {/* Feature Badges Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm text-[var(--text-muted)] font-medium">
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <MapPin className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Friuli</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Calendar className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Inizio 2027 (gennaio/febbraio)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Clock className="w-4 h-4 text-sky-500 dark:text-sky-400" />
            <span>Sabato e domenica</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Users className="w-4 h-4 text-rose-500 dark:text-rose-400" />
            <span>Massimo 18 partecipanti</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Si parte con 12 iscrizioni</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Utensils className="w-4 h-4 text-teal-500 dark:text-teal-400" />
            <span>2 Light Lunch inclusi</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <BookOpen className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            <span>Materiale didattico incluso</span>
          </span>
        </div>

        {/* Hero CTAs */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#priority-list"
            className="px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            🎟️ Unisciti alla Priority List (Posti Scontati a 490€) →
          </a>
          <a
            href="#programma"
            className="px-5 py-4 rounded-xl font-medium text-sm text-[var(--text-main)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all"
          >
            🧭 Esplora il Programma Provvisorio ↓
          </a>
        </div>

        <p className="text-xs text-[var(--text-subtle)]">
          A cura di <strong>Alan Mattiassi, PhD</strong> — Psicologo del gioco &bull;{" "}
          <em>psicologo, ricercatore, formatore, divulgatore</em>. Curatore del volume{" "}
          <strong className="text-[var(--text-muted)]">&ldquo;Psicologia del Gioco&rdquo;</strong> (Hogrefe Editore).
        </p>
      </section>

      {/* 2. Authority & Context Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-7 h-7" />
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <div className="font-bold text-[var(--text-main)] text-base flex items-center space-x-2">
              <span>La Prima Formazione Integrata con il Manuale &ldquo;Psicologia del Gioco&rdquo; (Hogrefe)</span>
            </div>
            <p>
              Questa Masterclass nasce in stretta sinergia con la pubblicazione della{" "}
              <Link
                href="/framework-psicologia-del-gioco"
                className="text-sky-600 dark:text-sky-400 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                teoria unificante della psicologia del gioco
              </Link>{" "}
              (pubblicata su <em>Canadian Journal of Experimental Psychology / APA</em>) e con l&apos;uscita del{" "}
              <Link
                href="/libro-psicologia-del-gioco"
                className="text-sky-600 dark:text-sky-400 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                volume di riferimento collettivo
              </Link>{" "}
              edito da <strong>Hogrefe</strong>. L&apos;obiettivo è{" "}
              <strong>trasferire la capacità di progettare architetture mentali ed esperienziali basate su evidenze scientifiche</strong>.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <Link
                href="/libro-psicologia-del-gioco"
                className="inline-flex items-center space-x-1.5 text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>Scheda del Libro &ldquo;Psicologia del Gioco&rdquo;</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[var(--text-subtle)]">&bull;</span>
              <Link
                href="/framework-psicologia-del-gioco"
                className="inline-flex items-center space-x-1.5 text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>Il Paper sul Framework Teorico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Questa formazione NON è il classico corso */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] text-center">
            Questa formazione <span className="text-rose-500 dark:text-rose-400 font-black">NON</span> è il classico corso:
          </h2>

          <ul className="inline-flex flex-col space-y-2.5 sm:space-y-3 text-sm sm:text-base leading-relaxed text-[var(--text-muted)] text-left">
            <li className="flex items-start space-x-3">
              <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>
                <strong className="text-[var(--text-main)] font-bold">NON è solo nozionistica:</strong>{" "}
                ci saranno molti momenti applicativi
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>
                <strong className="text-[var(--text-main)] font-bold">NON si limita ad una banale gamification:</strong>{" "}
                andremo ben oltre
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>
                <strong className="text-[var(--text-main)] font-bold">NON è per chi vuole solo far divertire:</strong>{" "}
                questo sarà il primo preconcetto che scardineremo
              </span>
            </li>

            <li className="flex items-start space-x-3">
              <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-500 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>
                <strong className="text-[var(--text-main)] font-bold">NON è superficiale:</strong>{" "}
                ci addentreremo in profondità nella psicologia dell&apos;esperienza gameful
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. The Core Challenge: Beyond Superficial Gamification */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            IL NODO METODOLOGICO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            Oltre l&apos;illusione della &ldquo;Gamification a Punti e Badge&rdquo;
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            In azienda, in aula o in consulenza, molti tentano di usare il gioco. Pochi riescono a produrre
            una reale trasformazione nei comportamenti o nei processi decisionali. Ecco dove si annidano i fallimenti più frequenti:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)]">L&apos;Inganno dei Punti</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Aggiungere una classifica a un compito noioso non lo rende significativo. L&apos;ingaggio estrinseco
              svanisce in fretta. La vera motivazione poggia sulla soddisfazione di bisogni innati:
              autonomia, competenza e senso di padronanza.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)]">Il Costo dell&apos;Intuito</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Progettare giochi o workshop basandosi solo su cosa &ldquo;sembra divertente&rdquo; crea carichi cognitivi
              sbilanciati, fallimenti non protetti e messaggi parassiti che danneggiano il clima di gruppo o gli obiettivi formativi.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-[var(--text-main)]">L&apos;Assenza di Debriefing</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              L&apos;apprendimento non si genera nell&apos;attività in sé, ma nella rielaborazione successiva. Senza
              un&apos;architettura epistemologica di debriefing e retorica procedurale, il gioco resta una parentesi ricreativa senza impatto.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The 2-Day Architecture */}
      <section id="programma" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            IL PROGRAMMA PROVVISORIO DEL WEEKEND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            Due Giornate Intensive
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Un percorso intensivo strutturato per accompagnarti dalla comprensione profonda dei meccanismi mentali
            fino all&apos;applicazione pratica supervisionata sui tuoi progetti professionali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Day 1: Saturday */}
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 space-y-6 flex flex-col justify-between border-t-4 border-t-sky-400">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider">
                  SABATO &bull; 09:30 - 18:30
                </span>
                <span className="text-xs text-[var(--text-subtle)]">Full Day Immersivo</span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-main)]">
                I Modelli Cognitivi &amp; L&apos;Architettura del Gioco
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Una giornata per smontare i miti sul gioco e comprendere a fondo cosa accade nel cervello e nella mente di chi gioca:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[var(--text-muted)]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Il Core Psicologico del Gioco:</strong> Regole come schemi d&apos;azione,
                    la visione evoluzionistica e gli <em>obiettivi lusori</em>.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Neurobiologia del Gioco:</strong> Sistemi di ricompensa,
                    dopamina, curiosità, esplorazione e correlati neurali dell&apos;ingaggio.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Funzioni Esecutive in Azione:</strong> Memoria di lavoro,
                    controllo inibitorio e flessibilità cognitiva analizzati su giochi fisici e digitali.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Decision-Making &amp; Bias:</strong> Pensieri lenti e veloci,
                    euristiche, bias cognitivi e percezione del rischio.
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Retorica Procedurale &amp; Debriefing:</strong> Come le regole
                    persuadono e come costruire una sequenza di debriefing metacognitivo.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-subtle)] flex items-center space-x-2">
              <Utensils className="w-4 h-4 text-sky-400" />
              <span>Light lunch a buffet e coffee break continui inclusi.</span>
            </div>
          </div>

          {/* Day 2: Sunday */}
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 space-y-6 flex flex-col justify-between border-t-4 border-t-emerald-400">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  DOMENICA &bull; 09:00 - 16:30 / 17:00
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Laboratorio Applicato</span>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-main)]">
                Laboratorio di Co-Design &amp; Supervisione Continua
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Il cuore applicativo della Masterclass: quasi un&apos;intera seconda giornata dedicata a lavorare direttamente sui progetti dei partecipanti con la supervisione 1-a-1 di Alan Mattiassi.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[var(--text-muted)]">
                <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    🌅 Mattina (09:00 - 13:00): Scomposizione &amp; Co-Design
                  </div>
                  <p>
                    Lavoro a tavoli tematici. Porti il tuo workshop aziendale, prototipo di gioco,
                    attività di team building o unità GBL: analizziamo i loop di gioco,
                    rimuoviamo i messaggi parassiti, tariamo il carico cognitivo e progettiamo il debriefing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    ☀️ Pomeriggio (14:00 - 16:30 / 17:00): Playtesting &amp; Debriefing
                  </div>
                  <p>
                    Playtesting rapido tra tavoli incrociati. Simulazione della facilitazione,
                    conduzione del debriefing e supervisione finale personalizzata.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-subtle)] flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                <span>Light lunch a buffet e coffee break inclusi.</span>
              </span>
              <span className="text-emerald-400 font-semibold">Chiusura ore 16:30</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Target Audience */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            A CHI SI RIVOLGE
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Progettata per Professionisti che Lavorano con le Persone
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Formatori & HR Specialist",
              desc: "Per progettare workshop esperienziali d'impatto e padroneggiare debriefing capaci di incidere sui comportamenti organizzativi.",
            },
            {
              title: "Game Designer & Creator",
              desc: "Per capire a fondo come i giocatori prendono decisioni, bilanciare l'incertezza e superare l'intuito con modelli cognitivi convalidati.",
            },
            {
              title: "Consulenti & Coach",
              desc: "Per diagnosticare dinamiche di leadership, gestione del conflitto e stili decisionali manageriali senza filtri sociali.",
            },
            {
              title: "Psicologi & Clinici",
              desc: "Per comprendere le potenzialità del gioco come setting protetto e regolatore emotivo nel rigoroso rispetto dei confini deontologici.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-5 space-y-2.5 hover:border-[var(--border-strong)] transition-all"
            >
              <h4 className="font-bold text-[var(--text-main)] text-sm sm:text-base">{card.title}</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Pricing & Transparent Model */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#0f1a2e] to-[#0d1424] border border-slate-700/60 p-8 sm:p-12 text-center space-y-8 shadow-2xl">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase border border-emerald-500/30">
              TARIFFE SOSTENIBILI
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Investimento Trasparente
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Un modello sostenibile pensato per permettere anche a chi viaggia da fuori regione di contenere
              la spesa complessiva (corso, viaggio e soggiorno).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/40 relative">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs uppercase">
                Riservato Priority List
              </div>
              <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Quota Early Bird</div>
              <div className="text-4xl font-extrabold text-white">490€</div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Riservata ai primi che entrano nella Priority List. Include l&apos;accesso ai due giorni intensivi, laboratorio di co-design e catering completo (2 light lunch a buffet + coffee break continui).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1">Quota Ordinaria B2B</div>
              <div className="text-4xl font-extrabold text-white">750€</div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Tariffa standard a completamento aula (fino al limite massimo di 18 persone). Deducibile come formazione professionale.
              </p>
            </div>
          </div>

          {/* Box B2B / Sponsor / Partnership */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-sky-500/30 text-left space-y-3 relative overflow-hidden">
            <div className="flex items-center space-x-2 text-sky-400 font-bold text-sm sm:text-base">
              <Building2 className="w-5 h-5 shrink-0" />
              <span>Sei un&apos;azienda, un polo di innovazione o un team L&amp;D?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sono disponibili <strong>pacchetti team B2B dedicati</strong> (iscrizione agevolata per 2 o più colleghi con fatturazione aziendale) e un numero limitato di <strong>slot di Partnership &amp; Sponsorship</strong> per legare il vostro brand all&apos;evento, finanziare borse di studio per talenti e portare una sfida reale del vostro contesto nel laboratorio di co-design della domenica.
            </p>
            <div className="pt-1">
              <a
                href="mailto:alan.mattiassi@gmail.com?subject=Partnership%20Aziendale%20Masterclass"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-4 transition-colors"
              >
                <span>Richiedi i dettagli per aziende e partnership &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Priority List Form Section */}
      <section id="priority-list" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <MasterclassPriorityForm />
      </section>
    </div>
  );
}
