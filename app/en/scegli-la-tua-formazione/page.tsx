import React from "react";
import Link from "next/link";
import PathFinder from "@/components/PathFinder";
import ItFlag from "@/components/icons/ItFlag";
import {
  Compass,
  GraduationCap,
  Briefcase,
  Dice5,
  PlayCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Choose Your Training Pathway – Alan Mattiassi, PhD",
  description:
    "Find the game psychology training pathway best suited to your profession: educators, corporate leaders, game designers, and free courses.",
};

export default function EnglishScegliFormazionePage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>LEARNING PATHWAYS &bull; ORIENTATION &bull; COMMUNITY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Choose Your Training Pathway
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Tailored learning designed for every professional role
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you are an educator seeking active pedagogical methodologies, an HR director looking
          to empower teams, or a game designer honing psychological player ergonomics,
          I have engineered dedicated pathways for your goals.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/scegli-la-tua-formazione"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. PathFinder Component */}
      <PathFinder />

      {/* 3. Deep Dive Comparison Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Compare Pathways
          </h2>
          <p className="text-[var(--text-muted)] text-sm">
            All programs combine theoretical grounding, practical simulation, and structured debriefing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Schools Track */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--pillar-scuola-border)] hover:border-[var(--pillar-scuola)] transition-all space-y-4 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[var(--pillar-scuola)] uppercase tracking-wider">Schools &amp; Education</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Game-Based Learning (GBL-02)</h3>
              <p className="text-xs text-[var(--text-muted)]">Target: K-12 educators, school principals, university instructors</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Focus on inclusive instructional design (UDL), constructive error reframing as a learning engine,
                reducing extraneous cognitive load, and conducting curricular debriefs.
              </p>
            </div>
            <Link
              href="/en/docenti"
              className="text-xs font-semibold text-[var(--pillar-scuola)] hover:underline inline-flex items-center space-x-1"
            >
              <span>Explore complete Educator syllabus →</span>
            </Link>
          </div>

          {/* Corporate Track */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--pillar-aziende-border)] hover:border-[var(--pillar-aziende)] transition-all space-y-4 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[var(--pillar-aziende)] uppercase tracking-wider">Corporate &amp; HR</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Leadership &amp; Gamification (GBL-01)</h3>
              <p className="text-xs text-[var(--text-muted)]">Target: HR Directors, C-Level executives, Team Leaders, People Managers</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Focus on team relational dynamics, dissolving communication silos, decision-making under uncertainty,
                and designing internal self-determination incentive models.
              </p>
            </div>
            <Link
              href="/en/aziende-corporate"
              className="text-xs font-semibold text-[var(--pillar-aziende)] hover:underline inline-flex items-center space-x-1"
            >
              <span>Explore complete Corporate syllabus →</span>
            </Link>
          </div>

          {/* Game Design Track */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--pillar-gamedesign-border)] hover:border-[var(--pillar-gamedesign)] transition-all space-y-4 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[var(--pillar-gamedesign)] uppercase tracking-wider">Game Design &amp; Industry</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Player Psychology (GBL-03)</h3>
              <p className="text-xs text-[var(--text-muted)]">Target: Game designers, developers, creative directors, publishers</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Focus on motivational drivers (PMPVG scale), cognitive ergonomics, behavioral playtesting,
                game feel calibration, and serious games for social impact and health.
              </p>
            </div>
            <Link
              href="/en/ricerca-consulenza"
              className="text-xs font-semibold text-[var(--pillar-gamedesign)] hover:underline inline-flex items-center space-x-1"
            >
              <span>Explore Game Design program →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
