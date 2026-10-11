"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
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

export default function TalksPage() {
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
    <div className="py-12 sm:py-20 space-y-20">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
          <Mic className="w-3.5 h-3.5" />
          <span>KEYNOTE &bull; CONFERENZE &bull; TEDX &bull; SPEECH PUBBLICI</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Talks // Interventi
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-sky-400">
          Divulgazione scientifica, keynote festival e lezioni magistrali
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Dal palco di TEDx Udine ai più prestigiosi festival del gioco e congressi internazionali,
          porto la psicologia del gioco e le scienze cognitive ad un pubblico eterogeneo di docenti,
          sviluppatori, studenti e appassionati.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-500 to-amber-600 shadow-lg shadow-red-500/20 hover:scale-105 transition-all"
          >
            🎤 Invita Alan Mattiassi come speaker al tuo evento →
          </Link>
        </div>
      </section>

      {/* 2. Featured Talk: TEDx Udine */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border-2 border-red-500/40 p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TEDX SPEAKER &bull; TEDX UDINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Come i giochi ci aiutano a conoscere noi stessi
              </h2>
              <p className="text-sm text-slate-300">
                Alan D.A. Mattiassi &bull; Teatro Nuovo Giovanni da Udine
              </p>
            </div>
            <a
              href="https://www.youtube.com/@gameinsightsAM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 transition-all flex items-center space-x-2 flex-shrink-0"
            >
              <Video className="w-4 h-4" />
              <span>Guarda il Talk su YouTube</span>
            </a>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Un viaggio nei processi decisionali, nella teoria della mente e nelle neuroscienze dell&apos;empatia:
            come le scelte che compiamo davanti a una scacchiera, a un videogioco o durante una partita di ruolo
            rivelano la struttura profonda della nostra cognizione e delle nostre emozioni.
          </p>
        </div>
      </section>

      {/* 3. Filter & Search Controls */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 mr-2 font-medium">Anno:</span>
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedYear === yr
                    ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {yr === "all" ? "Tutti gli anni" : yr}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Cerca evento, luogo o titolo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Talks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTalks.map((talk) => (
            <div
              key={talk.id}
              className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-red-400 bg-red-950/60 border border-red-800/60 px-2.5 py-0.5 rounded-md">
                    {talk.data || talk.anno}
                  </span>
                  {talk.luogo && (
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{talk.luogo}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                  {talk.titolo}
                </h3>

                <p className="text-xs text-sky-400 font-medium">
                  {talk.evento}
                </p>

                {talk.progetto_ambito && (
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {talk.progetto_ambito}
                  </p>
                )}
              </div>

              {talk.tipologia && (
                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500">
                  Tipologia: <span className="text-slate-400">{talk.tipologia}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
