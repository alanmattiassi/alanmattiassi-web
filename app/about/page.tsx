import React from "react";
import Image from "next/image";
import Link from "next/link";
import UkFlag from "@/components/icons/UkFlag";
import {
  Award,
  Sparkles,
  Calendar,
  ExternalLink,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Microscope,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Chi sono // About me – Alan Mattiassi, PhD",
  description:
    "Biografia, visione e percorso accademico di Alan D.A. Mattiassi, PhD: Psicologo del Gioco, ricercatore, formatore e divulgatore scientifico.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PSICOLOGO DEL GIOCO &bull; FORMATORE &bull; RICERCATORE &bull; DIVULGATORE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
          Alan D.A. Mattiassi<span className="text-[var(--accent-primary)]">, PhD</span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Psicologo del Gioco
        </p>
        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
          Esploro la <strong>mente umana attraverso il gioco</strong>: studio, progetto e insegno come
          utilizzare il medium ludico per favorire apprendimento, sviluppo personale e cambiamento sociale.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
          >
            📅 Prenota una call gratuita (30 min) →
          </Link>
          <Link
            href="/hire-me-lavora-con-me"
            className="px-5 py-3 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            💼 Scopri cosa posso fare per te
          </Link>
          <Link
            href="/en/about"
            className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all group"
          >
            <UkFlag className="w-5 h-3.5 rounded-[2px]" />
            <span className="font-bold text-[var(--text-main)]">ENG</span>
            <span className="text-[var(--border-strong)] opacity-60">|</span>
            <span>Read in English</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </section>

      {/* 2. Main Bio & Portrait (2 cols) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait & Key Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-2xl">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/profilo-2.jpg"
                  alt="Alan D.A. Mattiassi, PhD"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)] mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Principal Investigator</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Committee on Research in Game Psychology &bull; <strong>GAME Science Research Center</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500 mt-0.5">
                  <span className="font-bold text-xs">TEDx</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">TEDx Speaker (Udine)</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    <em>Come i giochi ci aiutano a conoscere noi stessi</em>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Formazione Accademica</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Ph.D. in Comunicazione Multimediale &bull; Laurea Magistrale in Psicologia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[var(--text-muted)] leading-relaxed text-base">
            <div className="border-b border-[var(--border-color)] pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                Chi sono &amp; La mia Visione
              </h2>
              <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider mt-1">
                Psicologo &bull; Ricercatore &bull; Formatore &bull; Divulgatore
              </p>
            </div>

            <p>
              Sono uno <strong>psicologo del gioco</strong>. Nella mia attività professionale opero come
              <strong> psicologo, ricercatore, formatore e divulgatore</strong>. Utilizzo i giochi sia come
              <em> strumento d&apos;indagine scientifica</em> sia come <em>metodo trasformativo</em> per comprendere
              a fondo la mente, il cervello e i comportamenti umani, favorendo motivazione autentica e apprendimento duraturo.
            </p>

            <blockquote className="border-l-2 border-emerald-400 pl-4 py-2 italic text-[var(--text-main)] bg-[var(--bg-card-subtle)] rounded-r-xl">
              “Non credo nel valore del gioco: lo studio. Il gioco non è una panacea magica che risolve
              automaticamente ogni problema educativo o organizzativo; è un sistema di regole e vincoli che
              innesca specifici processi psicologici. Se comprendiamo questi processi, possiamo usarli per
              cambiare in meglio la vita delle persone.”
            </blockquote>

            <p>
              Ho conseguito la <strong>Laurea Magistrale in Psicologia</strong> e un <strong>Dottorato di Ricerca (Ph.D.) in Comunicazione Multimediale</strong>.
              La mia attività si concentra nell&apos;unire rigore scientifico e game design applicato, progettando artefatti
              ludici e percorsi educativi basati sulle evidenze della ricerca psicologica e neuroscientifica.
            </p>

            <p>
              Negli anni ho collaborato con numerosi atenei e centri di ricerca internazionali e ho contribuito
              a prestigiosi progetti europei ad alto impatto sociale, come <em>Free to Choose</em> (sul contrasto agli stereotipi di genere).
              Ho inoltre divulgato le potenzialità del medium ludico dal palco di <strong>TEDx Udine</strong> con un talk dedicato a come
              il gioco ci permette di esplorare la nostra identità e i nostri limiti cognitivi.
            </p>

            <p>
              Attualmente svolgo la mia attività come <strong>psicologo del gioco, formatore, ricercatore e divulgatore</strong> per
              istituti scolastici, atenei, aziende, fondazioni ed enti del terzo settore: se hai un&apos;idea o una sfida da affrontare,
              sarò felice di fare due chiacchiere per valutare come supportare il tuo progetto.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Metric & Impact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
              METRICHE E CREDIBILITÀ
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Esperienza e Rigore Scientifico
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">10+ Anni</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Esperienza sul campo in psicologia del gioco e formazione
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">Ph.D.</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Dottorato di ricerca &amp; Laurea Magistrale in Psicologia
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">H-Index 8</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Scopus Score con oltre 245 citazioni scientifiche internazionali
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">1.000+</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Docenti, educatori e manager formati in tutta Italia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. English Bio Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 space-y-6">
          <div className="flex items-center space-x-3">
            <UkFlag className="w-8 h-6 rounded-[2px] shadow-sm" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">English Version Available</h3>
              <p className="text-xs text-[var(--accent-primary)] font-semibold uppercase tracking-wider">
                For International Conferences, Keynotes &amp; Academic Collaborations
              </p>
            </div>
          </div>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed">
            Read the full professional English bio, research achievements, and international keynote presentations on the dedicated English profile page.
          </p>

          <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
            <Link
              href="/en/about"
              className="text-[var(--accent-primary)] hover:underline font-semibold inline-flex items-center space-x-1"
            >
              <span>Explore English Profile &amp; Bio →</span>
            </Link>
            <a
              href="https://orcid.org/0000-0002-9996-0700"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-subtle)] hover:text-[var(--text-main)] font-medium inline-flex items-center space-x-1"
            >
              <span>ORCID (0000-0002-9996-0700)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Vuoi collaborare o approfondire un&apos;idea?
        </h3>
        <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
          Lavoro come libero professionista e consulente su scala nazionale e internazionale:
          sarò felice di fare una conversazione conoscitiva.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
          >
            Lavora con me // Tariffe e Pacchetti →
          </Link>
        </div>
      </section>
    </div>
  );
}
