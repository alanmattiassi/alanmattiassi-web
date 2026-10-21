"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ShoppingBag,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Users,
  Award,
  Bookmark,
  Layers,
  Brain,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Share2,
  Calendar,
  Barcode,
  Building2,
  FileText,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { bookData } from "@/data/book";
import { useLanguage } from "@/components/LanguageProvider";

export default function LibroPsicologiaDelGiocoPage() {
  const { isEn } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [filterAlanOnly, setFilterAlanOnly] = useState(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(bookData.apaCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleChapter = (num: number) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  const displayedChapters = filterAlanOnly
    ? bookData.chapters.filter((c) => c.isAlanAuthor)
    : bookData.chapters;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": bookData.title,
    "alternateName": bookData.shortTitle,
    "editor": {
      "@type": "Person",
      "name": "Alan D.A. Mattiassi",
      "jobTitle": "Psicologo del Gioco, PhD",
      "url": "https://alanmattiassi.com"
    },
    "author": bookData.authors.map((a) => ({
      "@type": "Person",
      "name": a.name,
      "description": a.role
    })),
    "publisher": {
      "@type": "Organization",
      "name": bookData.publisher,
      "address": bookData.city
    },
    "isbn": bookData.isbn,
    "numberOfPages": bookData.pages,
    "inLanguage": "it",
    "datePublished": "2026-10-21",
    "image": "https://alanmattiassi.com/images/psicologia-del-gioco-copertina.jpg",
    "description": bookData.description,
    "offers": bookData.stores.map((s) => ({
      "@type": "Offer",
      "url": s.url,
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
        {/* 1. Hero / Presentation Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center space-x-2 text-xs sm:text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/research-ricerca" className="hover:text-[var(--accent-primary)] transition-colors">
              Pubblicazioni
            </Link>
            <span>/</span>
            <span className="text-[var(--text-main)] font-semibold truncate">
              Psicologia del gioco (Hogrefe)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Book Visual Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="sticky top-28 w-full max-w-sm sm:max-w-md space-y-6">
                {/* 3D-effect book wrapper */}
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-500/25 via-teal-500/20 to-indigo-500/25 blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                  
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl p-3 transition-transform duration-500 group-hover:scale-[1.01]">
                    <div className="relative aspect-[1/1.48] w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner">
                      <Image
                        src={bookData.coverImage}
                        alt="Copertina del libro Psicologia del Gioco. Fondamenti teorici e applicazioni a cura di Alan Mattiassi, Hogrefe Editore"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Quick Spec Badge Ribbon */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center space-x-2.5">
                    <Building2 className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Editore</div>
                      <div className="font-semibold text-[var(--text-main)]">{bookData.publisher}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Calendar className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Uscita</div>
                      <div className="font-semibold text-[var(--text-main)]">21 Ottobre 2026</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Barcode className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">ISBN</div>
                      <div className="font-semibold text-[var(--text-main)] font-mono text-[11px]">{bookData.isbn}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Pagine / Collana</div>
                      <div className="font-semibold text-[var(--text-main)]">{bookData.pages} pp. &bull; Manuali</div>
                    </div>
                  </div>
                </div>

                {/* Direct Buy Buttons Sidebar Quick Link */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href="#negozi"
                    className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Vedi dove acquistarlo online ↓</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Narrative & Purchase Channels (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Top Eyebrow Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NUOVA USCITA EDITORIALE &bull; IN LIBRERIA DAL 21 OTTOBRE 2026</span>
              </div>

              {/* Header Title */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
                  Psicologia del gioco
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                  Fondamenti teorici e applicazioni
                </p>
                <div className="pt-1 text-sm sm:text-base text-[var(--text-muted)] space-y-1">
                  <p>
                    A cura di <strong className="text-[var(--text-main)] font-semibold">Alan Mattiassi</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-subtle)]">
                    Prefazione di <strong className="text-[var(--text-main)] font-medium">Maresa Bertolo</strong> (Politecnico di Milano)
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    {bookData.publisher} &bull; Collana <span className="italic">Manuali di psicologia</span>
                  </p>
                </div>
              </div>

              {/* Core Manifesto Box */}
              <blockquote className="border-l-4 border-[var(--accent-primary)] pl-5 py-3 text-[var(--text-main)] text-base sm:text-lg italic leading-relaxed bg-[var(--bg-card)] border-y border-r border-[var(--border-color)] rounded-r-2xl pr-5 shadow-sm">
                “L&apos;idea di questo libro è quella di unire tutto ciò che è stato detto sul gioco dalla psicologia, per creare finalmente un terreno comune da cui partire.”
                <span className="block not-italic text-xs font-semibold text-[var(--accent-primary)] mt-2">
                  — Alan Mattiassi, dalla Prefazione &amp; Introduzione
                </span>
              </blockquote>

              {/* Book Overview Text */}
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                <p>
                  Per decenni, la psicologia si è occupata del gioco in modo frammentario: la psicologia dello sviluppo ha indagato il <em>pretend play</em> infantile, le neuroscienze hanno studiato i circuiti dopaminergici della ricompensa, la psicologia cognitiva ha esaminato i processi decisionali negli scacchi, la psicologia sociale si è concentrata sulle dinamiche relazionali e la psicologia del lavoro ha esplorato la gamification e la motivazione.
                </p>
                <p>
                  Questo volume nasce come un&apos;<strong>opera a molte mani</strong>, coordinata da Alan Mattiassi con un team di oltre quindici colleghi psicologi, ricercatori universitari e professionisti clinici e organizzativi. L&apos;obiettivo è costruire una sintesi organica ed evidence-based che dia piena dignità epistemologica alla <strong>Psicologia del Gioco</strong>.
                </p>
                <p>
                  All&apos;interno del manuale, <strong>Alan Mattiassi firma 5 capitoli come autore</strong> (dalla definizione del <em>core</em> psicologico alle basi evolutive, dall&apos;apprendimento al ciclo del debriefing, dalle motivazioni analogiche e digitali al Game-Based Learning e alla Gamification), accompagnando il lettore in un percorso che va dalle fondamenta teoriche alle applicazioni operative più avanzate.
                </p>
              </div>

              {/* Highlights Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                  <div className="text-xs font-bold text-[var(--accent-primary)] flex items-center space-x-1.5">
                    <Brain className="w-4 h-4" />
                    <span>5 Capitoli d&apos;Autore</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Scritti direttamente da Alan Mattiassi sui nodi cruciali della disciplina.
                  </p>
                </div>

                <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                  <div className="text-xs font-bold text-[var(--accent-secondary)] flex items-center space-x-1.5">
                    <Users className="w-4 h-4" />
                    <span>Opera Corale</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    13 capitoli e contributi di oltre 15 psicologi e studiosi accademici italiani.
                  </p>
                </div>

                <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                  <div className="text-xs font-bold text-[var(--text-main)] flex items-center space-x-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Manuale Ufficiale</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Pubblicato nella collana Manuali di Psicologia di Hogrefe Editore.
                  </p>
                </div>
              </div>

              {/* 2. Buy Section (In evidenza) */}
              <div id="negozi" className="pt-4 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center space-x-2">
                    <ShoppingBag className="w-5 h-5 text-[var(--accent-primary)]" />
                    <span>Disponibile per l&apos;acquisto online:</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                    Il volume è già acquistabile presso le principali librerie online e catene librarie:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {bookData.stores.map((store) => (
                    <a
                      key={store.name}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-4 flex flex-col justify-between space-y-3 transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
                            {store.name}
                          </span>
                          <ExternalLink className="w-4 h-4 text-[var(--text-subtle)] group-hover:text-[var(--accent-primary)] transition-colors" />
                        </div>
                        <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                          {store.badge}
                        </span>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-2 leading-snug">
                          {store.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[var(--accent-primary)] group-hover:underline">
                        <span>Acquista ora</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 5 Chapters Authored by Alan Mattiassi */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
              <Bookmark className="w-3.5 h-3.5" />
              <span>I CONTRIBUTI DI ALAN MATTIASSI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              I 5 Capitoli Scritti da Alan Mattiassi
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Oltre alla curatela e al coordinamento scientifico dell&apos;intera opera, Alan Mattiassi ha firmato 5 capitoli cardine che gettano le basi epistemologiche e applicative della disciplina:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chapter 1 */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
                    Capitolo 1 &bull; p. 1
                  </span>
                  <span className="text-xs text-[var(--text-subtle)] font-medium">Autore Singolo</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Cos’è il gioco
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Dalla meta-analisi di Stenros all&apos;individuazione del <strong>core psicologico del gioco</strong>: regole come rappresentazioni simboliche multiple, alterazione del ruolo sociale, organizzazione della performance attorno all&apos;<strong>obiettivo lusorio</strong> (Bernard Suits), monitoraggio metacognitivo, libertà decisionale e il cerchio magico di Huizinga.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)]">
                Fondamenti Epistemologici
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
                    Capitolo 2 &bull; p. 20
                  </span>
                  <span className="text-xs text-[var(--text-subtle)] font-medium">Autore Singolo</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Il gioco come apprendimento
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Perché il gioco genera conoscenza: attribuzione di responsabilità e pensiero controfattuale (Kahneman &amp; Tversky), <strong>senso di agency</strong> e ragionamento induttivo, sicurezza psicologica, valore informativo del fallimento e i cicli di apprendimento di Pivec, Kearney e Kolb.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)]">
                Psicologia Cognitiva &amp; Agency
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
                    Capitolo 3 &bull; p. 31
                  </span>
                  <span className="text-xs text-[var(--text-subtle)] font-medium">con Vittorio Guerrieri</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Motivazione al gioco
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Teorie della motivazione (Atkinson, SDT di Ryan &amp; Deci, Weiner). Dalla scala <strong>PMPVGs</strong> a 12 fattori per i videogiochi (Gursesli et al., 2024) alla tassonomia <strong>TGMI</strong> per i giochi da tavolo con 6 estensioni originali (Identificazione, FOMO, Social manipulation, Nostalgia, Possessione, Pressione dei pari) e linee guida operative di conduzione.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)]">
                Motivazione, PMPVG &amp; TGMI
              </div>
            </div>

            {/* Chapter 12 */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
                    Capitolo 12 &bull; p. 171
                  </span>
                  <span className="text-xs text-[var(--text-subtle)] font-medium">Autore Singolo</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Game-based learning
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Giocare apprendendo vs giocare per apprendere. Evitare l&apos;attitudine boomerang nella persuasione. I 4 canali di veicolazione: mera esposizione, dichiarativo esplicito, metaforico (Lakoff) e <strong>retorica procedurale</strong> (Bogost). Il ruolo insostituibile del <strong>debriefing</strong> per la risignificazione e la trasferibilità delle competenze.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)]">
                Didattica, Retorica &amp; Debriefing
              </div>
            </div>

            {/* Chapter 13 */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)]">
                    Capitolo 13 &bull; p. 183
                  </span>
                  <span className="text-xs text-[var(--text-subtle)] font-medium">
                    con M. Duradoni, G.A. Mancini e A. Girard
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  Gamification
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Il continuum di <em>gamefulness</em>. Come la gamification rende ergonomica l&apos;azione collettiva riducendo il costo psicologico della cooperazione e superando l&apos;effetto Ringelmann e il free-riding. Progettazione player-centric per aziende e HR lungo i 4 livelli di Kirkpatrick. Analisi delle derive e criticità: la trappola della <em>pointsification</em>, i <em>dark design patterns</em>, l&apos;inflazione motivazionale e la perdita di senso.
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-color)] text-xs font-semibold text-[var(--accent-primary)]">
                Azione Collettiva, HR Design &amp; Criticità
              </div>
            </div>
          </div>
        </section>

        {/* 4. Complete Interactive Table of Contents */}
        <section id="indice" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>SOMMARIO COMPLETO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Indice Generale dell&apos;Opera
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Esplora la struttura dettagliata dei 13 capitoli, i box tematici di approfondimento clinico e i singoli paragrafi.
            </p>

            {/* Filter Toggle */}
            <div className="pt-2 flex items-center justify-center space-x-3">
              <button
                onClick={() => setFilterAlanOnly(false)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  !filterAlanOnly
                    ? "bg-[var(--accent-primary)] text-white shadow-md"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-color)] hover:text-[var(--text-main)]"
                }`}
              >
                Tutti i 13 Capitoli ({bookData.chapters.length})
              </button>
              <button
                onClick={() => setFilterAlanOnly(true)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filterAlanOnly
                    ? "bg-[var(--accent-primary)] text-white shadow-md"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-color)] hover:text-[var(--text-main)]"
                }`}
              >
                Solo capitoli scritti da Alan Mattiassi (5)
              </button>
            </div>
          </div>

          {/* Preface banner */}
          <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[var(--badge-bg)] border border-[var(--badge-border)] flex items-center justify-center text-[var(--accent-primary)] font-bold text-xs">
                XI
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-[var(--text-main)]">Prefazione</h4>
                <p className="text-xs text-[var(--text-muted)]">A cura di Maresa Bertolo (Politecnico di Milano)</p>
              </div>
            </div>
            <span className="text-xs font-mono text-[var(--text-subtle)]">p. XI</span>
          </div>

          {/* Chapters Accordion List */}
          <div className="space-y-3">
            {displayedChapters.map((chap) => {
              const isExpanded = expandedChapter === chap.number;
              return (
                <div
                  key={chap.number}
                  className={`rounded-2xl bg-[var(--bg-card)] border transition-all ${
                    chap.isAlanAuthor
                      ? "border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)]"
                      : "border-[var(--border-color)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <button
                    onClick={() => toggleChapter(chap.number)}
                    className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                          chap.isAlanAuthor
                            ? "bg-[var(--accent-primary)] text-white shadow-md shadow-sky-500/20"
                            : "bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-color)]"
                        }`}
                      >
                        {chap.number}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-base sm:text-lg text-[var(--text-main)]">
                            {chap.title}
                          </h3>
                          {chap.isAlanAuthor && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                              Capitolo di Alan Mattiassi
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                          Autori: <span className="font-medium text-[var(--text-main)]">{chap.authors}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0 mt-1 sm:mt-0">
                      <span className="text-xs font-mono text-[var(--text-subtle)] hidden sm:inline">
                        p. {chap.page}
                      </span>
                      <div className="p-1 rounded-lg text-[var(--text-muted)] bg-[var(--bg-surface)]">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-[var(--border-color)]">
                      <div className="text-xs font-semibold text-[var(--text-subtle)] uppercase tracking-wider mb-2.5">
                        Paragrafi e sezioni del capitolo:
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)]">
                        {chap.sections.map((sec, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-[var(--accent-primary)] mt-1 font-bold">&bull;</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* End Index Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">Bibliografia Generale</h4>
                <p className="text-xs text-[var(--text-muted)]">Oltre 25 pagine di riferimenti scientifici completi</p>
              </div>
              <span className="text-xs font-mono text-[var(--text-subtle)]">p. 195</span>
            </div>

            <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">Indice Analitico</h4>
                <p className="text-xs text-[var(--text-muted)]">Guida dettagliata a concetti, autori e costrutti</p>
              </div>
              <span className="text-xs font-mono text-[var(--text-subtle)]">p. 221</span>
            </div>
          </div>
        </section>

        {/* 5. Authors Section */}
        <section id="autori" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>COLLEGHI E COLLABORATORI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Gli Autori del Volume
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Un&apos;opera corale che riunisce docenti universitari, ricercatori, psicologi clinici, psicoterapeuti, neuropsicologi e formatori aziendali del panorama italiano:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookData.authors.map((author, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 space-y-3 flex flex-col justify-between transition-all ${
                  author.isCurator
                    ? "bg-[var(--bg-card)] border-2 border-[var(--accent-primary)] shadow-xl md:col-span-2 lg:col-span-3"
                    : author.isPreface
                    ? "bg-[var(--bg-card)] border border-[var(--accent-secondary)]/50 shadow-md md:col-span-2 lg:col-span-3"
                    : "bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] shadow-sm hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-main)]">
                        {author.name}
                      </h3>
                      <div className="text-xs font-semibold text-[var(--accent-primary)] mt-0.5">
                        {author.role}
                      </div>
                    </div>
                    {author.isCurator && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                        Curatore
                      </span>
                    )}
                    {author.isPreface && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent-secondary)] border border-[var(--badge-border)]">
                        Prefazione
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Target Audience (A chi si rivolge) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>A CHI SI RIVOLGE IL LIBRO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Un Manuale di Riferimento per Molteplici Ambiti
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Il volume è concepito sia come testo di studio universitario sia come strumento operativo per professionisti del gioco, dell&apos;educazione, della salute e del lavoro:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)]">Docenti &amp; Formatori</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Linee guida scientifiche per applicare il <strong>Game-Based Learning</strong> nella scuola primaria, secondaria e nei corsi accademici, con metodologie di debriefing e scaffolding.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)]">Aziende &amp; Risorse Umane</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Parallelismi tra ciclo di vita del giocatore e del lavoratore (onboarding, retention, mastery), modelli di leadership e progettazione di gamification etica nei contesti organizzativi.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)]">Psicologi &amp; Clinici</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Uso del gioco come medium relazionale e transizionale: Video Game Therapy, Acceptance &amp; Commitment Therapy nei GdR, Play Therapy, riabilitazione delle funzioni esecutive (ADHD, autismo).
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[var(--text-main)]">Game Designer &amp; Studi</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Ergonomia cognitiva, calibrazione dei livelli di difficoltà (Atkinson, Flow), scale psicometriche delle motivazioni (PMPVG, TGMI) e playtesting neurofunzionale.
              </p>
            </div>
          </div>
        </section>

        {/* 7. APA Citation & Metadata Box */}
        <section id="citazione" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  STANDARD ACCADEMICO &bull; APA 7TH EDITION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                  Come citare questo volume
                </h3>
              </div>

              <button
                onClick={handleCopyCitation}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-main)] transition-all self-start sm:self-auto"
                title="Copia citazione APA"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Citazione Copiata!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Copia citazione APA</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] font-mono text-xs sm:text-sm text-[var(--text-main)] leading-relaxed select-all">
              {bookData.apaCitation}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
              <span><strong>ISBN:</strong> {bookData.isbn}</span>
              <span>&bull;</span>
              <span><strong>Editore:</strong> {bookData.publisher}</span>
              <span>&bull;</span>
              <span><strong>Collana:</strong> {bookData.series}</span>
              <span>&bull;</span>
              <span><strong>Anno:</strong> {bookData.year}</span>
            </div>
          </div>
        </section>

        {/* 8. Call to Action: Presentations, Adoptions & Contact */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-sky-900/30 via-slate-900/40 to-teal-900/30 border border-[var(--border-color)] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                Presentazioni, Adozioni Universitarie &amp; Workshop
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                Sei un docente universitario interessato all&apos;adozione per il tuo corso, un organizzatore di festival/eventi culturali che desidera ospitare una presentazione, o un&apos;azienda che vuole approfondire questi temi in un workshop dedicato?
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/hire-me-lavora-con-me"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
              >
                <span>Contatta Alan Mattiassi →</span>
              </Link>

              <a
                href="#negozi"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Acquista il libro online</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
