"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Lightbulb,
  Gamepad2,
  Mic,
  Microscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Service } from "@/data/services";
import { useLanguage } from "./LanguageProvider";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Lightbulb,
  Gamepad2,
  Mic,
  Microscope,
};

const getServicePillarStyle = (serviceId: string) => {
  if (serviceId === "game-based-learning") {
    return {
      text: "text-[var(--pillar-scuola)]",
      bg: "bg-[var(--pillar-scuola-bg)]",
      border: "border-[var(--pillar-scuola-border)]",
      hoverBorder: "hover:border-[var(--pillar-scuola)]",
      hoverText: "group-hover:text-[var(--pillar-scuola)]",
      glowColor: "via-[var(--pillar-scuola)]",
      checkColor: "text-[var(--pillar-scuola)]",
    };
  }
  if (serviceId === "corporate-training") {
    return {
      text: "text-[var(--pillar-aziende)]",
      bg: "bg-[var(--pillar-aziende-bg)]",
      border: "border-[var(--pillar-aziende-border)]",
      hoverBorder: "hover:border-[var(--pillar-aziende)]",
      hoverText: "group-hover:text-[var(--pillar-aziende)]",
      glowColor: "via-[var(--pillar-aziende)]",
      checkColor: "text-[var(--pillar-aziende)]",
    };
  }
  if (serviceId === "game-design-psychology") {
    return {
      text: "text-[var(--pillar-gamedesign)]",
      bg: "bg-[var(--pillar-gamedesign-bg)]",
      border: "border-[var(--pillar-gamedesign-border)]",
      hoverBorder: "hover:border-[var(--pillar-gamedesign)]",
      hoverText: "group-hover:text-[var(--pillar-gamedesign)]",
      glowColor: "via-[var(--pillar-gamedesign)]",
      checkColor: "text-[var(--pillar-gamedesign)]",
    };
  }
  return {
    text: "text-[var(--accent-primary)]",
    bg: "bg-[var(--bg-card-subtle)]",
    border: "border-[var(--border-color)]",
    hoverBorder: "hover:border-[var(--accent-primary)]",
    hoverText: "group-hover:text-[var(--accent-primary)]",
    glowColor: "via-[var(--accent-primary)]",
    checkColor: "text-[var(--accent-secondary)]",
  };
};

export default function ServiceCard({ service }: { service: Service }) {
  const { isEn } = useLanguage();
  const Icon = iconMap[service.iconName] || Lightbulb;
  const pillar = getServicePillarStyle(service.id);

  const title = (isEn && service.titleEn) ? service.titleEn : service.title;
  const shortDesc = (isEn && service.shortDescEn) ? service.shortDescEn : service.shortDesc;
  const target = (isEn && service.targetEn) ? service.targetEn : service.target;
  const benefits = (isEn && service.benefitsEn) ? service.benefitsEn : service.benefits;
  const href = (isEn && service.hrefEn) ? service.hrefEn : service.href;

  return (
    <div className={`group relative rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] ${pillar.hoverBorder} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
      {/* Top accent glow line */}
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl`} />

      <div className="space-y-4">
        {/* Icon & Target Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className={`p-3 rounded-xl ${pillar.bg} border ${pillar.border} ${pillar.text} group-hover:scale-105 transition-all`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${pillar.bg} ${pillar.text} border ${pillar.border}`}>
            {target.split(",")[0]}
          </span>
        </div>

        {/* Title & Short Description */}
        <div>
          <h3 className={`text-xl font-bold text-[var(--text-main)] ${pillar.hoverText} transition-colors`}>
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
            {shortDesc}
          </p>
        </div>

        {/* Benefits List */}
        <ul className="pt-2 space-y-2 border-t border-[var(--border-color)]">
          {benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-xs text-[var(--text-muted)]">
              <CheckCircle2 className={`w-3.5 h-3.5 ${pillar.checkColor} mt-0.5 flex-shrink-0`} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Link */}
      <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
        <Link
          href={href}
          className={`text-xs font-semibold ${pillar.text} inline-flex items-center space-x-1.5 transition-colors group-hover:translate-x-0.5`}
        >
          <span>{isEn ? "Learn more" : "Scopri di più"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
