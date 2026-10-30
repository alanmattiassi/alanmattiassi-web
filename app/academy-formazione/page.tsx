import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Building,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Academy / Formazione Universitaria – Alan Mattiassi, PhD",
  description:
    "Corsi universitari, Master GIOCARSI (UniFi), docenze accademiche (UniUd, ITS Kennedy) e masterclass specialistiche con Alan Mattiassi, PhD.",
};

export default function AcademyPage() {
  const academicCourses = [
    {
      title: "Master GIOCARSI nel Mondo del Lavoro",
      institution: "Università degli Studi di Firenze (FORLILPSI)",
      role: "Docente su Contratto",
      desc: "Modulo universitario su Gamification, Game-Based Learning e soft skills per l'orientamento e l'inserimento lavorativo.",
      years: "A.A. 2021-2022, 2022-2023, 2023-2024",
    },
    {
      title: "Psicologia dei Nuovi Media & Interazione (12 CFU)",
      institution: "Università degli Studi di Udine (Dip. Matematica e Informatica)",
      role: "Docente a Contratto (Docente Unico)",
      desc: "Corso accademico triennale focalizzato su processi cognitivi, comunicazione mediata, usabilità ed ergonomia dei media digitali.",
      years: "A.A. 2015-2016, 2016-2017, 2017-2018 (144 ore)",
    },
    {
      title: "Laboratorio di Robotica Sociale (SPS/08)",
      institution: "Università degli Studi di Udine",
      role: "Docente a Contratto",
      desc: "Laboratorio specialistico sull'interazione uomo-robot, embodied cognition e dinamiche di coordinamento sociale.",
      years: "A.A. 2015-2016, 2016-2017",
    },
    {
      title: "Psicologia per il Design",
      institution: "ITS Kennedy (Pordenone)",
      role: "Docente Ufficiale",
      desc: "Corso specialistico biennale su psicologia della percezione, ergonomia cognitiva, affordance, design emozionale e usabilità.",
      years: "A.A. 2019-2020, 2020-2021",
    },
    {
      title: "Seminario Professionalizzante su Gioco e Competenze",
      institution: "Università degli Studi di Trieste (Dip. Scienze della Vita)",
      role: "Docente Ufficiale",
      desc: "Seminario specialistico accreditato sull'uso del gioco in psicologia applicata e contesti socio-educativi.",
      years: "A.A. 2023-2024",
    },
    {
      title: "Game-Based Learning nell'Educazione Alimentare",
      institution: "CNR / CREA - Centro di Ricerca Alimenti e Nutrizione",
      role: "Docente / Formatore Specialistico",
      desc: "Formazione scientifica per ricercatori e tecnologi sulle metodologie GBL applicate alla promozione di corretti stili di vita.",
      years: "2024 - 2025",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMY &bull; CORSI UNIVERSITARI &bull; ALTA FORMAZIONE</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Academy / Formazione
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
          Insegnamenti accademici, master universitari e percorsi professionalizzanti
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Oltre un decennio di docenze universitarie ufficiali per atenei italiani e istituti di specializzazione.
          Un approccio che coniuga la massima accuratezza accademica con l&apos;applicabilità operativa nel lavoro.
        </p>
      </section>

      {/* 2. University Courses List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-white">Insegnamenti e Corsi Accademici</h2>
          <p className="text-xs text-slate-400 mt-1">Dipartimenti universitari, master di perfezionamento e ITS</p>
        </div>

        {/* Masterclass Specialistica Banner */}
        <div className="p-7 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#0d1424] to-emerald-950/40 border border-indigo-500/50 space-y-3 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
              ALTA FORMAZIONE PROFESSIONALE SPECIALISTICA &bull; INIZIO 2027
            </span>
            <span className="text-xs text-indigo-300 font-medium">Due Giornate Intensive in Presenza &bull; Max 18 iscritti</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Masterclass in Psicologia del Gioco
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-sky-400">
            Capire e Progettare Ambienti, Scelte e Apprendimento Profondo
          </p>
          <div className="text-xs font-medium text-slate-300">
            Direttore Scientifico &amp; Docente: <strong className="text-white">Alan Mattiassi, PhD</strong> &bull; Friuli (gennaio/febbraio 2027)
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Dal funzionamento della mente che gioca alla progettazione di attività game-based per contesti formativi, aziendali ed educativi.
            Sabato dedicato all'architettura cognitiva del gioco e domenica laboratorio pratico di co-design con supervisione 1-a-1 sui progetti reali portati dai corsisti.
          </p>
          <div className="pt-2">
            <Link
              href="/masterclass-psicologia-del-gioco"
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Dettagli programma, date e Priority List (Early Bird 490€) &rarr;</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {academicCourses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-indigo-500/40 transition-all space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">{course.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 w-fit">
                  {course.years}
                </span>
              </div>
              <div className="text-xs font-medium text-sky-400">
                {course.institution} &bull; <span className="text-slate-300">{course.role}</span>
              </div>
              <p className="text-sm text-slate-300 pt-1 leading-relaxed">
                {course.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Desideri proporre un modulo accademico per il tuo ateneo o ente formativo?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Disponibile per docenze universitarie su contratto, moduli in master e corsi di alta formazione.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-sky-600 shadow-lg shadow-indigo-500/25"
          >
            Contatta Alan Mattiassi per una docenza →
          </Link>
        </div>
      </section>
    </div>
  );
}
