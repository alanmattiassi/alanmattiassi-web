import React from "react";
import type { Metadata } from "next";
import MasterclassBillingForm from "@/components/MasterclassBillingForm";

export const metadata: Metadata = {
  title: "Dati per Fatturazione — Masterclass in Psicologia del Gioco | Alan Mattiassi, PhD",
  description:
    "Modulo riservato ai partecipanti iscritti alla Masterclass in Psicologia del Gioco (23–24 Gennaio 2027) per la raccolta dei dati fiscali e l'emissione della fattura.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function MasterclassDatiFatturazionePage() {
  return (
    <div className="py-10 sm:py-16 bg-[var(--bg-canvas)] transition-colors min-h-screen">
      <MasterclassBillingForm />
    </div>
  );
}
