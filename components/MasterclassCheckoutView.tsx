"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Copy,
  Check,
  CreditCard,
  Building,
  ShieldCheck,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Mail,
  Lock,
  Sparkles,
  Utensils,
  BookOpen,
  Award,
  AlertCircle,
} from "lucide-react";

export default function MasterclassCheckoutView() {
  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedCausale, setCopiedCausale] = useState(false);

  const ibanRaw = "IT52K0357601601010006297871";
  const ibanFormatted = "IT52 K035 7601 6010 1000 6297 871";
  const causaleText = "Masterclass Psicologia del Gioco - Gennaio 2027 - [Tuo Nome e Cognome]";
  const stripeLink = "https://buy.stripe.com/5kQaEYacfdJP8Yw76R5sA01";
  const whatsappUrl =
    "https://wa.me/393926808384?text=" +
    encodeURIComponent(
      "Ciao Alan, ho effettuato il bonifico per la Masterclass in Psicologia del Gioco. Ecco in allegato la ricevuta con codice CRO:"
    );

  const handleCopyIban = () => {
    navigator.clipboard.writeText(ibanRaw);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2000);
  };

  const handleCopyCausale = () => {
    navigator.clipboard.writeText(causaleText);
    setCopiedCausale(true);
    setTimeout(() => setCopiedCausale(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Top Navigation */}
      <div className="pt-4">
        <Link
          href="/masterclass-psicologia-del-gioco"
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla presentazione della Masterclass</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>FINESTRA DI PRELAZIONE ESCLUSIVA (48 ORE)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight">
          Conferma la tua Iscrizione
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
          <strong className="text-[var(--text-main)] font-semibold">Masterclass in Psicologia del Gioco:</strong> Capire e Progettare Ambienti, Scelte e Apprendimento Profondo
        </p>

        {/* Badge Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] font-medium pt-1">
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <strong className="text-[var(--text-main)] font-semibold">23–24 Gennaio 2027</strong>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Friuli (Udine/Pordenone)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-color)]">
            <Clock className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
            <span>Weekend intensivo in presenza</span>
          </span>
        </div>
      </div>

      {/* Box Riepilogo Quota Early Bird */}
      <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Tariffa Agevolata Riservata</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
              Quota Early Bird (Priority List)
            </h2>
            <p className="text-xs text-[var(--text-muted)]">
              Prezzo finito omnicomprensivo, esente IVA. Nessun costo nascosto.
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <div className="text-4xl sm:text-5xl font-black text-[var(--text-main)] tracking-tight">
              490€
            </div>
            <div className="text-xs text-[var(--text-subtle)] line-through decoration-rose-500/70">
              Quota ordinaria: 750€
            </div>
          </div>
        </div>

        {/* Vincolo Cap 8 posti */}
        <div className="flex items-start space-x-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-[var(--text-muted)] leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-[var(--text-main)] font-semibold">
              Contingente massimo: 8 quote Early Bird.
            </strong>{" "}
            Per garantire la sostenibilità logistica dell&apos;evento e la massima cura didattica, i posti a 490€ sono assegnati in{" "}
            <strong className="text-[var(--text-main)] font-semibold">ordine rigorosamente cronologico di conferma/ricevuta</strong>.
          </div>
        </div>

        {/* Cosa Include */}
        <div className="space-y-3 pt-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Il tuo posto include:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Due giornate intensive complete (Sabato 23 e Domenica 24 Gennaio)</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Laboratorio di Co-Design con supervisione 1-a-1 di Alan Mattiassi sui tuoi progetti</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>2 pranzi (riservati ai partecipanti) e coffee break continui</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Tutti i materiali operativi, canvas metodologici e slide complete</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Attestato ufficiale di partecipazione con monte ore formativo</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>Spesa di formazione e aggiornamento professionale deducibile</span>
            </div>
          </div>
        </div>
      </div>

      {/* METODI DI PAGAMENTO */}
      <div className="space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
            Scegli come confermare il tuo posto
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Seleziona la modalità di pagamento che preferisci tra bonifico bancario diretto o carta di credito.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* OPZIONE 1: BONIFICO BANCARIO (CONSIGLIATA) */}
          <div className="rounded-3xl bg-[var(--bg-card)] border-2 border-emerald-500/50 p-6 sm:p-8 space-y-6 shadow-xl relative">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>OPZIONE 1 (CONSIGLIATA PER PROFESSIONISTI &amp; AZIENDE)</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                Zero Commissioni
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                Bonifico Bancario Diretto
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Effettua il bonifico dal tuo home banking con le seguenti coordinate:
              </p>
            </div>

            {/* Dati Bancari */}
            <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[var(--border-color)] pb-3">
                <span className="text-[var(--text-muted)] font-medium">Intestatario:</span>
                <span className="font-bold text-[var(--text-main)] text-sm sm:text-base">Alan Mattiassi</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-3">
                <span className="text-[var(--text-muted)] font-medium">IBAN:</span>
                <div className="flex items-center space-x-2 font-mono font-bold text-[var(--text-main)] text-xs sm:text-sm break-all">
                  <span>{ibanFormatted}</span>
                  <button
                    onClick={handleCopyIban}
                    className="p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500 text-[var(--text-muted)] hover:text-emerald-600 transition-colors shrink-0"
                    title="Copia IBAN"
                  >
                    {copiedIban ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[var(--border-color)] pb-3">
                <span className="text-[var(--text-muted)] font-medium">Importo:</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base sm:text-lg">
                  490,00 €
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[var(--text-muted)] font-medium">Causale:</span>
                <div className="flex items-center space-x-2 font-semibold text-[var(--text-main)] text-xs sm:text-sm">
                  <span>{causaleText}</span>
                  <button
                    onClick={handleCopyCausale}
                    className="p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500 text-[var(--text-muted)] hover:text-emerald-600 transition-colors shrink-0"
                    title="Copia Causale"
                  >
                    {copiedCausale ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Istruzioni Blocco Posto Immediato WhatsApp */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <div className="font-bold text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-center space-x-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Come bloccare il posto all&apos;istante (senza attendere i giorni bancari):</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Non serve aspettare che il bonifico arrivi sul conto per assicurarti la priorità.{" "}
                <strong className="text-[var(--text-main)]">
                  Fai uno screenshot della contabile/ricevuta con il codice CRO/TRN
                </strong>{" "}
                e invialo direttamente ad Alan: il tuo posto viene registrato e congelato nell&apos;esatto ordine cronologico del messaggio.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Invia Ricevuta su WhatsApp (392 6808384) →</span>
                </a>

                <a
                  href="mailto:alan.mattiassi@gmail.com?subject=Ricevuta%20Bonifico%20Masterclass%20Psicologia%20del%20Gioco"
                  className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-main)] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all"
                >
                  <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                  <span>Oppure invia via Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* OPZIONE 2: CARTA DI CREDITO / APPLE PAY / GOOGLE PAY */}
          <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-amber-500/40 p-6 sm:p-8 space-y-5 shadow-lg transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                <CreditCard className="w-4 h-4" />
                <span>OPZIONE 2 (PAGAMENTO ONLINE IMMEDIATO)</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                Conferma Istantanea
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                Carta di Credito, Apple Pay o Google Pay
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Se preferisci completare la transazione all&apos;istante con carta Visa, Mastercard, American Express, Apple Pay o Google Pay tramite la piattaforma protetta Stripe:
              </p>
            </div>

            <div className="pt-2">
              <a
                href={stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 shadow-xl shadow-amber-500/20 active:scale-95 transition-all text-center"
              >
                <CreditCard className="w-4 h-4 mr-1" />
                <span>Paga con Carta o Apple/Google Pay (490€)</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>

            <p className="text-xs text-[var(--text-subtle)]">
              Transazione crittografata gestita su server sicuri Stripe. Riceverai la ricevuta di pagamento immediata via email.
            </p>
          </div>
        </div>
      </div>

      {/* Box Fatturazione e Supporto */}
      <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-5 sm:p-6 space-y-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
        <div className="font-bold text-[var(--text-main)] text-sm flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Fatturazione, Ricevuta e Assistenza Diretta</span>
        </div>
        <p>
          Subito dopo la ricezione del pagamento (o della distinta via WhatsApp), Alan ti invierà un&apos;email personale di conferma definitiva con la richiesta dei tuoi dati fiscali per l&apos;emissione del documento fiscale (Codice Fiscale o Partita IVA e Codice SDI/PEC aziendale).
        </p>
        <p>
          Per qualsiasi dubbio logistico, convenzioni alberghiere a Udine/Pordenone o richieste alimentari per il catering, puoi scrivere in qualsiasi momento su WhatsApp al{" "}
          <strong className="text-[var(--text-main)]">+39 392 6808384</strong> o via email a{" "}
          <strong className="text-[var(--text-main)]">alan.mattiassi@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
