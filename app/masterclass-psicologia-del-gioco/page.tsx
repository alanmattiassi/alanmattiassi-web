import React from "react";
import Link from "next/link";
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
  Utensils,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Award,
} from "lucide-react";
import MasterclassPriorityForm from "@/components/MasterclassPriorityForm";

export const metadata = {
  title: "Masterclass in Psicologia del Gioco – Weekend Intensivo in Friuli | Alan Mattiassi, PhD",
  description:
    "Masterclass intensiva in presenza in Friuli con Alan Mattiassi, PhD. Quasi due giorni interi (Sabato e Domenica fino a metà pomeriggio) tra neurocognizione del gioco e laboratorio applicato di co-design supervisionato. Max 18 posti.",
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

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Masterclass in Psicologia del Gioco:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            Dalla Neurocognizione alla Progettazione di Esperienze e Ambienti
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Un fine settimana immersivo per consulenti, formatori aziendali, HR e game designer.
          Non una semplice rassegna di giochi o l&apos;ennesima sovrastruttura di punti e badge,
          ma un percorso scientifico e laboratoriale per padroneggiare il gioco come ambiente
          psicologico, decisionale e neurocognitivo.
        </p>

        {/* Feature Badges Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[var(--text-muted)] font-medium">
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Friuli (Udine / Pordenone)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Quasi 2 giorni interi (Sabato + Domenica fino a metà pomeriggio)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Users className="w-4 h-4 text-amber-400" />
            <span>Solo 18 Partecipanti</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Utensils className="w-4 h-4 text-teal-400" />
            <span>2 Light Lunch a buffet &amp; Coffee Break inclusi</span>
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
            🧭 Esplora il Programma Completo ↓
          </a>
        </div>

        <p className="text-xs text-[var(--text-subtle)]">
          A cura di <strong>Alan Mattiassi, PhD</strong> — Psicologo del gioco &bull;{" "}
          <em>psicologo, ricercatore, formatore, divulgatore</em>. Curatore del volume{" "}
          <strong className="text-[var(--text-muted)]">&ldquo;Psicologia del Gioco&rdquo;</strong> (Hogrefe Editore).
        </p>
      </section>

      {/* 2. Authority & Context Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            <div className="font-bold text-[var(--text-main)] text-base flex items-center space-x-2">
              <span>La Prima Formazione Integrata con il Manuale &ldquo;Psicologia del Gioco&rdquo; (Hogrefe)</span>
            </div>
            <p>
              Questa Masterclass nasce in stretta sinergia con la pubblicazione della teoria unificante della psicologia del gioco
              (pubblicata su <em>Canadian Journal of Experimental Psychology / APA</em>) e con l&apos;uscita del volume di riferimento
              collettivo edito da <strong>Hogrefe</strong>. L&apos;obiettivo non è trasmettere nozioni passive, ma
              <strong> trasferire la capacità di progettare architetture mentali ed esperienziali basate su evidenze scientifiche</strong>.
            </p>
          </div>
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
            IL PROGRAMMA COMPLETO DEL WEEKEND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
            Due Giornate Intensive: Dalla Neurocognizione al Co-Design
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
                    la visione evoluzionistica e gli <em>obiettivi lusori</em> (Bernard Suits).
                  </span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-main)]">Neurobiologia &amp; Play System:</strong> Sistemi di ricompensa,
                    dopamina, SEEKING system e correlati neurali dell&apos;ingaggio.
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
                    <strong className="text-[var(--text-main)]">Decision-Making &amp; Bias:</strong> Pensieri lenti e veloci
                    (Kahneman: System 1 &amp; System 2), euristiche e percezione del rischio.
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
                Il cuore differenziante della Masterclass: quasi un&apos;intera seconda giornata dedicata a lavorare direttamente sui progetti dei partecipanti con la supervisione 1-a-1 di Alan Mattiassi.
              </p>

              <div className="space-y-3.5 text-xs sm:text-sm text-[var(--text-muted)]">
                <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    🌅 Mattina (09:00 - 13:00): Scomposizione &amp; Co-Design
                  </div>
                  <p>
                    Lavoro a tavoli tematici. Porti il tuo workshop aziendale, prototipo di gioco,
                    attività di team building o unità GBL: analizziamo i loop di gioco,
                    rimuoviamo i messaggi parassiti e tariamo il carico cognitivo.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] space-y-1">
                  <div className="font-bold text-[var(--text-main)] text-sm">
                    ☀️ Pomeriggio (14:00 - 16:30 / 17:00): Playtesting &amp; Debriefing
                  </div>
                  <p>
                    Playtesting rapido tra tavoli incrociati. Simulazione della facilitazione,
                    scrittura della scheda di debriefing su misura per il tuo committente e supervisione finale personalizzata.
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
              TRACCIABILITÀ &bull; FATTURAZIONE PROFESSIONALE
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Investimento Trasparente
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Un modello sostenibile pensato per permettere anche a chi viaggia da fuori regione di contenere
              la spesa complessiva (corso, viaggio e soggiorno) attorno ai 1.000€ totali.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/40 relative">
              <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs uppercase">
                Riservato Priority List
              </div>
              <div className="text-xs uppercase font-bold text-emerald-400 mb-1">Quota Early Bird</div>
              <div className="text-4xl font-extrabold text-white">490€ <span className="text-xs font-normal text-slate-400">+ IVA</span></div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Riservata a chi entra nella Priority List, alla community Patreon e ai primi 6 iscritti. Include i due giorni, laboratorio e catering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="text-xs uppercase font-bold text-slate-400 mb-1">Quota Ordinaria B2B</div>
              <div className="text-4xl font-extrabold text-white">750€ <span className="text-xs font-normal text-slate-400">+ IVA</span></div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Tariffa standard a completamento aula (fino al limite massimo di 18 persone). Deducibile come formazione professionale.
              </p>
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
