export interface PressItem {
  id: string;
  data: string; // YYYY-MM-DD
  anno: number;
  titolo: string;
  testata: string; // Es. "RaiNews", "ANCI FVG", "La Repubblica", "Speck&Tech"
  url: string;
  estratto: string; // Breve sintesi o estratto curato
  tipologia: "articolo" | "intervista" | "podcast" | "video" | "menzione";
  tag?: string;
  highlight?: boolean;
}

export const pressItems: PressItem[] = [
  {
    id: "PRESS-01",
    data: "2025-07-31",
    anno: 2025,
    titolo: "Registrazione talk su Free to Choose: Game-Based Learning & Scelte Consapevoli",
    testata: "Speck&Tech",
    url: "https://alanmattiassi.com/2025/07/31/registrazione-compelta-del-talk-su-free-to-choose-specktech/",
    estratto: "Intervento e approfondimento video sulle dinamiche del Game-Based Learning applicate al progetto europeo Free to Choose per contrastare gli stereotipi di genere nelle scelte formative.",
    tipologia: "video",
    tag: "Game-Based Learning",
    highlight: true,
  },
  {
    id: "PRESS-02",
    data: "2025-05-28",
    anno: 2025,
    titolo: "Game Experience: Giornata di formazione su Applied Games e Psicologia del Gioco",
    testata: "Drimlab & Social Innovation",
    url: "https://alanmattiassi.com/2025/05/09/game-experience-giornata-di-formazione-am-drimlab-28-5-2025-a-torino/",
    estratto: "Presentazione e reportage sul laboratorio torinese dedicato all'utilizzo del gioco come strumento psicologico per educatori, formatori e professionisti della cooperazione sociale.",
    tipologia: "articolo",
    tag: "Applied Games",
    highlight: true,
  },
  {
    id: "PRESS-03",
    data: "2021-02-15",
    anno: 2021,
    titolo: "Pordenone Città Futura: il percorso sulle pari opportunità e l'Urban Game",
    testata: "RaiNews TGR FVG",
    url: "https://www.rainews.it/tgr/fvg/articoli/2021/02/fvg-pordenone-citta-futura-percorso-femminile-pari-opportunita-6ac93e0f-f66c-408f-8219-0abe4dab9f8a.html",
    estratto: "Servizio e approfondimento sull'iniziativa di foresight strategico e Urban Gaming / LARP per la cittadinanza attiva e la parità di genere condotta con il Comune di Pordenone.",
    tipologia: "articolo",
    tag: "Urban Game & Foresight",
    highlight: true,
  },
  {
    id: "PRESS-04",
    data: "2021-02-12",
    anno: 2021,
    titolo: "Città del futuro a misura d'uomo e di donna: il report e il metodo ludico",
    testata: "ANCI FVG",
    url: "https://anci.fvg.it/citta-del-futuro-a-misura-duomo-e-di-donna/",
    estratto: "Articolo istituzionale sul report di foresight e citizen engagement che ha integrato metodologie ludiche e psicologia delle decisioni per lo sviluppo territoriale.",
    tipologia: "menzione",
    tag: "Cittadinanza Attiva",
  },
];
