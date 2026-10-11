export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  target: string;
  href: string;
  // English translations
  titleEn?: string;
  shortDescEn?: string;
  longDescEn?: string;
  benefitsEn?: string[];
  targetEn?: string;
  hrefEn?: string;
}

export const services: Service[] = [
  {
    id: "game-based-learning",
    iconName: "GraduationCap",
    title: "Game-Based Learning per Scuole e Università",
    shortDesc: "Progettazione didattica rigorosa e corsi di aggiornamento per rendere l'apprendimento attivo, efficace e memorabile.",
    longDesc: "Superiamo l'illusione del 'basta giocare per imparare'. Applichiamo la teoria del carico cognitivo, il modello Universal Game Design for Learning (UGDL) e le neuroscienze dell'apprendimento per strutturare percorsi curricolari dove il gioco crea ambienti protetti di sperimentazione ed errore costruttivo.",
    benefits: [
      "Ambienti protetti di apprendimento e de-drammatizzazione dell'errore",
      "Sviluppo di competenze trasversali e pensiero critico",
      "Metodologia UGDL per la massima inclusività didattica",
      "Formazione accreditata e laboratori pratici per docenti"
    ],
    target: "Scuole primarie e secondarie, Atenei, Enti di formazione",
    href: "/docenti",
    titleEn: "Game-Based Learning for Schools and Universities",
    shortDescEn: "Rigorous instructional design and teacher development to make learning active, effective, and memorable.",
    longDescEn: "Moving past the misconception that simply playing is enough to learn. We apply cognitive load theory, the Universal Game Design for Learning (UGDL) model, and learning neurosciences to build curricular pathways where games provide safe spaces for constructive trial and error.",
    benefitsEn: [
      "Safe learning environments and constructive reframing of failure",
      "Development of transversal competencies and critical thinking",
      "UGDL methodology for universal educational accessibility",
      "Accredited professional development and hands-on workshops"
    ],
    targetEn: "K-12 Schools, Universities, Educational Institutions",
    hrefEn: "/en/docenti"
  },
  {
    id: "corporate-training",
    iconName: "Briefcase",
    title: "Formazione Aziendale, HR & Gamification",
    shortDesc: "Workshop interattivi, team building scientifico e dinamiche di gruppo per manager, team e organizzazioni complesse.",
    longDesc: "Gamification con basi scientifiche, lontana da banali sistemi a punti. Utilizziamo il gioco come simulatore di complessità per indagare le dinamiche relazionali, rafforzare la leadership orizzontale, analizzare il clima aziendale e allenare il decision making strategico sotto incertezza.",
    benefits: [
      "Team building scientifico fondato sulle dinamiche di gruppo reali",
      "Simulazioni strategiche per decision making e problem solving",
      "Analisi del clima organizzativo ed ergonomia della comunicazione",
      "Percorsi su misura di 1 giornata o modulari a lungo termine"
    ],
    target: "HR Manager, C-level, Team leader, Organizzazioni aziendali",
    href: "/aziende-corporate",
    titleEn: "Corporate Training, HR & Gamification",
    shortDescEn: "Interactive workshops, evidence-based team building, and group dynamics for managers, teams, and complex organizations.",
    longDescEn: "Scientifically grounded gamification, far removed from superficial point systems. We utilize games as complexity simulators to analyze interpersonal dynamics, foster horizontal leadership, evaluate organizational climate, and sharpen strategic decision-making under uncertainty.",
    benefitsEn: [
      "Evidence-based team building grounded in real group dynamics",
      "Strategic simulations for decision making and problem solving",
      "Organizational climate analysis and communication ergonomics",
      "Custom 1-day or modular long-term executive programs"
    ],
    targetEn: "HR Directors, C-Level Executives, Team Leaders, Enterprises",
    hrefEn: "/en/aziende-corporate"
  },
  {
    id: "strategic-advisory",
    iconName: "Lightbulb",
    title: "Consulenza Strategica & System Thinking",
    shortDesc: "Supporto scientifico a manager, istituzioni ed enti per usare il gioco come leva di trasformazione e cultura.",
    longDesc: "Cosa nascondono i sistemi complessi? Aiutiamo organizzazioni e istituzioni pubbliche a identificare le regole non scritte, i colli di bottiglia e i pattern comportamentali attraverso la lente sistemica del game design e della psicologia cognitiva.",
    benefits: [
      "Diagnosi sistemica dei processi e dei flussi operativi",
      "Progettazione partecipata e policy basate sul gioco",
      "Superamento delle resistenze al cambiamento",
      "Modelli replicabili evidence-based"
    ],
    target: "Pubblica amministrazione, Fondazioni, Direzioni strategiche",
    href: "/come-lavoro",
    titleEn: "Strategic Advisory & Systems Thinking",
    shortDescEn: "Scientific advisory for executives and organizations to leverage games as an engine for transformation and culture.",
    longDescEn: "What do complex systems conceal? We help institutions and enterprises identify unwritten rules, organizational bottlenecks, and behavioral patterns through the systemic lens of game design and cognitive psychology.",
    benefitsEn: [
      "Systemic diagnostics of organizational workflows and operations",
      "Participatory design and game-informed strategic policies",
      "Overcoming cultural friction and resistance to change",
      "Scalable, evidence-based intervention models"
    ],
    targetEn: "Public administration, Foundations, Executive boards",
    hrefEn: "/en/come-lavoro"
  },
  {
    id: "game-design-psychology",
    iconName: "Gamepad2",
    title: "Psicologia del Gioco & Serious Games",
    shortDesc: "Consulenza psicologica per game studio, editori e ricercatori: motivazioni, flow, ergonomia e playtesting.",
    longDesc: "Mappiamo l'esperienza psicologica del giocatore attraverso modelli quantitativi validati (come la scala PMPVG). Supportiamo autori, game designer e studi di sviluppo nell'allineamento tra meccaniche ludiche e stati mentali, prevenendo la frustrazione e ottimizzando l'engagement profondo.",
    benefits: [
      "Analisi dei flussi di motivazione intrinseca ed estrinseca (PMPVG)",
      "Playtesting psicologico e misurazione del carico cognitivo",
      "Game feel ed ergonomia delle interfacce fisiche e digitali",
      "Serious games per salute, sociale e mutamento comportamentale"
    ],
    target: "Game Studio, Editori di giochi da tavolo e videogiochi, Autori",
    href: "/ricerca-consulenza",
    titleEn: "Game Psychology & Serious Games",
    shortDescEn: "Psychological consulting for game studios, publishers, and authors: motivation, flow, cognitive ergonomics, and playtesting.",
    longDescEn: "We map the player's psychological journey through validated quantitative models (such as the PMPVG scale). We assist creators and development studios in aligning game mechanics with cognitive mental states, avoiding frustration, and cultivating sustained, deep immersion.",
    benefitsEn: [
      "Analysis of intrinsic and extrinsic motivation dynamics (PMPVG)",
      "Behavioral playtesting and cognitive load measurement",
      "Game feel and cognitive ergonomics of physical & digital interfaces",
      "Serious games for healthcare, social impact, and behavior change"
    ],
    targetEn: "Game Studios, Board game & Video game Publishers, Authors",
    hrefEn: "/en/ricerca-consulenza"
  },
  {
    id: "keynote-public-speaking",
    iconName: "Mic",
    title: "Divulgazione Scientifica, Keynote & Eventi",
    shortDesc: "Conferenze, interventi a festival del gioco (Play, Lucca Comics, TEDx) e speech divulgativi ad alto impatto.",
    longDesc: "Interventi pubblici rigorosi e al contempo coinvolgenti per sfatare miti e diffondere la cultura scientifica del gioco. Dai palchi di TEDx Udine ai congressi mondiali di filosofia (WCP), portiamo la psicologia del gioco al grande pubblico e agli addetti ai lavori.",
    benefits: [
      "Speech ad alta energia calibrati sul pubblico di riferimento",
      "Rigore accademico unito a chiarezza divulgativa",
      "Panel, moderazione tavole rotonde e workshop per fiere",
      "Format multimediali e podcast"
    ],
    target: "Organizzatori di eventi, Fiere del gioco, TEDx, Festival culturali",
    href: "/talks-interventi",
    titleEn: "Science Communication, Keynotes & Events",
    shortDescEn: "High-impact keynotes, festival talks (Play, Lucca Comics, TEDx), and engaging science communication.",
    longDescEn: "Rigorous yet compelling public presentations dispelling myths and promoting scientific game literacy. From the TEDx Udine stage to the World Congress of Philosophy (WCP), we bring game psychology to broad audiences and industry professionals.",
    benefitsEn: [
      "High-energy keynotes tailored precisely to the audience profile",
      "Academic rigor paired with compelling storytelling clarity",
      "Panels, roundtable moderation, and interactive festival workshops",
      "Multimedia formats, podcasts, and recorded presentations"
    ],
    targetEn: "Event organizers, Game conventions, TEDx, Cultural festivals",
    hrefEn: "/en/talks-interventi"
  },
  {
    id: "scientific-research",
    iconName: "Microscope",
    title: "Ricerca Scientifica & Strumenti Psicometrici",
    shortDesc: "Modelli teorici unificati, misurazione del Quoziente Strategico (mcSQ) e pubblicazioni internazionali peer-reviewed.",
    longDesc: "Con oltre 10 anni di ricerca sperimentale e ruoli apicali nel Game Science Research Center (IMT Lucca), sviluppiamo scale di misurazione validate e conduciamo studi su campioni internazionali (PSA, Nature Human Behaviour, Canadian Journal of Exp. Psychology).",
    benefits: [
      "Modello mcSQ per la misurazione del quoziente strategico",
      "H-Index Scopus: 8 con oltre 245 citazioni internazionali",
      "Network di ricerca con atenei in Italia, Europa e Americhe",
      "Supervisione metodologica per tesi e paper accademici"
    ],
    target: "Centri di ricerca, Università, Comitati etici e scientifici",
    href: "/research-ricerca",
    titleEn: "Scientific Research & Psychometric Tools",
    shortDescEn: "Unified theoretical frameworks, Strategic Quotient measurement (mcSQ), and peer-reviewed international publications.",
    longDescEn: "With over a decade of experimental research and lead roles at the Game Science Research Center (IMT Lucca), we engineer validated psychometric scales and conduct multi-lab international investigations (PSA, Nature Human Behaviour, Canadian Journal of Experimental Psychology).",
    benefitsEn: [
      "mcSQ framework for quantifying strategic problem-solving competence",
      "Scopus H-Index 8 with over 245+ international citations",
      "Global collaborative research network across Europe and the Americas",
      "Methodological supervision for academic dissertations and journal articles"
    ],
    targetEn: "Research institutes, Universities, Academic & ethical committees",
    hrefEn: "/en/research-ricerca"
  }
];

