import React from "react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import ItFlag from "@/components/icons/ItFlag";
import {
  Compass,
  Layers,
  Microscope,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export const metadata = {
  title: "Work with me // Hire me! – Alan Mattiassi, PhD",
  description:
    "Engagement models, transparent indicative fee schedule, and discovery call booking with Alan Mattiassi, PhD (Game Psychologist).",
};

export default function EnglishHireMePage() {
  const pricingTable = [
    { activity: "Training Course", fee: "100 €/h online • 125 €/h in-person", category: "Training" },
    { activity: "Experiential Workshop", fee: "€500 to €2,500+ (based on duration & cohort size)", category: "Training" },
    { activity: "Festival & Event Keynote", fee: "150 €/h • from €500 (custom speech & visual assets)", category: "Speaking" },
    { activity: "University Invited Lecture", fee: "€500 (intensive masterclass up to 2 hours)", category: "Academia" },
    { activity: "Direct Advisory / Consultation", fee: "150 €/h brief • €300 – €1,000 structured sessions", category: "Advisory" },
    { activity: "Curricular / Educational Co-Design", fee: "€1,000 – €3,000 (calibrated on scope)", category: "Co-Design" },
    { activity: "Comprehensive Game Design Advisory", fee: "From €3,000 (game mechanics) • €5,000 – €10,000 (full cycle)", category: "Game Design" },
    { activity: "Corporate GBL & Gamification Architecture", fee: "€500 – €5,000 (depending on organizational complexity)", category: "Gamification" },
    { activity: "GBL Mentoring for School Educators", fee: "Complimentary (initial triage) • from 50 €/h (dedicated mentoring)", category: "Schools" },
    { activity: "Scientific Advisory & Psychometric Tooling", fee: "From €750 (tool development) • from €1,500 (validation & reporting)", category: "Research" },
    { activity: "Scientific Coordination of Multi-Partner Grants", fee: "Custom scope (aligned with grant/consortium budget)", category: "Research" },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONSULTING &bull; TRAINING &bull; GAME DESIGN &bull; EVIDENCE-BASED RESEARCH</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Work with me // Hire me!
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
          Tailored solutions grounded in the Psychology of Games
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          As a Game Psychologist — bridging the domains of experimental psychologist, university researcher,
          executive trainer, and public communicator — I support schools, universities, enterprises, non-profit organizations,
          and game studios in embedding games with scientific rigor. Below you will find an overview of collaboration modalities
          and an indicative, transparent fee schedule.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Schedule a free discovery call (30 min) →
          </a>
          <a
            href="#pricing"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            💰 View Transparent Rates Table ↓
          </a>
          <Link
            href="/hire-me-lavora-con-me"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Transparent Pricing Table */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
            TRANSPARENT PROFESSIONAL ENGAGEMENT
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Indicative Fee &amp; Investment Schedule
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-2xl mx-auto">
            All rates are indicative (excluding documented travel expenses) and are customized
            based on project complexity, institutional timeline, and unique partner requirements:
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--bg-surface)] border-b border-[var(--border-color)] text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-[var(--accent-primary)]">Service / Deliverable</th>
                  <th className="py-4 px-6 text-[var(--text-muted)] hidden sm:table-cell">Discipline</th>
                  <th className="py-4 px-6 text-[var(--accent-secondary)]">Indicative Reference Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {pricingTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[var(--bg-card-subtle)] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[var(--text-main)]">
                      {item.activity}
                    </td>
                    <td className="py-3.5 px-6 text-xs text-[var(--text-muted)] hidden sm:table-cell">
                      <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-medium text-[var(--text-muted)]">
                      {item.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] leading-relaxed text-center">
          * For institutional grant-funded initiatives (e.g., Erasmus+, Horizon Europe, National University Grants) or sustained retainers,
          flat-rate packages and coordinated research contracts can be customized.
        </div>
      </section>

      {/* 3. The 3 Macro-Areas of Collaboration */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--accent-secondary)] uppercase tracking-wider">
            ENGAGEMENT MODELS
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            The 3 Macro-Areas of Collaboration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Area 1 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-md">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-primary)] w-fit border border-[var(--border-color)]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                1. Training, Masterclasses &amp; Workshops
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                For educators, trainers, HR leaders, managers, and educational psychologists.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Modular certified programs in Game-Based Learning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Team dynamics and leadership gamified workshops</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Keynotes, festival talks, and high-impact science communication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Area 2 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-md">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-primary)] w-fit border border-[var(--border-color)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                2. Advisory &amp; Psychological Game Design
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                For game designers, development studios, publishers, and foundations.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Player motivation consulting, flow calibration &amp; decision ergonomics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Co-design of bespoke serious games for healthcare and education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Behavioral playtesting and systematic friction auditing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Area 3 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-md">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-secondary)] w-fit border border-[var(--border-color)]">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                3. Scientific Research &amp; Empirical Trials
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                For universities, research consortia, and institutional ethics committees.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Scientific leadership and research unit coordination</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Psychometric development and validation of scales (mcSQ, PMPVG)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Methodological oversight, statistical modeling &amp; paper co-authorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Booking Form Integration */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
