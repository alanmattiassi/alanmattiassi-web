"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Send,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Loader2,
} from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function ContactSection() {
  const { isEn } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "docenti",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: isEn
            ? `New Contact Request: ${formData.name} (${formData.organization || "Individual"})`
            : `Nuova richiesta di contatto: ${formData.name} (${formData.organization || "Privato"})`,
          Name: formData.name,
          Email: formData.email,
          Organization: formData.organization || "-",
          ServiceArea: formData.service,
          Message: formData.message,
          Date: new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
        }),
      });

      if (!response.ok) throw new Error("Errore inoltro API");
      setFormSubmitted(true);
    } catch (err: unknown) {
      console.error("Invio richiesta contatto fallito:", err);
      setErrorMessage(
        isEn
          ? "A temporary error occurred while sending your request. Please try again or write directly to alan.mattiassi@gmail.com."
          : "Si è verificato un errore temporaneo durante l'invio. Riprova tra poco oppure scrivi direttamente ad alan.mattiassi@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatto" className="py-20 bg-[var(--bg-canvas)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent-secondary)] text-xs font-semibold uppercase tracking-wider">
            <span>{isEn ? "LET'S TALK ABOUT YOUR PROJECT" : "PARLIAMO DEL TUO PROGETTO"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            {isEn ? "Let's Start with a Conversation" : "Iniziamo da una conversazione"}
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
            {isEn
              ? "Whether you want to organize a workshop for your school, a gamification program for your company, or scientific consulting for your game, we will find the ideal solution."
              : "Che tu voglia organizzare un workshop per la tua scuola, un percorso di gamification per la tua azienda, o una consulenza scientifica per il tuo gioco, troveremo la soluzione più adatta."}
          </p>
        </div>

        {/* 2-Columns: Info / Booking on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Call (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick 30-min call card */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--accent-secondary)]/40 shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[var(--badge-bg)] text-[var(--accent-secondary)]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)]">
                    {isEn ? "Free Discovery Call" : "Call Conoscitiva Gratuita"}
                  </h3>
                  <p className="text-xs text-[var(--accent-secondary)] font-medium">
                    {isEn ? "30 minutes • No obligation" : "30 minuti • Senza impegno"}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {isEn
                  ? "A direct discussion to assess your goals, explore educational or research challenges, and evaluate how the psychology of games can generate lasting value."
                  : "Un confronto diretto per analizzare le tue esigenze, inquadrare gli obiettivi formativi o di ricerca e valutare se e come la psicologia del gioco può fare la differenza."}
              </p>

              <a
                href={
                  isEn
                    ? "mailto:alan.mattiassi@gmail.com?subject=Discovery%20Call%20Request%2030%20Minutes"
                    : "mailto:alan.mattiassi@gmail.com?subject=Richiesta%20Call%20Conoscitiva%2030%20Minuti"
                }
                className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all shadow-md shadow-emerald-500/20"
              >
                <span>{isEn ? "Book a discovery call" : "Richiedi una call conoscitiva"}</span>
              </a>
            </div>

            {/* Direct Contacts List */}
            <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
              <h4 className="text-sm font-bold text-[var(--text-main)] uppercase tracking-wider">
                {isEn ? "Direct Contact" : "Recapiti Diretti"}
              </h4>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:alan.mattiassi@gmail.com"
                  className="flex items-center space-x-3 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-card-subtle)]"
                >
                  <Mail className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-subtle)]">Email</div>
                    <div className="font-semibold text-[var(--text-main)]">alan.mattiassi@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+393926808384"
                  className="flex items-center space-x-3 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--bg-card-subtle)]"
                >
                  <Phone className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-subtle)]">{isEn ? "Phone / WhatsApp" : "Telefono / WhatsApp"}</div>
                    <div className="font-semibold text-[var(--text-main)]">+39 392 6808384</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-[var(--text-main)]">
                  {isEn ? "Thank you for reaching out!" : "Grazie per il messaggio!"}
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                  {isEn
                    ? "Your email client has opened with your pre-filled inquiry. If it did not open automatically, you can email me directly at alan.mattiassi@gmail.com. I will respond within 24-48 business hours."
                    : "Il client di posta si è aperto con la tua richiesta precompilata. Se non si è aperto automaticamente, puoi scrivermi direttamente a alan.mattiassi@gmail.com. Ti risponderò entro 24-48 ore lavorative."}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)]"
                >
                  {isEn ? "Send another message" : "Invia un altro messaggio"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                      {isEn ? "Full Name *" : "Nome e Cognome *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isEn ? "Jane Doe" : "Mario Rossi"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                      {isEn ? "Email Address *" : "Indirizzo Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={isEn ? "jane.doe@example.com" : "mario.rossi@esempio.it"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                      {isEn ? "School / Company / Organization" : "Scuola / Azienda / Ente"}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder={isEn ? "Organization or institution name" : "Nome istituto o organizzazione"}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                      {isEn ? "Area of Interest *" : "Ambito di interesse *"}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-main)] focus:outline-none focus:border-[var(--accent-primary)]"
                    >
                      <option value="docenti">
                        {isEn ? "Educator Training & Game-Based Learning" : "Formazione Docenti & Game-Based Learning"}
                      </option>
                      <option value="aziende">
                        {isEn ? "Corporate Training & Gamification" : "Formazione Aziendale & Gamification"}
                      </option>
                      <option value="game-design">
                        {isEn ? "Game Design & Serious Games Consulting" : "Consulenza Game Design & Serious Games"}
                      </option>
                      <option value="talks">
                        {isEn ? "Keynote / Speech / Festival Invitation" : "Invito per Speech / Keynote / Festival"}
                      </option>
                      <option value="ricerca">
                        {isEn ? "Scientific / Academic Research Collaboration" : "Ricerca Scientifica / Accademica"}
                      </option>
                      <option value="tirocini">
                        {isEn ? "Academic Internship / Traineeship (UniTS)" : "Tirocinio Pratico Valutativo (UniTS)"}
                      </option>
                      <option value="altro">{isEn ? "Other" : "Altro"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-main)] mb-1">
                    {isEn ? "Describe your request or project *" : "Descrivi la tua richiesta o idea *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isEn
                        ? "Tell me about the context, target participants, or the specific challenge you wish to address..."
                        : "Raccontami il contesto, i partecipanti previsti, o la sfida che desideri affrontare..."
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-60 shadow-lg shadow-sky-500/25 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isEn ? "Sending..." : "Invio in corso..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isEn ? "Send Contact Request" : "Invia Richiesta di Contatto"}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
