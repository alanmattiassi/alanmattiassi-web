import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Dice5,
  Sparkles,
  Gamepad2,
  CheckCircle2,
  Brain,
  Microscope,
  ArrowRight,
  Target,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Game Design Research & Consulting – Alan Mattiassi, PhD",
  description:
    "Psychological advisory for game studios, publishers, and researchers: player motivation (PMPVG), cognitive ergonomics, game feel, and behavioral playtesting.",
};

export default function EnglishRicercaConsulenzaPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--pillar-gamedesign-bg)] border border-[var(--pillar-gamedesign-border)] text-[var(--pillar-gamedesign)] text-xs font-semibold uppercase tracking-wider">
          <Dice5 className="w-3.5 h-3.5" />
          <span>SCIENTIFIC RESEARCH &bull; PSYCHOLOGICAL GAME DESIGN &bull; EMPIRICAL VALIDATION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Psychology Applied to Game Design &amp; Serious Games:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">
            From the Player&apos;s Mind to the Architecture of Mechanics
          </span>
        </h1>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Scientific advisory for authors, game development studios, publishers, and institutions seeking
          to deeply understand how games shape perception, motivation, and emotion — preventing frustration,
          clarifying lusory goals, and optimizing player experience.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
          >
            📅 Request an advisory session on your game →
          </Link>
          <Link
            href="/en/research-ricerca"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            🔬 Explore Scientific Models (PMPVG, mcSQ)
          </Link>
          <Link
            href="/ricerca-consulenza"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--pillar-gamedesign)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Core Pillars of Psychological Game Consulting */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--pillar-gamedesign)] uppercase tracking-wider">
            THE 4 PILLARS OF CONSULTING
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            What a Game Psychologist brings to Game Designers &amp; Publishers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--pillar-gamedesign)] transition-all space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[var(--pillar-gamedesign-bg)] border border-[var(--pillar-gamedesign-border)] text-[var(--pillar-gamedesign)] flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">
              1. Player Motivation Profiling (PMPVG Scale)
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Through validated psychometric models (such as the PMPVG scale published in <em>Simulation &amp; Gaming</em>),
              we map distinct motivational profiles: from needs for competence and autonomy to narrative immersion,
              social connectedness, and progression. This ensures your game is precisely calibrated for its intended audience.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/50 transition-all space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">
              2. Cognitive Ergonomics &amp; Cognitive Load Theory
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              An overly complex rulebook triggers early churn; a game with zero friction sparks boredom.
              We evaluate the intrinsic and extraneous cognitive load of rulebooks, user interfaces, and physical components,
              guaranteeing that mental effort remains focused on meaningful, strategic decision-making.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500/50 transition-all space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">
              3. Behavioral Playtesting &amp; Psychological Measurement
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Traditional playtests often rely on subjective opinions (&quot;I liked it / I didn&apos;t like it&quot;).
              Psychological playtesting examines actual behaviors: reaction latencies, decision hesitation, debriefing dynamics,
              and emotional shifts to diagnose exactly where mechanics introduce unintended frictions.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-pink-500/50 transition-all space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)]">
              4. Serious Games Validation for Health &amp; Non-Profit Sectors
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Developing a game for healthcare, social inclusion, or prevention (such as the <em>DIVING</em> project at Policlinico Gemelli or <em>Free to Choose</em>)?
              We support development teams with rigorous experimental pre/post intervention protocols to empirically validate real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Theoretical Unification Framework */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 space-y-4 shadow-xl">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LANDMARK PUBLICATION &bull; CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY</span>
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            Redefining the Psychology of Games: A Unifying Framework
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            In his landmark scientific paper published in the <em>Canadian Journal of Experimental Psychology</em> (APA),
            Alan Mattiassi establishes an integrated epistemological model that connects experimental psychology,
            cognitive ergonomics, and game design, providing an indispensable theoretical compass for both academic research and game production.
          </p>
          <div className="pt-2">
            <Link
              href="/en/psychology-of-games-framework"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center space-x-1"
            >
              <span>Explore the Framework and read the published paper →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Have a prototype or game project in development?
        </h3>
        <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
          Let&apos;s evaluate your game mechanics together and define a targeted advisory or psychological playtesting roadmap.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-lg shadow-purple-500/25 hover:scale-105 transition-all"
          >
            Schedule an exploratory call about your game →
          </Link>
        </div>
      </section>
    </div>
  );
}
