"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ModuleData {
  number: string;
  title: string;
  description: string;
  question: string;
  badgeStyle: string;
  cardBorder: string;
  questionColor?: string;
}

const MODULES: ModuleData[] = [
  {
    number: "1/7",
    title: "Analisi del Contesto",
    description:
      "Mappare il contesto operativo per distinguere con chiarezza vincoli reali, barriere insormontabili e limiti strutturali del setting.",
    question:
      'Domanda cardine: “Cosa è davvero progettabile e cosa devo accettare come dato di realtà?”',
    badgeStyle:
      "bg-sky-500/10 border-sky-400/30 text-[var(--accent-primary)]",
    cardBorder:
      "border-[var(--border-color)] hover:border-[var(--border-strong)]",
  },
  {
    number: "2/7",
    title: "Obiettivo Formativo & Effetti Controfattuali",
    description:
      "Definire con rigore il cambiamento cognitivo desiderato, individuando la baseline di partenza e gli indicatori empirici per verificarne l'acquisizione.",
    question:
      'Domanda cardine: “Come riconosco che il cambiamento cognitivo è realmente avvenuto?”',
    badgeStyle:
      "bg-sky-500/10 border-sky-400/30 text-[var(--accent-primary)]",
    cardBorder:
      "border-[var(--border-color)] hover:border-[var(--border-strong)]",
  },
  {
    number: "3/7",
    title: "Il Processo Cognitivo: Dalla Baseline ai Desiderata",
    description:
      "Individuare la sequenza di processi psicologici e metacognitivi necessaria a guidare l'allievo dallo stato iniziale al traguardo.",
    question:
      'Domanda cardine: “Quali processi interni al discente devono essere attivati per produrre il salto?”',
    badgeStyle:
      "bg-sky-500/10 border-sky-400/30 text-[var(--accent-primary)]",
    cardBorder:
      "border-[var(--border-color)] hover:border-[var(--border-strong)]",
  },
  {
    number: "4/7",
    title: "Come si Impara nel Gioco: Il Game Loop",
    description:
      "Progettare il ciclo fondamentale di azione, feedback immediato e apprendimento, allineando i rinforzi alle finalità didattiche.",
    question:
      'Domanda cardine: “Qual è la minima sequenza di azioni capace di generare il feedback desiderato?”',
    badgeStyle:
      "bg-emerald-500/10 border-emerald-400/30 text-emerald-500 dark:text-emerald-400",
    cardBorder:
      "border-emerald-500/30 hover:border-emerald-500/50",
  },
  {
    number: "5/7",
    title: "Dal Singolo Loop al Gioco Intero: L'Obiettivo Lusorio",
    description:
      "Integrare i loop in un sistema organico attorno all'obiettivo lusorio, prevenendo gli errori tipici dei serious game.",
    question:
      'Domanda cardine: “Cosa motiva il giocatore a perseguire il traguardo accettando i limiti delle regole?”',
    badgeStyle:
      "bg-emerald-500/10 border-emerald-400/30 text-emerald-500 dark:text-emerald-400",
    cardBorder:
      "border-emerald-500/30 hover:border-emerald-500/50",
  },
  {
    number: "6/7",
    title: "Debriefing & Valutazione dell'Apprendimento",
    description:
      "Strutturare le fasi di rielaborazione post-gioco per consolidare l'apprendimento, estrarre valore cognitivo e trasferirlo alla realtà.",
    question:
      'Domanda cardine: “Come estraiamo valore cognitivo e comportamentale da quanto accaduto al tavolo?”',
    badgeStyle:
      "bg-purple-500/10 border-purple-400/30 text-purple-500 dark:text-purple-400",
    cardBorder:
      "border-[var(--border-color)] hover:border-[var(--border-strong)]",
  },
  {
    number: "7/7",
    title: "Pitch Finale, Playtest & Restituzione",
    description:
      "Presentare e collaudare il prototipo in una sessione di playtest con revisione critica tra pari e validazione con Alan Mattiassi.",
    question:
      'Domanda cardine: “Il prototipo è testato, documentato e pronto per la tua classe o azienda?”',
    badgeStyle:
      "bg-amber-500/10 border-amber-400/30 text-amber-500 dark:text-amber-400",
    cardBorder:
      "border-amber-500/30 hover:border-amber-500/50",
    questionColor: "text-amber-500 dark:text-amber-300",
  },
];

export default function CourseTimelineExpandable() {
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleAll = () => {
    if (isAllExpanded) {
      setIsAllExpanded(false);
      setExpandedItems({});
    } else {
      setIsAllExpanded(true);
      const all: Record<number, boolean> = {};
      MODULES.forEach((_, idx) => {
        all[idx] = true;
      });
      setExpandedItems(all);
    }
  };

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {/* 7 Incontri: Visibili anche prima di premere il pulsante */}
      <div className="space-y-3">
        {MODULES.map((mod, index) => {
          const isOpen = Boolean(isAllExpanded || expandedItems[index]);

          return (
            <div
              key={mod.number}
              onClick={() => toggleItem(index)}
              className={`bg-[var(--bg-card)] rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer group shadow-sm ${mod.cardBorder}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleItem(index);
                }
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-sm sm:text-base shrink-0 ${mod.badgeStyle}`}
                >
                  {mod.number}
                </div>
                <div className="flex-grow space-y-2 pt-0.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold text-base sm:text-lg text-[var(--text-main)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {mod.title}
                    </h3>
                    <span className="text-[var(--text-subtle)] group-hover:text-[var(--accent-primary)] shrink-0 p-1">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[var(--accent-primary)] transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform" />
                      )}
                    </span>
                  </div>

                  {/* Dettagli visibili all'espansione */}
                  {isOpen && (
                    <div className="space-y-2 pt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                        {mod.description}
                      </p>
                      <div
                        className={`text-xs italic ${
                          mod.questionColor || "text-[var(--text-subtle)]"
                        }`}
                      >
                        {mod.question}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pulsante per espandere / comprimere tutti i dettagli */}
      <div className="flex justify-center pt-2">
        <button
          onClick={toggleAll}
          aria-expanded={isAllExpanded}
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] shadow-sm hover:shadow transition-all group"
        >
          <span>
            {isAllExpanded
              ? "Comprimi i dettagli degli incontri"
              : "Espandi i dettagli dei 7 incontri"}
          </span>
          {isAllExpanded ? (
            <ChevronUp className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:-translate-y-0.5" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:translate-y-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
