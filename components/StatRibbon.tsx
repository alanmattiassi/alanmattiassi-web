"use client";

import React from "react";
import { Users, Clock, Building, TrendingUp } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function StatRibbon() {
  const { isEn } = useLanguage();

  const stats = [
    {
      value: "1000+",
      label: isEn ? "Educators & Trainers" : "Docenti & Formatori",
      detail: isEn ? "Trained across courses, workshops & masterclasses" : "Formati in corsi, workshop e masterclass",
      icon: Users,
      color: "from-sky-400 to-blue-500",
    },
    {
      value: "100+",
      label: isEn ? "Training Hours / Year" : "Ore di Formazione / Anno",
      detail: isEn ? "Dedicated to methodological advancement" : "Dedicate all'aggiornamento metodologico",
      icon: Clock,
      color: "from-emerald-400 to-teal-500",
    },
    {
      value: "10+",
      label: isEn ? "Academic Institutions" : "Istituti Universitari",
      detail: isEn ? "Universities & scientific institutions commissioned" : "Atenei ed enti scientifici committenti",
      icon: Building,
      color: "from-indigo-400 to-purple-500",
    },
    {
      value: "H-Index 8",
      label: "Scopus #245+ Citations",
      detail: isEn ? "International peer-reviewed research" : "Ricerca peer-reviewed internazionale",
      icon: TrendingUp,
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] backdrop-blur-xl shadow-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex items-start space-x-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
              >
                <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-[var(--accent-primary)]">
                  <Icon className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} tracking-tight`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-main)] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
