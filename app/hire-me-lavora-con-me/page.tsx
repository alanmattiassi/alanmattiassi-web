import React from "react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import {
  Compass,
  Layers,
  Microscope,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export const metadata = {
  title: "Lavora con me // Hire me! – Alan Mattiassi, PhD",
  description:
    "Modalità di collaborazione, tariffario indicativo trasparente e prenotazione call conoscitiva con Alan Mattiassi, PhD (Psicologo del Gioco).",
};

export default function HireMePage() {
  const pricingTable = [
    { activity: "Corso Formativo", fee: "100 €/h online • 125 €/h in presenza", category: "Formazione" },
    { activity: "Workshop Esperienziale", fee: "Da 500 € a 2.500 €+ (in base a durata e partecipanti)", category: "Formazione" },
    { activity: "Talk & Keynote per Festival/Eventi", fee: "150 €/h • da 500 € (sviluppo materiale ad hoc)", category: "Divulgazione" },
    { activity: "Invited Lecture Universitaria", fee: "500 € (sessione intensiva fino a 2 ore)", category: "Accademia" },
    { activity: "Consulenza Diretta / Advisory", fee: "150 €/h brevi • 300 € – 1.000 € strutturate", category: "Consulenza" },
    { activity: "Co-progettazione Didattica o Formativa", fee: "1.000 € – 3.000 € (in base al perimetro)", category: "Co-Design" },
    { activity: "Game Design Psicologico Completo", fee: "Da 3.000 € (solo design) • 5.000 € – 10.000 € (all-inclusive)", category: "Game Design" },
    { activity: "Progettazione GBL o Gamification Aziendale", fee: "500 € – 5.000 € (in base alla complessità)", category: "Gamification" },
    { activity: "Supporto Progettazione GBL per Educatori", fee: "Gratuito (prime indicazioni) • da 50 €/h (meeting dedicato)", category: "Scuola" },
    { activity: "Consulenza Scientifica & Validazione Tool", fee: "Da 750 € (creazione tool) • da 1.500 € (report e validazione)", category: "Ricerca" },
    { activity: "Coordinamento Scientifico di Progetti Complessi", fee: "Su misura (commisurato al bando o al budget di ricerca)", category: "Ricerca" },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONSULENZA &bull; FORMAZIONE &bull; GAME DESIGN &bull; RICERCA EVIDENCE-BASED</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Lavora con me // Hire me!
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
          Soluzioni su misura basate sulla Psicologia del Gioco
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          In qualità di psicologo del gioco — unendo le competenze di psicologo, ricercatore, formatore e divulgatore —
          supporto scuole, università, aziende, enti del terzo settore e studi di sviluppo nell&apos;integrazione
          scientifica del gioco. Qui trovi una panoramica trasparente delle principali aree di collaborazione
          e delle tariffe indicative di riferimento.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href="#contatto"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Prenota una call gratuita (30 min) →
          </a>
          <a
            href="#tariffario"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          >
            💰 Consulta la Tabella Tariffe ↓
          </a>
        </div>
      </section>

      {/* 2. Transparent Pricing Table */}
      <section id="tariffario" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
            MASSIMA TRASPARENZA PROFESSIONALE
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Tabella riassuntiva dei costi indicativi
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-2xl mx-auto">
            I prezzi sono indicativi (spese di trasferta documentate escluse) e vengono sempre calibrati
            sulla complessità del progetto e sulle specificità del committente:
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[var(--bg-surface)] border-b border-[var(--border-color)] text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-[var(--accent-primary)]">Servizio / Attività</th>
                  <th className="py-4 px-6 text-[var(--text-muted)] hidden sm:table-cell">Categoria</th>
                  <th className="py-4 px-6 text-[var(--accent-secondary)]">Tariffa Indicativa di Riferimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {pricingTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[var(--bg-card-subtle)] transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-[var(--text-main)]">
                      {item.activity}
                    </td>
                    <td className="py-3.5 px-6 text-xs text-[var(--text-muted)] hidden sm:table-cell">
                      <span className="px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-6 font-medium text-[var(--text-muted)]">
                      {item.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] leading-relaxed text-center">
          * Per progetti su bando (es. Erasmus+, MUR ProBen, Horizon Europe) o convenzioni continuative d&apos;istituto,
          è possibile definire compensi a forfait o incarichi professionali coordinati.
        </div>
      </section>

      {/* 3. The 3 Macro-Areas of Collaboration */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[var(--accent-secondary)] uppercase tracking-wider">
            COME POSSIAMO COLLABORARE
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--text-main)]">
            Le 3 Macro-Aree di Collaborazione
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Area 1 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-primary)] w-fit border border-[var(--border-color)]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                1. Formazione, Corsi &amp; Workshop
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Per docenti, formatori, HR, manager, genitori ed educatori.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Corsi modulari sul Game-Based Learning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Workshop di team building e leadership per aziende</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Keynote, conferenze e speech divulgativi per festival</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Area 2 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-primary)] w-fit border border-[var(--border-color)]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                2. Progettazione &amp; Game Design
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Per game designer, studi di sviluppo, editori e fondazioni.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Consulenza su motivazione, flow ed ergonomia delle scelte</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Co-design di serious games su misura per salute ed educazione</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Playtesting psicologico e revisione delle dinamiche di gioco</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Area 3 */}
          <div className="p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all">
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[var(--bg-card-subtle)] text-[var(--accent-secondary)] w-fit border border-[var(--border-color)]">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">
                3. Ricerca Scientifica &amp; Sperimentazione
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                Per università, centri di ricerca e comitati etici.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Coordinamento scientifico di unità di ricerca e progetti</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Sviluppo e validazione psicometrica di test e scale (mcSQ, PMPVG)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                  <span>Supervisione metodologica e stesura di paper scientifici</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Booking Form Integration */}
      <ContactSection />
    </div>
  );
}
