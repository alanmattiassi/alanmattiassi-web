import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Sparkles,
  Download,
  ExternalLink,
  BookOpen,
  Globe,
  Compass,
  Layers,
  Brain,
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle2,
  Share2,
} from "lucide-react";

export const metadata = {
  title: "A New Theoretical Framework for the Psychology of Games – Alan Mattiassi, PhD",
  description:
    "A unifying theoretical framework for the psychology of games by Alan Mattiassi, PhD, published in Canadian Journal of Experimental Psychology (APA). The 4 core dimensions of the playful experience.",
};

export default function EnglishFrameworkPage() {
  const paperDoi = "https://doi.org/10.1037/cep0000413";
  const paperPdf = "/images/Redefining_the_Psychology_of_Games_Mattiassi_Accepted_Manuscript-1.pdf";

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SCIENTIFIC PUBLICATION &bull; CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          A New Theoretical Framework for the Psychology of Games
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          What makes an experience a game?
        </p>

        <div className="w-20 h-1 bg-[var(--accent-primary)] mx-auto rounded-full" />

        <div className="max-w-3xl mx-auto space-y-4 text-[var(--text-muted)] text-base sm:text-lg leading-relaxed text-left sm:text-center">
          <p>
            The psychology of games has generated an extensive volume of research, but has historically approached the phenomenon through fragmented lenses: <strong>play and gaming, motivation, emotions, learning, decision-making, and social behavior</strong> have often been studied using conflicting definitions and isolated paradigms.
          </p>
          <p>
            In this paper, I propose a <strong>unifying framework for the psychology of games</strong>, developed to conceptualize gaming as a complex, systemic psychological phenomenon, irrespective of the particular medium, genre, or context in which it takes place.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#download"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Article (PDF) →</span>
          </a>

          <a
            href="#dimensions"
            className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all"
          >
            <Brain className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>The 4 Dimensions</span>
          </a>

          <Link
            href="/framework-psicologia-del-gioco"
            className="inline-flex items-center space-x-2.5 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all group shadow-sm"
            title="Leggi in Italiano (IT)"
          >
            <ItFlag className="w-5 h-3.5 rounded-[2px] shadow-sm flex-shrink-0" />
            <span className="font-bold text-[var(--text-main)]">IT</span>
            <span className="text-[var(--border-strong)] opacity-60">|</span>
            <span>Versione in Italiano</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </section>

      {/* 2. The 4 Core Dimensions */}
      <section id="dimensions" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>THEORETICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            The Four Core Psychological Dimensions
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            The model identifies four interconnected psychological dimensions that capture the playful experience in its systemic totality:
          </p>
        </div>

        {/* 4 Dimension Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Dimension 1 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-sky-400 transition-colors">
                1. Regulated Symbolic Framing
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              The <strong>construction and maintenance of a regulated symbolic frame</strong> that distinguishes what occurs in the game from ordinary reality.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Establishes the <em>psychological magic circle</em> within which meanings, actions, and consequences attain specific validity, enabling players to act freely within shared constraints.
            </p>
          </div>

          {/* Dimension 2 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-amber-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-amber-400 transition-colors">
                2. Altered Role Perspective
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              The <strong>assumption of a role perspective</strong> that alters how individuals interpret themselves, others, and the ongoing situation.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Enables identity experimentation, perspective-taking, empathy, and the recoding of social dynamics, offering a protected psychological distance to explore complex scenarios.
            </p>
          </div>

          {/* Dimension 3 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-emerald-400 transition-colors">
                3. Goal-Organized Performance
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              The <strong>organization of action around lusory goals, rules, and conditions for success</strong>.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Structures intrinsic and extrinsic motivation, channels attentional effort, and defines feedback loops through the voluntary adoption of unnecessary obstacles to achieve the lusory goal.
            </p>
          </div>

          {/* Dimension 4 */}
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-purple-500/50 p-7 sm:p-8 space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-purple-400 transition-colors">
                4. Metacognitive Executive Monitoring
              </h3>
            </div>
            <p className="text-sm text-[var(--text-main)] leading-relaxed font-medium">
              The <strong>conscious monitoring and regulation of one&apos;s own cognitive and behavioral processes</strong> throughout the experience.
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Drives strategic reflection, real-time self-evaluation, error monitoring, and flexible behavioral adaptation under uncertainty, ensuring the player remains metacognitively aware while immersed.
            </p>
          </div>
        </div>

        {/* Dynamic & Systemic Callout Box */}
        <div className="rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] p-6 sm:p-8 space-y-3">
          <div className="flex items-center space-x-2 text-[var(--accent-primary)] font-bold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Dynamic Interaction and Systemic Nature</span>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
            These dimensions <strong>do not constitute independent components to be simply summed up</strong> to produce a &ldquo;game level.&rdquo; Instead, they <strong>interact dynamically</strong> and carry different relative weights depending on the game, the context, and the individual player.
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            The objective is to <strong>move beyond a conception of games based exclusively on observable manifestations</strong> and provide a solid theoretical foundation to study the psychology of games as such.
          </p>
        </div>
      </section>

      {/* 3. Epistemological Foundations */}
      <section id="why" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>EPISTEMOLOGICAL FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Why this framework?
          </h2>
          <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
            What happens psychologically when we play?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-emerald-400">
              🧩 The Need for a Unified Psychological Vision
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              The scientific investigation of games within psychology has historically rested on a deeply fragmented terrain: developmental psychology focused on <em>play</em>, media psychology on <em>gaming</em>, educational psychology on <em>game-based learning</em>, and organizational psychology on <em>gamification</em>.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              In the absence of a unifying theoretical framework, empirical findings risk remaining <strong>isolated, non-generalizable case studies</strong>. Unifying the theoretical perspective equips research with a common vocabulary capable of reinterpreting existing empirical evidence and designing interventions firmly anchored in the core psychological processes that games activate.
            </p>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-sky-400">
              🗺️ A Shared Research Agenda
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              This paradigm opens an ambitious research agenda to investigate seemingly distant phenomena within a comparable, systematic framework:
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🎲 From <strong>analog tabletop board games</strong> to <strong>digital video games</strong>;</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🎓 From <strong>educational games and edularp</strong> to relational organizational simulations;</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                <span>🏆 From <strong>esports and competitive play</strong> to applied behavioral gamification.</span>
              </li>
            </ul>
            <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
              All integrated within a single, rigorous, replicable theoretical model.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Published Scientific Paper */}
      <section id="download" className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-[var(--accent-primary)]/40 p-7 sm:p-10 space-y-8 shadow-2xl">
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL PUBLICATION &bull; CANADIAN JOURNAL OF EXPERIMENTAL PSYCHOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              The Scientific Paper
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto">
              The article is published in the prestigious journal <strong>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</strong> (APA / CPA).
            </p>
          </div>

          {/* Paper Details Card */}
          <div className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] leading-snug">
              Redefining the Psychology of Games: A Unifying Framework Beyond Play and Gaming
            </h3>
            <div className="text-sm space-y-1 text-[var(--text-muted)]">
              <p>
                <strong>Author:</strong> <span className="text-[var(--text-main)]">Alan D. A. Mattiassi, Ph.D.</span>
              </p>
              <p>
                <strong>Journal:</strong> <em>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</em>
              </p>
              <p>
                <strong>Editorial Status:</strong> <span className="text-emerald-400 font-semibold">Published (Advance online publication)</span>
              </p>
              <p>
                <strong>Official DOI:</strong>{" "}
                <a
                  href={paperDoi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-primary)] hover:underline inline-flex items-center space-x-1"
                >
                  <span>{paperDoi}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={paperPdf}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD THE PAPER (PDF) →</span>
            </a>

            <a
              href={paperDoi}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-all text-center"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Official DOI Page (APA)</span>
            </a>
          </div>

          {/* Citation Box */}
          <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
            <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>How to cite this work (APA format)</span>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] font-mono text-xs sm:text-sm text-[var(--text-main)] leading-relaxed select-all">
              Mattiassi, A. D. A. (2024). Redefining the psychology of games: A unifying framework beyond play and gaming. <em>Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale</em>. Advance online publication. https://doi.org/10.1037/cep0000413
            </div>
            <p className="text-[11px] text-[var(--text-muted)] italic">
              For academic citations and bibliographic references, please use the official version with the APA DOI.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Author Information */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-7 sm:p-9 space-y-4">
          <h2 className="text-2xl font-bold text-[var(--text-main)]">
            About the Author
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <strong>Alan D. A. Mattiassi, Ph.D.</strong> is a game psychologist, independent researcher, and consultant. His research, teaching, and science communication focus on the psychology of games, game-based learning, gamification, game design, motivation, and cognitive processes in playful environments.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/en/about"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-[var(--accent-primary)] hover:opacity-90 transition-opacity"
            >
              <span>Learn more about Alan Mattiassi&apos;s research →</span>
            </Link>
            <Link
              href="/en/hire-me-lavora-con-me"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-surface)] border border-[var(--btn-secondary-border)] transition-colors"
            >
              <span>Consulting &amp; Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)] tracking-tight">
          Want to apply this framework to your organization or project?
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          From instructional design to game development consulting and evidence-based corporate HR interventions.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            <span>Get in touch for collaboration or consulting →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
