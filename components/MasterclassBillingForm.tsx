"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  FileText,
  Send,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  AlertCircle,
  Calendar,
  MapPin,
  Lock,
  Building2,
  User,
  Briefcase,
  Landmark,
} from "lucide-react";
import "./MasterclassBillingForm.css";

type BillingType = "privato" | "professionista" | "azienda" | "pa";

interface BillingFormData {
  billingType: BillingType;
  intestatario: string;
  codiceFiscale: string;
  partitaIva: string;
  codiceSdi: string;
  pec: string;
  codiceUnivocoPa: string;
  cigCup: string;
  partecipanteNome: string;
  stato: string;
  indirizzo: string;
  cap: string;
  citta: string;
  provincia: string;
  emailFattura: string;
  telefono: string;
  quotaVersata: string;
  quotaAltro: string;
  modalitaPagamento: string;
  dataPagamento: string;
  note: string;
  privacyAccepted: boolean;
  honeypot: string;
}

const BILLING_TYPE_OPTIONS: {
  value: BillingType;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    value: "privato",
    label: "Persona Fisica (Privato)",
    desc: "Senza Partita IVA — fattura intestata a privato con Codice Fiscale.",
    icon: User,
  },
  {
    value: "professionista",
    label: "Libero Professionista / Ditta Individuale",
    desc: "Titolare di Partita IVA individuale (con Codice Fiscale e SDI o PEC).",
    icon: Briefcase,
  },
  {
    value: "azienda",
    label: "Azienda / Società / Ente / Associazione",
    desc: "Persona giuridica (SRL, SPA, Cooperativa, Associazione, Fondazione, ecc.).",
    icon: Building2,
  },
  {
    value: "pa",
    label: "Pubblica Amministrazione (PA)",
    desc: "Scuola statale, Università, Comune o Ente pubblico con Codice Univoco IPA.",
    icon: Landmark,
  },
];

const BILLING_TYPE_LABELS: Record<BillingType, string> = {
  privato: "Persona Fisica (Privato)",
  professionista: "Libero Professionista / Ditta Individuale",
  azienda: "Azienda / Società / Ente / Associazione",
  pa: "Pubblica Amministrazione (PA)",
};

const QUOTA_OPTIONS = [
  "750€ — Quota Ordinaria",
  "490€ — Quota Early Bird",
  "Altro importo (es. pacchetto team / aziendale)",
];

const PAYMENT_OPTIONS = [
  "Bonifico Bancario",
  "Carta di Credito (Stripe)",
  "Altro",
];

const INITIAL_DATA: BillingFormData = {
  billingType: "privato",
  intestatario: "",
  codiceFiscale: "",
  partitaIva: "",
  codiceSdi: "",
  pec: "",
  codiceUnivocoPa: "",
  cigCup: "",
  partecipanteNome: "",
  stato: "Italia",
  indirizzo: "",
  cap: "",
  citta: "",
  provincia: "",
  emailFattura: "",
  telefono: "",
  quotaVersata: "750€ — Quota Ordinaria",
  quotaAltro: "",
  modalitaPagamento: "Bonifico Bancario",
  dataPagamento: "",
  note: "",
  privacyAccepted: false,
  honeypot: "",
};

const GOOGLE_SCRIPT_FALLBACK_URL =
  "https://script.google.com/macros/s/AKfycbwr2Oi1CZBxFYH0kcS-N9NI8txLO1AOomBAS-Ih9Ij2OEkyyPxGBHvDtN8rhWOhB8zn/exec";

