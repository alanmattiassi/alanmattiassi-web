"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  Sparkles,
  BookMarked,
  Filter,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { publications, Publication } from "@/data/publications";
import { useLanguage } from "./LanguageProvider";

export default function PublicationsSection() {
  const { isEn } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: isEn ? "All Publications" : "Tutte le pubblicazioni" },
    { id: "journal", label: isEn ? "Journal Articles (Peer-Reviewed)" : "Articoli su Rivista (Peer-Reviewed)" },
    { id: "tools", label: isEn ? "Scales & Models (mcSQ / PMPVG)" : "Scale & Modelli (mcSQ / PMPVG)" },
    { id: "data", label: isEn ? "Datasets & Global Reports" : "Dataset & Report Internazionali" },
  ];

  const filteredPubs = useMemo(() => {
    return publications.filter((pub) => {
      // Category filter
      let matchesCat = true;
      if (selectedCategory === "journal") {
        matchesCat =
          pub.tipologia.toLowerCase().includes("journal") ||
          pub.tipologia.toLowerCase().includes("peer-reviewed");
      } else if (selectedCategory === "tools") {
        matchesCat =
          (pub.area_tematica?.toLowerCase().includes("pmpvg") ?? false) ||
          (pub.area_tematica?.toLowerCase().includes("mcsq") ?? false) ||
          pub.titolo.toLowerCase().includes("motivations") ||
          pub.titolo.toLowerCase().includes("scale");
      } else if (selectedCategory === "data") {
        matchesCat =
          pub.tipologia.toLowerCase().includes("data") ||
          (pub.area_tematica?.toLowerCase().includes("globali") ?? false);
      }

      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        pub.titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.autori.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.sede_editoriale.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pub.area_tematica?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const highlightPub = publications.find((p) => p.highlight) || publications[0];

  return (
    <section id="pubblicazioni" className="py-20 bg-[var(--bg-canvas)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <span>{isEn ? "SCIENTIFIC ACTIVITY • EVIDENCE-BASED" : "ATTIVITÀ SCIENTIFICA • EVIDENCE-BASED"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {isEn ? "Publications & Research" : "Pubblicazioni e Ricerca"}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {isEn
              ? "Explore academic contributions, peer-reviewed articles, and validated theoretical frameworks."
              : "Scopri i contributi accademici, gli articoli peer-reviewed e i modelli teorici validati."}
            <br className="hidden sm:inline" />
            <a
              href="https://orcid.org/0000-0002-9996-0700"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline font-semibold inline-flex items-center space-x-1 ml-1"
            >
              <span>{isEn ? "View ORCID profile (0000-0002-9996-0700)" : "Consulta il profilo su ORCID (0000-0002-9996-0700)"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[var(--border-strong)] mx-2">&bull;</span>
            <span className="text-[var(--text-main)] font-medium">H-Index (Scopus): 8 &bull; Citations #245+</span>
          </p>
        </div>

        {/* Featured Landmark Publication Card */}
        {highlightPub && (
          <div className="relative rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--accent-primary)]/50 p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-4xl">
                <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {isEn
                      ? "OFFICIAL PUBLICATION • CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY"
                      : "PUBBLICAZIONE UFFICIALE • CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY"}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] leading-tight">
                  {highlightPub.titolo}
                </h3>

                <p className="text-sm text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-main)]">{highlightPub.autori}</span> &bull;{" "}
                  <span className="italic">{highlightPub.sede_editoriale}</span> ({highlightPub.volume_issue_pp})
                </p>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {isEn
                    ? "A unifying theoretical and epistemological framework redefining the psychology of games, bridging neurocognitive and motivational dimensions across media, and offering a robust model for researchers, educators, and game designers."
                    : "Un framework teorico epistemologico unificato che ridefinisce la psicologia del gioco, chiarendo le distinzioni neurocognitive e motivazionali tra ludus, paidia, gaming e playing e fornendo un modello solido per ricercatori, docenti e game designer."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
                <Link
                  href={isEn ? "/en/psychology-of-games-framework" : "/framework-psicologia-del-gioco"}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] shadow-md transition-all text-center group"
                >
                  <BookOpen className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>{isEn ? "Explore the Framework" : "Scopri il Framework"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {highlightPub.pdf_url && (
                  <a
                    href={highlightPub.pdf_url}
                    download
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isEn ? "Download PDF" : "Scarica PDF"}</span>
                  </a>
                )}
                {highlightPub.doi_link && highlightPub.doi_link !== "-" && (
                  <a
                    href={highlightPub.doi_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{isEn ? "Official DOI Page" : "Consulta DOI Ufficiale"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-color)]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[var(--accent-primary)] text-white shadow-md"
                    : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--border-strong)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-subtle)]" />
            <input
              type="text"
              placeholder={isEn ? "Search by title, author, topic..." : "Cerca per titolo, autore, tema..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
          </div>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {filteredPubs.slice(0, 10).map((pub) => (
            <div
              key={pub.id}
              className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between group space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2 py-0.5 rounded">
                    {pub.anno}
                  </span>
                  <span className="text-[10px] text-[var(--text-subtle)] font-medium truncate">
                    {pub.tipologia}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                  {pub.titolo}
                </h4>

                <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                  {pub.autori}
                </p>

                <p className="text-xs text-[var(--text-subtle)] italic">
                  {pub.sede_editoriale} {pub.volume_issue_pp !== "-" ? `• ${pub.volume_issue_pp}` : ""}
                </p>
              </div>

              {/* Bottom links */}
              <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs">
                {pub.area_tematica ? (
                  <span className="text-[10px] text-[var(--text-subtle)] font-medium">
                    {pub.area_tematica}
                  </span>
                ) : (
                  <span></span>
                )}

                {pub.doi_link && pub.doi_link !== "-" ? (
                  <a
                    href={pub.doi_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-primary)] hover:underline font-medium inline-flex items-center space-x-1"
                  >
                    <span>DOI</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[var(--text-subtle)] text-[11px]">Peer-reviewed</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to view all publications */}
        <div className="text-center pt-4">
          <a
            href="https://orcid.org/0000-0002-9996-0700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--accent-primary)] bg-[var(--bg-card)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] transition-all shadow-lg"
          >
            <BookMarked className="w-4 h-4" />
            <span>{isEn ? "All scientific publications on ORCID →" : "Tutte le pubblicazioni scientifiche su ORCID →"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
