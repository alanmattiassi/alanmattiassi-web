import React from "react";
import { Metadata } from "next";
import PressSection from "@/components/PressSection";

export const metadata: Metadata = {
  title: "Rassegna Stampa & Media | Alan Mattiassi, PhD",
  description:
    "Rassegna stampa, interviste, apparizioni radio/podcast e articoli di approfondimento su Alan Mattiassi, psicologo del gioco e ricercatore.",
};

export default function RassegnaStampaPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PressSection variant="full" />
    </div>
  );
}
