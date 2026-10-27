"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Award,
  Medal,
  CheckCircle2,
  Search,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Filter,
  UserCheck,
} from "lucide-react";
import { CERTIFICATES_DATA, Certificate } from "@/data/certificates";

export default function CertificatesRegistryClient() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("id") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState<"all" | "eccellenza" | "partecipazione">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered certificates
  const filteredCertificates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CERTIFICATES_DATA.filter((cert) => {
      const matchType =
        selectedType === "all" ? true : cert.type === selectedType;

      const matchQuery =
        !q ||
        cert.id.toLowerCase().includes(q) ||
        cert.recipient.toLowerCase().includes(q) ||
        cert.role.toLowerCase().includes(q) ||
        cert.context.toLowerCase().includes(q) ||
        (cert.projectTitle && cert.projectTitle.toLowerCase().includes(q));

      return matchType && matchQuery;
    });
  }, [searchQuery, selectedType]);

  // Exact ID verification match
  const verifiedCert = useMemo(() => {
    const q = searchQuery.trim().toUpperCase();
    if (!q) return null;
    return CERTIFICATES_DATA.find((c) => c.id.toUpperCase() === q) || null;
  }, [searchQuery]);

  const countTotal = CERTIFICATES_DATA.length;
  const countEccellenza = CERTIFICATES_DATA.filter((c) => c.type === "eccellenza").length;
  const countPartecipazione = CERTIFICATES_DATA.filter((c) => c.type === "partecipazione").length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-primary)] text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>REGISTRO UFFICIALE &bull; VERIFICA TITOLI</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
          Albo dei Corsisti &amp; Verifica Certificati
        </h1>
        <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
          Registro pubblico dei discenti che hanno frequentato i percorsi formativi di <strong>Alan Mattiassi, PhD</strong>.
          Istituti, enti e organizzazioni possono verificare in tempo reale l&apos;autenticità dei titoli emessi inserendo il codice identificativo del certificato.
        </p>
      </div>

      {/* 2. DISTINZIONE DEI TITOLI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--bg-card)] border border-amber-400/30 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center space-x-2 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Image src="/images/AMgold.png" alt="Sigillo AM Gold" width={20} height={20} className="w-5 h-5 object-contain shrink-0" />
            <span>Certificato di Eccellenza</span>
          </div>
          <h3 className="font-bold text-base text-[var(--text-main)]">
            Progetto Didattico Validato con Rigore
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Non è un attestato di presenza. Viene conferito solo a chi completa l&apos;intero iter di progettazione,
            supera la sessione di playtest con revisione critica tra pari e riceve la validazione metodologica formale
            di Alan Mattiassi, PhD sul modello ludico-didattico, gli indicatori cognitivi e il protocollo di debriefing.
          </p>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center space-x-2 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>Attestato di Partecipazione</span>
          </div>
          <h3 className="font-bold text-base text-[var(--text-main)]">
            Frequenza e Partecipazione Attiva
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Attesta la partecipazione attiva alle sessioni sincrone del laboratorio e l&apos;acquisizione
            dei principi teorici ed operativi della psicologia del gioco applicata alla didattica e alla formazione.
          </p>
        </div>
      </div>

      {/* 3. CONSOLLE DI RICERCA & VERIFICA */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <label htmlFor="search-cert" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
            Cerca o Verifica un Certificato
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-[var(--text-subtle)] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="search-cert"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Inserisci il codice certificato (es. PGCI-2026-001) o il nome del corsista..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all font-mono sm:font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--text-subtle)] hover:text-[var(--text-main)] bg-[var(--bg-canvas)] px-2 py-1 rounded"
              >
                Cancella
              </button>
            )}
          </div>
        </div>

        {/* Filtri per Tipologia */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-color)]">
          <span className="text-xs text-[var(--text-subtle)] mr-2 flex items-center gap-1.5 font-medium">
            <Filter className="w-3.5 h-3.5" />
            Filtra:
          </span>
          <button
            onClick={() => setSelectedType("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedType === "all"
                ? "bg-[var(--accent-primary)] text-slate-950 shadow-sm"
                : "bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
            }`}
          >
            Tutti gli allievi ({countTotal})
          </button>
          <button
            onClick={() => setSelectedType("eccellenza")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
              selectedType === "eccellenza"
                ? "bg-amber-500 text-slate-950 shadow-sm"
                : "bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
            }`}
          >
            <Medal className="w-3.5 h-3.5" />
            <span>Certificati di Eccellenza ({countEccellenza})</span>
          </button>
          <button
            onClick={() => setSelectedType("partecipazione")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 ${
              selectedType === "partecipazione"
                ? "bg-sky-500 text-slate-950 shadow-sm"
                : "bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border-color)]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Attestati di Partecipazione ({countPartecipazione})</span>
          </button>
        </div>
      </div>

      {/* 4. SEZIONE VERIFICA CERTIFICATO SPECIFICO (QUANDO TROVATO PER CODICE ESATTO) */}
      {verifiedCert && (
        <div className="rounded-2xl p-6 sm:p-7 bg-emerald-500/10 border-2 border-emerald-500/40 text-[var(--text-main)] space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center space-x-3 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <span>CERTIFICATO UFFICIALE VERIFICATO &bull; TITOLO AUTENTICO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
            <div>
              <span className="text-[var(--text-muted)] block text-xs">Intestatario del titolo:</span>
              <strong className="text-base text-[var(--text-main)]">{verifiedCert.recipient}</strong>
              <p className="text-xs text-[var(--text-muted)]">{verifiedCert.role}</p>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-xs">Codice Univoco:</span>
              <span className="font-mono font-bold text-[var(--accent-primary)]">{verifiedCert.id}</span>
              <span className="text-xs text-[var(--text-muted)] block mt-0.5">Rilasciato: {verifiedCert.issueDate}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-emerald-500/20 text-xs text-[var(--text-muted)] flex flex-wrap items-center justify-between gap-2">
            <div>
              Tipologia:{" "}
              {verifiedCert.type === "eccellenza" ? (
                <span className="inline-flex items-center space-x-1.5 font-bold text-amber-500 dark:text-amber-400"><Image src="/images/AMgold.png" alt="AM Gold" width={18} height={18} className="w-4 h-4 object-contain" /><span>Certificato di Eccellenza (Progetto Validato)</span></span>
              ) : (
                <span className="font-bold text-sky-500">Attestato di Partecipazione</span>
              )}
            </div>
            <div className="italic text-[var(--text-subtle)]">
              Docente e Supervisore: Alan Mattiassi, PhD
            </div>
          </div>
        </div>
      )}

      {/* 5. ELENCO ALBO ALLIEVI */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[var(--text-subtle)] px-1">
          <span>Risultati trovati: <strong>{filteredCertificates.length}</strong></span>
          <span className="font-mono text-[11px]">Aggiornato al 2026</span>
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="rounded-2xl p-12 text-center bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3">
            <p className="text-[var(--text-muted)] text-sm">Nessun alunno o certificato trovato per i criteri specificati.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
              }}
              className="text-xs text-[var(--accent-primary)] hover:underline font-semibold"
            >
              Reimposta tutti i filtri
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredCertificates.map((cert) => {
              const isEccellenza = cert.type === "eccellenza";

              return (
                <article
                  key={cert.id}
                  className={`rounded-2xl p-5 sm:p-6 bg-[var(--bg-card)] border transition-all ${
                    isEccellenza
                      ? "border-amber-400/30 hover:border-amber-400/60 shadow-sm"
                      : "border-[var(--border-color)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="relative shrink-0">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-bold text-base shrink-0 border overflow-hidden ${
                            isEccellenza
                              ? "bg-amber-500/10 border-amber-400/40 text-amber-500 dark:text-amber-400 shadow-sm"
                              : "bg-sky-500/10 border-sky-400/30 text-[var(--accent-primary)]"
                          }`}
                        >
                          {cert.recipient
                            .split(" ")
                            .slice(-2)
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        {isEccellenza && (
                          <div
                            className="absolute -top-2.5 -right-2.5 w-7 h-7 sm:w-8 sm:h-8 z-10 drop-shadow-md pointer-events-none"
                            title="Certificato di Eccellenza con Sigillo AM Gold"
                          >
                            <Image
                              src="/images/AMgold.png"
                              alt="Sigillo AM Gold Eccellenza"
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-base text-[var(--text-main)]">
                            {cert.recipient}
                          </h3>
                          {isEccellenza ? (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-400/40">
                              <Medal className="w-3 h-3" />
                              <span>Eccellenza</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-500/10 text-[var(--accent-primary)] border border-sky-400/30">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Partecipazione</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{cert.role}</p>
                        <p className="text-[11px] text-[var(--text-subtle)]">{cert.context}</p>
                      </div>
                    </div>

                    {/* Codice & Data */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--border-color)]">
                      <button
                        onClick={() => handleCopy(cert.id)}
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--border-color)] text-xs font-mono text-[var(--text-muted)] transition-all border border-[var(--border-color)]"
                        title="Copia codice certificato"
                      >
                        <span>{cert.id}</span>
                        {copiedId === cert.id ? (
                          <Check className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Copy className="w-3 h-3 text-[var(--text-subtle)]" />
                        )}
                      </button>
                      <span className="text-[11px] text-[var(--text-subtle)]">{cert.issueDate}</span>
                    </div>
                  </div>

                  {/* Sezione Progetto Validato per gli alunni eccellenti */}
                  {isEccellenza && cert.projectTitle && (
                    <div className="mt-4 pt-4 border-t border-[var(--border-color)] space-y-2">
                      <div className="text-xs">
                        <span className="font-semibold text-amber-500 dark:text-amber-400 uppercase tracking-wider text-[11px]">
                          Progetto Validato con Eccellenza:
                        </span>{" "}
                        <strong className="text-[var(--text-main)]">&laquo;{cert.projectTitle}&raquo;</strong>
                      </div>
                      {cert.projectDescription && (
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {cert.projectDescription}
                        </p>
                      )}
                      {cert.evaluatorNote && (
                        <div className="text-[11px] text-[var(--text-subtle)] italic pt-1">
                          Nota del docente: &ldquo;{cert.evaluatorNote}&rdquo;
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* 6. CALL TO ACTION BOTTOM */}
      <div className="rounded-2xl p-8 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
          Vuoi partecipare al prossimo Laboratorio?
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          &ldquo;Progettare Giochi che Insegnano&rdquo; è un percorso a numero chiuso (max 8 partecipanti)
          dedicato alla progettazione didattica rigorosa con la psicologia del gioco.
        </p>
        <div className="pt-2">
          <Link
            href="/progettare-giochi-che-insegnano"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Scopri il Laboratorio &amp; Candidati</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
