import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Compass,
  Sparkles,
  Search,
  Eye,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "What Systems Conceal – Methodology & Game Mindset | Alan Mattiassi, PhD",
  description:
    "Systems thinking and game psychology applied to deciphering complex systems, organizational dynamics, and hidden misalignments.",
};

export default function EnglishComeLavoroPage() {
  const systemElements = [
    { title: "📜 RULES", desc: "Explicit regulations and unspoken implicit norms that govern interactions." },
    { title: "🎯 INCENTIVES", desc: "Genuine motivations, intrinsic and extrinsic drivers steering action." },
    { title: "♟️ STRATEGIES", desc: "Emergent behaviors adopted by individuals to adapt to the surrounding context." },
    { title: "🔄 FEEDBACK", desc: "Information return: speed, clarity, and psychological impact of system responses." },
    { title: "🎭 ROLES", desc: "Reciprocal expectations, perceived identity, and hierarchical vs. horizontal dynamics." },
    { title: "🏆 VICTORY", desc: "Defined lusory goals, authentic success metrics, and collective purpose alignment." },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>METHODOLOGY &bull; GAME MINDSET &bull; SYSTEMS THINKING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          What Systems Conceal
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Deciphering invisible complexity through the lens of games
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          I help organizations, educators, game designers, and teams thoroughly understand the complex systems
          they navigate, detect hidden friction points, and design robust, long-lasting interventions.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Book an exploratory discovery call (30 min) →
          </Link>
          <a
            href="#system-lens"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            🧭 The 6 Systemic Elements ↓
          </a>
          <Link
            href="/come-lavoro"
            className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. The 6 System Elements through the Lens of Games */}
      <section id="system-lens" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            THE DECODING LENS
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Why use the lens of games to understand organizations?
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-2xl mx-auto">
            Game psychology teaches us to decode human organizational systems by examining six foundational pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemElements.map((elem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/40 transition-all space-y-3 shadow-md"
            >
              <h3 className="text-lg font-bold text-[var(--text-main)]">{elem.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{elem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Invisible Problem & The Solution */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-6 shadow-xl">
          <div className="flex items-center space-x-3 text-amber-400">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-[var(--text-main)]">The Invisible Problem</h3>
          </div>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            Many training initiatives, corporate transformations, and educational projects stumble not from lack of commitment or budget,
            but because they rest on <strong>unspoken assumptions that are never questioned</strong>:
          </p>

          <ul className="space-y-2 text-sm text-[var(--text-muted)] pl-4 border-l-2 border-amber-500/40">
            <li>&bull; Months are invested in the wrong direction because the core problem was never diagnosed;</li>
            <li>&bull; Promising methodologies deliver underwhelming outcomes due to invisible frictions;</li>
            <li>&bull; Teams chase conflicting priorities believing they are collaborating toward the same target;</li>
            <li>&bull; Surface-level fixes are introduced without rethinking the systemic foundation.</li>
          </ul>

          <div className="pt-4 border-t border-[var(--border-color)] space-y-4">
            <div className="flex items-center space-x-3 text-emerald-400">
              <Eye className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-[var(--text-main)]">The Grounded Solution</h3>
            </div>
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              Through game psychology and systemic game thinking, we bring what the system conceals into plain view:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text-main)] block mb-1">Make Assumptions Visible</strong>
                Identify the cognitive biases and unspoken norms guiding daily choices.
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text-main)] block mb-1">Decode Authentic Incentives</strong>
                Map what truly engages people beyond formal performance statements.
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text-main)] block mb-1">Resolve Strategic Misalignments</strong>
                Realign mental frameworks, operational tools, and explicit lusory goals.
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text-main)] block mb-1">Validate Before Deployment</strong>
                Stress-test behavioral hypotheses with qualitative and quantitative metrics before allocating heavy capital.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Collaboration Modes with Real Case Studies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            HOW WE COLLABORATE
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Three Practical Modes of Engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-md">
            <h3 className="text-lg font-bold text-[var(--text-main)]">
              1. 🧭 Workshops &amp; Experiential Training
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              For schools, universities, and corporations seeking to cultivate new competencies and deploy play purposefully.
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-1">
              <strong className="text-emerald-400 block">Case Studies:</strong>
              <p>&bull; 3,500 adolescents trained online for AVIS FVG.</p>
              <p>&bull; Evaluation of internal relational dynamics for I.T.I.S. Trieste.</p>
              <p>&bull; Orientation game for 300+ simultaneous students (UniTS).</p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-md">
            <h3 className="text-lg font-bold text-[var(--text-main)]">
              2. 🔬 Strategic &amp; Scientific Review
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Methodological and scientific auditing of serious games, educational grants, or innovation initiatives prior to public rollout.
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-1">
              <strong className="text-sky-400 block">Deliverables include:</strong>
              <p>&bull; Mapping of decision trees and motivational friction points.</p>
              <p>&bull; Detection of parasitic messaging and cognitive overload.</p>
              <p>&bull; Executive report packed with actionable design pivots.</p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 shadow-md">
            <h3 className="text-lg font-bold text-[var(--text-main)]">
              3. 📐 Co-Design &amp; Participatory Development
            </h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              End-to-end guidance in engineering custom playful artifacts, serious games, and interactive workshops.
            </p>
            <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-1">
              <strong className="text-purple-400 block">Key applications:</strong>
              <p>&bull; Games fostering inclusion and challenging unconscious bias.</p>
              <p>&bull; Assessment instruments evaluating transversal soft skills.</p>
              <p>&bull; Community engagement and participatory civic initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Ready to diagnose what your organizational system is concealing?
        </h3>
        <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
          Schedule a no-commitment 30-minute discovery call to explore your scenario.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:scale-105 transition-all"
          >
            Start with an exploratory call →
          </Link>
        </div>
      </section>
    </div>
  );
}
