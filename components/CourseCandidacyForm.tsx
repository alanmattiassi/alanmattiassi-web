"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export default function CourseCandidacyForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    role: "Docente / Insegnante",
    projectIdea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${formData.name} ${formData.surname}`.trim();
    const subject = encodeURIComponent(
      `Candidatura Corso Progettare Giochi che Insegnano - ${fullName}`
    );
    const body = encodeURIComponent(
      `CANDIDATURA CORSO: PROGETTARE GIOCHI CHE INSEGNANO\n\n` +
      `Nome e Cognome: ${fullName}\n` +
      `Indirizzo Email: ${formData.email}\n` +
      `Ambito / Profilo Professionale: ${formData.role}\n\n` +
      `Idea o Progetto da sviluppare durante il corso:\n${formData.projectIdea || "Nessun progetto specifico ancora definito (orientamento aperto)."}\n`
    );

    // Open mailto fallback to prevent dropped leads
    window.location.href = `mailto:alan.mattiassi@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {formSubmitted ? (
        <div className="text-center py-10 space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            Candidatura Inviata con Successo!
          </h3>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Abbiamo registrato la tua richiesta per la prossima edizione di{" "}
            <strong className="text-[var(--text-main)]">«Progettare Giochi che Insegnano»</strong>.
            Riceverai una conferma via email con i dettagli logistici, il calendario degli incontri
            e l&apos;accesso prioritario alla selezione a numero chiuso.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setFormSubmitted(false)}
              className="text-xs text-[var(--text-muted)] underline hover:text-[var(--text-main)] transition-colors"
            >
              Invia un&apos;altra candidatura
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Es. Elena"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] text-sm transition-colors"
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Cognome *
              </label>
              <input
                type="text"
                id="surname"
                required
                placeholder="Es. Valenti"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] text-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Indirizzo Email *
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="tuo.nome@email.it"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] text-sm transition-colors"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
                Profilo Professionale *
              </label>
              <select
                id="role"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-primary)] text-sm transition-colors"
              >
                <option value="Docente / Insegnante">Docente / Insegnante (Scuola o Università)</option>
                <option value="Formatore Aziendale / HR">Formatore Aziendale / Consulente HR / Coach</option>
                <option value="Educatore / Pedagogista">Educatore / Pedagogista / Terzo Settore</option>
                <option value="Game Designer / Autore">Game Designer / Facilitatore Ludico</option>
                <option value="Altro">Altro profilo professionale</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectIdea" className="block text-xs font-semibold text-[var(--text-main)] mb-1.5">
              Che progetto o idea vorresti portare nel corso?{" "}
              <span className="font-normal text-[var(--text-muted)]">(consigliato)</span>
            </label>
            <textarea
              id="projectIdea"
              rows={3}
              placeholder="Es. Vorrei strutturare un'attività di gioco per spiegare un concetto disciplinare a scuola / Un'esperienza per team aziendali sulla cooperazione..."
              value={formData.projectIdea}
              onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)] text-sm transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
            >
              <span>Candidati per la prossima edizione</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-[var(--text-muted)] text-center pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Nessun vincolo di acquisto. I dati sono trattati con riservatezza ai sensi del GDPR.</span>
          </div>
        </form>
      )}
    </div>
  );
}
