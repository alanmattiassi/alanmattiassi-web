# 📰 Guida: Configurazione Rassegna Stampa Automatica

Questa guida ti spiega in pochi passaggi come attivare l'automazione della rassegna stampa su **GitHub Actions**, in modo da poter ricevere e approvare le nuove uscite web direttamente dal tuo smartphone con un semplice tocco.

---

## 1. Abilitare i permessi di creazione Pull Request su GitHub (1 minuto)

Per permettere a GitHub Actions di aprire le proposte (Pull Request) per te:
1. Vai sul tuo repository su GitHub: `https://github.com/alanmattiassi/alanmattiassi-web`
2. Clicca su **Settings** (in alto a destra nel repository).
3. Nella colonna di sinistra, clicca su **Actions** → **General**.
4. Scorri verso il basso fino alla sezione **Workflow permissions**:
   - Seleziona **Read and write permissions**.
   - Spunta la casella **Allow GitHub Actions to create and approve pull requests**.
5. Clicca su **Save**.

---

## 2. Inserire la chiave API di Gemini (Gratuita - 1 minuto)

L'AI di Gemini filtra i falsi positivi, ripulisce i titoli ed estrae un riassunto/citazione di 1-2 frasi.
1. Se non ne hai già una, ottieni una chiave gratuita su [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Nel tuo repository GitHub, vai su:
   **Settings** → **Secrets and variables** → **Actions**.
3. Clicca sul pulsante verde **New repository secret**:
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: *incolla la tua chiave API*
4. Clicca su **Add secret**.

*(Nota: anche se non inserisci la chiave subito, lo script include un filtro euristico di fallback che controlla comunque le corrispondenze testuali).*

---

## 3. (Opzionale) Aggiungere un feed Google Alerts personalizzato

Lo scanner già interroga i feed pubblici di Google News su `"Alan Mattiassi"`. Se desideri aggiungere un feed dedicato da Google Alerts:
1. Vai su [google.it/alerts](https://www.google.it/alerts).
2. Crea un avviso cercando: `"Alan Mattiassi"`.
3. Clicca su **Mostra opzioni**:
   - Invia a: seleziona **Feed RSS** (anziché Email).
4. Clicca su **Crea avviso**.
5. Fai clic destro sull'icona RSS accanto all'avviso creato e copia l'indirizzo del link (es. `https://www.google.it/alerts/feeds/...`).
6. Su GitHub, in **Settings** → **Secrets and variables** → **Actions**, aggiungi un nuovo Secret:
   - **Name**: `GOOGLE_ALERTS_RSS_URLS`
   - **Secret**: *l'URL del tuo feed RSS appena copiato*

---

## 4. Come approvare una notizia dallo Smartphone

1. Scarica l'app ufficiale **GitHub** per iOS o Android e accedi con il tuo account.
2. Quando il bot troverà un articolo, una video-intervista o una menzione (ogni lunedì alle 08:00, o quando lanci il workflow a mano), riceverai una **notifica push**:
   > *"Nuova Pull Request: Rassegna Stampa: Nuove menzioni rilevate"*
3. Apri la notifica: vedrai l'anteprima formattata con la testata, il link e il testo riassunto.
4. **Per pubblicare sul sito**: Fai tap sul pulsante **`Merge`**.
   - Vercel riceve il segnale e in 45 secondi aggiorna automaticamente il sito live.
5. **Per scartare la notizia**: Fai tap su **`Close`** (o Rifiuta).

---

## 5. Come testare subito l'automazione a mano

Puoi testare il sistema in qualsiasi momento senza aspettare lunedì:
1. Su GitHub, vai nella scheda **Actions**.
2. Clicca su **Sync Rassegna Stampa** nella colonna di sinistra.
3. Clicca sul menu a tendina **Run workflow** → seleziona il branch `main` → clicca sul pulsante verde **Run workflow**.
