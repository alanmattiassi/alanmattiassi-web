"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, Calendar, Clock, ShieldCheck, Loader2 } from "lucide-react";

export default function MasterclassPriorityForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Formatore / Facilitatore / HR",
    preferredDate: "Indifferente",
    projectIdea: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      _subject: `Nuova Iscrizione Priority List Masterclass: ${formData.name}`,
      Corso: "Masterclass Psicologia del Gioco",
      "Nome e Cognome": formData.name,
      Email: formData.email,
      "Ruolo / Professione": formData.role,
      "Periodo Preferito": formData.preferredDate,
      "Idea di Progetto": formData.projectIdea || "Nessun progetto specificato al momento",
      "Data Iscrizione": new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormSubmitted(true);
        return;
      }
      throw new Error("API interna non raggiungibile, attivo fallback");
    } catch {
      try {
        const fallbackRes = await fetch(
          "https://script.google.com/macros/s/AKfycbwr2Oi1CZBxFYH0kcS-N9NI8txLO1AOomBAS-Ih9Ij2OEkyyPxGBHvDtN8rhWOhB8zn/exec",
          {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload),
          }
        );
        if (fallbackRes.ok) {
          setFormSubmitted(true);
          return;
        }
      } catch (err: unknown) {
        console.error("Invio Priority List fallito:", err);
      }

      setErrorMessage(
        "Si è verificato un errore temporaneo durante l'invio. Riprova tra poco oppure scrivi direttamente ad alan.mattiassi@gmail.com."
      );
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
            Sei nella Priority List!
          </h3>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Abbiamo registrato la tua manifestazione d&apos;interesse. Appena chiuderemo il sondaggio delle date
            con la community, riceverai un&apos;email personale con il programma definitivo e{" "}
            <strong className="text-emerald-400 font-semibold">
              48 ore di prelazione per bloccare il ticket a tariffa agevolata (490€)
            </strong>{" "}
            prima dell&apos;apertura pubblica.
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
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>POSTI LIMITATI (MAX 18 ISCRITTI)</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text-main)]">
              Entra nella Priority List della Masterclass
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Compila il modulo per votare la data e garantirti l&apos;accesso prioritario alla tariffa Early Bird a{" "}
              <strong className="text-[var(--text-main)]">490€ + IVA</strong> (invece di 750€). Nessun vincolo di acquisto.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Nome e Cognome *
              </label>
              <input
                type="text"
                required
                placeholder="es. Mario Rossi"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Email Professionale *
              </label>
              <input
                type="email"
                required
                placeholder="mario.rossi@azienda.it"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              La tua Professione / Ambito di Applicazione *
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            >
              <option value="Formatore / Facilitatore / HR">Formatore / Facilitatore aziendale / HR Specialist</option>
              <option value="Game Designer / Autore">Game Designer / Autore di giochi (analogici o digitali)</option>
              <option value="Consulente di Direzione / Coach">Consulente Organizzativo / Coach</option>
              <option value="Psicologo / Psicoterapeuta">Psicologo / Psicoterapeuta / Clinico</option>
              <option value="Docente Universitario / Ricercatore">Docente Universitario / Ricercatore</option>
              <option value="Altro">Altro profilo professionale</option>
            </select>
          </div>

          <div className="space-y-2.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>Quale periodo preferisci per il weekend intensivo in Friuli? *</span>
            </label>
            <div className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
              {[
                { label: "Seconda metà di Gennaio 2027 (es. 23-24 o 30-31 Gennaio)", val: "Seconda metà Gennaio" },
                { label: "Prima metà di Febbraio 2027 (es. 6-7 o 13-14 Febbraio)", val: "Prima metà Febbraio" },
                { label: "Entrambi i periodi sono compatibili con la mia agenda", val: "Indifferente" },
              ].map((item) => (
                <label
                  key={item.val}
                  className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.preferredDate === item.val
                      ? "bg-emerald-500/10 border-emerald-500/40 text-[var(--text-main)]"
                      : "bg-[var(--bg-canvas)] border-[var(--border-color)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredDate"
                    checked={formData.preferredDate === item.val}
                    onChange={() => setFormData({ ...formData, preferredDate: item.val })}
                    className="accent-emerald-500 w-4 h-4"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Che progetto, workshop o gioco vorresti portare la domenica? (Opzionale)
            </label>
            <textarea
              rows={3}
              placeholder="Es. un'attività formativa sulla negoziazione, il prototipo di un gioco cooperativo, un workshop per manager..."
              value={formData.projectIdea}
              onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 disabled:opacity-60 shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Invio in corso...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Unisciti alla Priority List (Posti Scontati a 490€) →</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center space-x-4 text-xs text-[var(--text-subtle)] pt-1">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nessun obbligo di acquisto</span>
            </span>
            <span>&bull;</span>
            <span>Prelazione 48h assicurata</span>
            <span>&bull;</span>
            <span>No spam</span>
          </div>
        </form>
      )}
    </div>
  );
}
