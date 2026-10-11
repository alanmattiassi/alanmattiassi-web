import React from "react";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  Dice5,
  Gamepad2,
  Users,
  Compass,
  ArrowRight,
  Target,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Topics // Temi di Intervento – Alan Mattiassi, PhD",
  description:
    "Ambiti concettuali, sfide e format della Psicologia del Gioco: empatia nei GDR, motivazioni PMPVG, quoziente strategico mcSQ e neuroscienze.",
};

export default function TopicsPage() {
  const topicsList = [
    {
      id: "teoria-della-mente-gdr",
      badge: "Neuroscienze & Empatia",
      title: "Gioco di Ruolo ed Empatia: Teoria della Mente & IRI",
      desc: "Come l'interpretazione di un personaggio allena l'Interpersonal Reactivity Index (IRI) e la capacità di perspective taking. Il gioco di ruolo agisce come palestra cognitiva per la comprensione delle intenzioni e degli stati d'animo altrui, con applicazioni terapeutiche, educative e di inclusione.",
      keywords: ["Perspective Taking", "Teoria della Mente", "GDR Terapeutico", "Empatia Cognitiva"],
    },
    {
      id: "analogico-vs-digitale",
      badge: "Media & Ergonomia",
      title: "Gioco Analogico vs Gioco Digitale: Differenze Neurocognitive",
      desc: "Dall'incarnazione corporea (embodied cognition) alla presenza sociale condivisa attorno al tavolo da gioco rispetto alla mediazione dello schermo. Come varia il carico attentivo, la negoziazione delle regole e la decodifica delle intenzioni dei compagni di gioco.",
      keywords: ["Embodied Cognition", "Presenza Sociale", "Carico Cognitivo", "Interazione Faccia a Faccia"],
    },
    {
      id: "motivazioni-pmpvg",
      badge: "Psicometria & Engagement",
      title: "Motivazioni Psicologiche al Videogioco: La Scala PMPVG",
      desc: "Validazione psicometrica delle ragioni per cui giochiamo: dal bisogno di competenza e padronanza alla fuga dallo stress quotidiano, dalla ricerca di relazioni sociali all'immersione narrativa. Un modello scientifico per superare l'approccio semplicistico ai generi ludici.",
      keywords: ["Scala PMPVG", "Motivazione Intrinseca", "Flow State", "Self-Determination Theory"],
    },
    {
      id: "quoziente-strategico-mcsq",
      badge: "Teoria dei Giochi & Decisioni",
      title: "Quoziente Strategico e Modello mcSQ",
      desc: "Misurare scientificamente la capacità di prendere decisioni strategiche sotto vincoli di incertezza e interazione competitiva. Il modello mcSQ sviluppato nel network di ricerca unisce economia comportamentale, psicologia cognitiva e game theory.",
      keywords: ["mcSQ", "Decision Making", "Pensiero Strategico", "Teoria dei Giochi"],
    },
    {
      id: "prospettiva-etologica",
      badge: "Evoluzione & Biologia",
      title: "Prospettiva Etologica ed Evoluzionistica del Gioco",
      desc: "Perché tutti i mammiferi superiori e gli esseri umani giocano? Il gioco come ambiente protetto in cui allenare comportamenti complessi di sopravvivenza, cooperazione sociale e risoluzione dei conflitti a basso costo di rischio biologico.",
      keywords: ["Etologia Ludica", "Ambiente Protetto", "Evoluzione Comportamentale", "Adattamento"],
    },
    {
      id: "obiettivi-lusori-suits",
      badge: "Game Studies & Suits",
      title: "Atteggiamento Lusorio e Obiettivi Lusori: L'Architettura del Gioco",
      desc: "Secondo la celebre definizione di Bernard Suits, giocare significa accettare ostacoli non necessari per rendere possibile un'attività (atteggiamento lusorio). Analizziamo come gli obiettivi lusori e i mezzi lusori strutturano il significato delle azioni del giocatore.",
      keywords: ["Obiettivi Lusori", "Atteggiamento Lusorio", "Mezzi Lusori", "Bernard Suits"],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* 1. Header Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-5">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <Brain className="w-3.5 h-3.5" />
          <span>PROGETTI ATTIVI &bull; FORMAT COLLAUDATI &bull; PSICOLOGIA DEL GIOCO</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Topics // Temi di Intervento
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
          Ambiti, sfide e modelli concettuali della mente ludica
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          I temi fondamentali su cui si articola la mia attività di ricerca accademica, formazione
          e consulenza. Modelli validati, pronti per essere declinati sulla tua realtà o integrati in progetti di ricerca.
        </p>
      </section>

      {/* 2. Topics Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topicsList.map((topic) => (
            <div
              key={topic.id}
              className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-950/60 text-sky-400 border border-sky-800/60 uppercase tracking-wider">
                  {topic.badge}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {topic.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {topic.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Vuoi declinare uno di questi temi per un corso, una conferenza o un paper?
        </h3>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Tutti i topic sono modulari e possono diventare un keynote, un workshop o una linea di ricerca scientifica.
        </p>
        <div className="pt-2 flex justify-center">
          <Link
            href="/hire-me-lavora-con-me"
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25"
          >
            Contattami per una proposta tematica →
          </Link>
        </div>
      </section>
    </div>
  );
}
