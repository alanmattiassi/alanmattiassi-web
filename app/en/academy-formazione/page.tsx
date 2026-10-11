import React from "react";
import Link from "next/link";
import ItFlag from "@/components/icons/ItFlag";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Building,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Academy & University Appointments – Alan Mattiassi, PhD",
  description:
    "University courses, GIOCARSI Master (UniFi), academic lectureships (UniUd, ITS Kennedy), and specialized masterclasses with Alan Mattiassi, PhD.",
};

export default function EnglishAcademyPage() {
  const academicCourses = [
    {
      title: "Master GIOCARSI in the Professional World",
      institution: "University of Florence (FORLILPSI)",
      role: "Adjunct Professor / Contract Lecturer",
      desc: "Postgraduate master's module on Gamification, Game-Based Learning, and soft skills development for vocational orientation and workforce readiness.",
      years: "Academic Years 2021-2022, 2022-2023, 2023-2024",
    },
    {
      title: "Psychology of New Media & Human-Computer Interaction (12 ECTS)",
      institution: "University of Udine (Dept. of Mathematics & Computer Science)",
      role: "Sole Adjunct Professor",
      desc: "Comprehensive undergraduate academic course focusing on cognitive processes, mediated communication, usability, and cognitive ergonomics of digital systems.",
      years: "Academic Years 2015-2016, 2016-2017, 2017-2018 (144 hours)",
    },
    {
      title: "Social Robotics Laboratory (SPS/08)",
      institution: "University of Udine",
      role: "Adjunct Lecturer",
      desc: "Specialized lab investigating human-robot interaction, embodied cognition, and joint action coordination mechanisms.",
      years: "Academic Years 2015-2016, 2016-2017",
    },
    {
      title: "Psychology for Design & Digital Technologies",
      institution: "ITS Kennedy (Pordenone)",
      role: "Official Faculty Member",
      desc: "Specialized two-year course in perceptual psychology, cognitive ergonomics, affordances, emotional design, and product usability.",
      years: "Academic Years 2019-2020, 2020-2021",
    },
    {
      title: "Professionalizing Seminar on Games & Cognitive Competencies",
      institution: "University of Trieste (Dept. of Life Sciences)",
      role: "Official Faculty Member",
      desc: "Accredited specialist seminar examining game psychology applications within socio-educational and psychological domains.",
      years: "Academic Year 2023-2024",
    },
    {
      title: "Game-Based Learning in Dietary & Health Promotion",
      institution: "CNR / CREA - Research Centre for Food and Nutrition",
      role: "Specialist Scientist & Master Trainer",
      desc: "Scientific methodology training for senior researchers and technologists on deploying GBL frameworks to cultivate healthy lifestyle habits.",
      years: "2024 – 2025",
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 bg-[var(--bg-canvas)] transition-colors">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMY &bull; UNIVERSITY TEACHING &bull; HIGHER EDUCATION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
          Academy &amp; University Teaching
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400">
          Academic appointments, master’s programs, and professionalizing certifications
        </p>

        <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Over a decade of university-level lecturing across Italian universities and post-diploma academies.
          An instructional approach combining peer-reviewed scientific accuracy with direct real-world applicability.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/academy-formazione"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all"
          >
            <ItFlag className="w-4 h-3 rounded-[2px]" />
            <span>Versione in Italiano</span>
          </Link>
        </div>
      </section>

      {/* 2. University Courses List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-[var(--border-color)] pb-4">
          <h2 className="text-2xl font-bold text-[var(--text-main)]">Academic Courses &amp; Appointments</h2>
          <p className="text-xs text-[var(--text-muted)] mt-1">University departments, postgraduate masters, and technological institutes</p>
        </div>

        <div className="space-y-4">
          {academicCourses.map((course, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-indigo-500/40 transition-all space-y-2 shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-[var(--text-main)]">{course.title}</h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 w-fit">
                  {course.years}
                </span>
              </div>
              <div className="text-xs font-medium text-sky-400">
                {course.institution} &bull; <span className="text-[var(--text-muted)]">{course.role}</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] pt-1 leading-relaxed">
                {course.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
          Interested in commissioning an academic module for your university or institution?
        </h3>
        <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
          Available for contract university lecturing, master&apos;s program modules, and specialized summer schools.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/en/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-sky-600 shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all"
          >
            Contact Alan Mattiassi for academic lecturing →
          </Link>
        </div>
      </section>
    </div>
  );
}
