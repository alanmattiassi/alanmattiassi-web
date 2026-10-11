import React from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  Search,
  Eye,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Ciò che i sistemi nascondono – Metodologia & Game Mindset | Alan Mattiassi, PhD",
  description:
    "System thinking e psicologia del gioco applicati alla comprensione dei sistemi complessi, dinamiche organizzative e disallineamenti nascosti.",
};

export default function ComeLavoroPage() {
  const systemElements = [
    { title: "📜 REGOLE", desc: "Regole esplicite e norme implicite non scritte che governano le interazioni." },
    { title: "🎯 INCENTIVI", desc: "Motivazioni reali, leve intrinseche ed estrinseche che guidano l'azione." },
    { title: "♟️ STRATEGIE", desc: "Comportamenti emergenti adottati dagli individui per adattarsi al contesto." },
    { title: "🔄 FEEDBACK", desc: "Ritorno d'informazione: tempi, chiarezza e impatto delle risposte del sistema." },
    { title: "🎭 RUOLI", desc: "Aspettative reciproche, identità percepita e relazioni gerarchiche o orizzontali." },
    { title: "🏆 VITTORIA", desc: "Obiettivi lusori definiti, metriche di successo effettive e allineamento degli scopi." },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          <span>METODOLOGIA &bull; GAME MINDSET &bull; SYSTEM THINKING</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ciò che i sistemi nascondono
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Comprendere la complessità invisibile attraverso la lente del gioco
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Aiuto organizzazioni, formatori, progettisti e team a comprendere a fondo i sistemi complessi
          in cui operano, individuare disallineamenti nascosti e progettare interventi efficaci e duraturi.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Prenota una call esplorativa (30 min) →
          </Link>
          <a
            href="#lente-gioco"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          >
            🧭 I 6 Elementi Sistemici ↓
          </a>
        </div>
      </section>

      {/* 2. The 6 System Elements through the Lens of Games */}
      <section id="lente-gioco" className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            LA LENTE DI DECODIFICA
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Perché usare la lente del gioco per comprendere le organizzazioni?
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            La psicologia del gioco insegna a decodificare i sistemi umani analizzando sei elementi fondamentali:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemElements.map((elem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-sky-500/40 transition-all space-y-3"
            >
              <h3 className="text-lg font-bold text-white">{elem.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{elem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Invisible Problem & The Solution */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="flex items-center space-x-3 text-amber-400">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <h3 className="text-2xl font-bold text-white">Il Problema Invisibile</h3>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Molti progetti formativi, aziendali ed educativi falliscono non per mancanza di impegno o risorse,
            ma perché poggiano su <strong>assunzioni implicite mai verificate</strong>:
          </p>

          <ul className="space-y-2 text-sm text-slate-300 pl-4 border-l-2 border-amber-500/40">
            <li>&bull; Si investono mesi nella direzione sbagliata perché il problema reale non era stato diagnosticato;</li>
            <li>&bull; Strumenti e metodologie promettenti producono risultati deludenti a causa di attriti invisibili;</li>
            <li>&bull; I reparti lavorano su obiettivi disallineati convinti di cooperare verso la stessa meta;</li>
            <li>&bull; Si cercano soluzioni continue senza riconsiderare la vera radice del sistema.</li>
          </ul>

          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div className="flex items-center space-x-3 text-emerald-400">
              <Eye className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-white">L&apos;Approccio Risolutivo</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Attraverso la psicologia del gioco e il game mindset porto alla luce ciò che il sistema nasconde:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white block mb-1">Rendere visibili le assunzioni</strong>
                Identificare i bias cognitivi e le regole non scritte che orientano le scelte quotidiane.
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white block mb-1">Comprendere gli incentivi reali</strong>
                Mappare cosa motiva autenticamente le persone, al di là delle dichiarazioni formali.
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white block mb-1">Risolvere i disallineamenti</strong>
                Ricollegare modelli mentali, strumenti operativi e obiettivi lusori e strategici attesi.
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-white block mb-1">Validare prima del rilascio</strong>
                Testare le ipotesi con metriche quantitative e qualitative prima di investire risorse massicce.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Collaboration Modes with Real Case Studies */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            COME COLLABORIAMO
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Tre Modalità Operative di Collaborazione
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">
              1. 🧭 Workshop &amp; Formazione Esperienziale
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Per scuole, atenei e aziende che desiderano sviluppare nuove competenze e usare il gioco in modo consapevole.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <strong className="text-emerald-400 block">Case Studies:</strong>
              <p>&bull; 3.500 adolescenti formati online per AVIS FVG.</p>
              <p>&bull; Valutazione dinamiche interne per I.T.I.S. Trieste.</p>
              <p>&bull; Orientamento per 300+ studenti simultanei (UniTS).</p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">
              2. 🔬 Strategic &amp; Scientific Review
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Revisione metodologica e scientifica di serious games, bandi, interventi educativi o progetti di innovazione prima del lancio.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <strong className="text-sky-400 block">Cosa include:</strong>
              <p>&bull; Mappatura dei flussi decisionali e delle leve motivazionali.</p>
              <p>&bull; Individuazione di messaggi parassiti e attriti cognitivi.</p>
              <p>&bull; Report executive con raccomandazioni applicative.</p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">
              3. 📐 Co-Design &amp; Progettazione Partecipata
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Affiancamento continuo nella progettazione di artefatti ludici, serious games ed esperienze su misura.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <strong className="text-purple-400 block">Applicazioni:</strong>
              <p>&bull; Giochi per l&apos;inclusione e il contrasto agli stereotipi.</p>
              <p>&bull; Strumenti di assessment delle competenze trasversali.</p>
              <p>&bull; Attività di engagement territoriale e partecipativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Vuoi diagnosticare le dinamiche nascoste del tuo sistema?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Prenota una call esplorativa di 30 minuti senza impegno.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25"
          >
            Inizia con una call conoscitiva →
          </Link>
        </div>
      </section>
    </div>
  );
}
