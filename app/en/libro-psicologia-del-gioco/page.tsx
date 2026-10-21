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
  Calendar,
  Barcode,
  Building2,
  FileText,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { bookData } from "@/data/book";

export default function BookPageEnglish() {
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

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero / Presentation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-xs sm:text-sm text-[var(--text-muted)]">
          <Link href="/en" className="hover:text-[var(--accent-primary)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/en/research-ricerca" className="hover:text-[var(--accent-primary)] transition-colors">
            Publications
          </Link>
          <span>/</span>
          <span className="text-[var(--text-main)] font-semibold truncate">
            Psychology of Games (Book)
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
                      alt="Book Cover: Psicologia del Gioco. Fondamenti teorici e applicazioni edited by Alan Mattiassi, Hogrefe Editore"
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
                    <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Publisher</div>
                    <div className="font-semibold text-[var(--text-main)]">{bookData.publisher}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Release Date</div>
                    <div className="font-semibold text-[var(--text-main)]">October 21, 2026</div>
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
                    <div className="text-[10px] uppercase font-bold text-[var(--text-subtle)]">Pages / Series</div>
                    <div className="font-semibold text-[var(--text-main)]">{bookData.pages} pp. &bull; Handbooks</div>
                  </div>
                </div>
              </div>

              {/* Direct Buy Buttons Quick Link */}
              <div className="space-y-2.5 pt-1">
                <a
                  href="#negozi"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Where to buy online ↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Narrative & Purchase Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEW BOOK RELEASE &bull; AVAILABLE FROM OCTOBER 21, 2026</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight">
                Psicologia del gioco
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                Theoretical Foundations and Applications
              </p>
              <div className="pt-1 text-sm sm:text-base text-[var(--text-muted)] space-y-1">
                <p>
                  Edited by <strong className="text-[var(--text-main)] font-semibold">Alan Mattiassi, PhD</strong>
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-subtle)]">
                  Preface by <strong className="text-[var(--text-main)] font-medium">Maresa Bertolo</strong> (Politecnico di Milano)
                </p>
                <p className="text-xs text-[var(--text-subtle)]">
                  {bookData.publisher} &bull; Series <span className="italic">Manuali di psicologia</span> (Italian Edition)
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-[var(--accent-primary)] pl-5 py-3 text-[var(--text-main)] text-base sm:text-lg italic leading-relaxed bg-[var(--bg-card)] border-y border-r border-[var(--border-color)] rounded-r-2xl pr-5 shadow-sm">
              “The purpose of this book is to bring together everything psychological science has explored about games, establishing at last a shared foundation for researchers, practitioners, and designers.”
              <span className="block not-italic text-xs font-semibold text-[var(--accent-primary)] mt-2">
                — Alan Mattiassi, Preface &amp; Introduction
              </span>
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              <p>
                For decades, psychological science studied play and games in disjointed silos: developmental psychology investigated pretend play, neurosciences studied striatal dopamine circuits, cognitive psychologists explored chess decisions, social psychology scrutinized group cohesion, and organizational psychologists developed gamification models.
              </p>
              <p>
                This landmark volume brings together over 15 psychologists and university researchers across Italy, providing an overarching, rigorous, evidence-based foundation for <strong>Game Psychology</strong>.
              </p>
              <p>
                <strong>Alan Mattiassi authored 5 core chapters</strong> (What is a Game, Games as Learning Systems, Game Motivation, Game-Based Learning, and Gamification), providing foundational models, psychometric inventories (PMPVG, TGMI extensions), and operational frameworks.
              </p>
            </div>

            {/* Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                <div className="text-xs font-bold text-[var(--accent-primary)] flex items-center space-x-1.5">
                  <Brain className="w-4 h-4" />
                  <span>5 Authored Chapters</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Authored directly by Alan Mattiassi on foundational and applied pillars.
                </p>
              </div>

              <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                <div className="text-xs font-bold text-[var(--accent-secondary)] flex items-center space-x-1.5">
                  <Users className="w-4 h-4" />
                  <span>Collaborative Work</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  13 chapters by leading Italian scholars, clinicians, and researchers.
                </p>
              </div>

              <div className="rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3.5 space-y-1">
                <div className="text-xs font-bold text-[var(--text-main)] flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Manual</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Published in the prestigious Psychology Manuals series by Hogrefe.
                </p>
              </div>
            </div>

            {/* Buy Stores */}
            <div id="negozi" className="pt-4 space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span>Available to purchase online:</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  Order your copy from Italian online book retailers with global delivery options:
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
                      <span>Order online</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Indice Section */}
      <section id="indice" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>TABLE OF CONTENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Complete Table of Contents
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            All 13 chapters, thematic focus boxes, and subsections:
          </p>
        </div>

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
                            Authored by Alan Mattiassi
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                        Author(s): <span className="font-medium text-[var(--text-main)]">{chap.authors}</span>
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
                      Subsections:
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
      </section>

      {/* 3. Authors Section */}
      <section id="autori" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>CONTRIBUTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Volume Authors &amp; Contributors
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Biographies and academic affiliations of all contributing authors:
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
                      Editor
                    </span>
                  )}
                  {author.isPreface && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--accent-secondary)] border border-[var(--badge-border)]">
                      Preface
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

      {/* 4. APA Citation Box */}
      <section id="citazione" className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 sm:p-8 space-y-5 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                ACADEMIC CITATION &bull; APA 7TH EDITION
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                How to Cite this Book
              </h3>
            </div>

            <button
              onClick={handleCopyCitation}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-main)] transition-all self-start sm:self-auto"
              title="Copy APA Citation"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>Copy APA Citation</span>
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
            <span><strong>Publisher:</strong> {bookData.publisher}</span>
            <span>&bull;</span>
            <span><strong>Language:</strong> Italian</span>
            <span>&bull;</span>
            <span><strong>Year:</strong> {bookData.year}</span>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900/30 via-slate-900/40 to-teal-900/30 border border-[var(--border-color)] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Academic Adoptions, Keynotes &amp; Workshops
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Interested in university course adoption, hosting a book keynote, or scheduling an institutional workshop with Alan Mattiassi?
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/en/hire-me-lavora-con-me"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
            >
              <span>Contact Alan Mattiassi →</span>
            </Link>

            <a
              href="#negozi"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>Purchase the Book Online</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
