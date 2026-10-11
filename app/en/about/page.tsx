import React from "react";
import Image from "next/image";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  Award,
  Sparkles,
  Calendar,
  ExternalLink,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Microscope,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Me // Biography & Vision – Alan Mattiassi, PhD",
  description:
    "Biography, academic background, and scientific vision of Alan D.A. Mattiassi, PhD: Game Psychologist, researcher, educator, and keynote speaker.",
};

export default function EnglishAboutPage() {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GAME PSYCHOLOGIST &bull; RESEARCHER &bull; TRAINER &bull; KEYNOTE SPEAKER</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
          Alan D.A. Mattiassi<span className="text-[var(--accent-primary)]">, PhD</span>
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Game Psychologist
        </p>
        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
          Exploring the <strong>human mind through games</strong>: I study, design, and teach how to harness playful systems to foster learning, personal growth, and strategic transformation.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
          >
            📅 Book a free discovery call (30 min) →
          </Link>
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-5 py-3 rounded-xl font-medium text-sm text-[var(--btn-secondary-text)] bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] hover:bg-[var(--bg-surface)] transition-all"
          >
            💼 Explore what I can do for you
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. Main Bio & Portrait (2 cols) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait & Key Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] p-3 shadow-2xl">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src="/images/profilo-2.jpg"
                  alt="Alan D.A. Mattiassi, PhD"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-primary)] mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Principal Investigator</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Committee on Research in Game Psychology &bull; <strong>GAME Science Research Center</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500 mt-0.5">
                  <span className="font-bold text-xs">TEDx</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">TEDx Speaker (Udine)</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    <em>How games help us discover who we are</em>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Academic Qualifications</div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Ph.D. in Multimedia Communication &bull; Master&apos;s Degree in Psychology
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[var(--text-muted)] leading-relaxed text-base">
            <div className="border-b border-[var(--border-color)] pb-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
                About Me &amp; My Scientific Vision
              </h2>
              <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider mt-1">
                Psychologist &bull; Researcher &bull; Trainer &bull; Speaker
              </p>
            </div>

            <p>
              I am a <strong>game psychologist</strong>. In my professional work, I operate as a
              <strong> psychologist, researcher, educator, and science communicator</strong>. I utilize games both as an
              <em> empirical scientific probe</em> and as a <em>transformative methodology</em> to gain deep insights
              into human cognition, brain mechanisms, and social behavior, nurturing authentic motivation and durable learning.
            </p>

            <blockquote className="border-l-2 border-emerald-400 pl-4 py-2 italic text-[var(--text-main)] bg-[var(--bg-card-subtle)] rounded-r-xl">
              “I do not merely believe in the power of games: I study it. A game is not a magic cure-all that automatically solves every educational or organizational challenge; it is a structured system of rules and constraints that triggers specific cognitive processes. Once we understand these psychological mechanisms, we can harness them to genuinely elevate people&apos;s lives.”
            </blockquote>

            <p>
              I earned my <strong>Master&apos;s Degree in Psychology</strong> and completed my <strong>Ph.D. in Multimedia Communication</strong>.
              My work focuses on bridging rigorous empirical science and applied game design, engineering playful artifacts and instructional programs grounded in peer-reviewed cognitive psychology and neurosciences.
            </p>

            <p>
              Over the years, I have collaborated with numerous international research teams and universities, contributing to high-impact EU-funded initiatives such as <em>Free to Choose</em> (countering gender bias in career decision-making). I also brought the science of games to the <strong>TEDx Udine</strong> stage with a talk examining how games allow us to map our identity and explore our cognitive boundaries.
            </p>

            <p>
              Currently, I offer my advisory services as a <strong>game psychologist, consultant, and speaker</strong> for schools, universities, corporations, foundations, and public institutions. If you have a project or a strategic challenge to address, I will be delighted to connect and assess how we can collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Metrics & Impact Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
              METRICS &amp; ACADEMIC CREDIBILITY
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
              Experience &amp; Scientific Rigor
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">10+ Years</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Field experience in game psychology and instructional design
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">Ph.D.</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Doctorate in Multimedia Communication &amp; Master&apos;s in Psychology
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">H-Index 8</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Scopus Score with over 245+ peer-reviewed international citations
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)]">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">1,000+</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium">
                Educators, managers, and trainers trained across institutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Looking to collaborate or explore an idea?
        </h3>
        <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
          I work as an independent consultant, keynote speaker, and researcher internationally. I look forward to an introductory discussion.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20"
          >
            Work with me // Rates &amp; Packages →
          </Link>
        </div>
      </section>
    </div>
  );
}
