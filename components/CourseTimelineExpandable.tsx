"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CourseTimelineExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-6">
      {/* Expand / Collapse Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] shadow-sm hover:shadow transition-all group"
        >
          <span>
            {isExpanded
              ? "Nascondi il programma dei 7 incontri"
              : "Espandi il programma dei 7 incontri"}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:-translate-y-0.5" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:translate-y-0.5" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Modulo 1 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              1/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Analisi del Contesto</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Mappare il contesto operativo per distinguere con chiarezza vincoli reali, barriere insormontabili e limiti strutturali del setting.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Cosa è davvero progettabile e cosa devo accettare come dato di realtà?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 2 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              2/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Obiettivo Formativo &amp; Effetti Controfattuali</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Definire con rigore il cambiamento cognitivo desiderato, individuando la baseline di partenza e gli indicatori empirici per verificarne l&apos;acquisizione.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Come riconosco che il cambiamento cognitivo è realmente avvenuto?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 3 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-[var(--accent-primary)] text-lg shrink-0">
              3/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Il Processo Cognitivo: Dalla Baseline ai Desiderata</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Individuare la sequenza di processi psicologici e metacognitivi necessaria a guidare l&apos;allievo dallo stato iniziale al traguardo.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Quali processi interni al discente devono essere attivati per produrre il salto?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 4 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-500 dark:text-emerald-400 text-lg shrink-0">
              4/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Come si Impara nel Gioco: Il Game Loop</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Progettare il ciclo fondamentale di azione, feedback immediato e apprendimento, allineando i rinforzi alle finalità didattiche.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Qual è la minima sequenza di azioni capace di generare il feedback desiderato?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 5 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center font-bold text-emerald-500 dark:text-emerald-400 text-lg shrink-0">
              5/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Dal Singolo Loop al Gioco Intero: L&apos;Obiettivo Lusorio</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Integrare i loop in un sistema organico attorno all&apos;obiettivo lusorio, prevenendo gli errori tipici dei serious game.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Cosa motiva il giocatore a perseguire il traguardo accettando i limiti delle regole?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 6 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center font-bold text-purple-500 dark:text-purple-400 text-lg shrink-0">
              6/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Debriefing &amp; Valutazione dell&apos;Apprendimento</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Strutturare le fasi di rielaborazione post-gioco per consolidare l&apos;apprendimento, estrarre valore cognitivo e trasferirlo alla realtà.
              </p>
              <div className="text-xs text-[var(--text-subtle)] italic">
                Domanda cardine: &ldquo;Come estraiamo valore cognitivo e comportamentale da quanto accaduto al tavolo?&rdquo;
              </div>
            </div>
          </div>

          {/* Modulo 7 */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500/50 transition-all flex flex-col md:flex-row gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center font-bold text-amber-500 dark:text-amber-400 text-lg shrink-0">
              7/7
            </div>
            <div className="space-y-2 flex-grow">
              <h3 className="font-bold text-lg text-[var(--text-main)]">Pitch Finale, Playtest &amp; Restituzione</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Presentare e collaudare il prototipo in una sessione di playtest con revisione critica tra pari e validazione con Alan Mattiassi.
              </p>
              <div className="text-xs text-amber-500 dark:text-amber-300 italic">
                Domanda cardine: &ldquo;Il prototipo è testato, documentato e pronto per la tua classe o azienda?&rdquo;
              </div>
            </div>
          </div>

          {/* Close button at the bottom */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--border-color)] border border-[var(--border-color)] transition-all"
            >
              <span>Chiudi programma</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
