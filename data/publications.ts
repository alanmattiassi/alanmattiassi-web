export interface Publication {
  id: string;
  anno: number | string;
  autori: string;
  titolo: string;
  sede_editoriale: string;
  volume_issue_pp?: string;
  doi_link?: string;
  publisher_url?: string;
  tipologia: string;
  area_tematica?: string;
  pdf_url?: string;
  highlight?: boolean;
  in_anteprima?: boolean;
}

export const publications: Publication[] = [
  {
    "id": "PUB-00",
    "anno": 2026,
    "autori": "Mattiassi, A. D. A.",
    "titolo": "Redefining the Psychology of Games: A Unifying Framework Beyond Play and Gaming",
    "sede_editoriale": "Canadian Journal of Experimental Psychology / Revue canadienne de psychologie expérimentale",
    "volume_issue_pp": "Advance online publication",
    "doi_link": "https://doi.org/10.1037/cep0000413",
    "publisher_url": "https://psycnet.apa.org/doiLanding?doi=10.1037/cep0000413",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Psicologia del Gioco & Framework Teorico Unificato",
    "pdf_url": "/images/Redefining_the_Psychology_of_Games_Mattiassi_Accepted_Manuscript-1.pdf",
    "highlight": true
  },
  {
    "id": "PUB-01",
    "anno": 2026,
    "autori": "Buchanan, E. M., Cuccolo, K., Heyman, T., Van Berkel, N., Coles, N. A., Iyer, A., ... & Ghasemi, H.",
    "titolo": "Measuring the semantic priming effect across many languages",
    "sede_editoriale": "Nature Human Behaviour",
    "volume_issue_pp": "10(1), 182-201",
    "doi_link": "https://doi.org/10.1038/s41562-024-02000-x",
    "publisher_url": "https://www.nature.com/articles/s41562-024-02000-x",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Psicologia Cognitiva & Grandi Campioni Globali (PSA)"
  },
  {
    "id": "PUB-02",
    "anno": 2025,
    "autori": "Kowal, M., Sorokowski, P., Gjoneska, B., Pisanski, K., Pfuhl, G., Aguilar, L., ... Mattiassi, A.D.A, …, & Zumárraga-Espinosa, M.",
    "titolo": "Cross-cultural data on romantic love and mate preferences from 117,293 participants across 175 countries",
    "sede_editoriale": "Scientific Data",
    "volume_issue_pp": "12(1), 1103",
    "doi_link": "https://doi.org/10.1038/s41597-025-04423-w",
    "publisher_url": "https://www.nature.com/articles/s41597-025-04423-w",
    "tipologia": "Data Descriptor (Peer-Reviewed)",
    "area_tematica": "Psicologia Sociale & Dataset Globali"
  },
  {
    "id": "PUB-03",
    "anno": 2025,
    "autori": "Pfuhl, G., Prazeres, F., Kowal, M., Aavik, T., Abad-Villaverde, B., Afhami, R., ... Mattiassi, A.D.A, …, & Sorokowski, P.",
    "titolo": "A preliminary study on the role of personal history of infectious and parasitic diseases on self-reported health across countries",
    "sede_editoriale": "Public Health",
    "volume_issue_pp": "242, 220-227",
    "doi_link": "https://doi.org/10.1016/j.puhe.2024.12.015",
    "publisher_url": "https://www.sciencedirect.com/science/article/pii/S003335062400582X",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Salute Pubblica & Epidemiologia Comportamentale"
  },

  {
    "id": "PUB-05",
    "anno": 2024,
    "autori": "Gursesli, M. C., Martucci, A., Mattiassi, A. D., Duradoni, M., & Guazzini, A.",
    "titolo": "Development and validation of the psychological motivations for playing video games scale (PMPVGs)",
    "sede_editoriale": "Simulation & Gaming",
    "volume_issue_pp": "55(5), 856-885",
    "doi_link": "https://doi.org/10.1177/10468781241258548",
    "publisher_url": "https://journals.sagepub.com/doi/10.1177/10468781241258548",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Psicometria Ludica & Motivazioni al Gioco (PMPVG)",
    "in_anteprima": true
  },
  {
    "id": "PUB-06",
    "anno": 2024,
    "autori": "Meskó, N., Kowal, M., Láng, A., Kocsor, F., Bandi, S. A., Putz, A., ... Mattiassi, A.D.A, …, & Han, H.",
    "titolo": "Exploring Attitudes Toward 'Sugar Relationships' Across 87 Countries: A Global Perspective on Exchanges of Resources for Sex and Companionship",
    "sede_editoriale": "Archives of Sexual Behavior",
    "volume_issue_pp": "53(2), 811-837",
    "doi_link": "https://doi.org/10.1007/s10508-023-02758-2",
    "publisher_url": "https://link.springer.com/article/10.1007/s10508-023-02758-2",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Psicologia Evoluzionistica & Modelli Relazionali"
  },
  {
    "id": "PUB-07",
    "anno": 2024,
    "autori": "Piazzoli, A., Sgaramella, G., & Mattiassi, A.",
    "titolo": "Toward a Better Measurement of Strategic Skills: The Multiple Choice Strategic Quotient (McSQ)",
    "sede_editoriale": "Intelligent Technologies for Interactive Entertainment (Springer Cham)",
    "volume_issue_pp": "pp. 3-19",
    "doi_link": "https://doi.org/10.1007/978-3-031-54327-2_1",
    "publisher_url": "https://link.springer.com/chapter/10.1007/978-3-031-54327-2_1",
    "tipologia": "Conference Proceedings (Peer-Reviewed)",
    "area_tematica": "Pensiero Strategico & Test Psicometrico mcSQ"
  },
  {
    "id": "PUB-08",
    "anno": 2023,
    "autori": "Duradoni, M., Innocenti, F., Mattiassi, A. D., & Guazzini, A.",
    "titolo": "Italian Validation of the Social Media Engagement Questionnaire (SME-Q): A Preregistered Study",
    "sede_editoriale": "Human Behavior and Emerging Technologies",
    "volume_issue_pp": "Vol. 2023, Article ID 6673891",
    "doi_link": "https://doi.org/10.1155/2023/6673891",
    "publisher_url": "https://onlinelibrary.wiley.com/doi/10.1155/2023/6673891",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Social Media & Psicometria dell'Engagement",
    "in_anteprima": true
  },
  {
    "id": "PUB-09",
    "anno": 2023,
    "autori": "Mattiassi, Alan, Ghirarduzzi, Andrea, & Bacaro, Giovanni",
    "titolo": "L’Universal Game Design for Learning: una metodologia innovativa da integrare nei curricola scolastici e universitari",
    "sede_editoriale": "QuaderniCIRD (EUT Edizioni Università di Trieste)",
    "volume_issue_pp": "25 (2022), pp. 37-55",
    "doi_link": "https://doi.org/10.13137/2039-8646/34900",
    "publisher_url": "https://www.openstarts.units.it/handle/10077/34900",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Didattica Ludica & Framework UGDL",
    "in_anteprima": true
  },
  {
    "id": "PUB-10",
    "anno": 2022,
    "autori": "Kowal, M., Sorokowski, P., Pisanski, K., Valentova, J. V., Varella, M. A., Frederick, D. A., …, Mattiassi, A.D.A, ... & Mišetić, K.",
    "titolo": "Predictors of enhancing human physical attractiveness: Data from 93 countries",
    "sede_editoriale": "Evolution and Human Behavior",
    "volume_issue_pp": "43(6), 455-474",
    "doi_link": "https://doi.org/10.1016/j.evolhumbehav.2022.08.003",
    "publisher_url": "https://www.sciencedirect.com/science/article/pii/S109051382200078X",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Psicologia Evoluzionistica & Cross-Culturale"
  },
  {
    "id": "PUB-11",
    "anno": 2022,
    "autori": "Mattiassi, Alan D.A.",
    "titolo": "Gioco digitale e gioco analogico",
    "sede_editoriale": "New Frontiers in Gaming (Intesa Sanpaolo Innovation Center)",
    "volume_issue_pp": "pp. 1-25",
    "doi_link": "https://www.intesasanpaoloinnovationcenter.com",
    "publisher_url": "https://www.intesasanpaoloinnovationcenter.com",
    "tipologia": "Book Chapter / White Paper",
    "area_tematica": "Gioco Analogico vs Digitale & Embodied Cognition"
  },
  {
    "id": "PUB-12",
    "anno": 2022,
    "autori": "Bago, B., Kovacs, M., Protzko, J., …, Mattiassi, A.D.A, …, et al.",
    "titolo": "Situational factors shape moral judgements in the trolley dilemma in Eastern, Southern and Western countries in a culturally diverse sample",
    "sede_editoriale": "Nature Human Behaviour",
    "volume_issue_pp": "6(6), 880-895",
    "doi_link": "https://doi.org/10.1038/s41562-022-01319-5",
    "publisher_url": "https://www.nature.com/articles/s41562-022-01319-5",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Giudizio Morale, Etica delle Decisioni & PSA",
    "in_anteprima": true
  },
  {
    "id": "PUB-13",
    "anno": 2021,
    "autori": "Mattiassi, A. D., Sarrica, M., Cavallo, F., & Fortunati, L.",
    "titolo": "What do humans feel with mistreated humans, animals, robots, and objects? Exploring the role of cognitive empathy",
    "sede_editoriale": "Motivation and Emotion",
    "volume_issue_pp": "45(5), 654-666",
    "doi_link": "https://doi.org/10.1007/s11031-021-09899-7",
    "publisher_url": "https://link.springer.com/article/10.1007/s11031-021-09899-7",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Empatia Cognitiva, Robotica Sociale & Etologia"
  },
  {
    "id": "PUB-14",
    "anno": 2020,
    "autori": "Mattiassi, A.D.A.",
    "titolo": "Le vele: Gioco e pensiero",
    "sede_editoriale": "EDU-LARP. Game Design per giochi di ruolo educativi (FrancoAngeli, Milano)",
    "volume_issue_pp": "pp. 69-77",
    "doi_link": "ISBN: 9788835105251",
    "publisher_url": "https://www.francoangeli.it/Libro/Edu-larp-Game-design-per-giochi-di-ruolo-educativi?Id=26365",
    "tipologia": "Book Chapter",
    "area_tematica": "Edu-LARP, Role Playing & Pensiero Divergente"
  },
  {
    "id": "PUB-15",
    "anno": 2019,
    "autori": "Bilancini, E., Boncinelli, L., & Mattiassi, A.",
    "titolo": "Assessing Actual Strategic Behavior to Construct a Measure of Strategic Ability",
    "sede_editoriale": "Frontiers in Psychology",
    "volume_issue_pp": "9, 2750",
    "doi_link": "https://doi.org/10.3389/fpsyg.2018.02750",
    "publisher_url": "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2018.02750/full",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Teoria dei Giochi Sperimentale & Abilità Strategiche",
    "in_anteprima": true
  },
  {
    "id": "PUB-16",
    "anno": 2019,
    "autori": "Mariani, I., Mattiassi, A. D., & Zavarrone, E.",
    "titolo": "Gaming Analytics Through Players (GAP). Profiling Italian Players",
    "sede_editoriale": "Data Science & Social Research 2019 Book of Abstracts",
    "volume_issue_pp": "p. 81",
    "doi_link": "-",
    "tipologia": "Conference Abstract / Proceedings",
    "area_tematica": "Profilazione Quantitativa dei Giocatori Italiani"
  },
  {
    "id": "PUB-17",
    "anno": 2019,
    "autori": "Mattiassi, A.D.A., Sarrica, M., Cavallo, F., & Fortunati, L.",
    "titolo": "Degrees of Empathy: Humans’ Empathy towards Humans, Animals, Robots and Objects",
    "sede_editoriale": "Italian Forum of Ambient Assisted Living (Springer Cham)",
    "volume_issue_pp": "pp. 101-113",
    "doi_link": "https://doi.org/10.1007/978-3-030-25629-6_8",
    "publisher_url": "https://link.springer.com/chapter/10.1007/978-3-030-25629-6_8",
    "tipologia": "Conference Proceedings / Book Chapter",
    "area_tematica": "Robotica Sociale & Dimensioni di Empatia"
  },
  {
    "id": "PUB-18",
    "anno": 2018,
    "autori": "Mariani, I., & Mattiassi, A.",
    "titolo": "Things from Another World. VR, UI and UX through Run of Mydan",
    "sede_editoriale": "CEUR Workshop Proceedings",
    "volume_issue_pp": "Vol. 2244",
    "doi_link": "http://ceur-ws.org/Vol-2244/paper7.pdf",
    "publisher_url": "http://ceur-ws.org/Vol-2244/paper7.pdf",
    "tipologia": "Conference Proceedings (Peer-Reviewed)",
    "area_tematica": "Realtà Virtuale, UI/UX ed Ergonomia Cognitiva"
  },
  {
    "id": "PUB-19",
    "anno": 2018,
    "autori": "Mattiassi, A.D.A.",
    "titolo": "Fighting the game. Command systems and player-avatar interaction in fighting games in a social cognitive neuroscience framework",
    "sede_editoriale": "Multimedia Tools and Applications",
    "volume_issue_pp": "78(7), 8821-8847",
    "doi_link": "https://doi.org/10.1007/s11042-018-6512-y",
    "publisher_url": "https://link.springer.com/article/10.1007/s11042-018-6512-y",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Fighting Games, Tempi di Reazione & Interazione Uomo-Macchina",
    "in_anteprima": true
  },
  {
    "id": "PUB-20",
    "anno": 2017,
    "autori": "Mattiassi, A.D.A.",
    "titolo": "Command Systems And Player-Avatar Interaction In Successful Fighting Games In Light Of Neuroscientific Theories And Models",
    "sede_editoriale": "CEUR Workshop Proceedings (CHItaly)",
    "volume_issue_pp": "Vol. 1910",
    "doi_link": "http://ceur-ws.org/Vol-1910/paper16.pdf",
    "publisher_url": "http://ceur-ws.org/Vol-1910/paper16.pdf",
    "tipologia": "Conference Proceedings (Peer-Reviewed)",
    "area_tematica": "HCI, Modelli Motori & Game Design"
  },
  {
    "id": "PUB-21",
    "anno": 2016,
    "autori": "Urgesi, C., Mattiassi, A.D.A., Buiatti, T., & Marini, A.",
    "titolo": "Tell it to a child! A brain stimulation study of the role of left inferior frontal gyrus in emotion regulation during storytelling",
    "sede_editoriale": "NeuroImage",
    "volume_issue_pp": "136, 26-36",
    "doi_link": "https://doi.org/10.1016/j.neuroimage.2016.05.023",
    "publisher_url": "https://www.sciencedirect.com/science/article/pii/S105381191630188X",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Neuromodulazione (TMS/tDCS), Narrazione & Giro Frontale"
  },
  {
    "id": "PUB-22",
    "anno": 2014,
    "autori": "Mattiassi, A. D. A., Mele, S., Ticini, L. F., & Urgesi, C.",
    "titolo": "Conscious and unconscious representations of observed actions in the human motor system",
    "sede_editoriale": "Journal of Cognitive Neuroscience",
    "volume_issue_pp": "26(9), 2028-2041",
    "doi_link": "https://doi.org/10.1162/jocn_a_00609",
    "publisher_url": "https://direct.mit.edu/jocn/article/26/9/2028/28169/Conscious-and-Unconscious-Representations-of",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Neuroscienze dell'Azione, Risonanza Motoria & Visione Subliminale"
  },
  {
    "id": "PUB-23",
    "anno": 2014,
    "autori": "Mele, S., Mattiassi, A. D. A., & Urgesi, C.",
    "titolo": "Unconscious Processing of Body Actions Primes Subsequent Action Perception but Not Motor Execution",
    "sede_editoriale": "Journal of Experimental Psychology: Human Perception and Performance",
    "volume_issue_pp": "40(5), 1940-1954",
    "doi_link": "https://doi.org/10.1037/a0037384",
    "publisher_url": "https://psycnet.apa.org/record/2014-41126-001",
    "tipologia": "Journal Article (Peer-Reviewed)",
    "area_tematica": "Priming Implicito, Percezione dell'Azione & Controllo Motorio"
  },
  {
    "id": "PUB-24",
    "anno": 2013,
    "autori": "Mattiassi, A., Mele, S., & Urgesi, C.",
    "titolo": "P 146. Motor resonance requires conscious perception but is modulated by unseen actions",
    "sede_editoriale": "Clinical Neurophysiology",
    "volume_issue_pp": "124(10), e132-e133",
    "doi_link": "https://doi.org/10.1016/j.clinph.2013.04.223",
    "publisher_url": "https://www.sciencedirect.com/science/article/pii/S138824571300585X",
    "tipologia": "Conference Abstract (Peer-Reviewed)",
    "area_tematica": "Neurofisiologia Clinica & Risonanza Motoria Corticale"
  }
];
