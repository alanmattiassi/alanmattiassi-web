"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  ArrowRight,
  BookmarkCheck,
  Building2,
  Calendar,
  Layers
} from "lucide-react";
import { bookData } from "@/data/book";
import { useLanguage } from "./LanguageProvider";

export default function BookSpotlightSection() {
  const { isEn } = useLanguage();

  return (
    <section id="libro-spotlight" className="py-16 sm:py-20 bg-[var(--bg-card-subtle)] border-y border-[var(--border-color)] relative transition-colors overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--accent-primary)]/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Badge */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Book Cover Visual (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group perspective-1000 w-full max-w-[260px] sm:max-w-[290px]">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-sky-500/30 via-teal-500/20 to-emerald-500/30 blur-lg opacity-80 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-slate-950 shadow-2xl p-2 transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="relative aspect-[1/1.48] w-full rounded-xl overflow-hidden">
                    <Image
                      src={bookData.coverImage}
                      alt={
                        isEn
                          ? "Cover of Psychology of Games by Alan Mattiassi, Hogrefe Editore"
                          : "Copertina del libro Psicologia del Gioco a cura di Alan Mattiassi, Hogrefe Editore"
                      }
                      fill
                      sizes="(max-width: 768px) 260px, 290px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating pill below cover */}
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-[var(--text-muted)] bg-[var(--bg-surface)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                    <Building2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    <span>Hogrefe Editore &bull; 248 pp.</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Text and Actions (8 cols) */}
            <div className="lg:col-span-8 space-y-6 text-left">
              {/* Top Eyebrow */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {isEn ? "NEW BOOK • OCT 21, 2026" : "NUOVO LIBRO • 21 OTTOBRE 2026"}
                  </span>
                </span>
                <span className="text-xs text-[var(--text-subtle)] font-medium hidden sm:inline">
                  ISBN: {bookData.isbn}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
                  Psicologia del gioco. Fondamenti teorici e applicazioni
                </h3>
                <p className="text-base sm:text-lg font-semibold text-[var(--accent-primary)]">
                  {isEn ? "Edited by Alan Mattiassi, PhD" : "A cura di Alan Mattiassi, PhD"}
                  <span className="text-[var(--text-muted)] font-normal text-sm ml-2">
                    {isEn
                      ? "(with Preface by Maresa Bertolo • Hogrefe Editore)"
                      : "(con Prefazione di Maresa Bertolo • Hogrefe Editore)"}
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {isEn ? (
                  <>
                    Released on <strong>October 21, 2026</strong>: the first comprehensive manual in Italy uniting what psychological science has discovered about games. An ambitious multi-authored work bringing together leading psychologists and researchers to create a common epistemological foundation.
                  </>
                ) : (
                  <>
                    Dal <strong>21 ottobre 2026</strong> è disponibile in tutte le librerie il manuale che unisce per la prima volta tutto ciò che la psicologia ha esplorato sul gioco. Un&apos;opera a molte mani con tanti colleghi psicologi e docenti universitari per creare finalmente un <strong>terreno comune da cui partire</strong>.
                  </>
                )}
              </p>

              {/* 3 Key Pillars Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <BookmarkCheck className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[var(--text-main)]">
                    {isEn ? "Collaborative Work" : "Opera a Più Mani"}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <Layers className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
                  <span className="text-xs font-semibold text-[var(--text-main)]">
                    {isEn ? "13 Chapters & Full Index" : "13 Capitoli Completi"}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                  <Calendar className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-[var(--text-main)]">
                    {isEn ? "Available Now" : "Già Acquistabile"}
                  </span>
                </div>
              </div>

              {/* Direct Purchase Stores */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
                  {isEn ? "Buy directly from online retailers:" : "Acquista direttamente online:"}
                </div>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {bookData.stores.map((store) => (
                    <a
                      key={store.name}
                      href={store.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all shadow-sm group"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>{store.name}</span>
                      <ExternalLink className="w-3 h-3 text-[var(--text-subtle)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA link to dedicated page */}
              <div className="pt-2">
                <Link
                  href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 shadow-lg shadow-sky-600/20 hover:scale-[1.02] transition-all group"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>
                    {isEn
                      ? "Explore Book, Table of Contents & Authors →"
                      : "Scopri la scheda completa, indice e autori →"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
