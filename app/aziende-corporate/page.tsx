import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  ShieldAlert,
  ArrowRight,
  Building,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Aziende & Corporate – Formazione e Gamification Evidence-Based | Alan Mattiassi, PhD",
  description:
    "Interventi di Game-Based Learning e gamification per aziende, HR, manager e team. Leadership, decision making e dinamiche di gruppo.",
};

export default function AziendePage() {
  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* 1. Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>FORMAZIONE AZIENDALE &bull; BENESSERE ORGANIZZATIVO &bull; LEADERSHIP</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Game-Based Learning per Aziende &amp; HR:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
            Dinamiche di Gruppo, Decision Making e Leadership Strategica
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Oltre il team building usa-e-getta. Utilizziamo la psicologia del gioco e il debriefing strutturato
          come simulatore di complessità per far emergere modelli mentali, allineare i team e allenare il pensiero
          strategico sotto incertezza.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
          >
            📅 Prenota una call conoscitiva (30 min) →
          </Link>
          <a
            href="#ambiti-aziendali"
            className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all"
          >
            💼 Scopri i 5 Ambiti di Trasformazione ↓
          </a>
        </div>
      </section>

      {/* 2. Authority Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#0d1424] border border-slate-800 p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">10+ Anni</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Esperienza con organizzazioni complesse e team direzionali
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-400">4,8 / 5</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Indice medio di gradimento e utilità percepita post-intervento
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Metodo Evidence-Based validato dalla ricerca psicologica
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">Executive</div>
            <div className="text-xs text-slate-300 mt-2 font-medium">
              Restituzione analitica e report qualitativo per la direzione HR
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Organizational Problem: Beyond Throwaway Team Building */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            LA CRITICITÀ ORGANIZZATIVA
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Perché i team building tradizionali raramente cambiano i comportamenti
          </h2>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            Molte aziende investono budget significativi in giornate di &quot;svago di gruppo&quot; o cene aziendali con l&apos;obiettivo
            di migliorare la collaborazione. Il lunedì successivo, tuttavia, i conflitti sotterranei, i colli di bottiglia
            nella comunicazione e i silos tra dipartimenti tornano esattamente identici.
          </p>

          <p>
            Questo accade perché un&apos;attività puramente ricreativa non offre ai partecipanti una <strong>struttura riflessiva</strong> né
            un <strong>ambiente sicuro</strong> in cui osservare e decostruire le reali dinamiche relazionali.
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
            <h4 className="text-sm font-bold text-emerald-400 mb-2">Il valore del gioco come simulatore comportamentale:</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nel gioco le persone non &quot;recitano&quot; il ruolo che l&apos;azienda richiede: <strong>giocano come sono</strong>.
              Sotto pressione e di fronte a scelte con risorse limitate emergono naturalmente gli stili di leadership autentici,
              le modalità di gestione del disaccordo, la tolleranza al rischio e le barriere comunicative. Attraverso il
              <strong> debriefing guidato dallo psicologo</strong>, questi comportamenti diventano visibili, decostruibili e
              trasformabili in nuove prassi operative.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 5 Areas of Organizational Transformation */}
      <section id="ambiti-aziendali" className="max-w-5xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            AREE DI INTERVENTO
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            I 5 Ambiti di Trasformazione Organizzativa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Leadership Orizzontale & Delega",
              desc: "Allenare la capacità di coordinare senza autoritarismo, fidarsi delle competenze dei colleghi e gestire l'autonomia decisionale dei collaboratori.",
            },
            {
              title: "Decision Making sotto Incertezza",
              desc: "Superare la paralisi da analisi, calibrare il rapporto rischio/rendimento e prendere decisioni strategiche tempestive anche con informazioni incomplete.",
            },
            {
              title: "Comunicazione & Ergonomia Relazionale",
              desc: "Smascherare i fraintendimenti comunicativi, abbattere i silos tra team e costruire un linguaggio condiviso orientato all'obiettivo comune.",
            },
            {
              title: "Gestione del Fallimento & Resilienza",
              desc: "Trasformare l'errore da colpa individuale a feedback prezioso per l'intero sistema aziendale, stimolando la sperimentazione innovativa.",
            },
            {
              title: "Clima Aziendale & Sicurezza Psicologica",
              desc: "Creare le condizioni relazionali affinché ogni membro del team si senta libero di proporre idee, sollevare dubbi o chiedere aiuto senza timore di giudizio.",
            },
            {
              title: "Co-Design di Meccaniche di Gamification",
              desc: "Progettazione di sistemi motivazionali interni evidence-based, lontani da banali classifiche competitive tossiche, per processi di onboarding e formazione.",
            },
          ].map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-emerald-500/40 transition-all space-y-2"
            >
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{area.title}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pl-7">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Real Case Studies & Clients */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            TRACK RECORD &amp; CASE STUDIES
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Organizzazioni che hanno sperimentato il metodo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <h3 className="text-lg font-bold text-white">The Business Game s.r.l.</h3>
            <p className="text-xs text-sky-400 font-semibold">Simulazioni &amp; Valutazione Competenze</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consulenza continuativa e debriefing psicologico applicato a simulazioni aziendali complesse per manager e neolaureati.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <h3 className="text-lg font-bold text-white">Timenet SpA</h3>
            <p className="text-xs text-emerald-400 font-semibold">Leadership &amp; Team Cohesion</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Workshop esperienziale per il management incentrato su negoziazione, allineamento di visione e fiducia interpersonale.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <h3 className="text-lg font-bold text-white">Medipass (Ergéa Group)</h3>
            <p className="text-xs text-purple-400 font-semibold">Sanità &amp; Team Multidisciplinari</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Percorsi formativi per personale direttivo e clinico per ottimizzare la cooperazione sotto stress e la comunicazione con il paziente.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Formats & Transparent Pricing Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-900 border-2 border-emerald-500/50 p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              TRASPARENZA ECONOMICA &bull; MODALITÀ DI INGAGGIO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Workshop Aziendale di 1 Giornata (In Presenza)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Ideale per team da 8 a 20 partecipanti. Comprende call preparatoria con HR/Direzione, selezione o co-design
              delle attività ludiche, conduzione del workshop con debriefing strutturato e restituzione analitica con report qualitativo.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Soglia di investimento indicativa</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                A partire da 1.500 € <span className="text-xs font-normal text-slate-400">/ giornata (+ spese trasferta)</span>
              </div>
            </div>
            <Link
              href="/hire-me-lavora-con-me"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/25 transition-all text-center flex-shrink-0"
            >
              Richiedi disponibilità date →
            </Link>
          </div>

          <p className="text-xs text-slate-500 italic">
            * Per percorsi modulari a medio termine, academy aziendali continuative o co-progettazione di serious games su misura,
            viene redatto un preventivo dedicato in base alla complessità e agli obiettivi strategici.
          </p>
        </div>
      </section>
    </div>
  );
}