export interface AudienceTrack {
  id: string;
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  iconName: string;
  badgeEn?: string;
  titleEn?: string;
  descriptionEn?: string;
  ctaTextEn?: string;
  hrefEn?: string;
}

export const audienceTracks: AudienceTrack[] = [
  {
    id: "track-docenti",
    badge: "Scuole & Università",
    title: "Docenti ed Educatori",
    description: "Strumenti scientifici, linee guida UGDL e metodi operativi per introdurre la didattica ludica in classe in modo efficace e misurabile.",
    ctaText: "Scopri il percorso Docenti →",
    href: "/docenti",
    iconName: "BookOpen",
    badgeEn: "Schools & Universities",
    titleEn: "Teachers & Educators",
    descriptionEn: "Scientific instruments, UGDL guidelines, and actionable methodologies to introduce game-based learning into classroom settings effectively.",
    ctaTextEn: "Discover the Education Path →",
    hrefEn: "/en/docenti"
  },
  {
    id: "track-aziende",
    badge: "HR, Manager & Imprese",
    title: "Formazione Aziendale & Corporate",
    description: "Dinamiche di gruppo, leadership, superamento del conflitto e gamification strategica per organizzazioni orientate all'innovazione.",
    ctaText: "Scopri il percorso Aziende →",
    href: "/aziende-corporate",
    iconName: "Building2",
    badgeEn: "HR, Executives & Teams",
    titleEn: "Corporate & Executive Training",
    descriptionEn: "Group dynamics, horizontal leadership, conflict resolution, and strategic gamification for innovation-driven enterprises.",
    ctaTextEn: "Discover the Corporate Path →",
    hrefEn: "/en/aziende-corporate"
  },
  {
    id: "track-designer",
    badge: "Sviluppatori & Autori",
    title: "Game Designer & Sviluppo",
    description: "Psicologia del giocatore, leve motivazionali, ergonomia delle scelte e playtesting comportamentale per giochi da tavolo e videogiochi.",
    ctaText: "Scopri la consulenza Game Design →",
    href: "/ricerca-consulenza",
    iconName: "Dice5",
    badgeEn: "Game Studios & Authors",
    titleEn: "Game Designers & Studios",
    descriptionEn: "Player psychology, motivational drivers, choice ergonomics, and behavioral playtesting for tabletop and video games.",
    ctaTextEn: "Discover Game Design Advisory →",
    hrefEn: "/en/ricerca-consulenza"
  }
];
