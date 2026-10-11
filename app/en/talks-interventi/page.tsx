"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Mic,
  Calendar,
  MapPin,
  Search,
  ExternalLink,
  PlayCircle,
  Video,
  Award,
  Sparkles,
} from "lucide-react";
import { talks, Talk } from "@/data/talks";

export default function EnglishTalksPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const years = ["all", "2026", "2025", "2024", "2023", "2022"];

  const filteredTalks = useMemo(() => {
    return talks.filter((talk) => {
      const matchesYear =
        selectedYear === "all" || String(talk.anno) === selectedYear;
      const matchesSearch =
        searchQuery === "" ||
        talk.titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talk.evento.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (talk.tipologia?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (talk.luogo?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      return matchesYear && matchesSearch;
    });
  }, [selectedYear, searchQuery]);

  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
          <Mic className="w-3.5 h-3.5" />
          <span>KEYNOTES &bull; CONFERENCES &bull; TEDX &bull; PUBLIC SPEECHES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Talks &amp; Keynotes
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-sky-400">
          Science communication, festival keynotes, and master lectures
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          From the TEDx Udine stage to prominent game festivals and international scientific congresses,
          I bring game psychology and cognitive science to diverse audiences of educators,
          developers, students, and game enthusiasts.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-500 to-amber-600 shadow-lg shadow-red-500/20 hover:scale-105 transition-all"
          >
            🎤 Invite Alan Mattiassi as a keynote speaker →
          </Link>
          <Link
            href="/talks-interventi"
            className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-red-500/50 transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Featured Talk: TEDx Udine */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-red-500/40 p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TEDX SPEAKER &bull; TEDX UDINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                How games help us know ourselves
              </h2>
              <p className="text-sm text-[var(--text-muted)]">
                Alan D.A. Mattiassi, PhD &bull; Teatro Nuovo Giovanni da Udine
              </p>
            </div>
            <a
              href="https://www.youtube.com/@gameinsightsAM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 transition-all flex items-center space-x-2 flex-shrink-0"
            >
              <Video className="w-4 h-4" />
              <span>Watch Talk on YouTube</span>
            </a>
          </div>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            A journey through decision-making processes, theory of mind, and the neuroscience of empathy:
            how the choices we make across a chessboard, a video game, or a tabletop roleplaying campaign
            reveal the deep architecture of human cognition and social emotions.
          </p>
        </div>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[var(--text-muted)] mr-2 font-medium">Year:</span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === yr
                    ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
                }`}
              >
                {yr === "all" ? "All Years" : yr}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-subtle)]" />
            <input
              type="text"
              placeholder="Search event, location, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Talks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTalks.map((talk) => (
            <div
              key={talk.id}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-red-500/40 transition-all flex flex-col justify-between space-y-4 group shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-800/60 px-2.5 py-0.5 rounded-md">
                    {talk.data || talk.anno}
                  </span>
                  {talk.luogo && (
                    <span className="text-xs text-[var(--text-muted)] flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[var(--text-subtle)]" />
                      <span>{talk.luogo}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[var(--text-main)] group-hover:text-red-400 transition-colors leading-snug">
                  {talk.titolo}
                </h3>

                <p className="text-xs text-sky-400 font-medium">
                  {talk.evento}
                </p>

                {talk.progetto_ambito && (
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {talk.progetto_ambito}
                  </p>
                )}
              </div>

              {talk.tipologia && (
                <div className="pt-3 border-t border-[var(--border-color)] text-[11px] text-[var(--text-subtle)]">
                  Format: <span className="text-[var(--text-muted)]">{talk.tipologia}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
