import React from "react";
import Link from "next/link";
import PublicationsSection from "@/components/PublicationsSection";
import ItFlag from "@/components/icons/ItFlag";
import {
  Microscope,
  Award,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Research & Scientific Publications – Alan Mattiassi, PhD",
  description:
    "Scientific research, academic affiliations, international editorial boards, and peer-reviewed publication archive of Alan D.A. Mattiassi, PhD.",
};

export default function EnglishResearchPage() {
  const affiliations = [
    {
      name: "GAME Science Research Center (Game.Sci. Re.Center)",
      role: "Principal Investigator & Scientific Committee Member",
      place: "IMT School for Advanced Studies Lucca",
      years: "2019 – Present",
    },
    {
      name: "VirtHuLab (Virtual Human Lab)",
      role: "Research Fellow & Investigator",
      place: "University of Florence",
      years: "2022 – Present",
    },
    {
      name: "PSA — Psychological Science Accelerator",
      role: "Global Network Researcher (Big Team Science)",
      place: "International (Worldwide Sample Studies)",
      years: "2020 – Present",
    },
    {
      name: "Group for the Promotion of Game Research",
      role: "Research Member",
      place: "University of Modena and Reggio Emilia",
      years: "2016 – Present",
    },
    {
      name: "New Media Laboratory",
      role: "Research Member & Lecturer",
      place: "University of Udine",
      years: "2015 – Present",
    },
    {
      name: "Frontiers in Psychology",
      role: "Review Editor (Editorial Board)",
      place: "International Peer-Reviewed Journal",
      years: "Active",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Microscope className="w-3.5 h-3.5" />
          <span>SCIENTIFIC RESEARCH &bull; PEER-REVIEWED PAPERS &bull; EVIDENCE-BASED</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Research &amp; Scientific Publications
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          From experimental cognition to the epistemology of games
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          International peer-reviewed scientific papers, psychometrically validated scales (mcSQ, PMPVG),
          and research affiliations across prestigious European and global research networks.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://orcid.org/0000-0002-9996-0700"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-sky-400 bg-[var(--bg-card)] border border-sky-500/40 hover:bg-[var(--bg-card-hover)] transition-all"
          >
            <span>Official ORCID Profile (0000-0002-9996-0700)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/research-ricerca"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Affiliations & Research Centers Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-[var(--border-color)] pb-4">
          <h2 className="text-2xl font-bold text-[var(--text-main)]">Academic Affiliations &amp; Research Centers</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1">Scientific network and academic peer review appointments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliations.map((aff, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/40 transition-all space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/60">
                  {aff.years}
                </span>
                <Award className="w-4 h-4 text-[var(--text-subtle)]" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-main)] leading-snug">
                {aff.name}
              </h3>
              <p className="text-xs text-[var(--accent-primary)] font-medium">
                {aff.role}
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                {aff.place}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Full Publications Section Component */}
      <PublicationsSection />
    </div>
  );
}
