# Alan Mattiassi, PhD – Website (Next.js 15 + Tailwind CSS)

Sito web ufficiale di **Alan Mattiassi, PhD – Psicologo del Gioco**.
Costruito offline e pronto per il deployment su **Vercel** al di fuori di WordPress.

## ✨ Caratteristiche Tecniche

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/) con supporto nativo Vercel.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) con tema personalizzato deep slate/navy e accenti scientifici.
- **Icone**: [Lucide React](https://lucide.dev/).
- **Prestazioni**: Static Site Generation (SSG) ad altissima velocità e zero Cumulative Layout Shift (CLS).
- **Asset 100% Locali**: Tutte le immagini e i PDF (incluso il manoscritto 2026) sono scaricati in `public/images/`.
- **Dati Tipizzati**: Dati separati e modificabili in `data/` (`publications.ts`, `talks.ts`, `partners.ts`, `services.ts`, `posts.ts`).

---

## 🚀 Guida all'Utilizzo in Locale

1. Entra nella cartella del progetto:
   ```bash
   cd alanmattiassi-web
   ```

2. Avvia il server di sviluppo locale:
   ```bash
   npm run dev
   ```
   Il sito sarà accessibile all'indirizzo `http://localhost:3000`.

3. Verifica la compilazione di produzione:
   ```bash
   npm run build
   ```

---

## 🌐 Come Pubblicare su Vercel

### Opzione 1: Connessione tramite GitHub (Consigliata)
1. Crea un repository su GitHub e fai il push di questa cartella (`alanmattiassi-web`).
2. Accedi a [vercel.com](https://vercel.com) con il tuo account.
3. Clicca su **Add New... -> Project** e seleziona il repository GitHub.
4. Lascia tutte le impostazioni predefinite (il file `vercel.json` configura automaticamente tutto).
5. Clicca su **Deploy**: in meno di 60 secondi il sito sarà online con certificato SSL e CDN globale.
6. Per collegare il dominio personalizzato `alanmattiassi.com`:
   - Vai nelle impostazioni del progetto su Vercel -> **Domains**
   - Inserisci `alanmattiassi.com` e segui le istruzioni DNS per aggiornare i record A/CNAME.

### Opzione 2: Deploy diretto da riga di comando
Se hai installato la Vercel CLI:
```bash
npx vercel
```
e segui le istruzioni interattive a schermo.

---

## 📁 Struttura delle Pagine

- `/` – **Homepage** (Hero, Metriche, Ambiti, Servizi, Percorsi, Pubblicazioni, Partner, Contatti)
- `/about` – **About me // Io, circa** (Manifesto, Biografia accademica, Bio in Italiano e Bio in Inglese)
- `/docenti` – **Docenti & Scuola** (Game-Based Learning oltre l'entusiasmo, Framework GBL-02 in 5 fasi)
- `/aziende-corporate` – **Aziende & Corporate** (Dinamiche di gruppo, Leadership, Gamification e Tariffe)
- `/ricerca-consulenza` – **Ricerca & Game Design** (PMPVG, Ergonomia cognitiva, Serious Games, mcSQ)
- `/hire-me-lavora-con-me` – **Lavora con me // Hire me!** (Tariffario indicativo trasparente e Prenotazione Call)
- `/come-lavoro` – **Ciò che i sistemi nascondono** (Metodologia sistemica, 6 elementi di decodifica)
- `/scegli-la-tua-formazione` – **Scegli la tua formazione** (Hub di orientamento e confronto corsi)
- `/talks-interventi` – **Talks // Interventi** (Archivio di 54 conferenze, TEDx Udine e filtri per anno)
- `/topics-temi` – **Topics // Temi** (Compendio concettuale della psicologia del gioco)
- `/academy-formazione` – **Academy / Formazione** (Insegnamenti universitari e Master GIOCARSI UniFi)
- `/research-ricerca` – **Research // Ricerca** (Afferenze scientifiche, comitati e archivio paper)
- `/blog` & `/blog/[slug]` – **Notizie & Articoli** (Articoli di approfondimento, podcast GiF, tirocini UniTS)
