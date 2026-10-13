import React from "react";
import Link from "next/link";
import UkFlag from "@/components/icons/UkFlag";
import {
  Sparkles,
  Download,
  ExternalLink,
  BookOpen,
  Globe,
  Compass,
  Layers,
  Brain,
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Share2,
} from "lucide-react";

export const metadata = {
  title: "Un nuovo quadro teorico per la psicologia del gioco – Alan Mattiassi, PhD",
  description:
    "Il framework teorico unificante per la psicologia del gioco di Alan Mattiassi, pubblicato su Canadian Journal of Experimental Psychology (APA). Le 4 dimensioni dell'esperienza ludica.",
};

export default function FrameworkPage() {
  const paperDoi = "https://doi.org/10.1037/cep0000413";
  const paperPublisherUrl = "https://psycnet.apa.org/doiLanding?doi=10.1037/cep0000413";
  const paperPdf = "/images/Redefining_the_Psychology_of_Games_Mattiassi_Accepted_Manuscript-1.pdf";

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PUBBLICAZIONE SCIENTIFICA &bull; CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Un nuovo quadro teorico per la psicologia del gioco
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Che cosa rende un&apos;esperienza un gioco?
        </p>

        <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full" />

        <div className="max-w-3xl mx-auto space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed text-left sm:text-center">
          <p>
            La psicologia del gioco ha prodotto un&apos;enorme quantità di ricerca, ma spesso ha affrontato il fenomeno attraverso prospettive frammentate: <strong>gioco e gaming, motivazione, emozioni, apprendimento, decision-making e comportamento sociale</strong> sono stati studiati attraverso modelli e definizioni differenti.
          </p>
          <p>
            In questo articolo propongo un <strong>framework unificante per la psicologia del gioco</strong>, sviluppato per descrivere il gioco come un fenomeno psicologico complesso e sistemico, indipendentemente dal particolare medium, genere o contesto in cui viene realizzato.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#download"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Scarica l&apos;Articolo (PDF) →</span>
          </a>

          <a
            href="#dimensioni"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all"
          >
            <Brain className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Le 4 Dimensioni</span>
          </a>

          <Link
            href="/en/psychology-of-games-framework"
            className="inline-flex items-center space-x-2.5 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all group shadow-sm"
            title="Read in English (ENG)"
          >
            <UkFlag className="w-5 h-3.5 rounded-[2px] shadow-sm flex-shrink-0" />
            <span className="font-bold text-[var(--text-main)]">ENG</span>
            <span className="text-[var(--border-strong)] opacity-60">|</span>
            <span>Read in English</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </section>

      {/* 2. Le 4 Dimensioni Fondamentali */}
      <section id="dimensioni" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHITETTURA TEORICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Le Quattro Dimensioni Psicologiche Fondamentali
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Il modello identifica quattro dimensioni psicologiche interconnesse che descrivono l&apos;esperienza ludica nella sua totalità:
          </p>
        </div>

        {/* 4 Dimension Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Dimension 1 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-sky-400 transition-colors">
                1. Regulated Symbolic Framing
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              La <strong>costruzione e il mantenimento di una cornice simbolica regolata</strong> che distingue ciò che accade nel gioco dalla realtà ordinaria.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Stabilisce il <em>cerchio magico psicologico</em> entro cui significati, azioni e conseguenze acquisiscono validità specifica, consentendo ai giocatori di agire liberamente all&apos;interno di regole condivise.
            </p>
          </div>

          {/* Dimension 2 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-amber-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-amber-400 transition-colors">
                2. Altered Role Perspective
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              L&apos;<strong>assunzione di una prospettiva di ruolo</strong> che modifica il modo in cui la persona interpreta sé stessa, gli altri e la situazione.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Consente la sperimentazione identitaria, l&apos;empatia e la ricodifica dei legami sociali e relazionali, fornendo una distanza protetta da cui osservare dinamiche complesse.
            </p>
          </div>

          {/* Dimension 3 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-emerald-400 transition-colors">
                3. Goal-Organized Performance
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              L&apos;<strong>organizzazione dell&apos;azione intorno a obiettivi lusori, regole e condizioni di successo</strong>.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Struttura la motivazione intrinseca, orienta lo sforzo attentivo e definisce i parametri di feedback e padronanza attraverso l&apos;adozione volontaria di ostacoli non necessari per raggiungere lo scopo.
            </p>
          </div>

          {/* Dimension 4 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-purple-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-purple-400 transition-colors">
                4. Metacognitive Executive Monitoring
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              Il <strong>monitoraggio e la regolazione consapevole dei propri processi cognitivi e comportamentali</strong> durante l&apos;esperienza.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Presiede alla riflessione strategica, all&apos;auto-valutazione in tempo reale e all&apos;adattamento flessibile sotto incertezza, garantendo che il giocatore rimanga consapevole del gioco pur essendone immerso.
            </p>
          </div>
        </div>

        {/* Dynamic & Systemic Callout Box */}
        <div className="rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-6 sm:p-8 space-y-3">
          <div className="flex items-center space-x-2 text-[var(--accent-primary)] font-bold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Interazione Dinamica e Natura Sistemica</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
            Queste dimensioni <strong>non costituiscono componenti indipendenti da sommare</strong> per ottenere un &ldquo;livello di gioco&rdquo;. Al contrario, <strong>interagiscono dinamicamente</strong> e possono assumere un peso differente a seconda del gioco, della situazione e della persona.
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            L&apos;obiettivo è quindi <strong>superare una concezione del gioco basata esclusivamente sulle sue manifestazioni osservabili</strong> e fornire una base teorica rigorosa per studiare la psicologia del gioco in quanto tale.
          </p>
        </div>
      </section>

      {/* 3. Fondamenti Epistemologici */}
      <section id="perche" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>FONDAMENTI EPISTEMOLOGICI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Perché questo framework?
          </h2>
          <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            Che cosa accade psicologicamente quando giochiamo?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-emerald-400">
              🧩 L&apos;Urgenza di una Visione Unificata
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              La ricerca sul gioco in psicologia poggia oggi su un terreno fortemente frammentato: la psicologia dello sviluppo si è focalizzata sul <em>play</em>, la psicologia dei media sul <em>gaming</em>, quella educativa sul <em>game-based learning</em> e quella organizzativa sulla <em>gamification</em>.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              In assenza di una teoria psicologica unificante, i risultati scientifici rischiano di rimanere <strong>casi studio isolati e non generalizzabili</strong>. Unificare la prospettiva teorica permette di dotare la ricerca di un linguaggio comune, capace di reinterpretare i risultati esistenti e progettare interventi realmente fondati sui processi psicologici che il gioco attiva.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-sky-400">
              🗺️ Un&apos;Agenda di Ricerca Comune
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Questa prospettiva apre una nuova agenda di ricerca per studiare in modo comparabile e sistematico fenomeni apparentemente distanti:
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🎲 Dai <strong>giochi analogici da tavolo</strong> ai <strong>videogiochi digitali</strong>;</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🎓 Dai <strong>giochi educativi e formativi</strong> alle simulazioni relazionali;</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🏆 Dai contesti di <strong>competizione ed esport</strong> alla gamification applicata.</span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
              Tutto all&apos;interno di un unico quadro teorico rigoroso e replicabile.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Il Paper Scientifico Pubblicato */}
      <section id="download" className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--accent-primary)]/40 p-7 sm:p-10 space-y-8 shadow-2xl">
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>PUBBLICAZIONE UFFICIALE &bull; CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Il Paper Scientifico
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              L&apos;articolo è pubblicato sulla prestigiosa rivista <strong>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</strong> (APA / CPA).
            </p>
          </div>

          {/* Paper Details Card */}
          <div className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] leading-snug">
              Redefining the Psychology of Games: A Unifying Framework Beyond Play and Gaming
            </h3>
            <div className="text-sm space-y-1 text-[var(--text-muted)]">
              <p>
                <strong>Autore:</strong> <span className="text-[var(--text-main)]">Alan D. A. Mattiassi, Ph.D.</span>
              </p>
              <p>
                <strong>Rivista:</strong> <em>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</em>
              </p>
              <p>
                <strong>Stato editoriale:</strong> <span className="text-emerald-400 font-semibold">Pubblicato (Advance online publication)</span>
              </p>
              <p>
                <strong>DOI Ufficiale:</strong>{" "}
                <a
                  href={paperDoi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-primary)] hover:underline inline-flex items-center space-x-1"
                >
                  <span>{paperDoi}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={paperPdf}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>SCARICA IL PAPER (PDF) →</span>
            </a>

            <a
              href={paperPublisherUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all text-center"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Leggi l&apos;Articolo Originale (APA PsycNet)</span>
            </a>
          </div>

          {/* Citation Box */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
            <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Come citare questo lavoro (APA)</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] font-mono text-xs sm:text-sm text-[var(--text-main)] leading-relaxed select-all">
              Mattiassi, A. D. A. (2024). Redefining the psychology of games: A unifying framework beyond play and gaming. <em>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</em>. Advance online publication. https://doi.org/10.1037/cep0000413
            </div>
            <p className="text-[11px] text-[var(--text-muted)] italic">
              Per citazioni e riferimenti bibliografici accademici, si raccomanda di utilizzare la versione ufficiale con DOI APA.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Informazioni sull'autore */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-9 space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-main)]">
            Informazioni sull&apos;autore
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <strong>Alan D. A. Mattiassi, Ph.D.</strong> è psicologo del gioco, ricercatore e consulente. La sua attività di ricerca e divulgazione si concentra sulla psicologia del gioco, game-based learning, gamification, game design, motivazione e processi cognitivi coinvolti nelle esperienze di gioco.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-[var(--accent-primary)] hover:opacity-90 transition-opacity"
            >
              <span>Scopri di più sulla ricerca di Alan Mattiassi →</span>
            </Link>
            <Link
              href="/hire-me-lavora-con-me"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-colors"
            >
              <span>Consulenza &amp; Progetti</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Finale */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
          Vuoi applicare questo framework nella tua organizzazione o progetto?
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          Dalla progettazione didattica alla consulenza per game studios e interventi HR basati sull&apos;evidenza scientifica.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            <span>Contattami per una collaborazione o consulenza →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
