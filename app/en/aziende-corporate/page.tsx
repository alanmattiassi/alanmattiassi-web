import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Briefcase,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  ShieldAlert,
  ArrowRight,
  Building,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Corporate & Enterprise – Evidence-Based Training & Gamification | Alan Mattiassi, PhD",
  description:
    "Game-based learning and gamification interventions for corporate organizations, HR directors, executives, and teams. Leadership, decision making, and group dynamics.",
};

export default function EnglishAziendePage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--pillar-aziende-bg)] border border-[var(--pillar-aziende-border)] text-[var(--pillar-aziende)] text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CORPORATE TRAINING &bull; ORGANIZATIONAL WELL-BEING &bull; STRATEGIC LEADERSHIP</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Game-Based Learning for Enterprises &amp; HR:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
            Group Dynamics, Decision Making &amp; Strategic Leadership
          </span>
        </h1>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Beyond disposable team building. We deploy game psychology and structured debriefing
          as a complexity simulator to reveal mental models, align cross-functional teams, and sharpen
          strategic decision-making under uncertainty.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Book a discovery call (30 min) →
          </Link>
          <a
            href="#corporate-areas"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            💼 Explore the 6 Transformation Areas ↓
          </a>
          <Link
            href="/aziende-corporate"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Authority Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--pillar-aziende)]">10+ Years</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Field experience with complex corporate organizations and executive teams
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">4.8 / 5</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Average participant satisfaction and perceived strategic utility
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--pillar-aziende)]">100%</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Evidence-based methodologies validated by cognitive and behavioral psychology
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">Executive</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Comprehensive analytical debrief and qualitative reporting for HR leadership
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Organizational Challenge: Beyond Disposable Team Building */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            THE ORGANIZATIONAL CHALLENGE
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Why Traditional Team Building Rarely Changes Behavior
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
          <p>
            Many companies invest significant budgets in recreational outings, escape rooms, or team dinners hoping
            to enhance collaboration. Yet by the following Monday, underlying friction, communication bottlenecks,
            and inter-departmental silos return unchanged.
          </p>

          <p>
            This occurs because purely recreational activities lack a <strong>metacognitive reflective framework</strong> and a
            <strong> psychologically safe space</strong> in which to observe and deconstruct interpersonal operational dynamics.
          </p>

          <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
            <h4 className="text-sm font-bold text-[var(--pillar-aziende)] mb-2">The power of games as a behavioral simulator:</h4>
            <p className="text-xs text-[var(--text-main)] leading-relaxed">
              Inside a game, people do not merely act out corporate expectations: <strong>they play who they genuinely are</strong>.
              Under time constraints and resource scarcity, authentic leadership styles, conflict resolution approaches,
              risk tolerances, and communication filters surface naturally. Guided by a <strong>psychologist-led debriefing</strong>,
              these implicit dynamics become visible, actionable, and transformable into new organizational habits.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 6 Areas of Organizational Transformation */}
      <section id="corporate-areas" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--pillar-aziende)] uppercase tracking-wider">
            AREAS OF INTERVENTION
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            The 6 Pillars of Organizational Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Horizontal Leadership & Delegation",
              desc: "Cultivating coordination without authoritarian friction, relying on team competence, and granting authentic operational autonomy.",
            },
            {
              title: "Decision Making Under Uncertainty",
              desc: "Overcoming analysis paralysis, balancing risk/reward profiles, and executing timely strategic choices under incomplete information.",
            },
            {
              title: "Communication & Relational Ergonomics",
              desc: "Deconstructing systemic misunderstandings, dismantling functional silos between teams, and co-creating shared vocabulary aligned with common objectives.",
            },
            {
              title: "Failure Reframing & Systemic Resilience",
              desc: "Transforming errors from personal guilt into vital feedback for the entire organizational system, stimulating innovative experimentation.",
            },
            {
              title: "Organizational Climate & Psychological Safety",
              desc: "Establishing interpersonal conditions where team members freely pitch ideas, raise critical concerns, or seek help without fear of judgment.",
            },
            {
              title: "Co-Design of Gamification Systems",
              desc: "Designing evidence-based internal motivational architectures—eschewing toxic competitive leaderboards—for onboarding, retention, and training.",
            },
          ].map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--pillar-aziende)] transition-all space-y-2"
            >
              <h3 className="text-lg font-bold text-[var(--text-main)] flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--pillar-aziende)] flex-shrink-0" />
                <span>{area.title}</span>
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed pl-7">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Real Case Studies & Clients */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            TRACK RECORD &amp; CASE STUDIES
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Organizations That Experienced the Method
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <h3 className="text-lg font-bold text-[var(--text-main)]">The Business Game s.r.l.</h3>
            <p className="text-xs text-sky-400 font-semibold">Simulations &amp; Competency Assessment</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Ongoing psychological advisory and debriefing applied to complex business simulations for executives and high-potential graduates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <h3 className="text-lg font-bold text-[var(--text-main)]">Timenet SpA</h3>
            <p className="text-xs text-[var(--pillar-aziende)] font-semibold">Leadership &amp; Team Cohesion</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Experiential workshop for management focused on negotiation, vision alignment, and mutual interpersonal trust.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <h3 className="text-lg font-bold text-[var(--text-main)]">Medipass (Ergéa Group)</h3>
            <p className="text-xs text-purple-400 font-semibold">Healthcare &amp; Multidisciplinary Teams</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Training programs for medical and executive directors to optimize team collaboration under high stress and enhance communication ergonomics.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Formats & Transparent Pricing */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--pillar-aziende)]/50 p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[var(--pillar-aziende)] uppercase tracking-wider">
              PRICING TRANSPARENCY &bull; ENGAGEMENT OPTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              1-Day Executive Corporate Workshop (In-Person)
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Ideal for teams of 8 to 20 participants. Includes a preliminary alignment call with HR/executive leadership, curation or co-design of game dynamics, workshop facilitation with structured debriefing, and an analytical post-event qualitative report.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[var(--text-subtle)]">Indicative Investment Level</div>
              <div className="text-2xl sm:text-3xl font-black text-[var(--pillar-aziende)]">
                Starting from €1,500 <span className="text-xs font-normal text-[var(--text-subtle)]">/ day (+ travel expenses)</span>
              </div>
            </div>
            <Link
              href="/en/hire-me-lavora-con-me"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center flex-shrink-0"
            >
              Check Date Availability →
            </Link>
          </div>

          <p className="text-xs text-[var(--text-subtle)] italic">
            * For multi-session modular programs, continuous corporate academies, or custom serious game development, dedicated proposals are formulated based on scope and strategic complexity.
          </p>
        </div>
      </section>
    </div>
  );
}
