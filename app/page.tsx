import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatRibbon from "@/components/StatRibbon";
import ServiceCard from "@/components/ServiceCard";
import PathFinder from "@/components/PathFinder";
import PublicationsSection from "@/components/PublicationsSection";
import PressSection from "@/components/PressSection";
import PartnersGrid from "@/components/PartnersGrid";
import ContactSection from "@/components/ContactSection";
import BookSpotlightSection from "@/components/BookSpotlightSection";
import MasterclassSpotlightSection from "@/components/MasterclassSpotlightSection";
import { services } from "@/data/services";
import {
  GraduationCap,
  Briefcase,
  Dice5,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Stat Ribbon */}
      <StatRibbon />

      {/* 2.5 Book Spotlight Announcement */}
      <BookSpotlightSection />

      {/* 2.8 Flagship In-Person Masterclass */}
      <MasterclassSpotlightSection />

      {/* 3. Settori d'Intervento / Ambiti di Applicazione */}
      <section id="ambiti" className="py-24 bg-[var(--bg-canvas)] relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
              <span>SETTORI D&apos;INTERVENTO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Dove l&apos;Unione tra Gioco, Scienza e Psicologia Fa la Differenza
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Il gioco è uno straordinario amplificatore di processi cognitivi, relazionali ed emotivi.
              Tre aree verticali in cui trasformiamo il potenziale ludico in risultati concreti e misurabili:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ambito 1: Scuola (BLU) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-scuola)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-scuola-bg)] border border-[var(--pillar-scuola-border)] flex items-center justify-center text-[var(--pillar-scuola)] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-scuola)] transition-colors">
                  Educazione &amp; Scuola
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Progettazione didattica basata sul <strong>Game-Based Learning</strong> per scuole primarie, secondarie e università.
                  Corsi di aggiornamento accreditati per docenti ed educatori per rendere l&apos;apprendimento attivo, inclusivo e memorabile.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/docenti"
                  className="text-sm font-semibold text-[var(--pillar-scuola)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>Per docenti ed educatori</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Ambito 2: Aziende (VERDE) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-aziende)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-aziende-bg)] border border-[var(--pillar-aziende-border)] flex items-center justify-center text-[var(--pillar-aziende)] group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-aziende)] transition-colors">
                  Formazione Aziendale &amp; HR
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Workshop interattivi, percorsi di <strong>gamification aziendale</strong>, team building scientifico, analisi del clima e delle dinamiche di gruppo, leadership orizzontale e decision-making strategico per manager e team.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/aziende-corporate"
                  className="text-sm font-semibold text-[var(--pillar-aziende)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>Per formazione aziendale</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Ambito 3: Game Design (VIOLA) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-gamedesign)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-gamedesign-bg)] border border-[var(--pillar-gamedesign-border)] flex items-center justify-center text-[var(--pillar-gamedesign)] group-hover:scale-110 transition-transform">
                  <Dice5 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-gamedesign)] transition-colors">
                  Game Design &amp; Serious Games
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Consulenza psicologica applicata allo sviluppo di giochi: analisi dei flussi di motivazione intrinseca (scala PMPVG), ergonomia delle decisioni, playtesting psicologico e serious games per salute, sociale e mutamento comportamentale.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/ricerca-consulenza"
                  className="text-sm font-semibold text-[var(--pillar-gamedesign)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>Per game designer e studi</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/hire-me-lavora-con-me"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[var(--text-main)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all shadow-lg"
            >
              <span>Richiedi una consulenza o un workshop su misura →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Come posso aiutarti / Servizi */}
      <section id="servizi" className="py-24 bg-[var(--bg-canvas)] relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
              <span>COME POSSO AIUTARTI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Cosa offro come Psicologo del Gioco
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Come psicologo del gioco, metto a sistema la mia quadruplice esperienza di <strong>psicologo, ricercatore, formatore e divulgatore</strong> per offrire interventi ad alto impatto scientifico e pedagogico:
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/come-lavoro"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all shadow-lg"
            >
              <span>Approfondisci il mio metodo: Ciò che i sistemi nascondono →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Percorsi su Misura & Risorsa Gratuita */}
      <PathFinder />

      {/* 6. Pubblicazioni & Ricerca Scientifica */}
      <PublicationsSection />

      {/* 7. Rassegna Stampa & Uscite Media */}
      <PressSection variant="preview" />

      {/* 8. Committenti & Partner Grid */}
      <PartnersGrid />

      {/* 8. Contatto & Call Conoscitiva */}
      <ContactSection />
    </div>
  );
}
