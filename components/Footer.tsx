"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isEn } = useLanguage();

  return (
    <footer className="bg-[var(--bg-canvas)] text-[var(--text-muted)] border-t border-[var(--border-color)] text-sm transition-colors">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Bio Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/am-logo-white.png"
                alt="Logo Alan Mattiassi"
                width={44}
                height={44}
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain theme-logo-white"
              />
              <Image
                src="/images/am-logo-black.png"
                alt="Logo Alan Mattiassi"
                width={44}
                height={44}
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain theme-logo-black"
              />
            </div>
            <div>
              <div className="font-bold text-lg text-[var(--text-main)] tracking-tight">
                Alan D.A. Mattiassi<span className="text-[var(--accent-primary)]">, PhD</span>
              </div>
              <div className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider">
                {isEn ? "Game Psychologist" : "Psicologo del Gioco"}
              </div>
            </div>
          </div>

          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed max-w-sm">
            {isEn
              ? "Psychologist, researcher, trainer, and speaker. For over a decade I have applied cognitive sciences, experimental psychology, and games to foster active learning, organizational well-being, and strategic innovation."
              : "Psicologo, ricercatore, formatore e divulgatore. Da oltre dieci anni applico le scienze cognitive, la psicologia sperimentale e il gioco per favorire apprendimento attivo, benessere organizzativo e innovazione strategica."}
          </p>

          <div className="pt-2 text-xs text-[var(--text-subtle)] space-y-1">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-secondary)] flex-shrink-0" />
              <span>
                {isEn
                  ? "Registered with the Order of Psychologists of Friuli Venezia Giulia"
                  : "Iscritto all'Albo degli Psicologi del Friuli Venezia Giulia"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
              <span>
                {isEn
                  ? "Friuli Venezia Giulia & Worldwide / Remote Activities"
                  : "Friuli Venezia Giulia & Attività su tutto il territorio nazionale"}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Settori d'Intervento */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
            {isEn ? "Areas & Fields" : "Aree & Ambiti"}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
            <li>
              <Link
                href={isEn ? "/en/docenti" : "/docenti"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Schools & Game-Based Learning" : "Docenti & Game-Based Learning"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/aziende-corporate" : "/aziende-corporate"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Corporate Training & Gamification" : "Aziende & Gamification HR"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/ricerca-consulenza" : "/ricerca-consulenza"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Game Design & Serious Games" : "Game Design & Serious Games"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/come-lavoro" : "/come-lavoro"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Systemic Methodology" : "Metodologia Sistemica"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/scegli-la-tua-formazione" : "/scegli-la-tua-formazione"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Training Pathways" : "Orientamento Formativo"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Ricerca & Media */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
            {isEn ? "Research & Resources" : "Ricerca & Risorse"}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
            <li>
              <Link
                href={isEn ? "/en/libro-psicologia-del-gioco" : "/libro-psicologia-del-gioco"}
                className="hover:text-[var(--accent-primary)] transition-colors font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1"
              >
                <span>{isEn ? "Book: Psychology of Games (Hogrefe)" : "Libro: Psicologia del Gioco (Hogrefe)"}</span>
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/research-ricerca" : "/research-ricerca"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Scientific Publications" : "Pubblicazioni Scientifiche"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/psychology-of-games-framework" : "/framework-psicologia-del-gioco"}
                className="hover:text-[var(--accent-primary)] transition-colors font-medium text-[var(--accent-primary)]"
              >
                {isEn ? "Psychology of Games Framework" : "Framework Psicologia del Gioco"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/talks-interventi" : "/talks-interventi"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Talks, TEDx & Keynotes" : "Talks, TEDx & Keynote"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/rassegna-stampa" : "/rassegna-stampa"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Press & Media Review" : "Rassegna Stampa & Media"}
              </Link>
            </li>
            <li>
              <Link
                href={isEn ? "/en/topics-temi" : "/topics-temi"}
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                {isEn ? "Topics & Theoretical Model" : "Topics & Quadro Teorico"}
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alanmattiassi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-primary)] transition-colors flex items-center space-x-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@gameinsightsAM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-primary)] transition-colors flex items-center space-x-1"
              >
                <span>Game Insights (YouTube)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a
                href="https://orcid.org/0000-0002-9996-0700"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-primary)] transition-colors flex items-center space-x-1"
              >
                <span>ORCID</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contatti Diretti */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">
            {isEn ? "Direct Contact" : "Contatti Diretti"}
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
            <a
              href="mailto:alan.mattiassi@gmail.com"
              className="flex items-center space-x-2 hover:text-[var(--accent-primary)] transition-colors"
            >
              <Mail className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
              <span>alan.mattiassi@gmail.com</span>
            </a>
            <a
              href="tel:+393926808384"
              className="flex items-center space-x-2 hover:text-[var(--accent-primary)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
              <span>+39 392 6808384</span>
            </a>
            <div className="pt-2">
              <Link
                href={isEn ? "/en/hire-me-lavora-con-me" : "/hire-me-lavora-con-me"}
                className="inline-block text-xs font-semibold px-3.5 py-2 rounded-lg bg-[var(--badge-bg)] text-[var(--accent-secondary)] border border-[var(--badge-border)] hover:bg-[var(--bg-card)] transition-colors"
              >
                {isEn ? "Work with me // Rates →" : "Lavora con me // Tariffe →"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)] bg-[var(--bg-card-subtle)] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)]">
          <div>
            &copy; {currentYear} Alan D.A. Mattiassi, PhD &bull; {isEn ? "All rights reserved" : "Tutti i diritti riservati"} &bull; P.IVA 02888630303
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={isEn ? "/en/about" : "/about"}
              className="hover:text-[var(--text-main)] transition-colors"
            >
              {isEn ? "About" : "Chi sono"}
            </Link>
            <span>&bull;</span>
            <Link
              href={isEn ? "/en/hire-me-lavora-con-me" : "/hire-me-lavora-con-me"}
              className="hover:text-[var(--text-main)] transition-colors"
            >
              {isEn ? "Book a Call" : "Prenota Call"}
            </Link>
            <span>&bull;</span>
            <Link
              href={isEn ? "/en/blog" : "/blog"}
              className="hover:text-[var(--text-main)] transition-colors"
            >
              {isEn ? "News Archive" : "Archivio News"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
