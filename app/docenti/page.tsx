import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  School,
  Clock,
  Compass,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Docenti & Scuole – Game-Based Learning Evidence-Based | Alan Mattiassi, PhD",
  description:
    "Formazione per docenti e scuole sul Game-Based Learning (GBL-02). Dalla psicologia del gioco alla didattica per competenze curricolari.",
};

export default function DocentiPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <School className="w-3.5 h-3.5" />
          <span>FORMAZIONE DOCENTI &bull; SCUOLE &bull; GAME-BASED LEARNING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Game-Based Learning per la Scuola:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            Dalla Psicologia del Gioco alla Didattica delle Competenze
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Non una semplice parentesi ricreativa in classe, ma una metodologia rigorosa di progettazione educativa.
          Un percorso intensivo basato sulle evidenze della psicologia del gioco per consentire ai docenti di comprendere,
          facilitare e progettare in autonomia esperienze di apprendimento attivo integrate con gli obiettivi curricolari.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Richiedi una proposta per la tua scuola / Prenota una call (30 min) →
          </Link>
          <a
            href="#metodologia"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          >
            🧭 Scopri il Framework GBL-02 ↓
          </a>
        </div>
      </section>

      {/* 2. Scientific Authority Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#0d1424] border border-slate-800 p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">10+</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Università e Centri di Ricerca partner e committenti
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">1.000+</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Docenti ed educatori formati in tutta Italia
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">50+</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Learning Programs strutturati erogati per istituti scolastici
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">TEDx</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Speaker a Udine su come i giochi ci aiutano a conoscere noi stessi
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Problem in Classroom: Beyond Superficial Enthusiasm */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            IL NODO CRUCIALE IN CLASSE
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Quando giocare in classe non basta (e perché l&apos;entusiasmo non è competenza)
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            La didattica tradizionale è efficace nel trasmettere nozioni e informazioni teoriche. Ma lo sviluppo
            autentico delle <strong>competenze disciplinari e trasversali</strong> (prendere decisioni sotto pressione,
            collaborare, gestire l&apos;incertezza, risolvere problemi complessi) richiede <strong>esperienze significative</strong>,
            nelle quali studenti e studentesse agiscono in prima persona e riflettono sulle conseguenze delle proprie scelte.
          </p>

          <p>
            Molte attività ludiche introdotte a scuola producono entusiasmo immediato e forte coinvolgimento.
            Ma <strong>non tutte producono apprendimento duraturo</strong>. Il punto debole raramente risiede nel gioco in sé,
            ma nella mancanza di una solida architettura psicologica e pedagogica:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>L&apos;illusione dell&apos;intrattenimento</span>
              </div>
              <p className="text-xs text-slate-400">
                Portare un gioco in classe senza collegarlo a una precisa struttura didattica rischia di trasformarlo in una parentesi isolata che non lascia traccia nelle competenze.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Messaggi parassiti</span>
              </div>
              <p className="text-xs text-slate-400">
                Se regole e dinamiche non sono allineate agli obiettivi formativi, il gioco può involontariamente rinforzare stereotipi, frustrazione o dinamiche tossiche di gruppo.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Assenza di Debriefing</span>
              </div>
              <p className="text-xs text-slate-400">
                L&apos;azione ludica senza una rielaborazione guidata svanisce subito. L&apos;apprendimento non si genera nel gioco, ma nella riflessione post-gioco.
              </p>
            </div>
          </div>

          <blockquote className="border-l-2 border-sky-400 pl-4 py-2 italic text-slate-200 bg-slate-950/40 rounded-r-xl">
            “La trasformazione educativa non dipende dall&apos;esperienza in sé, ma da come questa viene progettata,
            osservata, interpretata e rielaborata.” &bull; <strong className="text-white">Alan Mattiassi, PhD</strong>
          </blockquote>
        </div>
      </section>

      {/* 4. The GBL-02 Methodological Framework */}
      <section id="metodologia" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            IL FRAMEWORK METODOLOGICO (GBL-02)
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Le 5 Fasi del Percorso Formativo per i Docenti
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Sviluppato all&apos;intersezione tra scienze cognitive, psicologia dell&apos;apprendimento e game design applicato.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Ridefinire il concetto di gioco",
              desc: "Mettiamo in discussione gli stereotipi comuni. Esploriamo le basi evoluzionistiche, cognitive ed etologiche che rendono il gioco l'ambiente naturale attraverso cui gli esseri umani si allenano alla complessità senza rischiare conseguenze distruttive.",
              bases: "Psicologia del gioco, Psicologia dell'apprendimento, Neuroscienze evoluzionistiche",
            },
            {
              num: "02",
              title: "Comprendere come il gioco genera apprendimento",
              desc: "Analisi approfondita delle leve psicologiche: come sfida, feedback immediato, motivazione intrinseca, gestione dell'errore protetto e coinvolgimento emotivo attivano la neuroplasticità cerebrale e fissano la memoria a lungo termine.",
              bases: "Psicologia della motivazione, Neuroscienze dell'apprendimento, Scienze cognitive",
            },
            {
              num: "03",
              title: "Sperimentare il gioco come ambiente di apprendimento",
              desc: "I docenti vivono in prima persona esperienze ludiche calibrate. L'esperienza diretta fa emergere processi decisionali, cooperazione, competizione e bias cognitivi normalmente impliciti, rendendoli visibili e analizzabili.",
              bases: "Apprendimento esperienziale, Teoria delle decisioni, Apprendimento situato",
            },
            {
              num: "04",
              title: "Rielaborare l'esperienza attraverso il Debriefing pedagogico",
              desc: "Il cuore pulsante del metodo. I docenti apprendono le tecniche professionali di debriefing: domande stimolo, gestione delle dinamiche emotive, costruzione condivisa di significato e connessione con la realtà scolastica curricolare.",
              bases: "Didattica metacognitiva, Pedagogia attiva, Psicologia del ragionamento",
            },
            {
              num: "05",
              title: "Progettare esperienze educative basate sul gioco",
              desc: "I docenti imparano a progettare le proprie attività partendo dagli obiettivi didattici ed educativi: selezionare il gioco corretto, adattarne le regole (Universal Game Design for Learning) o applicare i principi del game design.",
              bases: "Instructional Design, Game Design, Valutazione autentica delle competenze",
            },
          ].map((fase) => (
            <div
              key={fase.num}
              className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-extrabold text-xl flex items-center justify-center flex-shrink-0">
                {fase.num}
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="text-lg font-bold text-white">{fase.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{fase.desc}</p>
                <div className="text-xs text-sky-400 font-medium pt-1">
                  Basi scientifiche: <span className="text-slate-400">{fase.bases}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Formati di Erogazione per Istituti */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            FORMATI DI EROGAZIONE
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Soluzioni flessibili per scuole di ogni ordine e grado
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Format Breve</span>
              <h3 className="text-xl font-bold text-white">Workshop Intensivo</h3>
              <p className="text-xs text-slate-400">Durata: 3 – 6 ore (in presenza o online)</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Introduzione teorico-esperienziale ai fondamenti del Game-Based Learning, sperimentazione di giochi selezionati e primo approccio al debriefing in classe.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/hire-me-lavora-con-me"
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center space-x-1"
              >
                <span>Richiedi preventivo d&apos;istituto →</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Consigliato</span>
              <h3 className="text-xl font-bold text-white">Corso Modulare GBL-02</h3>
              <p className="text-xs text-emerald-400 font-medium">Durata: 12 – 25 ore (Accreditabile)</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Il percorso completo in 5 fasi. Comprende simulazioni pratiche, conduzione del debriefing pedagogico, co-progettazione di unità didattiche disciplinari e materiali operativi.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/hire-me-lavora-con-me"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center space-x-1"
              >
                <span>Richiedi proposta completa →</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Su Misura</span>
              <h3 className="text-xl font-bold text-white">Progetto Pilota &amp; Co-Design</h3>
              <p className="text-xs text-slate-400">Durata: Annuale / Semestrale</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Affiancamento continuativo ai docenti con osservazione sul campo in classe, co-progettazione di giochi didattici personalizzati per l&apos;istituto e misurazione degli esiti.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/hire-me-lavora-con-me"
                className="text-xs font-semibold text-purple-400 hover:text-purple-300 inline-flex items-center space-x-1"
              >
                <span>Pianifica incontro preliminare →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Vuoi portare il Game-Based Learning nel tuo istituto?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Contattami per concordare una call conoscitiva con la dirigenza scolastica o il collegio docenti.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
          >
            Contatta Alan Mattiassi per la tua scuola →
          </Link>
        </div>
      </section>
    </div>
  );
}
