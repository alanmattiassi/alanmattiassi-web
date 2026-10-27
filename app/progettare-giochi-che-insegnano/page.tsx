import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Quote,
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
import CourseTimelineExpandable from "@/components/CourseTimelineExpandable";

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
            <div className="flex items-center space-x-2 text-purple-500 dark:text-purple-400 text-xs font-semibold mb-1">
              <BookOpen className="w-4 h-4" />
              <span>+ MATERIALE</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">Per approfondire</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Tra un incontro e l&apos;altro</div>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm hover:border-[var(--border-strong)] transition-all">
            <div className="flex items-center space-x-2 text-amber-500 dark:text-amber-400 text-xs font-semibold mb-1">
              <Hammer className="w-4 h-4" />
              <span>1 SETTIMANA</span>
            </div>
            <div className="text-[var(--text-main)] font-bold text-sm">Per avanzare di uno step</div>
            <div className="text-[var(--text-muted)] text-xs mt-0.5">Nel tuo progetto reale</div>
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
            l&apos;obiettivo psicologico dell&apos;apprendimento. Ho commesso entrambi gli errori e ho capito
            che nessuna delle due formule poteva funzionare.
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
                strutturate per compilare i parametri del tuo contesto e sviluppare il tuo gioco.
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

        <CourseTimelineExpandable />
      </section>

      {/* 4. A CHI SI RIVOLGE */}
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

      {/* 5. PROGETTI DEI PARTECIPANTI (SOCIAL PROOF) */}
      <section id="progetti-corsisti" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROGETTI &amp; TESTIMONIANZE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Cosa realizzano i partecipanti
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Alcuni dei progetti più significativi sviluppati e validati durante il laboratorio:
            soluzioni concrete per la scuola, la formazione aziendale e i contesti educativi.
          </p>
        </div>

        {/* Case Study Cards (Modalità A) */}
        <div className="space-y-8">
          
          {/* Studente 1: Didattica & Scuola - Elena Valenti */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 md:p-10 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sinistra: Foto in grande con AM Gold in alto a destra, Nome e Ruolo sotto */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="relative w-full max-w-[280px] md:max-w-none">
                  {/* Foto con bordo e angoli arrotondati */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)]">
                    <Image
                      src="/images/testimonials/elena-valenti.jpg"
                      alt="Prof.ssa Elena Valenti"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Logo AM Gold molto più grande e sovraimposto, che esce dai confini della foto nello spazio bianco */}
                  <div
                    className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 md:-top-7 md:-right-7 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-30 drop-shadow-2xl pointer-events-none"
                    title="Sigillo AM Gold Eccellenza"
                  >
                    <Image
                      src="/images/AMgold.png"
                      alt="Sigillo AM Gold"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg sm:text-xl text-[var(--text-main)]">
                    Prof.ssa Elena Valenti
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[var(--accent-primary)]">
                    Docente di Lettere &amp; Referente Didattica
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    Scuola Secondaria di II Grado
                  </p>
                </div>
              </div>

              {/* Destra: Quote in parole sue */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-4 md:border-l md:border-[var(--border-color)] md:pl-8 lg:pl-10">
                <div className="text-amber-500/70 dark:text-amber-400/70">
                  <Quote className="w-10 h-10 opacity-60" />
                </div>
                <blockquote className="text-sm sm:text-base md:text-lg text-[var(--text-main)] leading-relaxed italic space-y-3">
                  <p>
                    &ldquo;Prima di partecipare al laboratorio pensavo al gioco in classe soprattutto come a un momento ricreativo o a un quiz per ripassare le nozioni. Nel corso con Alan ho capito come tradurre i vincoli storici e decisionali in regole vive.
                  </p>
                  <p>
                    Con il mio gioco <strong>«Res Publica: Il Dilemma dei Gracchi»</strong> i miei studenti di IV liceo non hanno semplicemente &lsquo;ripassato&rsquo; la storia romana: hanno provato in prima persona la frustrazione dei vincoli istituzionali e la polarizzazione politica che porta al blocco della repubblica. Il momento del debriefing guidato ha aperto una discussione critica e spontanea che non avevo mai visto in anni di insegnamento tradizionale.&rdquo;
                  </p>
                </blockquote>
              </div>

            </div>
          </article>

          {/* Studente 2: Formazione Aziendale / HR - Marco De Angelis */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 md:p-10 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sinistra: Foto in grande con AM Gold in alto a destra, Nome e Ruolo sotto */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="relative w-full max-w-[280px] md:max-w-none">
                  {/* Foto con bordo e angoli arrotondati */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)]">
                    <Image
                      src="/images/testimonials/marco-de-angelis.jpg"
                      alt="Dott. Marco De Angelis"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Logo AM Gold molto più grande e sovraimposto, che esce dai confini della foto nello spazio bianco */}
                  <div
                    className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 md:-top-7 md:-right-7 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-30 drop-shadow-2xl pointer-events-none"
                    title="Sigillo AM Gold Eccellenza"
                  >
                    <Image
                      src="/images/AMgold.png"
                      alt="Sigillo AM Gold"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg sm:text-xl text-[var(--text-main)]">
                    Dott. Marco De Angelis
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-500 dark:text-emerald-400">
                    Senior HR Trainer &amp; Coach
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    Consulenza Aziendale &amp; Formazione
                  </p>
                </div>
              </div>

              {/* Destra: Quote in parole sue */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-4 md:border-l md:border-[var(--border-color)] md:pl-8 lg:pl-10">
                <div className="text-amber-500/70 dark:text-amber-400/70">
                  <Quote className="w-10 h-10 opacity-60" />
                </div>
                <blockquote className="text-sm sm:text-base md:text-lg text-[var(--text-main)] leading-relaxed italic space-y-3">
                  <p>
                    &ldquo;In azienda tutti parlano di gamification, ma quasi sempre si finisce per attaccare punti e classifiche superficiali su processi noiosi. Il laboratorio di Alan ha ribaltato completamente la mia prospettiva: abbiamo lavorato sui processi cognitivi reali e sulla cooperazione vincolata.
                  </p>
                  <p>
                    Il gioco <strong>«CrossTalk: Il Paradosso della Consegna»</strong>, che ho ideato durante il percorso, ha permesso ai team manageriali di toccare con mano le dinamiche di disimpegno e le strozzature operative tra reparti. I partecipanti escono dalla sessione non solo motivati, ma con una consapevolezza immediata e misurabile dei propri schemi decisionali al tavolo.&rdquo;
                  </p>
                </blockquote>
              </div>

            </div>
          </article>

          {/* Studente 3: Terzo Settore / Pedagogia - Sara Moretti */}
          <article className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-8 md:p-10 shadow-xl hover:border-amber-400/40 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Sinistra: Foto in grande con AM Gold in alto a destra, Nome e Ruolo sotto */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="relative w-full max-w-[280px] md:max-w-none">
                  {/* Foto con bordo e angoli arrotondati */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-color)]">
                    <Image
                      src="/images/testimonials/sara-moretti.jpg"
                      alt="Dott.ssa Sara Moretti"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Logo AM Gold molto più grande e sovraimposto, che esce dai confini della foto nello spazio bianco */}
                  <div
                    className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 md:-top-7 md:-right-7 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-30 drop-shadow-2xl pointer-events-none"
                    title="Sigillo AM Gold Eccellenza"
                  >
                    <Image
                      src="/images/AMgold.png"
                      alt="Sigillo AM Gold"
                      width={112}
                      height={112}
                      className="w-full h-full object-contain filter drop-shadow-xl"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg sm:text-xl text-[var(--text-main)]">
                    Dott.ssa Sara Moretti
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-purple-500 dark:text-purple-400">
                    Pedagogista &amp; Coordinatrice Servizi
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    Terzo Settore &amp; Servizi Minori
                  </p>
                </div>
              </div>

              {/* Destra: Quote in parole sue */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-4 md:border-l md:border-[var(--border-color)] md:pl-8 lg:pl-10">
                <div className="text-amber-500/70 dark:text-amber-400/70">
                  <Quote className="w-10 h-10 opacity-60" />
                </div>
                <blockquote className="text-sm sm:text-base md:text-lg text-[var(--text-main)] leading-relaxed italic space-y-3">
                  <p>
                    &ldquo;Lavorando con minori tra i 9 e i 13 anni con difficoltà di autoregolazione, il rischio più grande è proporre attività che suonino forzatamente pedagogiche o moralistiche. Grazie al metodo appreso nel laboratorio, ho strutturato <strong>«La Rotta delle Emozioni»</strong> creando uno spazio protetto in cui l&apos;errore non è un fallimento morale ma un dato di gioco da analizzare senza difese.
                  </p>
                  <p>
                    Il protocollo di debriefing maieutico che abbiamo perfezionato durante il corso è diventato un punto di riferimento per tutta la nostra équipe educativa, permettendoci di collegare quanto vissuto al tavolo alla realtà quotidiana dei ragazzi.&rdquo;
                  </p>
                </blockquote>
              </div>

            </div>
          </article>

        </div>

        {/* Callout Albo Ufficiale & Verifica Certificati */}
        <div className="rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border-color)] text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-6 shadow-sm">
          <div className="space-y-1">
            <h4 className="font-bold text-base text-[var(--text-main)] flex items-center justify-center sm:justify-start gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Albo Ufficiale dei Corsisti &amp; Verifica Certificati
            </h4>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-xl">
              Consulta il registro pubblico di tutti i partecipanti e verifica l&apos;autenticità dei titoli rilasciati da Alan Mattiassi, distinguendo i Certificati di Eccellenza dagli Attestati di Partecipazione.
            </p>
          </div>
          <Link
            href="/albo-certificati"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[var(--bg-surface)] hover:bg-[var(--badge-bg)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all shrink-0"
          >
            <span>Consulta l&apos;Albo e Verifica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. IL DOCENTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-10 flex flex-col sm:flex-row gap-8 items-center text-left">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[var(--border-color)] p-1 bg-[var(--bg-surface)] shrink-0 shadow-xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
              <Image
                src="/images/profiloam.jpg"
                alt="Alan Mattiassi, PhD - Psicologo del Gioco"
                fill
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover object-top"
              />
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
