"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from "lucide-react";

export default function CourseCandidacyForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    role: "Docente / Insegnante",
    projectIdea: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const fullName = `${formData.name} ${formData.surname}`.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `Nuova Candidatura Corso: ${fullName}`,
          Corso: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
          "Nome e Cognome": fullName,
          Email: formData.email,
          "Profilo Professionale": formData.role,
          "Idea di Progetto": formData.projectIdea || "Nessun progetto specifico indicato al momento (orientamento aperto)",
          "Data Candidatura": new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
        }),
      });

      if (!response.ok) {
        throw new Error("Impossibile recapitare il messaggio automaticamente.");
      }

      setFormSubmitted(true);
    } catch (err: unknown) {
      console.warn("Invio API fallito, attivazione fallback mailto:", err);
      // Fallback: apri client email se la rete o l'API non risponde
      const subject = encodeURIComponent(`Candidatura Corso Progettare Giochi che Insegnano - ${fullName}`);
      const body = encodeURIComponent(
        `CANDIDATURA CORSO: PROGETTARE GIOCHI CHE INSEGNANO\n\n` +
        `Nome e Cognome: ${fullName}\n` +
        `Email: ${formData.email}\n` +
        `Ruolo: ${formData.role}\n\n` +
        `Idea di Progetto:\n${formData.projectIdea || "Nessun progetto specifico ancora definito."}\n`
      );
      window.location.href = `mailto:alan.mattiassi@gmail.com?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
            I dettagli sono stati inviati direttamente ad Alan Mattiassi, PhD. Riceverai un&apos;email di riscontro con il calendario e le modalità di partecipazione.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({
                  name: "",
                  surname: "",
                  email: "",
                  role: "Docente / Insegnante",
                  projectIdea: "",
                });
              }}
              className="text-xs text-[var(--text-muted)] underline hover:text-[var(--text-main)] transition-colors"
            >
              Invia un&apos;altra candidatura
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

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
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Invio candidatura in corso...</span>
                </>
              ) : (
                <>
                  <span>Candidati per la prossima edizione</span>
                  <Send className="w-4 h-4" />
                </>
              )}
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
