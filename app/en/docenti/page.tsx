import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  School,
  Clock,
  Compass,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "Educators & Schools – Evidence-Based Game-Based Learning | Alan Mattiassi, PhD",
  description:
    "Professional development for teachers and educational institutions on Game-Based Learning (GBL-02). From cognitive game psychology to curricular competencies.",
};

export default function EnglishDocentiPage() {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--pillar-scuola-bg)] border border-[var(--pillar-scuola-border)] text-[var(--pillar-scuola)] text-xs font-semibold uppercase tracking-wider">
          <School className="w-3.5 h-3.5" />
          <span>TEACHER TRAINING &bull; K-12 &amp; HIGHER ED &bull; GAME-BASED LEARNING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Game-Based Learning for Schools:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            From Cognitive Psychology to Competency-Based Instruction
          </span>
        </h1>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Not merely a playful break in the classroom, but a rigorous instructional methodology.
          An evidence-based professional development program enabling educators to understand,
          facilitate, and autonomously design active learning experiences tightly aligned with curricular goals.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Request a proposal for your school / Book a call (30 min) →
          </Link>
          <a
            href="#methodology"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            🧭 Explore the GBL-02 Framework ↓
          </a>
          <Link
            href="/docenti"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Scientific Authority Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--pillar-scuola)]">10+</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Universities and Research Centers as partners &amp; clients
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">1,000+</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Educators and teachers trained across school districts
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--pillar-scuola)]">50+</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Structured learning programs deployed for educational institutions
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">TEDx</div>
            <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
              Speaker at TEDx Udine on how games reveal who we are
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Classroom Challenge: Beyond Superficial Fun */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            THE CRUCIAL CLASSROOM TENSION
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            When Playing in Class Is Not Enough (And Why Fun Does Not Equal Competence)
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
          <p>
            Traditional lecturing efficiently transfers theoretical facts and notions. However, developing genuine
            <strong> transversal competencies</strong> (decision-making under pressure, collaboration, navigating ambiguity, complex problem-solving)
            requires <strong>meaningful experiences</strong> where students act firsthand and evaluate the tangible consequences of their decisions.
          </p>

          <p>
            Many games introduced in school create immediate excitement. Yet <strong>not all games yield enduring learning</strong>.
            The weak link is rarely the game itself, but rather the absence of a grounded cognitive and pedagogical architecture:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>The Entertainment Fallacy</span>
              </div>
              <p className="text-xs text-[var(--text-subtle)]">
                Bringing a game to class without embedding it in an instructional framework turns it into an isolated break that leaves no trace in learning.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Parasitic Messages</span>
              </div>
              <p className="text-xs text-[var(--text-subtle)]">
                If mechanics are misaligned with learning outcomes, games can inadvertently reinforce stereotypes, frustration, or toxic social dynamics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] space-y-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Absence of Debriefing</span>
              </div>
              <p className="text-xs text-[var(--text-subtle)]">
                Play without guided reflection fades immediately. Learning is synthesized not during gameplay, but in the post-game structured debrief.
              </p>
            </div>
          </div>

          <blockquote className="border-l-2 border-[var(--pillar-scuola)] pl-4 py-2 italic text-[var(--text-main)] bg-[var(--bg-card-subtle)] rounded-r-xl">
            “Educational transformation depends not on the experience itself, but on how that experience is structured, observed, interpreted, and debriefed.” &bull; <strong className="text-[var(--text-main)]">Alan Mattiassi, PhD</strong>
          </blockquote>
        </div>
      </section>

      {/* 4. The GBL-02 Methodological Framework */}
      <section id="methodology" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            THE METHODOLOGICAL FRAMEWORK (GBL-02)
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            The 5 Phases of the Professional Development Path
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-2xl mx-auto">
            Engineered at the intersection of cognitive sciences, educational psychology, and applied game design.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              num: "01",
              title: "Redefining the Concept of Games",
              desc: "Deconstructing common misconceptions. Examining the evolutionary, cognitive, and ethological foundations that make play the natural mechanism through which human beings rehearse complexity without risking irreversible real-world damage.",
              bases: "Game Psychology, Learning Psychology, Evolutionary Neurosciences",
            },
            {
              num: "02",
              title: "Understanding How Games Generate Learning",
              desc: "Deep analysis of cognitive mechanisms: how meaningful challenge, immediate feedback loops, intrinsic motivation, and safe error management stimulate neuroplasticity and consolidate long-term retention.",
              bases: "Motivation Psychology, Learning Neuroscience, Cognitive Sciences",
            },
            {
              num: "03",
              title: "Experiencing Games as Learning Environments",
              desc: "Educators actively play calibrated game systems. Direct experiential involvement surfaces decision-making patterns, cooperation, competition, and cognitive biases that are typically implicit.",
              bases: "Experiential Learning, Decision Theory, Situated Cognition",
            },
            {
              num: "04",
              title: "Reframing Experience via Pedagogical Debriefing",
              desc: "The methodological core. Educators master professional debriefing protocols: catalytic questions, emotional mediation, co-constructing meaning, and connecting game insights to real curricular challenges.",
              bases: "Metacognitive Pedagogy, Active Learning, Psychology of Reasoning",
            },
            {
              num: "05",
              title: "Designing Game-Based Educational Interventions",
              desc: "Teachers learn to design educational units starting from curricular goals: selecting appropriate games, adapting rules (Universal Game Design for Learning), or drafting original pedagogical frameworks.",
              bases: "Instructional Design, Game Design, Authentic Assessment",
            },
          ].map((phase) => (
            <div
              key={phase.num}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--pillar-scuola)] transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--pillar-scuola-bg)] border border-[var(--pillar-scuola-border)] text-[var(--pillar-scuola)] font-extrabold text-xl flex items-center justify-center flex-shrink-0">
                {phase.num}
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="text-lg font-bold text-[var(--text-main)]">{phase.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{phase.desc}</p>
                <div className="text-xs text-[var(--pillar-scuola)] font-medium pt-1">
                  Scientific foundations: <span className="text-[var(--text-subtle)]">{phase.bases}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Delivery Formats for Institutions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--pillar-scuola)] uppercase tracking-wider">
            DELIVERY FORMATS
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Flexible Solutions for Schools and Universities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[var(--pillar-scuola)] uppercase tracking-wider">Short Format</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Intensive Workshop</h3>
              <p className="text-xs text-[var(--text-subtle)]">Duration: 3 – 6 hours (In-person or Online)</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Theoretical and experiential introduction to Game-Based Learning foundations, testing curated games, and mastering initial classroom debriefing techniques.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border-color)]">
              <Link
                href="/en/hire-me-lavora-con-me"
                className="text-xs font-semibold text-[var(--pillar-scuola)] hover:underline inline-flex items-center space-x-1"
              >
                <span>Request institution quote →</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Recommended</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Modular Course GBL-02</h3>
              <p className="text-xs text-emerald-400 font-medium">Duration: 12 – 25 hours (Accredited)</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                The comprehensive 5-phase pathway. Includes hands-on simulations, debriefing facilitation, co-design of discipline-specific teaching units, and operational toolkits.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border-color)]">
              <Link
                href="/en/hire-me-lavora-con-me"
                className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center space-x-1"
              >
                <span>Request comprehensive proposal →</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Custom Tailored</span>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Pilot Project &amp; Co-Design</h3>
              <p className="text-xs text-[var(--text-subtle)]">Duration: Semester or Full Academic Year</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Ongoing pedagogical mentoring with in-class observation, co-creating customized educational games for the institution, and longitudinal impact evaluation.
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border-color)]">
              <Link
                href="/en/hire-me-lavora-con-me"
                className="text-xs font-semibold text-purple-400 hover:underline inline-flex items-center space-x-1"
              >
                <span>Schedule exploratory meeting →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Want to bring Game-Based Learning to your institution?
        </h3>
        <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
          Contact me to schedule an introductory video call with school leadership or the teacher board.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
          >
            Contact Alan Mattiassi for your school →
          </Link>
        </div>
      </section>
    </div>
  );
}
