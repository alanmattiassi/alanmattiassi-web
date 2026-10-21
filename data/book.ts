export interface Chapter {
  number: number;
  title: string;
  authors: string;
  isAlanAuthor: boolean;
  page: number;
  sections: string[];
}

export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  isCurator?: boolean;
  isPreface?: boolean;
  isBoxAuthor?: boolean;
}

export interface BookStoreLink {
  name: string;
  shortName: string;
  url: string;
  color: string;
  description: string;
  badge?: string;
}

export const bookData = {
  title: "Psicologia del gioco. Fondamenti teorici e applicazioni",
  shortTitle: "Psicologia del gioco",
  subtitle: "Fondamenti teorici e applicazioni",
  curator: "Alan Mattiassi",
  curatorTitle: "Alan Mattiassi, PhD",
  prefaceBy: "Maresa Bertolo",
  publisher: "Hogrefe Editore",
  series: "Manuali di psicologia",
  city: "Firenze",
  year: 2026,
  releaseDate: "21 ottobre 2026",
  printedDate: "Giugno 2026",
  isbn: "979-12-81075-46-7",
  pages: 248,
  coverImage: "/images/psicologia-del-gioco-copertina.jpg",
  apaCitation:
    "Mattiassi, A. (a cura di). (2026). Psicologia del gioco. Fondamenti teorici e applicazioni. Hogrefe Editore.",
  
  stores: [
    {
      name: "Amazon.it",
      shortName: "Amazon",
      url: "https://www.amazon.it/Psicologia-gioco-Fondamenti-teorici-applicazioni/dp/B0HNM5MZP3/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=8H6XDRX2SLRF&dib=eyJ2IjoiMSJ9.bAROIMXqxGx1wUf9jrNSD5g6wnp57gFiqeNsiJo_ibOoJleAPNy7yLP-hzjlD0_VHxKNBkJBxupAgt_qsvxSOB13gt9iOfDw9X5GO-Wn4bsdvrMfh97Ie_EhKlrMG3__lDFbeHQe3wCTBFehy_xmvB3x38dlLcngCzbdt0hEaclvL_miZqWSFNkVv3l_bWtT8KERqugtrfL5y2VFHw71Exdxzqt78tr2u020paiOVdVUx6rrESCm5LED3aB98wS_uYqmKxNJqAbakgSUObS31y-U8afhPijQ8VBY9eo8pME.PC0N6o9Ae8Mc6Jq79HRd0KwKPqwooB6b627THU8VG5Q&dib_tag=se&keywords=alan+mattiassi&qid=1792619862&sprefix=alan+mattias%2Caps%2C186&sr=8-1",
      color: "from-amber-500 to-orange-600",
      description: "Disponibile con spedizione rapida Prime e consegna a domicilio",
      badge: "Disponibile Ora"
    },
    {
      name: "Libreria Universitaria",
      shortName: "Libreria Univ.",
      url: "https://www.libreriauniversitaria.it/psicologia-gioco-fondamenti-teorici-applicazioni/libro/9791281075467",
      color: "from-blue-600 to-indigo-700",
      description: "Catalogo manualistica accademica con sconti per studenti e docenti",
      badge: "Settore Universitario"
    },
    {
      name: "La Feltrinelli",
      shortName: "Feltrinelli",
      url: "https://www.lafeltrinelli.it/psicologia-del-gioco-fondamenti-teorici-libro-vari/e/9791281075467",
      color: "from-red-600 to-rose-700",
      description: "Acquista online o prenota con ritiro gratuito nelle librerie Feltrinelli",
      badge: "Nelle Librerie"
    }
  ] as BookStoreLink[],

  description:
    "Un'opera a molte mani con colleghi psicologi e ricercatori nata per unire tutto ciò che è stato detto sul gioco dalla psicologia scientifica e creare finalmente un terreno comune da cui partire. Il manuale approfondisce il core psicologico del gioco, le basi neurobiologiche ed evolutive, l'apprendimento esperienziale, la motivazione analogica e digitale, lo sviluppo infantile, le funzioni esecutive, la dimensione sociale e l'intelligenza collettiva, le applicazioni in ambito organizzativo e clinico, fino al Game-Based Learning e alla Gamification consapevole.",

  alanContributionSummary:
    "Curatore dell'intero volume e autore di 5 capitoli fondamentali: Cos'è il gioco (Cap. 1), Il gioco come apprendimento (Cap. 2), Motivazione al gioco (Cap. 3, con V. Guerrieri), Game-based learning (Cap. 12) e Gamification (Cap. 13, con M. Duradoni, G.A. Mancini e A. Girard).",

  chapters: [
    {
      number: 1,
      title: "Cos’è il gioco",
      authors: "Alan Mattiassi",
      isAlanAuthor: true,
      page: 1,
      sections: [
        "1.1. Individuazione del core psicologico del gioco",
        "1.2. Funzione del gioco: la visione evoluzionistica",
        "1.3. Il piacere del gioco",
        "1.4. Non solo divertimento",
        "1.5. Il gioco come atto libero (1.5.1 La libertà di giocare, 1.5.2 Libertà durante il game playing, 1.5.3 La libertà di accettare le regole, 1.5.4 La necessità della libertà)"
      ]
    },
    {
      number: 2,
      title: "Il gioco come apprendimento",
      authors: "Alan Mattiassi",
      isAlanAuthor: true,
      page: 20,
      sections: [
        "2.1. Attribuzione di responsabilità e ragionamento controfattuale",
        "2.2. Agency, ragionamento induttivo e controllo",
        "2.3. Sicurezza psicologica e fallimento",
        "2.4. Il ciclo dell’apprendimento"
      ]
    },
    {
      number: 3,
      title: "Motivazione al gioco",
      authors: "Vittorio Guerrieri e Alan Mattiassi",
      isAlanAuthor: true,
      page: 31,
      sections: [
        "3.1. Teorie classiche della motivazione applicate al gioco",
        "3.2. La teoria della motivazione di Atkinson",
        "3.3. Motivazione e teoria dell’attribuzione",
        "3.4. Motivazione al videogioco (scala PMPVGs)",
        "3.5. Motivazione al gioco da tavolo (TGMI e 6 estensioni: Identificazione, FOMO, Social manipulation, Nostalgia, Possessione, Pressione dei pari)",
        "3.6. Linee guida operative per il gioco analogico: progettare e facilitare a partire dalle motivazioni"
      ]
    },
    {
      number: 4,
      title: "Il gioco nei bambini",
      authors: "Emma Mottarella e Federica Rossi",
      isAlanAuthor: false,
      page: 51,
      sections: [
        "4.1. Definizione di gioco in età evolutiva (Sistemi motivazionali ed evolutivi, Funzioni cognitive, sociali ed emotive)",
        "4.2. Il gioco nella storia della psicologia dello sviluppo (Prospettiva psicodinamica, cognitiva, socioculturale ed evoluzionistica)",
        "4.3. Le fasi di sviluppo del gioco (Sensomotorio 0-2 anni, Costruttivo 2-6 anni, Simbolico e narrativo 3-7 anni, Con regole dai 6 anni)",
        "4.4. Gioco digitale e videoludico: nuove sfide e opportunità"
      ]
    },
    {
      number: 5,
      title: "Processi di pensiero nel gioco",
      authors: "Giorgio Gronchi",
      isAlanAuthor: false,
      page: 67,
      sections: [
        "5.1. Il pensiero",
        "5.2. Il ragionamento",
        "5.3. Il ragionamento deduttivo",
        "5.4. Il ragionamento probabilistico",
        "5.5. La teoria del doppio processo del pensiero",
        "5.6. Pensieri lenti e veloci nel gioco degli scacchi (il contrattacco Traxler)",
        "5.7. Altre applicazioni"
      ]
    },
    {
      number: 6,
      title: "Psicologia dei giochi strategici",
      authors: "Andrea Piazzoli",
      isAlanAuthor: false,
      page: 82,
      sections: [
        "6.1. Definizione di strategia",
        "6.2. Intersezione tra psicologia e strategia",
        "6.3. L’utilizzo della strategia e il Quoziente Strategico (QS)",
        "6.4. La psicologia dei giochi strategici (Teoria della mente, modello BPC, coping)",
        "6.5. L’utilità della strategia nella vita quotidiana (Giochi finiti e infiniti)"
      ]
    },
    {
      number: 7,
      title: "Basi neurobiologiche del gioco",
      authors: "Dario Menicagli",
      isAlanAuthor: false,
      page: 96,
      sections: [
        "7.1. Capire il gioco attraverso le neuroscienze ed il cervello attraverso il gioco",
        "7.2. Funzioni neurocognitive nei giochi classici (Scacchi, fMRI e connettività)",
        "7.3. Risposte neurali nelle differenti varianti dei giochi scacchistici (Go, Baduk, Shogi)",
        "7.4. Risposte neurali nel gioco digitale (Attenzione top-down e bottom-up, EEG)",
        "7.5. Processi motivazionali, socioaffettivi e videogiochi (Sistema dopaminergico, flow e IGD)",
        "7.6. Correlati neurofisiologici dell’apprendimento tramite gioco (7.6.1 Correlati biologici e importanza del gioco)"
      ]
    },
    {
      number: 8,
      title: "Gioco e funzioni esecutive",
      authors: "Emma Mottarella e Federica Rossi",
      isAlanAuthor: false,
      page: 110,
      sections: [
        "8.1. Cosa sono le funzioni esecutive (Modello di Miyake, basi neuroanatomiche CPF)",
        "8.2. Gioco e funzioni esecutive nel ciclo di vita (Dalla prima infanzia alla terza età)",
        "8.3. Fondamenti del rapporto tra gioco e funzioni esecutive",
        "8.4. Il gioco come strumento di potenziamento cognitivo",
        "8.5. Funzioni esecutive in azione: test e giochi (Inibizione, Memoria di lavoro, Flessibilità cognitiva, Pianificazione, Autoregolazione emotiva)",
        "8.6. Implicazioni applicative (8.6.1 Educazione e didattica, 8.6.2 Neuropsicologia clinica: ADHD, Spettro Autistico, Declino cognitivo)",
        "8.7. Necessità di approfondimento"
      ]
    },
    {
      number: 9,
      title: "Psicologia sociale del gioco",
      authors: "Mirko Duradoni, Giulia Colombini, Anna Enrica Tosti e Marina Baroni",
      isAlanAuthor: false,
      page: 126,
      sections: [
        "9.1. La funzione sociale del gioco negli animali (9.1.1 Efficientatore di gruppo, 9.1.2 Manutenzione della struttura sociale)",
        "9.2. La funzione sociale del gioco negli esseri umani (9.2.1 Competenze sociali e socializzazione, 9.2.2 Bisogni psicologici e identità)",
        "9.3. Ludus sapiens: come il gioco ha costruito le società e le società il gioco",
        "9.4. Il gioco: un laboratorio per l’intelligenza collettiva (9.4.1 Dal clan alla moltitudine, 9.4.2 Ergonomia dell'azione collettiva)"
      ]
    },
    {
      number: 10,
      title: "Il gioco in ambito lavorativo",
      authors: "G. Andrea Mancini e Arianna Girard",
      isAlanAuthor: false,
      page: 143,
      sections: [
        "10.1. Dal giocatore al lavoratore: parallelismi tra profili comportamentali",
        "10.2. Dal giocatore al lavoratore: parallelismi tra cicli di vita (10.2.1 Awareness & discovery, 10.2.2 Onboarding, 10.2.3 Training & scaffolding, 10.2.4 Retention & mastery, 10.2.5 Offboarding & endgame)",
        "10.3. Il lavoro come gioco serio",
        "Box 10.1: Il modello PLAY e la tassonomia di Bartle"
      ]
    },
    {
      number: 11,
      title: "Il gioco come strumento clinico",
      authors: "Annalisa Corbo",
      isAlanAuthor: false,
      page: 159,
      sections: [
        "11.1. Il gioco nella pratica clinica e spazio transizionale",
        "11.2. Il falso mito della “psicoterapia ludica”",
        "11.3. Quali categorie di giochi si possono usare in psicoterapia? (GdR, narrativi, boardgame FE, videogiochi)",
        "11.4. Cosa succede alla persona quando gioca, nel briefing e nel debriefing",
        "11.5. Limiti e considerazioni etiche",
        "Box 11.1: Video Game Therapy (Francesco Bocci)",
        "Box 11.2: Metafore giocabili nell'ACT (Martina Migliore)",
        "Box 11.3: Il gioco che cura: poteri terapeutici, fantasia e relazione nella Play Therapy (Pierluigi Ceccalupo)",
        "Box 11.4: Le carte Dixit nella pratica clinica (Annalisa Corbo)"
      ]
    },
    {
      number: 12,
      title: "Game-based learning",
      authors: "Alan Mattiassi",
      isAlanAuthor: true,
      page: 171,
      sections: [
        "12.1. La differenza tra giocare apprendendo e giocare per apprendere",
        "12.2. Apprendere contro la persuasione (l'attitudine boomerang)",
        "12.3. Apprendimento per mera esposizione",
        "12.4. Apprendimento dichiarativo esplicito",
        "12.5. Apprendimento tramite metafora",
        "12.6. Apprendimento tramite retorica procedurale",
        "12.7. Debriefing: la fase metacognitiva essenziale per l'apprendimento guidato"
      ]
    },
    {
      number: 13,
      title: "Gamification",
      authors: "Alan Mattiassi, Mirko Duradoni, G. Andrea Mancini e Arianna Girard",
      isAlanAuthor: true,
      page: 183,
      sections: [
        "13.1. Core psicologico del gioco, gamefulness e gamification",
        "13.2. Gamification e azione collettiva (ridurre il costo psicologico della cooperazione)",
        "13.3. Progettare esperienze gamificate per aziende e lavoratori (modello di Kirkpatrick, SDT e inclusività)",
        "13.4. Criticità della gamefulness in ambito lavorativo (pointsification, dark design patterns e perdita di senso)"
      ]
    }
  ] as Chapter[],

  authors: [
    {
      name: "Alan Mattiassi",
      role: "Curatore dell'opera & Autore di 5 capitoli",
      bio: "PhD, è psicologo del gioco, ricercatore indipendente, divulgatore e formatore. Si occupa di psicologia del gioco, game-based learning, gamification e processi psicologici legati all'apprendimento e alla motivazione. La sua attività di ricerca si concentra in particolare sullo sviluppo di un framework teorico di psicologia del gioco e sul contributo della psicologia all'analisi delle esperienze ludiche, al design e all'impatto dei giochi. Ha collaborato con università ed enti accademici, aziende e istituzioni culturali.",
      isCurator: true
    },
    {
      name: "Maresa Bertolo",
      role: "Autrice della Prefazione",
      bio: "Professoressa associata presso il Dipartimento di Design del Politecnico di Milano, tra le figure di riferimento nei Game Studies e nel game design accademico in Italia.",
      isPreface: true
    },
    {
      name: "Marina Baroni",
      role: "Coautrice (Cap. 9)",
      bio: "Psicologa, PhD in Fisiopatologia clinica, ha partecipato a progetti di ricerca nell’ambito della psicologia, dalla psicofisiologia alla psicologia sociale."
    },
    {
      name: "Giulia Colombini",
      role: "Coautrice (Cap. 9)",
      bio: "Psicologa e dottoranda presso l’Università degli Studi di Firenze, dove svolge attività di ricerca presso il Virtual Human Dynamics Laboratory, s’interessa allo studio di processi psicologici in ambienti virtuali e ad applicazioni tecnologiche per valutazioni ed interventi in ambito clinico e sociale."
    },
    {
      name: "Annalisa Corbo",
      role: "Autrice (Cap. 11, Box 11.4)",
      bio: "Psicologa, psicoterapeuta, psicodrammatista e formatrice, è cofondatrice della società di formazione Psicoludìa. Curatrice della collana “Psicoludìa” per Edizioni Underground!, ha contribuito al volume Edu-larp. Game Design per giochi di ruolo educativi (FrancoAngeli, 2020)."
    },
    {
      name: "Mirko Duradoni",
      role: "Coautore (Cap. 9, Cap. 13)",
      bio: "Ricercatore in Psicologia sociale presso l’Universitas Mercatorum di Roma, ha conseguito un dottorato in Ingegneria dell’informazione. La sua attività di ricerca si concentra sulla valutazione psicologica, i metodi di ricerca, l’analisi dei dati, il benessere digitale e la psicologia dell’armonia."
    },
    {
      name: "Arianna Girard",
      role: "Coautrice (Cap. 10, Cap. 13)",
      bio: "Psicologa del lavoro e psicoterapeuta sistemico-relazionale, formatrice esperienziale, facilitatrice di dinamiche di gruppo e consulente HR, è coautrice di numerose pubblicazioni, tra cui Fearless. Giocarsi senza paura (con G.A. Mancini ed E. Scatolini, Hogrefe, 2025)."
    },
    {
      name: "Giorgio Gronchi",
      role: "Autore (Cap. 5)",
      bio: "Professore associato presso l’Università degli Studi di Firenze, dove insegna Psicologia della decisione e Cognitive Economics, è stato visiting scholar presso la Brown University. Si occupa di pensiero e di modelli computazionali in psicologia."
    },
    {
      name: "Vittorio Guerrieri",
      role: "Coautore (Cap. 3)",
      bio: "Ricercatore presso l’Istituto Italiano di Tecnologia e l’Università degli Studi di Milano-Bicocca, si occupa di psicologia del gioco da tavolo, con particolare attenzione all’uso del gioco come strumento di intervento sociale. È presidente di NexLudica APS e principal investigator del progetto Wanderer’s Quest."
    },
    {
      name: "G. Andrea Mancini",
      role: "Coautore (Cap. 10, Cap. 13)",
      bio: "Psicologo, PhD, è tra i fondatori di Laborplay, spin-off dell’Università degli Studi di Firenze che si occupa di gaming e gamification in contesti professionali. È autore di numerose pubblicazioni, tra cui Fearless. Giocarsi senza paura (con A. Girard ed E. Scatolini, Hogrefe, 2025)."
    },
    {
      name: "Dario Menicagli",
      role: "Autore (Cap. 7)",
      bio: "Psicologo, PhD in Fisiopatologia clinica, studia le interazioni sociali e ambientali, integrando diversi approcci, dalle neuroscienze all’economia comportamentale. Collabora con il centro Studi ARCO presso la Fondazione PIN – Polo di Prato dell’Università di Firenze."
    },
    {
      name: "Emma Mottarella",
      role: "Coautrice (Cap. 4, Cap. 8)",
      bio: "Psicologa e psicoterapeuta cognitivo-comportamentale, collabora con vari enti e associazioni, occupandosi di psicoterapia e valutazione neuropsicologica delle neurodivergenze. È game trainer e docente del corso di perfezionamento in Game design sull’accessibilità dei giochi da tavolo."
    },
    {
      name: "Andrea Piazzoli",
      role: "Autore (Cap. 6)",
      bio: "PhD in Economia, psicologo e consulente strategico, lavora sul tema della sovranità cognitiva, sul decision-making strategico e sulla valutazione delle competenze attraverso i giochi."
    },
    {
      name: "Federica Rossi",
      role: "Coautrice (Cap. 4, Cap. 8)",
      bio: "Psicologa e psicoterapeuta cognitivo-comportamentale, collabora con vari enti clinici, occupandosi di psicoterapia dell’età evolutiva e valutazione neuropsicologica delle neurodivergenze e utilizzando i giochi da tavolo e digitali come strumento d’intervento."
    },
    {
      name: "Anna Enrica Tosti",
      role: "Coautrice (Cap. 9)",
      bio: "Dottoranda in Geriatria sperimentale e clinica, si occupa dello sviluppo di strumenti digitali innovativi per la valutazione e il supporto del benessere psicologico e cognitivo. Utilizza il gioco come strumento per promuovere engagement, stimolazione cognitiva e benessere nelle diverse fasi della vita."
    },
    {
      name: "Francesco Bocci",
      role: "Autore del Box 11.1 (Video Game Therapy)",
      bio: "Psicoterapeuta, ideatore e pioniere della Video Game Therapy® in ambito clinico e riabilitativo.",
      isBoxAuthor: true
    },
    {
      name: "Martina Migliore",
      role: "Autrice del Box 11.2 (Metafore giocabili nell'ACT)",
      bio: "Psicologa e psicoterapeuta cognitivo-comportamentale specializzata in Acceptance and Commitment Therapy (ACT) applicata al gioco di ruolo narrativo (ACTing Flexible).",
      isBoxAuthor: true
    },
    {
      name: "Pierluigi Ceccalupo",
      role: "Autore del Box 11.3 (Play Therapy)",
      bio: "Psicologo, psicoterapeuta della Gestalt e formatore, esperto nell'approccio Oaklander e nell'uso della Play Therapy con l'infanzia.",
      isBoxAuthor: true
    }
  ] as AuthorProfile[]
};
