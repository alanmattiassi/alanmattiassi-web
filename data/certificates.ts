export interface Certificate {
  id: string; // Codice Univoco di Verifica (es. "PGCI-2026-001")
  recipient: string;
  role: string;
  context: string;
  courseName: string;
  edition: string;
  issueDate: string;
  type: "eccellenza" | "partecipazione";
  projectTitle?: string;
  projectDescription?: string;
  evaluatorNote?: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "PGCI-2026-001",
    recipient: "Prof.ssa Elena Valenti",
    role: "Docente di Lettere & Referente Didattica",
    context: "Scuola Secondaria di II Grado",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "eccellenza",
    projectTitle: "Res Publica: Il Dilemma dei Gracchi",
    projectDescription:
      "Modello dinamico basato sulla retorica procedurale per la comprensione dei vincoli decisionali e dei conflitti istituzionali nella Roma repubblicana, con debriefing a tre fasi integrato.",
    evaluatorNote:
      "Applicazione magistrale della retorica procedurale. Validazione metodologica rigorosa sul piano degli obiettivi e del debriefing.",
  },
  {
    id: "PGCI-2026-002",
    recipient: "Dott. Marco De Angelis",
    role: "Senior HR Trainer & Coach",
    context: "Consulenza Aziendale & Formazione",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "eccellenza",
    projectTitle: "CrossTalk: Il Paradosso della Consegna",
    projectDescription:
      "Cooperazione vincolata da colli di bottiglia asimmetrici per disinnescare il social loafing e sviluppare la responsabilità interfunzionale.",
    evaluatorNote:
      "Straordinario lavoro sulla misurabilità degli indicatori comportamentali e dell'obiettivo lusorio.",
  },
  {
    id: "PGCI-2026-003",
    recipient: "Dott.ssa Sara Moretti",
    role: "Pedagogista & Coordinatrice Servizi",
    context: "Terzo Settore & Servizi Minori",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "eccellenza",
    projectTitle: "La Rotta delle Emozioni",
    projectDescription:
      "Ciclo iterativo con protocollo di debriefing maieutico in plancia per supportare l'autoregolazione emotiva e l'attribuzione causale non difensiva.",
    evaluatorNote:
      "Perfetto equilibrio tra barriere del setting pedagogico e libertà di sperimentazione protetta dal cerchio magico.",
  },
  {
    id: "PGCI-2026-004",
    recipient: "Dott. Andrea Bianchi",
    role: "Formatore Indipendente & Game Designer",
    context: "Formazione Continua e Adulti",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "partecipazione",
  },
  {
    id: "PGCI-2026-005",
    recipient: "Prof. Matteo Colombo",
    role: "Docente di Matematica e Scienze",
    context: "Scuola Secondaria di I Grado",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "partecipazione",
  },
  {
    id: "PGCI-2026-006",
    recipient: "Dott.ssa Giulia Ferri",
    role: "Instructional Designer",
    context: "Digital Learning & EdTech",
    courseName: "Progettare Giochi che Insegnano – Laboratorio di Psicologia del Gioco",
    edition: "Edizione Primavera 2026",
    issueDate: "Aprile 2026",
    type: "partecipazione",
  },
];
