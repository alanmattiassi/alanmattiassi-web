"use client";

import React, { useState } from "react";
import Image from "next/image";
import { partners, Partner } from "@/data/partners";
import { Building2, Award } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function PartnersGrid() {
  const { isEn } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: isEn ? "All Partners & Clients" : "Tutti i Partner & Committenti" },
    { id: "Atenei & Ricerca", label: isEn ? "Universities & Research" : "Atenei & Centri di Ricerca" },
    { id: "Education & Scuole", label: isEn ? "Schools & Education" : "Scuola & Formazione" },
    { id: "Aziende & Consulenza", label: isEn ? "Corporate & Enterprises" : "Aziende & Corporate" },
    { id: "Sanità & Health", label: isEn ? "Healthcare & Non-Profit" : "Sanità & Terzo Settore" },
  ];

  const filtered = partners.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "Sanità & Health") {
      return p.category === "Sanità & Health" || p.category === "Enti & Terzo Settore";
    }
    return p.category === activeFilter;
  });

  return (
    <section id="partner" className="py-20 bg-[var(--bg-canvas)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            <span>{isEn ? "CLIENTS, ACADEMIA & PARTNERS" : "COMMITTENTI, ATENEI & PARTNER"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {isEn ? "Organizations Choosing Scientific Rigor" : "Istituzioni e realtà che hanno scelto il rigore scientifico"}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {isEn
              ? "Academic partnerships, professional development for educators and executives, and strategic consulting for businesses, public entities, and non-profits."
              : "Collaborazioni accademiche, formazione per docenti e manager, consulenza strategica per imprese, enti pubblici e organizzazioni del terzo settore."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === cat.id
                  ? "bg-[var(--accent-primary)] text-white shadow-md"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Partners */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {filtered.map((partner, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col items-center text-center justify-between space-y-3"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center p-2 rounded-lg bg-[var(--bg-card-subtle)] border border-[var(--border-color)] group-hover:scale-105 transition-transform">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={70}
                  height={70}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div>
                <div className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                  {partner.name}
                </div>
                <div className="text-[10px] text-[var(--text-subtle)] mt-1 line-clamp-1">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
