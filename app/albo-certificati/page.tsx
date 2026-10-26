import React, { Suspense } from "react";
import CertificatesRegistryClient from "@/components/CertificatesRegistryClient";

export const metadata = {
  title: "Albo dei Corsisti & Verifica Certificati | Alan Mattiassi, PhD",
  description:
    "Registro ufficiale degli allievi e strumento di verifica dei titoli rilasciati dal Dr. Alan Mattiassi per i laboratori e corsi di Psicologia del Gioco: Certificati di Eccellenza e Attestati di Partecipazione.",
};

export default function AlboCertificatiPage() {
  return (
    <div className="py-12 sm:py-20 space-y-16 bg-[var(--bg-canvas)] transition-colors">
      <Suspense fallback={<div className="max-w-5xl mx-auto px-4 text-center py-20 text-[var(--text-muted)]">Caricamento registro...</div>}>
        <CertificatesRegistryClient />
      </Suspense>
    </div>
  );
}
