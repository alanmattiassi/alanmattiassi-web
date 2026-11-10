import React from "react";
import type { Metadata } from "next";
import MasterclassCheckoutView from "@/components/MasterclassCheckoutView";

export const metadata: Metadata = {
  title: "Conferma Iscrizione Masterclass in Psicologia del Gioco | Alan Mattiassi, PhD",
  description:
    "Conferma il tuo posto alla Masterclass residenziale in Psicologia del Gioco (23–24 Gennaio 2027 in Friuli). Modalità di pagamento con Bonifico Bancario o Carta di Credito.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MasterclassIscrizionePage() {
  return (
    <div className="py-10 sm:py-16 bg-[var(--bg-canvas)] transition-colors min-h-screen">
      <MasterclassCheckoutView />
    </div>
  );
}
