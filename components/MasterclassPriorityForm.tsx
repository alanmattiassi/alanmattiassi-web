"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Calendar, ShieldCheck, Loader2, Ticket, Building2 } from "lucide-react";

export default function MasterclassPriorityForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Formatore / Facilitatore aziendale / HR Specialist",
    choice: "Prenota un posto a Quota Ordinaria (750€)",
    projectIdea: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      _subject: `Masterclass Psicologia del Gioco: ${formData.choice} - ${formData.name}`,
      Corso: "Masterclass Psicologia del Gioco (23-24 Gennaio 2027)",
      "Nome e Cognome": formData.name,
      Email: formData.email,
      "Ruolo / Professione": formData.role,
      "Opzione Scelta": formData.choice,
      "Idea di Progetto": formData.projectIdea || "Nessun progetto specificato al momento",
      "Data Registrazione": new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
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
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-main)]">
            Richiesta Registrata!
          </h3>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {formData.choice === "Prenota un posto a Quota Ordinaria (750€)" && (
              <>
                Abbiamo registrato la tua richiesta di prenotazione per il{" "}
                <strong className="text-[var(--text-main)] font-semibold">23–24 Gennaio 2027 a Quota Ordinaria (750€)</strong>.
                Riceverai a breve un&apos;email personale con la conferma del posto e le istruzioni operative.
              </>
            )}
            {formData.choice === "Richiesta B2B / Azienda (pacchetti team o soluzioni su misura)" && (
              <>
                Abbiamo registrato la tua richiesta aziendale. Ti contatteremo personalmente via email per concordare il{" "}
                <strong className="text-sky-600 dark:text-sky-400 font-semibold">pacchetto team dedicato</strong> e i dettagli di fatturazione.
              </>
            )}
            {formData.choice.includes("2ª Edizione") && (
              <>
                Grazie per la segnalazione. Riceverai la prelazione con tariffa agevolata Early Bird (490€) prima di qualunque annuncio pubblico appena apriremo le iscrizioni per la{" "}
                <strong className="text-amber-600 dark:text-amber-400 font-semibold">2ª Edizione</strong>.
              </>
            )}
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
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold">
              <Ticket className="w-3.5 h-3.5" />
              <span>DATA CONFERMATA: 23–24 GENNAIO 2027 &bull; ULTIMI 9 POSTI SU 18</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text-main)]">
              Partecipa alla Masterclass in Psicologia del Gioco
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              La quota Early Bird a 490€ è esaurita. Il 50% dell'aula è già confermato (9 posti su 18 assegnati tra iscritti e ospiti). Puoi prenotare uno degli ultimi 9 posti in aula a Quota Ordinaria (750€), richiedere un pacchetto team aziendale B2B, oppure manifestare interesse per la 2ª Edizione a tariffa agevolata.
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
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
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
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
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
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            >
              <option value="Formatore / Facilitatore aziendale / HR Specialist">Formatore / Facilitatore aziendale / HR Specialist</option>
              <option value="Azienda / HR & L&D / Partner">Azienda / Referente Risorse Umane &amp; L&amp;D / Potenziale Partner</option>
              <option value="Game Designer / Autore">Game Designer / Autore di giochi (analogici o digitali)</option>
              <option value="Consulente di Direzione / Coach">Consulente Organizzativo / Coach</option>
              <option value="Psicologo / Psicoterapeuta">Psicologo / Psicoterapeuta / Clinico</option>
              <option value="Docente Universitario / Ricercatore">Docente Universitario / Ricercatore</option>
              <option value="Altro">Altro profilo professionale</option>
            </select>
          </div>

          <div className="space-y-2.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Come desideri procedere? *</span>
            </label>
            <div className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
              {[
                {
                  label: "Prenota un posto a Quota Ordinaria (750€)",
                  desc: "Partecipa al weekend del 23–24 Gennaio 2027 in Friuli (max 18 iscritti, la classe parte con 12).",
                  val: "Prenota un posto a Quota Ordinaria (750€)",
                },
                {
                  label: "Richiesta B2B / Azienda (pacchetti team o soluzioni su misura)",
                  desc: "Iscrizione agevolata per 2 o più colleghi dello stesso team, fatturazione aziendale o pacchetti su misura.",
                  val: "Richiesta B2B / Azienda (pacchetti team o soluzioni su misura)",
                },
                {
                  label: "Non posso a Gennaio: inseriscimi in lista per la 2ª Edizione (tariffa agevolata)",
                  desc: "Riceverai l'accesso prioritario con tariffa agevolata (490€) quando apriremo le prossime aule.",
                  val: "Non posso a Gennaio: lista 2ª Edizione",
                },
              ].map((item) => {
                const isSelected = formData.choice === item.val;
                return (
                  <label
                    key={item.val}
                    className={`flex items-start space-x-3 p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-amber-500/10 border-amber-500/60 shadow-sm"
                        : "bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="choice"
                      checked={isSelected}
                      onChange={() => setFormData({ ...formData, choice: item.val })}
                      className="accent-amber-500 w-4 h-4 mt-0.5 shrink-0"
                    />
                    <div className="space-y-0.5">
                      <div className={`font-bold text-sm ${isSelected ? "text-amber-700 dark:text-amber-300" : "text-[var(--text-main)]"}`}>
                        {item.label}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Che progetto, workshop o gioco vorresti portare al laboratorio? (Opzionale)
            </label>
            <textarea
              rows={3}
              placeholder="Es. un'attività formativa sulla negoziazione, il prototipo di un gioco cooperativo, un workshop per manager..."
              value={formData.projectIdea}
              onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 disabled:opacity-60 shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Invio richiesta in corso...</span>
              </>
            ) : (
              <>
                <span>Invia Richiesta</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center space-x-4 text-xs text-[var(--text-subtle)] pt-1">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Nessun addebito immediato</span>
            </span>
            <span>&bull;</span>
            <span>Riceverai conferma e dettagli via email</span>
          </div>

        </form>
      )}
    </div>
  );
}
