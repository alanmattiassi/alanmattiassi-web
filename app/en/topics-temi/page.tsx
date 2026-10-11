import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Brain,
  Sparkles,
  Dice5,
  Gamepad2,
  Users,
  Compass,
  ArrowRight,
  Target,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Topics & Theoretical Areas – Alan Mattiassi, PhD",
  description:
    "Core conceptual domains of Game Psychology: Theory of Mind in RPGs, PMPVG motivations, mcSQ strategic quotient, and Suits' lusory architecture.",
};

export default function EnglishTopicsPage() {
  const topicsList = [
    {
      id: "theory-of-mind-rpg",
      badge: "Neuroscience & Empathy",
      title: "Role-Playing Games & Empathy: Theory of Mind & IRI",
      desc: "How character embodiment trains the Interpersonal Reactivity Index (IRI) and perspective-taking capabilities. Tabletop and live-action role-playing functions as a safe cognitive gym for deciphering intentions, emotional states, and socio-cognitive dynamics with high educational and therapeutic relevance.",
      keywords: ["Perspective Taking", "Theory of Mind", "Therapeutic RPG", "Cognitive Empathy"],
    },
    {
      id: "analog-vs-digital",
      badge: "Media & Ergonomics",
      title: "Tabletop vs. Digital Gaming: Neurocognitive Distinctions",
      desc: "From physical embodiment (embodied cognition) and shared spatial co-presence around the gaming table to screen-mediated interaction. How attention allocation, collective rule negotiation, and social signaling diverge across physical and virtual ludic spaces.",
      keywords: ["Embodied Cognition", "Social Presence", "Cognitive Load", "Face-to-Face Interaction"],
    },
    {
      id: "motivations-pmpvg",
      badge: "Psychometrics & Engagement",
      title: "Psychological Motivations to Play: The PMPVG Scale",
      desc: "Empirical psychometric validation of why humans play games: from the drive for mastery and autonomy to daily stress relief, social affiliation, and narrative transportation. A scientific taxonomy overcoming superficial genre stereotypes.",
      keywords: ["PMPVG Scale", "Intrinsic Motivation", "Flow State", "Self-Determination Theory"],
    },
    {
      id: "strategic-quotient-mcsq",
      badge: "Game Theory & Decision Making",
      title: "Strategic Quotient and the mcSQ Construct",
      desc: "Scientifically measuring the capacity to make robust strategic decisions under uncertainty and adversarial friction. The mcSQ model integrates behavioral economics, cognitive psychology, and game-theoretic logic.",
      keywords: ["mcSQ", "Decision Making", "Strategic Thinking", "Game Theory"],
    },
    {
      id: "evolutionary-perspective",
      badge: "Evolution & Ethology",
      title: "Ethological and Evolutionary Roots of Play",
      desc: "Why do higher mammals and humans allocate vital energy to play? Play serves as a protected simulation sandbox to rehearse complex survival maneuvers, social cooperation, and conflict resolution at negligible biological cost.",
      keywords: ["Play Ethology", "Safe Environment", "Behavioral Evolution", "Adaptation"],
    },
    {
      id: "lusory-goals-suits",
      badge: "Game Studies & Suits",
      title: "Lusory Attitude and Lusory Goals: The Architecture of Games",
      desc: "Following Bernard Suits' foundational definition, playing a game is the voluntary attempt to overcome unnecessary obstacles (the lusory attitude). We analyze how lusory goals and lusory means structure the authentic meaning of every player decision.",
      keywords: ["Lusory Goals", "Lusory Attitude", "Lusory Means", "Bernard Suits"],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Brain className="w-3.5 h-3.5" />
          <span>ACTIVE RESEARCH &bull; PROVEN KEYNOTE FORMATS &bull; GAME PSYCHOLOGY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Topics &amp; Theoretical Themes
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Domains, challenges, and conceptual models of the playful mind
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          The core thematic pillars structuring my academic research, university teaching,
          and consulting practices. Validated models ready to be tailored to your institutional context or integrated into ongoing research.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/topics-temi"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Topics Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topicsList.map((topic) => (
            <div
              key={topic.id}
              className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-5 group shadow-md"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-950/60 text-sky-400 border border-sky-800/60 uppercase tracking-wider">
                  {topic.badge}
                </span>

                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-sky-400 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-1.5">
                {topic.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-card-subtle)] text-[var(--text-muted)] border border-[var(--border-color)]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Looking to develop one of these themes for a seminar, keynote, or paper?
        </h3>
        <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
          All topics are modular and can be shaped into an executive masterclass, keynote speech, or collaborative research line.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:scale-105 transition-all"
          >
            Contact Alan Mattiassi for a proposal →
          </Link>
        </div>
      </section>
    </div>
  );
}
