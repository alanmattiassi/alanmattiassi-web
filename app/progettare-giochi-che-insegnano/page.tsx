import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Clock,
  Hammer,
  Award,
  Zap,
  BookOpen,
  Layers,
  CheckCircle2,
  Medal,
  MessageSquare,
  School,
  Briefcase,
  HeartHandshake,
  Compass,
  ArrowRight,
  Target,
  GraduationCap,
  PlayCircle,
  Brain,
  HelpCircle,
} from "lucide-react";
import CourseCandidacyForm from "@/components/CourseCandidacyForm";

export const metadata = {
  title: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco | Alan Mattiassi, PhD",
  description:
    "Laboratorio intensivo di psicologia del gioco applicata alla didattica. 7 incontri online a numero chiuso con Alan Mattiassi, PhD: dall'analisi di contesto all'obiettivo lusorio, debriefing e certificati di eccellenza.",
};

export default function ProgettareGiochiCheInsegnanoPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ALTA FORMAZIONE SCIENTIFICA &bull; 7 SETTIMANE ONLINE &bull; NUMERO CHIUSO</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Progettare Giochi <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            che Insegnano
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
          Un laboratorio di <strong className="text-[var(--text-main)] font-semibold">psicologia del gioco applicata alla didattica</strong>.
          Dall&apos;analisi dei vincoli di contesto ai meccanismi cognitivi di apprendimento, fino alla prototipazione
          di un&apos;esperienza formativa ed al suo debriefing strutturato.
        </p>

        {/* Docente Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-muted)]">
          <GraduationCap className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
          <span>
            Docente e Supervisore: <strong className="text-[var(--text-main)]">Alan Mattiassi, PhD</strong> — Psicologo del gioco &bull; Curatore del volume <em>Psicologia del Gioco</em> (Hogrefe)
          </span>
        </div>

        {/* Feature Strip Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm hover:border-[var(--border-strong)] transition-all">
            <div className="flex items-center space-x-2 text-[var(--accent-primary)] text-xs font-semibold mb-1">
              <Calendar className="w-4 h-4" />
              <span>7 INCONTRI</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">1 a settimana</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Sessioni online sincrone</div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm hover:border-[var(--border-strong)] transition-all">
            <div className="flex items-center space-x-2 text-emerald-500 dark:text-emerald-400 text-xs font-semibold mb-1">
              <Clock className="w-4 h-4" />
              <span>30 MINUTI</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">Di lezione frontale</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Massima densità teorica</div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm hover:border-[var(--border-strong)] transition-all">
            <div className="flex items-center space-x-2 text-amber-500 dark:text-amber-400 text-xs font-semibold mb-1">
              <Hammer className="w-4 h-4" />
              <span>1 SETTIMANA</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">Per avanzare lo step</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Sul tuo progetto reale</div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm hover:border-[var(--border-strong)] transition-all">
            <div className="flex items-center space-x-2 text-purple-500 dark:text-purple-400 text-xs font-semibold mb-1">
              <Award className="w-4 h-4" />
              <span>VALUTAZIONE</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">Certificato di Eccellenza</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Per progetti validati</div>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#candidatura"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
          >
            <span>Candidati per la prossima edizione</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#programma"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--text-main)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex items-center space-x-2"
          >
            <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Esplora i 7 Incontri &darr;</span>
          </a>
        </div>
      </section>

      {/* 2. LA FORMULA METODOLOGICA */}
      <section id="metodo" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <span>METODOLOGIA DIDATTICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Perché la formula è diversa da qualsiasi altro corso
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Spesso nei corsi sul gioco si commettono due errori opposti: perdersi in rassegne interminabili
            senza strumenti pratici, oppure iniziare subito a inventare dadi e carte prima ancora di capire
            l&apos;obiettivo psicologico dell&apos;apprendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-[var(--accent-primary)]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[var(--text-main)]">30 Minuti Chirurgici</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Ogni lezione frontale dura esattamente mezz&apos;ora. Nessun allungamento superfluo:
                un concentrato di modelli neurocognitivi, ergonomia delle decisioni e principi di game design.
              </p>
            </div>
            <div className="text-xs text-[var(--accent-primary)] font-semibold flex items-center space-x-1.5 pt-3 border-t border-[var(--border-color)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Massima efficienza e zero dispersione</span>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[var(--text-main)]">Studio Asincrono Guidato</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Tra un incontro e l&apos;altro hai a disposizione video mirati di approfondimento e schede operative
                strutturate per compilare i parametri del tuo contesto e i tuoi cicli di gioco.
              </p>
            </div>
            <div className="text-xs text-emerald-500 dark:text-emerald-400 font-semibold flex items-center space-x-1.5 pt-3 border-t border-[var(--border-color)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Schede pratiche e lezioni Game Insights</span>
            </div>
          </div>

          <div className="bg-[var(--bg-card)] rounded-2xl p-6 sm:p-7 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-500 dark:text-purple-400">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-[var(--text-main)]">Non tocchiamo il gioco subito</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Fino a metà percorso non si costruiscono materiali o meccaniche. Prima si analizzano vincoli,
                barriere, baseline e indicatori osservabili di cambiamento. Solo allora il gioco diventa una leva potente.
              </p>
            </div>
            <div className="text-xs text-purple-500 dark:text-purple-400 font-semibold flex items-center space-x-1.5 pt-3 border-t border-[var(--border-color)]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Progettazione scientifica e mirata</span>
            </div>
          </div>
        </div>

        {/* Quote Block */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 text-center relative overflow-hidden">
          <blockquote className="text-base sm:text-lg italic text-[var(--text-muted)] leading-relaxed max-w-3xl mx-auto">
            &ldquo;Il gioco nella didattica non è uno strumento per intrattenere o addolcire l&apos;apprendimento.
            È un laboratorio ecologico e protetto nel quale i processi psicologici e le decisioni vengono resi
            visibili, osservabili e trasformabili.&rdquo;
          </blockquote>
          <div className="mt-3 text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
            — Alan Mattiassi, PhD
          </div>
        </div>
      </section>

      {/* 3. IL PROGRAMMA DEI 7 INCONTRI */}
      <section id="programma" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <span>TIMELINE FORMATIVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            I 7 Incontri della Progettazione
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Un percorso a tappe progressive: ogni settimana aggiunge un tassello indispensabile al tuo prototipo.
          </p>
        </div>

        <div className="space-y-4">
          {/* Modulo 1 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              1/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Analisi del Contesto</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono border border-[var(--border-color)]">
                  Scheda 1: Limiti &amp; Barriere
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Mappare il mondo in cui il progetto vivrà. Distinguere tra <strong>vincoli forti</strong> (parametri strategici come tempi, spazi e budget), <strong>barriere insormontabili</strong> (rischi etici, legali, cognitivi) e <strong>limiti strutturali</strong> del setting.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Cosa è davvero progettabile e cosa devo accettare come dato di realtà?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 2 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              2/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Obiettivo Formativo &amp; Effetti Controfattuali</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono border border-[var(--border-color)]">
                  Scheda 2: Baseline &amp; Indicatori
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Definire con rigore il cambiamento desiderato: da quale <strong>baseline</strong> si parte? Quale <strong>indicatore empirico</strong> posso osservare per verificare l&apos;avvenuto cambiamento? Analisi del senso controfattuale e dei sunk cost nella didattica.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Come riconosco che il cambiamento cognitivo è realmente avvenuto?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 3 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              3/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Il Processo Cognitivo: Dalla Baseline ai Desiderata</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono border border-[var(--border-color)]">
                  Processi Psicologici
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Quale sequenza mentale porta l&apos;allievo dallo stato attuale al traguardo? Monitoraggio metacognitivo, attribuzione di cause, gestione del fallimento protetto, assimilazione, accomodamento e ristrutturazione concettuale.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Quali processi interni al discente devono essere attivati per produrre il salto?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 4 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-500 dark:text-emerald-400 text-lg shrink-0">
              4/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Come si Impara nel Gioco: Il Game Loop</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-mono border border-emerald-500/30">
                  Scheda 4: Feedback Loop
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Inizio della progettazione ludica: <em>1. Formulazione di un&apos;ipotesi testabile &rarr; 2. Il gioco restituisce un feedback immediato &rarr; 3. Il giocatore osserva, interpreta e integra nella propria teoria</em>. Allineamento tra rinforzo e obiettivi.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Qual è la minima sequenza di azioni capace di generare il feedback desiderato?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 5 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-500 dark:text-emerald-400 text-lg shrink-0">
              5/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Dal Singolo Loop al Gioco Intero: L&apos;Obiettivo Lusorio</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono border border-[var(--border-color)]">
                  Teoria del Gioco (Suits)
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Espandere i loop in un sistema organico. Definizione dell&apos;<strong>obiettivo lusorio</strong>: lo scopo interno alle regole che orienta ogni azione e attribuisce senso all&apos;esperienza. Come riconoscere ed evitare gli errori fatali dei serious game.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Cosa motiva il giocatore a perseguire il traguardo accettando i limiti delle regole?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 6 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center font-bold text-purple-500 dark:text-purple-400 text-lg shrink-0">
              6/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Debriefing &amp; Valutazione dell&apos;Apprendimento</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono border border-[var(--border-color)]">
                  Rielaborazione
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                L&apos;apprendimento si consolida nella rielaborazione post-gioco. Modalità maieutica, ostetrica e guidata.
                Fasi strutturate (emozioni, analisi fattuale, trasferimento alla realtà) e mappatura di chi valuta (docente, pari, autovalutazione).
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Come estraiamo valore cognitivo e comportamentale da quanto accaduto al tavolo?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 7 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center font-bold text-amber-500 dark:text-amber-400 text-lg shrink-0">
              7/7
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg text-[var(--text-main)]">Pitch Finale, Playtest &amp; Restituzione</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 font-mono border border-amber-500/30">
                  Certificati di Eccellenza
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Sessione finale di restituzione: presentazione del prototipo funzionante, sessione di playtest con revisione critica tra pari e validazione metodologica con Alan Mattiassi. Conferimento dei Certificati di Eccellenza ai progetti completati con rigore.
              </p>
              <div className="text-xs text-amber-500 dark:text-amber-300 italic">
                Traguardo: Uscire dall&apos;aula con un prototipo testato, documentato e pronto per la tua classe o azienda.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALBO DEI CERTIFICATI DI ECCELLENZA (MODALITÀ A) */}
      <section id="albo-eccellenza" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-500 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>RICONOSCIMENTI DI MERITO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Albo dei Certificati di Eccellenza
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Il <strong>Certificato di Eccellenza</strong> non è un attestato di presenza. Viene conferito solo
            ai discenti che completano l&apos;intero iter metodologico e presentano un progetto ludico-didattico
            rigorosamente validato sul piano degli obiettivi, dei feedback e del debriefing.
          </p>

          {/* Coorti Selector */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            <span className="px-4 py-2 rounded-xl bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span>Coorte 1 (Inaugurale)</span>
            </span>
            <span className="px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-subtle)] text-xs font-medium">
              Coorte 2 (In partenza)
            </span>
          </div>
        </div>

        {/* Case Study Cards (Modalità A) */}
        <div className="space-y-6">
          
          {/* Studente 1: Didattica & Scuola */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] pb-6 lg:pb-0 lg:pr-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400/20 to-teal-400/20 border border-[var(--accent-primary)]/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-xl shrink-0">
                    EV
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-main)]">Prof.ssa Elena Valenti</h3>
                    <p className="text-xs text-[var(--text-muted)]">Docente di Lettere &amp; Ref. Didattica</p>
                    <p className="text-[11px] text-[var(--text-subtle)]">Scuola Secondaria di II Grado</p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-500 dark:text-amber-400 text-xs font-semibold">
                  <Medal className="w-3.5 h-3.5" />
                  <span>Certificato di Eccellenza &bull; Coorte 1</span>
                </div>

                <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-color)] space-y-1">
                  <span className="font-semibold text-[var(--text-main)] block">Contesto di applicazione:</span>
                  <span>Classe IV Liceo (24 studenti) — Didattica della storia antica e dei conflitti istituzionali.</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider font-mono mb-1">
                    Progetto Validato
                  </div>
                  <h4 className="font-bold text-xl text-[var(--text-main)] mb-2">
                    &laquo;Res Publica: Il Dilemma dei Gracchi&raquo;
                  </h4>
                  <div className="text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
                    <p>
                      <strong>Obiettivo Formativo:</strong> Comprendere le dinamiche sistemiche che innescano la crisi delle istituzioni repubblicane romane, superando l&apos;approccio nozionistico.
                    </p>
                    <p>
                      <strong>Architettura del Gioco:</strong> Game loop a informazione parziale con ruoli asimmetrici (tribuni vs senatori). Il feedback del gioco rende visibile come il blocco del consenso conduca alla polarizzazione violenta.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--bg-card-subtle)] border-l-4 border-amber-400 rounded-r-2xl p-4 text-xs sm:text-sm text-[var(--text-muted)] italic">
                  <div className="text-[11px] font-bold text-amber-500 dark:text-amber-400 not-italic uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Restituzione di Alan Mattiassi, PhD:</span>
                  </div>
                  &ldquo;Un&apos;applicazione magistrale della retorica procedurale. Elena non ha costruito un quiz travestito da gioco: ha creato un modello dinamico in cui le regole costringono gli allievi a sperimentare i vincoli decisionali del periodo storico. Il debriefing a tre fasi è impeccabile.&rdquo;
                </div>
              </div>
            </div>
          </article>

          {/* Studente 2: Formazione Aziendale / HR */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] pb-6 lg:pb-0 lg:pr-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-sky-400/20 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-500 dark:text-emerald-400 text-xl shrink-0">
                    MD
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-main)]">Dott. Marco De Angelis</h3>
                    <p className="text-xs text-[var(--text-muted)]">Senior HR Trainer &amp; Coach</p>
                    <p className="text-[11px] text-[var(--text-subtle)]">Consulenza Aziendale &amp; Formazione</p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-500 dark:text-amber-400 text-xs font-semibold">
                  <Medal className="w-3.5 h-3.5" />
                  <span>Certificato di Eccellenza &bull; Coorte 1</span>
                </div>

                <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-color)] space-y-1">
                  <span className="font-semibold text-[var(--text-main)] block">Contesto di applicazione:</span>
                  <span>Onboarding manageriale e team di sviluppo interfunzionali (16 partecipanti).</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider font-mono mb-1">
                    Progetto Validato
                  </div>
                  <h4 className="font-bold text-xl text-[var(--text-main)] mb-2">
                    &laquo;CrossTalk: Il Paradosso della Consegna&raquo;
                  </h4>
                  <div className="text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
                    <p>
                      <strong>Obiettivo Formativo:</strong> Disinnescare il fenomeno del <em>social loafing</em> (disimpegno di gruppo) e potenziare la responsabilità individuale nella gestione delle dipendenze operative.
                    </p>
                    <p>
                      <strong>Architettura del Gioco:</strong> Cooperazione vincolata da colli di bottiglia asimmetrici. L&apos;<strong>obiettivo lusorio</strong> costringe a rinegoziare continuamente le risorse senza accentrare il controllo.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--bg-card-subtle)] border-l-4 border-amber-400 rounded-r-2xl p-4 text-xs sm:text-sm text-[var(--text-muted)] italic">
                  <div className="text-[11px] font-bold text-amber-500 dark:text-amber-400 not-italic uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Restituzione di Alan Mattiassi, PhD:</span>
                  </div>
                  &ldquo;Straordinario lavoro sulla misurabilità degli indicatori comportamentali. Marco ha definito con lucidità cosa osservare al tavolo prima ancora di concepire le carte di gioco, traducendo una criticità aziendale complessa in un&apos;esperienza formativa misurabile.&rdquo;
                </div>
              </div>
            </div>
          </article>

          {/* Studente 3: Terzo Settore / Pedagogia */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] pb-6 lg:pb-0 lg:pr-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400/20 to-sky-400/20 border border-purple-400/30 flex items-center justify-center font-bold text-purple-500 dark:text-purple-400 text-xl shrink-0">
                    SM
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--text-main)]">Dott.ssa Sara Moretti</h3>
                    <p className="text-xs text-[var(--text-muted)]">Pedagogista &amp; Coord. Servizi</p>
                    <p className="text-[11px] text-[var(--text-subtle)]">Terzo Settore &amp; Servizi Minori</p>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-500 dark:text-amber-400 text-xs font-semibold">
                  <Medal className="w-3.5 h-3.5" />
                  <span>Certificato di Eccellenza &bull; Coorte 1</span>
                </div>

                <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-color)] space-y-1">
                  <span className="font-semibold text-[var(--text-main)] block">Contesto di applicazione:</span>
                  <span>Laboratori pomeridiani per minori 9-13 anni con difficoltà di autoregolazione emotiva.</span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-purple-500 dark:text-purple-400 uppercase tracking-wider font-mono mb-1">
                    Progetto Validato
                  </div>
                  <h4 className="font-bold text-xl text-[var(--text-main)] mb-2">
                    &laquo;La Rotta delle Emozioni&raquo;
                  </h4>
                  <div className="text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
                    <p>
                      <strong>Obiettivo Formativo:</strong> Sviluppare il monitoraggio metacognitivo e l&apos;attribuzione causale non difensiva di fronte all&apos;errore e agli imprevisti.
                    </p>
                    <p>
                      <strong>Architettura del Gioco:</strong> Ciclo iterativo a tappe con carte imprevisto e token &ldquo;rivelazione&rdquo;. Protocollo di debriefing maieutico in 3 fasi integrato direttamente nella plancia.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--bg-card-subtle)] border-l-4 border-amber-400 rounded-r-2xl p-4 text-xs sm:text-sm text-[var(--text-muted)] italic">
                  <div className="text-[11px] font-bold text-amber-500 dark:text-amber-400 not-italic uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Restituzione di Alan Mattiassi, PhD:</span>
                  </div>
                  &ldquo;Un perfetto equilibrio tra le barriere invalicabili del setting pedagogico e la libertà di sperimentazione protetta dal cerchio magico del gioco. Sara ha dimostrato come la psicologia cognitiva del gioco possa supportare la crescita emotiva senza mai risultare moralistica.&rdquo;
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* 5. A CHI SI RIVOLGE */}
      <section id="target" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <span>PROFILI DESTINATARI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            A chi è rivolto il laboratorio
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Il percorso è concepito per chi intende utilizzare il gioco come metodo didattico rigoroso nel proprio ambito professionale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-7 space-y-4 hover:border-[var(--border-strong)] transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-[var(--accent-primary)] flex items-center justify-center">
              <School className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[var(--text-main)]">Docenti &amp; Insegnanti</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Dalla scuola primaria alla secondaria e all&apos;università: per progettare attività curricolari fondate su meccaniche ludiche concrete, con parametri di valutazione verificabili.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-7 space-y-4 hover:border-[var(--border-strong)] transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[var(--text-main)]">Formatori Aziendali &amp; HR</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Consulenti, coach e formatori organizzativi: per creare workshop esperienziali su leadership, problem-solving e negoziazione che superino l&apos;approccio superficiale della gamification a punti.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-7 space-y-4 hover:border-[var(--border-strong)] transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 dark:text-purple-400 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[var(--text-main)]">Educatori &amp; Pedagogisti</h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Professionisti dell&apos;educazione e del terzo settore: per utilizzare il gioco come spazio strutturato di regolazione emotiva, relazione tra pari e superamento delle barriere comportamentali.
            </p>
          </div>
        </div>
      </section>

      {/* 6. IL DOCENTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-center text-left">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 p-1 shrink-0 shadow-xl">
            <div className="w-full h-full rounded-2xl bg-[var(--bg-surface)] flex flex-col items-center justify-center text-center p-3">
              <span className="font-extrabold text-[var(--text-main)] text-2xl">AM</span>
              <span className="text-[11px] text-[var(--accent-primary)] font-mono mt-0.5">PhD Psychology</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
              Docente &amp; Direttore Scientifico
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Alan Mattiassi, PhD
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Psicologo del gioco, ricercatore, formatore e divulgatore. Da oltre dieci anni aiuta professionisti,
              docenti e aziende a comprendere il funzionamento psicologico del gioco. Curatore e co-autore del volume
              accademico <em>Psicologia del Gioco</em> (Hogrefe Editore) e creatore del canale divulgativo <em>Game Insights</em>.
            </p>
            <div className="pt-1 flex flex-wrap gap-4 text-xs font-medium text-[var(--text-muted)]">
              <Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors flex items-center space-x-1">
                <span>Profilo scientifico completo &rarr;</span>
              </Link>
              <Link href="/libro-psicologia-del-gioco" className="hover:text-[var(--accent-primary)] transition-colors flex items-center space-x-1">
                <span>Il libro Hogrefe &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEZIONE CANDIDATURA (CTA) */}
      <section id="candidatura" className="max-w-3xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROSSIMA COORTE IN PROGRAMMAZIONE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Porta il tuo progetto alla prossima edizione
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Il laboratorio è a numero chiuso per consentire la revisione puntuale di ogni singolo progetto.
            Invia la tua candidatura per bloccare la priorità e ricevere il calendario dettagliato appena disponibile.
          </p>
        </div>

        <CourseCandidacyForm />
      </section>

    </div>
  );
}