export default function MasterclassBillingForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const announceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [formData, setFormData] = useState<BillingFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [crossFieldErrors, setCrossFieldErrors] = useState<Record<string, string>>({});

  const isItalia = formData.stato.trim().toLowerCase() === "italia" || formData.stato.trim().toLowerCase() === "italy";
  const isPrivato = formData.billingType === "privato";
  const isProfessionista = formData.billingType === "professionista";
  const isAzienda = formData.billingType === "azienda";
  const isPa = formData.billingType === "pa";

  // Sync aria-invalid and dynamic aria-describedby with :user-invalid (and fallback for older browsers)
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const supportsUserInvalid =
      typeof CSS !== "undefined" && CSS.supports("selector(:user-invalid)");
    const dirtyState = new WeakMap<
      Element,
      { hasInteracted: boolean; hasBlurred: boolean }
    >();
    const announced = new WeakSet<Element>();

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const announceError = (el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
      const errorId = el.dataset.error;
      if (!errorId || !announcerRef.current) return;
      const errorEl = document.getElementById(errorId);
      if (!errorEl) return;
      const labelText = el.labels?.[0]?.textContent?.replace(/\*/g, "").trim() || "";
      const prefix = labelText ? `${labelText}: ` : "";
      if (announceTimerRef.current) clearTimeout(announceTimerRef.current);
      announcerRef.current.textContent = "";
      announceTimerRef.current = setTimeout(() => {
        if (announcerRef.current) {
          announcerRef.current.textContent = `${prefix}${errorEl.textContent?.trim() || ""}`;
        }
      }, 450);
    };

    const syncField = (
      target: EventTarget | null,
      announce = false,
      forceEvaluate = false
    ) => {
      if (
        !(
          target instanceof HTMLInputElement ||
          target instanceof HTMLSelectElement ||
          target instanceof HTMLTextAreaElement
        )
      ) {
        return;
      }

      let isInvalid = false;
      if (supportsUserInvalid) {
        isInvalid = target.matches(":user-invalid");
      } else {
        const state = dirtyState.get(target);
        if (forceEvaluate || (state?.hasInteracted && state?.hasBlurred)) {
          isInvalid = !target.validity.valid;
          target.classList.toggle("user-invalid-fallback", isInvalid);
          target.classList.toggle("user-valid-fallback", !isInvalid);
        }
      }

      if (isInvalid) {
        target.setAttribute("aria-invalid", "true");
        linkError(target, true);
        if (announce && !announced.has(target)) {
          announceError(target);
          announced.add(target);
        }
      } else {
        target.setAttribute("aria-invalid", "false");
        linkError(target, false);
        announced.delete(target);
      }
    };

    // Initialize all fields to aria-invalid="false" so screen readers don't report empty required fields on load
    form.querySelectorAll("input, select, textarea").forEach((el) => {
      if (!el.hasAttribute("aria-invalid")) {
        el.setAttribute("aria-invalid", "false");
      }
    });

    const handleBlur = (e: Event) => {
      const target = e.target as Element;
      const state = dirtyState.get(target) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasBlurred = true;
      dirtyState.set(target, state);
      syncField(target, true);
    };

    const handleInput = (e: Event) => {
      const target = e.target as Element;
      const state = dirtyState.get(target) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasInteracted = true;
      dirtyState.set(target, state);
      syncField(target, false);
    };

    const handleChange = (e: Event) => {
      const target = e.target as Element;
      const state = dirtyState.get(target) || {
        hasInteracted: false,
        hasBlurred: false,
      };
      state.hasInteracted = true;
      dirtyState.set(target, state);
      syncField(target, true);
    };

    const handleInvalid = (e: Event) => {
      const target = e.target as Element;
      dirtyState.set(target, { hasInteracted: true, hasBlurred: true });
      announced.add(target);
      syncField(target, false, true);
    };

    form.addEventListener("blur", handleBlur, true);
    form.addEventListener("input", handleInput);
    form.addEventListener("change", handleChange, true);
    form.addEventListener("invalid", handleInvalid, true);

    return () => {
      form.removeEventListener("blur", handleBlur, true);
      form.removeEventListener("input", handleInput);
      form.removeEventListener("change", handleChange, true);
      form.removeEventListener("invalid", handleInvalid, true);
      if (announceTimerRef.current) clearTimeout(announceTimerRef.current);
    };
  }, [formData.billingType, formData.stato, formData.quotaVersata]);

  const updateField = <K extends keyof BillingFormData>(
    key: K,
    value: BillingFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (crossFieldErrors[key] || crossFieldErrors.aziendaId) {
      setCrossFieldErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        if (key === "partitaIva" || key === "codiceFiscale") delete next.aziendaId;
        return next;
      });
    }
  };

  const validateCrossFields = (): boolean => {
    const errors: Record<string, string> = {};

    // For Azienda / Ente: require at least Partita IVA or Codice Fiscale
    if (isAzienda && !formData.partitaIva.trim() && !formData.codiceFiscale.trim()) {
      errors.aziendaId =
        "Inserisci almeno la Partita IVA oppure il Codice Fiscale dell'azienda o ente.";
    }

    setCrossFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (errors.aziendaId) {
        document.getElementById(`${formId}-piva`)?.focus();
      }
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    // Honeypot check: silently succeed without emailing if a bot filled the hidden field
    if (formData.honeypot.trim() !== "") {
      setFormSubmitted(true);
      return;
    }

    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      const firstInvalid = form.querySelector<HTMLElement>(":invalid");
      firstInvalid?.focus();
      return;
    }

    if (!validateCrossFields()) {
      return;
    }

    setIsSubmitting(true);

    const quotaFinale =
      formData.quotaVersata.startsWith("Altro") && formData.quotaAltro.trim()
        ? `Altro: ${formData.quotaAltro.trim()}`
        : formData.quotaVersata;

    const payload: Record<string, string> = {
      _subject: `[FATTURA MASTERCLASS] ${formData.intestatario.trim()} (${BILLING_TYPE_LABELS[formData.billingType]})`,
      Documento: "Richiesta Emissione Fattura — Masterclass in Psicologia del Gioco (23-24 Gennaio 2027)",
      "Tipologia Intestatario": BILLING_TYPE_LABELS[formData.billingType],
      "Intestatario / Ragione Sociale": formData.intestatario.trim(),
      "Partecipante in Aula":
        formData.partecipanteNome.trim() ||
        (isPrivato || isProfessionista ? formData.intestatario.trim() : "Non specificato"),
      "Codice Fiscale": formData.codiceFiscale.trim().toUpperCase() || "Non indicato",
      "Partita IVA": formData.partitaIva.trim().toUpperCase() || "Non applicabile / Non indicata",
      ...(isPa
        ? {
            "Codice Univoco Ufficio (IPA)": formData.codiceUnivocoPa.trim().toUpperCase(),
            "CIG / CUP / N. Ordine": formData.cigCup.trim() || "Non indicato",
          }
        : {}),
      ...(!isPrivato
        ? {
            "Codice Destinatario SDI":
              formData.codiceSdi.trim().toUpperCase() || (isPa ? "Vedi Codice IPA" : "0000000"),
            "Indirizzo PEC": formData.pec.trim().toLowerCase() || "Non indicato",
          }
        : {
            "Codice Destinatario SDI": "0000000 (Privato)",
          }),
      "Indirizzo (Via e Civico)": formData.indirizzo.trim(),
      CAP: formData.cap.trim() || "Non indicato",
      "Città / Comune": formData.citta.trim(),
      Provincia: formData.provincia.trim().toUpperCase() || "Non indicata",
      "Stato / Nazione": formData.stato.trim(),
      "Email Copia di Cortesia": formData.emailFattura.trim().toLowerCase(),
      Telefono: formData.telefono.trim() || "Non indicato",
      "Quota Versata": quotaFinale,
      "Modalità di Pagamento": formData.modalitaPagamento,
      "Data Pagamento": formData.dataPagamento || "Non indicata",
      "Note Fatturazione": formData.note.trim() || "Nessuna nota",
      "Consenso Privacy / Dati Fiscali": "Confermato",
      "Data Invio Modulo": new Date().toLocaleString("it-IT", {
        timeZone: "Europe/Rome",
      }),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      throw new Error("API interna non raggiungibile, attivo fallback");
    } catch {
      try {
        const fallbackRes = await fetch(GOOGLE_SCRIPT_FALLBACK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
        if (fallbackRes.ok) {
          setFormSubmitted(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
      } catch (err: unknown) {
        console.error("Invio dati fatturazione fallito:", err);
      }

      setErrorMessage(
        "Si è verificato un errore temporaneo durante l'invio. Riprova tra qualche istante oppure invia i dati direttamente via email ad alan.mattiassi@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "billing-field-input w-full min-h-[48px] px-4 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-main)] placeholder:text-[var(--text-subtle)] text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/70 transition-all";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Polite screen-reader live region for field validation announcements */}
      <div
        ref={announcerRef}
        aria-live="polite"
        aria-atomic="true"
        className="visually-hidden"
      />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
          <span>Modulo Riservato ai Partecipanti Iscritti</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-main)] tracking-tight leading-tight">
          Dati per Emissione Fattura
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          <strong className="text-[var(--text-main)] font-semibold">
            Masterclass in Psicologia del Gioco
          </strong>
          <br />
          <span className="italic">
            Capire e Progettare Ambienti, Scelte e Apprendimento Profondo
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] font-medium pt-1">
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            <strong className="text-[var(--text-main)] font-semibold">23–24 Gennaio 2027</strong>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            <span>Friuli &bull; 2 Giornate Intere in Presenza</span>
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="w-full rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {formSubmitted ? (
          <div
            role="status"
            aria-live="polite"
            className="text-center py-8 space-y-6 relative z-10"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[var(--text-main)]">
                Dati Fiscali Ricevuti Correttamente
              </h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Grazie! Le informazioni per la fatturazione sono state inviate alla casella di
                posta di Alan Mattiassi. Riceverai la copia di cortesia della fattura
                all&apos;indirizzo{" "}
                <strong className="text-[var(--text-main)]">{formData.emailFattura}</strong>.
              </p>
            </div>

            {/* Riepilogo Dati Inviati */}
            <div className="text-left rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-5 space-y-2 text-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] pb-1 border-b border-[var(--border-color)]">
                Riepilogo dei dati inviati
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm">
                <div>
                  <dt className="text-[var(--text-subtle)]">Tipologia</dt>
                  <dd className="font-semibold text-[var(--text-main)]">
                    {BILLING_TYPE_LABELS[formData.billingType]}
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--text-subtle)]">Intestatario</dt>
                  <dd className="font-semibold text-[var(--text-main)]">
                    {formData.intestatario}
                  </dd>
                </div>
                {formData.codiceFiscale && (
                  <div>
                    <dt className="text-[var(--text-subtle)]">Codice Fiscale</dt>
                    <dd className="font-mono font-semibold text-[var(--text-main)] uppercase">
                      {formData.codiceFiscale}
                    </dd>
                  </div>
                )}
                {formData.partitaIva && (
                  <div>
                    <dt className="text-[var(--text-subtle)]">Partita IVA</dt>
                    <dd className="font-mono font-semibold text-[var(--text-main)] uppercase">
                      {formData.partitaIva}
                    </dd>
                  </div>
                )}
                <div className="sm:col-span-2">
                  <dt className="text-[var(--text-subtle)]">Indirizzo</dt>
                  <dd className="font-semibold text-[var(--text-main)]">
                    {formData.indirizzo}, {formData.cap ? `${formData.cap} ` : ""}
                    {formData.citta}
                    {formData.provincia ? ` (${formData.provincia.toUpperCase()})` : ""},{" "}
                    {formData.stato}
                  </dd>
                </div>
              </dl>
            </div>

            <p className="text-xs text-[var(--text-subtle)]">
              Se noti un refuso nei dati inseriti, scrivi pure a{" "}
              <a
                href="mailto:alan.mattiassi@gmail.com"
                className="underline hover:text-[var(--text-main)]"
              >
                alan.mattiassi@gmail.com
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            ref={formRef}
            method="POST"
            action="/api/contact"
            onSubmit={handleSubmit}
            className="space-y-8 relative z-10"
            aria-labelledby={`${formId}-heading`}
          >
            {/* Intro Box */}
            <div className="space-y-2 pb-4 border-b border-[var(--border-color)]">
              <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                <FileText className="w-5 h-5" aria-hidden="true" />
                <h2
                  id={`${formId}-heading`}
                  className="text-xl font-extrabold text-[var(--text-main)]"
                >
                  Compila i dati fiscali per la fattura
                </h2>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Compila questo modulo dopo aver effettuato il pagamento della quota di
                iscrizione (esente/fuori campo IVA). I campi contrassegnati con{" "}
                <span aria-hidden="true" className="font-bold text-amber-600 dark:text-amber-400">
                  *
                </span>{" "}
                sono obbligatori.
              </p>
            </div>

            {/* Honeypot anti-spam (hidden from users and assistive technology) */}
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor={`${formId}-website`}>Non compilare questo campo</label>
              <input
                type="text"
                id={`${formId}-website`}
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => updateField("honeypot", e.target.value)}
              />
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="flex items-start space-x-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* SEZIONE 1: Tipologia Intestatario */}
            <fieldset className="space-y-3">
              <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                1. A chi va intestata la fattura? *
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BILLING_TYPE_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = formData.billingType === opt.value;
                  const radioId = `${formId}-type-${opt.value}`;
                  return (
                    <label
                      key={opt.value}
                      htmlFor={radioId}
                      className={`flex items-start space-x-3 p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-amber-500/10 border-amber-500/60 shadow-sm"
                          : "bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--border-strong)]"
                      }`}
                    >
                      <input
                        type="radio"
                        id={radioId}
                        name="billingType"
                        value={opt.value}
                        checked={isSelected}
                        onChange={() => updateField("billingType", opt.value)}
                        className="accent-amber-500 w-4 h-4 mt-1 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <div
                          className={`font-bold text-sm flex items-center space-x-1.5 ${
                            isSelected
                              ? "text-amber-700 dark:text-amber-300"
                              : "text-[var(--text-main)]"
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{opt.label}</span>
                        </div>
                        <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {opt.desc}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* SEZIONE 2: Dati Fiscali Intestatario */}
            <fieldset className="space-y-5 pt-2 border-t border-[var(--border-color)]">
              <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] pt-4">
                2. Dati Fiscali dell&apos;Intestatario
              </legend>

              {/* Intestatario / Ragione Sociale */}
              <div className="space-y-1.5">
                <label
                  htmlFor={`${formId}-intestatario`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                >
                  {isPrivato && "Nome e Cognome *"}
                  {isProfessionista && "Nome e Cognome / Denominazione Ditta Individuale *"}
                  {isAzienda && "Ragione Sociale / Denominazione Ente *"}
                  {isPa && "Denominazione Ente Pubblico *"}
                </label>
                <input
                  type="text"
                  id={`${formId}-intestatario`}
                  name="intestatario"
                  required
                  maxLength={150}
                  autoComplete={isAzienda || isPa ? "organization" : "name"}
                  enterKeyHint="next"
                  placeholder={
                    isAzienda
                      ? "es. Rossi Formazione S.r.l."
                      : isPa
                        ? "es. Istituto Comprensivo Statale..."
                        : "es. Mario Rossi"
                  }
                  value={formData.intestatario}
                  onChange={(e) => updateField("intestatario", e.target.value)}
                  data-error={`${formId}-intestatario-err`}
                  className={inputBaseClass}
                />
                <div id={`${formId}-intestatario-err`} className="billing-error-msg">
                  <span role="img" aria-label="Errore">
                    ⚠️
                  </span>
                  <span>Inserisci il nome o la ragione sociale a cui intestare la fattura.</span>
                </div>
              </div>

              {/* Partita IVA e Codice Fiscale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Codice Fiscale */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-cf`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Codice Fiscale{" "}
                    {isPrivato || isProfessionista || isPa ? "*" : "(se diverso da P.IVA)"}
                  </label>
                  <span id={`${formId}-cf-hint`} className="block text-xs text-[var(--text-subtle)]">
                    {isItalia
                      ? isAzienda || isPa
                        ? "11 cifre (o 16 caratteri per persone fisiche)."
                        : "16 caratteri alfanumerici (es. RSSMRA80A01L483X)."
                      : "Codice fiscale / Tax ID (se applicabile)."}
                  </span>
                  <input
                    type="text"
                    id={`${formId}-cf`}
                    name="codiceFiscale"
                    required={(isPrivato || isProfessionista || isPa) && isItalia}
                    pattern={
                      isItalia
                        ? isAzienda || isPa
                          ? "[A-Za-z0-9]{11,16}"
                          : "[A-Za-z0-9]{16}"
                        : undefined
                    }
                    maxLength={isItalia ? 16 : 32}
                    autoCorrect="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder={isAzienda || isPa ? "es. 01234567890" : "RSSMRA80A01L483X"}
                    value={formData.codiceFiscale}
                    onChange={(e) =>
                      updateField("codiceFiscale", e.target.value.toUpperCase())
                    }
                    aria-describedby={`${formId}-cf-hint`}
                    data-error={`${formId}-cf-err`}
                    className={`${inputBaseClass} font-mono uppercase`}
                  />
                  <div id={`${formId}-cf-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>
                      {isAzienda || isPa
                        ? "Inserisci un Codice Fiscale valido (11 cifre o 16 caratteri)."
                        : "Inserisci un Codice Fiscale valido di 16 caratteri alfanumerici."}
                    </span>
                  </div>
                </div>

                {/* Partita IVA (nascosta per Privato) */}
                {!isPrivato && (
                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${formId}-piva`}
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                    >
                      Partita IVA {isProfessionista ? "*" : isPa ? "(Opzionale)" : ""}
                    </label>
                    <span
                      id={`${formId}-piva-hint`}
                      className="block text-xs text-[var(--text-subtle)]"
                    >
                      {isItalia
                        ? "11 cifre numeriche, senza prefisso IT."
                        : "Numero VAT / P.IVA comunitaria o estera."}
                    </span>
                    <input
                      type="text"
                      id={`${formId}-piva`}
                      name="partitaIva"
                      required={isProfessionista && isItalia}
                      inputMode={isItalia ? "numeric" : "text"}
                      pattern={isItalia ? "\\d{11}" : undefined}
                      maxLength={isItalia ? 11 : 25}
                      autoCorrect="off"
                      autoCapitalize="characters"
                      spellCheck={false}
                      enterKeyHint="next"
                      placeholder={isItalia ? "es. 01234567890" : "es. DE123456789"}
                      value={formData.partitaIva}
                      onChange={(e) =>
                        updateField(
                          "partitaIva",
                          isItalia
                            ? e.target.value.replace(/\s+/g, "")
                            : e.target.value.toUpperCase()
                        )
                      }
                      aria-describedby={`${formId}-piva-hint`}
                      data-error={`${formId}-piva-err`}
                      className={`${inputBaseClass} font-mono uppercase`}
                    />
                    <div id={`${formId}-piva-err`} className="billing-error-msg">
                      <span role="img" aria-label="Errore">
                        ⚠️
                      </span>
                      <span>Inserisci una Partita IVA italiana valida di 11 cifre.</span>
                    </div>
                  </div>
                )}
              </div>

              {crossFieldErrors.aziendaId && (
                <div
                  role="alert"
                  className="flex items-start space-x-2 text-xs sm:text-sm text-red-600 dark:text-red-400"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{crossFieldErrors.aziendaId}</span>
                </div>
              )}

              {/* Campi specifici PA */}
              {isPa && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${formId}-ipa`}
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                    >
                      Codice Univoco Ufficio (IPA / SDI) *
                    </label>
                    <span
                      id={`${formId}-ipa-hint`}
                      className="block text-xs text-[var(--text-subtle)]"
                    >
                      6 caratteri alfanumerici per fatturazione elettronica PA.
                    </span>
                    <input
                      type="text"
                      id={`${formId}-ipa`}
                      name="codiceUnivocoPa"
                      required
                      pattern="[A-Za-z0-9]{6}"
                      maxLength={6}
                      autoCorrect="off"
                      autoCapitalize="characters"
                      spellCheck={false}
                      enterKeyHint="next"
                      placeholder="es. UF1234"
                      value={formData.codiceUnivocoPa}
                      onChange={(e) =>
                        updateField("codiceUnivocoPa", e.target.value.toUpperCase())
                      }
                      aria-describedby={`${formId}-ipa-hint`}
                      data-error={`${formId}-ipa-err`}
                      className={`${inputBaseClass} font-mono uppercase`}
                    />
                    <div id={`${formId}-ipa-err`} className="billing-error-msg">
                      <span role="img" aria-label="Errore">
                        ⚠️
                      </span>
                      <span>Inserisci il Codice Univoco Ufficio IPA (esattamente 6 caratteri).</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${formId}-cig`}
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                    >
                      CIG / CUP / Numero Determina (Opzionale)
                    </label>
                    <span
                      id={`${formId}-cig-hint`}
                      className="block text-xs text-[var(--text-subtle)]"
                    >
                      Indica eventuali codici da riportare in fattura elettronica.
                    </span>
                    <input
                      type="text"
                      id={`${formId}-cig`}
                      name="cigCup"
                      maxLength={80}
                      autoCorrect="off"
                      spellCheck={false}
                      enterKeyHint="next"
                      placeholder="es. CIG Z123456789"
                      value={formData.cigCup}
                      onChange={(e) => updateField("cigCup", e.target.value)}
                      aria-describedby={`${formId}-cig-hint`}
                      className={inputBaseClass}
                    />
                  </div>
                </div>
              )}

              {/* Recapito Fatturazione Elettronica SdI (Professionista / Azienda / PA) */}
              {!isPrivato && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
                      Recapito Fatturazione Elettronica (SdI)
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">
                      {isPa
                        ? "Il Codice Univoco Ufficio IPA (SDI PA) è obbligatorio nel campo sopra. Puoi indicare facoltativamente anche la PEC istituzionale dell'ente."
                        : "Il Codice Destinatario SDI (7 caratteri) è obbligatorio. Usa 0000000 se ricevi le fatture tramite PEC, oppure XXXXXXX per soggetti esteri."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {!isPa && (
                      <div className="space-y-1.5">
                        <label
                          htmlFor={`${formId}-sdi`}
                          className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                        >
                          Codice Destinatario SDI *
                        </label>
                        <span
                          id={`${formId}-sdi-hint`}
                          className="block text-xs text-[var(--text-subtle)]"
                        >
                          7 caratteri obbligatori (es. M5UXCR1, 0000000 se usi PEC, XXXXXXX se estero).
                        </span>
                        <input
                          type="text"
                          id={`${formId}-sdi`}
                          name="codiceSdi"
                          required
                          pattern="[A-Za-z0-9]{7}"
                          maxLength={7}
                          autoCorrect="off"
                          autoCapitalize="characters"
                          spellCheck={false}
                          enterKeyHint="next"
                          placeholder="es. M5UXCR1"
                          value={formData.codiceSdi}
                          onChange={(e) =>
                            updateField("codiceSdi", e.target.value.toUpperCase())
                          }
                          aria-describedby={`${formId}-sdi-hint`}
                          data-error={`${formId}-sdi-err`}
                          className={`${inputBaseClass} font-mono uppercase`}
                        />
                        <div id={`${formId}-sdi-err`} className="billing-error-msg">
                          <span role="img" aria-label="Errore">
                            ⚠️
                          </span>
                          <span>Inserisci un Codice Destinatario SDI valido di 7 caratteri alfanumerici.</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label
                        htmlFor={`${formId}-pec`}
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                      >
                        Indirizzo PEC (Opzionale)
                      </label>
                      <span
                        id={`${formId}-pec-hint`}
                        className="block text-xs text-[var(--text-subtle)]"
                      >
                        Formato: nome@pec.it
                      </span>
                      <input
                        type="email"
                        id={`${formId}-pec`}
                        name="pec"
                        autoCorrect="off"
                        autoCapitalize="none"
                        spellCheck={false}
                        enterKeyHint="next"
                        placeholder="es. amministrazione@pec.azienda.it"
                        value={formData.pec}
                        onChange={(e) => updateField("pec", e.target.value)}
                        aria-describedby={`${formId}-pec-hint`}
                        data-error={`${formId}-pec-err`}
                        className={inputBaseClass}
                      />
                      <div id={`${formId}-pec-err`} className="billing-error-msg">
                        <span role="img" aria-label="Errore">
                          ⚠️
                        </span>
                        <span>Inserisci un indirizzo PEC valido nel formato nome@pec.it.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Nome partecipante se diverso dall'intestatario */}
              {(isAzienda || isPa) && (
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-partecipante`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Nome e Cognome del Partecipante in Aula *
                  </label>
                  <span
                    id={`${formId}-partecipante-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    Serve per associare la fattura aziendale/ente alla persona iscritta in aula (se più persone, elencale tutte).
                  </span>
                  <input
                    type="text"
                    id={`${formId}-partecipante`}
                    name="partecipanteNome"
                    required
                    autoComplete="name"
                    enterKeyHint="next"
                    placeholder="es. Giulia Bianchi"
                    value={formData.partecipanteNome}
                    onChange={(e) => updateField("partecipanteNome", e.target.value)}
                    aria-describedby={`${formId}-partecipante-hint`}
                    data-error={`${formId}-partecipante-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-partecipante-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Indica il nome e cognome del partecipante in aula.</span>
                  </div>
                </div>
              )}
            </fieldset>

            {/* SEZIONE 3: Indirizzo di Residenza / Sede Legale */}
            <fieldset className="space-y-5 pt-2 border-t border-[var(--border-color)]">
              <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] pt-4">
                3. Indirizzo di {isPrivato ? "Residenza Fiscale" : "Sede Legale"}
              </legend>

              <div className="space-y-1.5">
                <label
                  htmlFor={`${formId}-indirizzo`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Via / Piazza e Numero Civico *
                </label>
                <input
                  type="text"
                  id={`${formId}-indirizzo`}
                  name="indirizzo"
                  required
                  maxLength={200}
                  autoComplete="street-address"
                  enterKeyHint="next"
                  placeholder="es. Via Roma 42"
                  value={formData.indirizzo}
                  onChange={(e) => updateField("indirizzo", e.target.value)}
                  data-error={`${formId}-indirizzo-err`}
                  className={inputBaseClass}
                />
                <div id={`${formId}-indirizzo-err`} className="billing-error-msg">
                  <span role="img" aria-label="Errore">
                    ⚠️
                  </span>
                  <span>Inserisci l&apos;indirizzo completo di numero civico.</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-cap`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    CAP {isItalia ? "*" : "(Opzionale)"}
                  </label>
                  <input
                    type="text"
                    id={`${formId}-cap`}
                    name="cap"
                    required={isItalia}
                    inputMode={isItalia ? "numeric" : "text"}
                    pattern={isItalia ? "\\d{5}" : undefined}
                    maxLength={isItalia ? 5 : 15}
                    autoComplete="postal-code"
                    autoCorrect="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder="es. 33100"
                    value={formData.cap}
                    onChange={(e) => updateField("cap", e.target.value.trim())}
                    data-error={`${formId}-cap-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-cap-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Inserisci un CAP valido di 5 cifre.</span>
                  </div>
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label
                    htmlFor={`${formId}-citta`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Città / Comune *
                  </label>
                  <input
                    type="text"
                    id={`${formId}-citta`}
                    name="citta"
                    required
                    maxLength={100}
                    autoComplete="address-level2"
                    enterKeyHint="next"
                    placeholder="es. Udine"
                    value={formData.citta}
                    onChange={(e) => updateField("citta", e.target.value)}
                    data-error={`${formId}-citta-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-citta-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Inserisci la città o il comune.</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-provincia`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Provincia (Sigla) {isItalia ? "*" : "(Opzionale)"}
                  </label>
                  <span
                    id={`${formId}-provincia-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    {isItalia ? "Sigla di 2 lettere (es. UD, PN, MI, RM)." : "Stato / Regione estera."}
                  </span>
                  <input
                    type="text"
                    id={`${formId}-provincia`}
                    name="provincia"
                    required={isItalia}
                    pattern={isItalia ? "[A-Za-z]{2}" : undefined}
                    maxLength={isItalia ? 2 : 50}
                    autoComplete="address-level1"
                    autoCorrect="off"
                    autoCapitalize="characters"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder={isItalia ? "es. UD" : "es. Canton Ticino"}
                    value={formData.provincia}
                    onChange={(e) =>
                      updateField(
                        "provincia",
                        isItalia ? e.target.value.toUpperCase() : e.target.value
                      )
                    }
                    aria-describedby={`${formId}-provincia-hint`}
                    data-error={`${formId}-provincia-err`}
                    className={`${inputBaseClass} ${isItalia ? "uppercase" : ""}`}
                  />
                  <div id={`${formId}-provincia-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Inserisci la sigla della provincia (2 lettere, es. UD).</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-stato`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Stato / Nazione *
                  </label>
                  <span
                    id={`${formId}-stato-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    Modifica se la residenza o sede fiscale è all&apos;estero.
                  </span>
                  <input
                    type="text"
                    id={`${formId}-stato`}
                    name="stato"
                    required
                    maxLength={80}
                    autoComplete="country-name"
                    enterKeyHint="next"
                    placeholder="Italia"
                    value={formData.stato}
                    onChange={(e) => updateField("stato", e.target.value)}
                    aria-describedby={`${formId}-stato-hint`}
                    data-error={`${formId}-stato-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-stato-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Inserisci lo Stato o la Nazione.</span>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* SEZIONE 4: Contatti e Dettagli Pagamento */}
            <fieldset className="space-y-5 pt-2 border-t border-[var(--border-color)]">
              <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] pt-4">
                4. Recapiti e Riferimenti del Pagamento
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Email per Copia di Cortesia Fattura *
                  </label>
                  <span
                    id={`${formId}-email-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    Formato: nome@esempio.it
                  </span>
                  <input
                    type="email"
                    id={`${formId}-email`}
                    name="emailFattura"
                    required
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    enterKeyHint="next"
                    placeholder="mario.rossi@esempio.it"
                    value={formData.emailFattura}
                    onChange={(e) => updateField("emailFattura", e.target.value)}
                    aria-describedby={`${formId}-email-hint`}
                    data-error={`${formId}-email-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-email-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Inserisci un indirizzo email valido (es. nome@esempio.it).</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-tel`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Telefono (Opzionale)
                  </label>
                  <span
                    id={`${formId}-tel-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    Solo in caso di chiarimenti rapidi sulla fattura.
                  </span>
                  <input
                    type="tel"
                    id={`${formId}-tel`}
                    name="telefono"
                    autoComplete="tel"
                    enterKeyHint="next"
                    placeholder="es. +39 333 1234567"
                    value={formData.telefono}
                    onChange={(e) => updateField("telefono", e.target.value)}
                    aria-describedby={`${formId}-tel-hint`}
                    className={inputBaseClass}
                  />
                </div>
              </div>

              {/* Quota Versata */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Quota Versata *
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {QUOTA_OPTIONS.map((quota) => {
                    const isSelected = formData.quotaVersata === quota;
                    const qId = `${formId}-quota-${quota.slice(0, 5)}`;
                    return (
                      <label
                        key={quota}
                        htmlFor={qId}
                        className={`flex items-center space-x-2.5 p-3.5 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm ${
                          isSelected
                            ? "bg-amber-500/10 border-amber-500/60 font-semibold text-[var(--text-main)]"
                            : "bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
                        }`}
                      >
                        <input
                          type="radio"
                          id={qId}
                          name="quotaVersata"
                          value={quota}
                          checked={isSelected}
                          onChange={() => updateField("quotaVersata", quota)}
                          className="accent-amber-500 w-4 h-4 shrink-0"
                        />
                        <span>{quota}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {formData.quotaVersata.startsWith("Altro") && (
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-quota-altro`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Specifica l&apos;importo versato *
                  </label>
                  <input
                    type="text"
                    id={`${formId}-quota-altro`}
                    name="quotaAltro"
                    required
                    placeholder="es. 1.500€ (2 partecipanti)"
                    value={formData.quotaAltro}
                    onChange={(e) => updateField("quotaAltro", e.target.value)}
                    data-error={`${formId}-quota-altro-err`}
                    className={inputBaseClass}
                  />
                  <div id={`${formId}-quota-altro-err`} className="billing-error-msg">
                    <span role="img" aria-label="Errore">
                      ⚠️
                    </span>
                    <span>Indica l&apos;importo versato.</span>
                  </div>
                </div>
              )}

              {/* Modalità e Data Pagamento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Modalità di Pagamento Utilizzata *
                  </div>
                  <div className="space-y-2">
                    {PAYMENT_OPTIONS.map((mode) => {
                      const isSelected = formData.modalitaPagamento === mode;
                      const mId = `${formId}-pay-${mode.slice(0, 6)}`;
                      return (
                        <label
                          key={mode}
                          htmlFor={mId}
                          className={`flex items-center space-x-2.5 px-3.5 py-3 rounded-xl border cursor-pointer transition-all text-sm ${
                            isSelected
                              ? "bg-amber-500/10 border-amber-500/60 font-semibold text-[var(--text-main)]"
                              : "bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--border-strong)]"
                          }`}
                        >
                          <input
                            type="radio"
                            id={mId}
                            name="modalitaPagamento"
                            value={mode}
                            checked={isSelected}
                            onChange={() => updateField("modalitaPagamento", mode)}
                            className="accent-amber-500 w-4 h-4 shrink-0"
                          />
                          <span>{mode}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-data-pag`}
                    className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                  >
                    Data del Pagamento (Opzionale)
                  </label>
                  <span
                    id={`${formId}-data-pag-hint`}
                    className="block text-xs text-[var(--text-subtle)]"
                  >
                    Utile per abbinare rapidamente il bonifico o la transazione.
                  </span>
                  <input
                    type="date"
                    id={`${formId}-data-pag`}
                    name="dataPagamento"
                    value={formData.dataPagamento}
                    onChange={(e) => updateField("dataPagamento", e.target.value)}
                    aria-describedby={`${formId}-data-pag-hint`}
                    className={inputBaseClass}
                  />
                </div>
              </div>

              {/* Note Aggiuntive */}
              <div className="space-y-1.5">
                <label
                  htmlFor={`${formId}-note`}
                  className="block text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
                >
                  Note per la Fattura / Riferimento Pagamento (Opzionale)
                </label>
                <span
                  id={`${formId}-note-hint`}
                  className="block text-xs text-[var(--text-subtle)]"
                >
                  Es. codice CRO del bonifico, numero d&apos;ordine aziendale, dicitura specifica richiesta.
                </span>
                <textarea
                  id={`${formId}-note`}
                  name="note"
                  rows={3}
                  maxLength={600}
                  enterKeyHint="done"
                  placeholder="Eventuali indicazioni aggiuntive da inserire in fattura..."
                  value={formData.note}
                  onChange={(e) => updateField("note", e.target.value)}
                  aria-describedby={`${formId}-note-hint`}
                  className={inputBaseClass}
                />
              </div>
            </fieldset>

            {/* Consenso Privacy */}
            <div className="billing-checkbox-group pt-2 border-t border-[var(--border-color)] space-y-2">
              <div className="flex items-start space-x-3 pt-4">
                <input
                  type="checkbox"
                  id={`${formId}-privacy`}
                  name="privacyAccepted"
                  required
                  checked={formData.privacyAccepted}
                  onChange={(e) => updateField("privacyAccepted", e.target.checked)}
                  data-error={`${formId}-privacy-err`}
                  className="billing-field-input accent-amber-500 w-5 h-5 mt-0.5 shrink-0 cursor-pointer"
                />
                <label
                  htmlFor={`${formId}-privacy`}
                  className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed cursor-pointer"
                >
                  Dichiaro che i dati fiscali inseriti sono corretti e autorizzo il loro
                  trattamento ai sensi del GDPR (Reg. UE 2016/679) esclusivamente per
                  l&apos;emissione della fattura e i relativi adempimenti contabili e fiscali. *
                </label>
              </div>
              <div id={`${formId}-privacy-err`} className="billing-error-msg pl-8">
                <span role="img" aria-label="Errore">
                  ⚠️
                </span>
                <span>È necessario confermare il consenso per procedere all&apos;invio.</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full min-h-[52px] py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 disabled:opacity-60 shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span>Invio dati fiscali in corso...</span>
                </>
              ) : (
                <>
                  <span>Invia Dati per Emissione Fattura</span>
                  <Send className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[var(--text-subtle)] pt-1">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>Invio diretto e riservato</span>
              </span>
              <span aria-hidden="true">&bull;</span>
              <span>Pagina non indicizzata sui motori di ricerca</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
