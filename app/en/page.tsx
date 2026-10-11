import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatRibbon from "@/components/StatRibbon";
import ServiceCard from "@/components/ServiceCard";
import PathFinder from "@/components/PathFinder";
import PublicationsSection from "@/components/PublicationsSection";
import PartnersGrid from "@/components/PartnersGrid";
import ContactSection from "@/components/ContactSection";
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

export const metadata = {
  title: "Alan Mattiassi, PhD – Game Psychologist, Researcher, Trainer & Speaker",
  description:
    "Official website of Alan Mattiassi, PhD: Game Psychologist. Applying cognitive science and game design to education, corporate training, and serious games.",
};

export default function EnglishHomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Stat Ribbon */}
      <StatRibbon />

      {/* 3. Areas of Intervention (3 Pillars: Blue, Green, Purple) */}
      <section id="ambiti" className="py-24 bg-[var(--bg-canvas)] relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
              <span>AREAS OF EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Where Games, Cognitive Science, and Psychology Make the Difference
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Games act as extraordinary amplifiers of cognitive, interpersonal, and emotional dynamics.
              Three vertical pillars where playful potential translates into concrete, measurable outcomes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Education (BLU) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-scuola)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-scuola-bg)] border border-[var(--pillar-scuola-border)] flex items-center justify-center text-[var(--pillar-scuola)] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-scuola)] transition-colors">
                  Education &amp; Schools
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Instructional design grounded in <strong>Game-Based Learning</strong> for primary, secondary, and higher education.
                  Accredited professional development programs for educators to make learning active, inclusive, and memorable.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/en/docenti"
                  className="text-sm font-semibold text-[var(--pillar-scuola)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>For teachers and educators</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Corporate (VERDE) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-aziende)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-aziende-bg)] border border-[var(--pillar-aziende-border)] flex items-center justify-center text-[var(--pillar-aziende)] group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-aziende)] transition-colors">
                  Corporate Training &amp; HR
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Interactive executive workshops, <strong>evidence-based corporate gamification</strong>, group dynamics analysis, organizational climate diagnostics, horizontal leadership, and strategic decision-making under uncertainty.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/en/aziende-corporate"
                  className="text-sm font-semibold text-[var(--pillar-aziende)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>For corporate organizations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Game Design (VIOLA) */}
            <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between space-y-6 hover:border-[var(--pillar-gamedesign)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--pillar-gamedesign-bg)] border border-[var(--pillar-gamedesign-border)] flex items-center justify-center text-[var(--pillar-gamedesign)] group-hover:scale-110 transition-transform">
                  <Dice5 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--pillar-gamedesign)] transition-colors">
                  Game Design &amp; Serious Games
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Psychological consulting for game development studios: intrinsic motivation flow analysis (PMPVG scale), decision ergonomics, behavioral playtesting, and serious games for healthcare, social change, and learning.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-color)]">
                <Link
                  href="/en/ricerca-consulenza"
                  className="text-sm font-semibold text-[var(--pillar-gamedesign)] group-hover:underline inline-flex items-center space-x-1.5"
                >
                  <span>For game designers &amp; studios</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/en/hire-me-lavora-con-me"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[var(--text-main)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all shadow-lg"
            >
              <span>Request a tailored consultation or workshop →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section id="servizi" className="py-24 bg-[var(--bg-canvas)] relative transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
              <span>HOW I CAN HELP YOU</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              What I Offer as a Game Psychologist
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              As a game psychologist, I combine my fourfold experience as a <strong>psychologist, researcher, trainer, and speaker</strong> to deliver high-impact scientific and pedagogical interventions:
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
              href="/en/come-lavoro"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all shadow-lg"
            >
              <span>Explore my methodology: Hidden in Systems →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Audience Pathways & Free Resource */}
      <PathFinder />

      {/* 6. Publications & Scientific Research */}
      <PublicationsSection />

      {/* 7. Clients & Partners Grid */}
      <PartnersGrid />

      {/* 8. Contact & Discovery Call */}
      <ContactSection />
    </div>
  );
}
