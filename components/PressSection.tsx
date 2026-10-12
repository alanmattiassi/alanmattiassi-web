"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Newspaper,
  ExternalLink,
  Search,
  Sparkles,
  Tv,
  Mic,
  FileText,
  BookmarkCheck,
  ArrowRight,
  Radio,
  Calendar,
} from "lucide-react";
import { pressItems, PressItem } from "@/data/press";
import { useLanguage } from "./LanguageProvider";

interface PressSectionProps {
  variant?: "full" | "preview";
}

export default function PressSection({ variant = "full" }: PressSectionProps) {
  const { isEn } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: isEn ? "All Mentions" : "Tutte le uscite" },
    { id: "articolo", label: isEn ? "Press & Articles" : "Articoli & Stampa" },
    { id: "intervista", label: isEn ? "Interviews" : "Interviste" },
    { id: "video", label: isEn ? "Video & Talks" : "Video & Talk" },
    { id: "podcast", label: isEn ? "Podcasts & Radio" : "Podcast & Radio" },
  ];

  const filteredItems = useMemo(() => {
    let items = pressItems;

    if (variant === "preview") {
      return items.slice(0, 3);
    }

    return items.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" ||
        item.tipologia === selectedCategory ||
        (selectedCategory === "podcast" && item.tipologia === "podcast");

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.titolo.toLowerCase().includes(q) ||
        item.testata.toLowerCase().includes(q) ||
        item.estratto.toLowerCase().includes(q) ||
        (item.tag && item.tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [variant, selectedCategory, searchQuery]);

  const getTipologiaBadge = (tipologia: PressItem["tipologia"]) => {
    switch (tipologia) {
      case "video":
        return {
          icon: <Tv className="w-3.5 h-3.5" />,
          label: isEn ? "Video / Talk" : "Video / Talk",
          className: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        };
      case "podcast":
        return {
          icon: <Mic className="w-3.5 h-3.5" />,
          label: isEn ? "Podcast / Radio" : "Podcast / Radio",
          className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        };
      case "intervista":
        return {
          icon: <Radio className="w-3.5 h-3.5" />,
          label: isEn ? "Interview" : "Intervista",
          className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        };
      case "articolo":
        return {
          icon: <FileText className="w-3.5 h-3.5" />,
          label: isEn ? "Article" : "Articolo",
          className: "bg-sky-500/10 text-sky-400 border-sky-500/20",
        };
      default:
        return {
          icon: <BookmarkCheck className="w-3.5 h-3.5" />,
          label: isEn ? "Mention" : "Menzione",
          className: "bg-slate-500/10 text-slate-400 border-slate-500/20",
        };
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(isEn ? "en-US" : "it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[var(--bg-canvas)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>{isEn ? "PRESS & MEDIA COVERAGE" : "RASSEGNA STAMPA & MEDIA"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            {variant === "preview"
              ? isEn
                ? "In the Media: Selected Press & Talks"
                : "Dicono di me: Rassegna Stampa & Uscite Media"
              : isEn
              ? "Press Review & Media Coverage"
              : "Rassegna Stampa & Uscite Media"}
          </h2>

          <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
            {isEn
              ? "Interviews, media coverage, podcasts, and articles about game psychology, applied game design, and social innovation."
              : "Interviste, citazioni su testate nazionali, apparizioni video, podcast e articoli sui temi della psicologia del gioco e del game-based learning."}
          </p>
        </div>

        {/* Filters & Search (Full mode only) */}
        {variant === "full" && (
          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[var(--accent-primary)] text-slate-950 shadow-md font-bold"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Bar & Result Count */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-b border-[var(--border-color)] pb-4">
              <div className="text-xs sm:text-sm text-[var(--text-muted)]">
                {isEn ? "Showing " : "Mostrate "}
                <span className="font-bold text-[var(--text-main)]">{filteredItems.length}</span>
                {isEn ? " media mentions" : " uscite media"}
              </div>

              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-subtle)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isEn ? "Search by title, media outlet..." : "Cerca per titolo, testata, tema..."}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => {
            const badge = getTipologiaBadge(item.tipologia);
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Outlet & Tipologia Badges */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                      {item.testata}
                    </span>

                    <span
                      className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-md border font-medium ${badge.className}`}
                    >
                      {badge.icon}
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2 leading-snug">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none"
                    >
                      {item.titolo}
                    </a>
                  </h3>

                  {/* Date & Tag */}
                  <div className="flex items-center space-x-3 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--text-subtle)]" />
                      <span>{formatDate(item.data)}</span>
                    </span>
                    {item.tag && (
                      <>
                        <span className="text-[var(--border-color)]">•</span>
                        <span className="text-[var(--text-subtle)]">#{item.tag}</span>
                      </>
                    )}
                  </div>

                  {/* Quote / Snippet */}
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed italic border-l-2 border-[var(--border-color)] pl-3 line-clamp-3">
                    &ldquo;{item.estratto}&rdquo;
                  </p>
                </div>

                {/* Footer Link Action */}
                <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-[var(--accent-primary)] hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{isEn ? "Read / View original" : "Vai all'articolo / video"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {item.highlight && (
                    <span className="text-amber-400 text-xs flex items-center space-x-1" title="In evidenza">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[10px] uppercase font-semibold">Highlight</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] max-w-xl mx-auto p-8 space-y-3">
            <Newspaper className="w-10 h-10 mx-auto text-[var(--text-subtle)]" />
            <h4 className="text-base font-bold text-[var(--text-main)]">
              {isEn ? "No matching news found" : "Nessuna uscita trovata"}
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {isEn
                ? "Try adjusting your search terms or filter."
                : "Prova a modificare i filtri di ricerca o la parola chiave."}
            </p>
          </div>
        )}

        {/* Preview CTA */}
        {variant === "preview" && (
          <div className="text-center pt-4">
            <Link
              href={isEn ? "/en/rassegna-stampa" : "/rassegna-stampa"}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>{isEn ? "Explore all press coverage & talks →" : "Esplora tutta la rassegna stampa e le uscite media →"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
