#!/usr/bin/env python3
"""
fetch_press_mentions.py
Script di monitoraggio automatico del web e rassegna stampa per Alan Mattiassi.
Supporta:
- Feed RSS pubblici di Google News (query "Alan Mattiassi")
- Feed RSS personalizzati di Google Alerts (tramite GOOGLE_ALERTS_RSS_URLS)
- Screening con Gemini API (se GEMINI_API_KEY è configurata)
- Fallback euristico se la chiave non è impostata
- Generazione automatica di PR_SUMMARY.md per GitHub Pull Request
"""

import os
import sys
import re
import json
import urllib.request
import urllib.parse
from datetime import datetime
import xml.etree.ElementTree as ET

# Ensure UTF-8 output across all operating systems and consoles
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(BASE_DIR, "data", "press.ts")
SUMMARY_FILE = os.path.join(BASE_DIR, "PR_SUMMARY.md")

# Default public Google News RSS queries
DEFAULT_RSS_FEEDS = [
    "https://news.google.com/rss/search?q=%22Alan+Mattiassi%22&hl=it&gl=IT&ceid=IT:it",
    "https://news.google.com/rss/search?q=%22Alan+Mattiassi%22&hl=en&gl=US&ceid=US:en",
]

def clean_html(raw_html: str) -> str:
    """Rimuove tag HTML e spaziature anomale."""
    if not raw_html:
        return ""
    clean = re.sub(r"<[^>]+>", " ", raw_html)
    clean = re.sub(r"&nbsp;|&amp;|&quot;|&#39;|&lt;|&gt;", " ", clean)
    clean = re.sub(r"\s+", " ", clean).strip()
    return clean

def extract_real_url(url: str) -> str:
    """Estrae l'URL effettivo se si tratta di un redirect di Google Alerts o Google News."""
    try:
        parsed = urllib.parse.urlparse(url)
        if "google.com" in parsed.netloc:
            qs = urllib.parse.parse_qs(parsed.query)
            if "url" in qs:
                return qs["url"][0]
            if "q" in qs:
                return qs["q"][0]
    except Exception:
        pass
    return url

def load_existing_urls_and_items(filepath: str):
    """Estrae gli URL e gli ID già presenti in press.ts."""
    existing_urls = set()
    existing_ids = set()
    raw_content = ""
    
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            raw_content = f.read()
        
        # Regex per estrarre tutti gli url già censiti
        found_urls = re.findall(r'url:\s*["\']([^"\']+)["\']', raw_content)
        for u in found_urls:
            existing_urls.add(u.strip().rstrip("/"))
            
        found_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', raw_content)
        for i in found_ids:
            existing_ids.add(i.strip())
            
    return existing_urls, existing_ids, raw_content

def fetch_rss_entries(feeds):
    """Scarica e parsa le voci RSS da Google News o Google Alerts."""
    entries = []
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }

    for feed_url in feeds:
        try:
            req = urllib.request.Request(feed_url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                xml_data = resp.read()
            
            root = ET.fromstring(xml_data)
            
            # Gestione sia RSS 2.0 (<item>) che Atom (<entry>)
            items = root.findall(".//item")
            if not items:
                # Prova Atom
                ns = {"atom": "http://www.w3.org/2005/Atom"}
                atom_entries = root.findall(".//atom:entry", ns) or root.findall(".//entry")
                for ae in atom_entries:
                    title_elem = ae.find("atom:title", ns) or ae.find("title")
                    link_elem = ae.find("atom:link", ns) or ae.find("link")
                    summary_elem = ae.find("atom:content", ns) or ae.find("atom:summary", ns) or ae.find("content") or ae.find("summary")
                    date_elem = ae.find("atom:published", ns) or ae.find("atom:updated", ns) or ae.find("published") or ae.find("updated")

                    title = title_elem.text if title_elem is not None else ""
                    link = link_elem.get("href", "") if link_elem is not None else ""
                    summary = summary_elem.text if summary_elem is not None else ""
                    pub_date = date_elem.text if date_elem is not None else ""

                    if link:
                        entries.append({
                            "title": clean_html(title),
                            "link": extract_real_url(link),
                            "summary": clean_html(summary),
                            "pub_date": pub_date,
                            "source": "Google Alerts"
                        })
                continue

            for it in items:
                title_elem = it.find("title")
                link_elem = it.find("link")
                desc_elem = it.find("description")
                pubdate_elem = it.find("pubDate")
                source_elem = it.find("source")

                title = title_elem.text if title_elem is not None else ""
                link = link_elem.text if link_elem is not None else ""
                desc = desc_elem.text if desc_elem is not None else ""
                pub_date = pubdate_elem.text if pubdate_elem is not None else ""
                source_name = source_elem.text if source_elem is not None else "Google News"

                if link:
                    entries.append({
                        "title": clean_html(title),
                        "link": extract_real_url(link),
                        "summary": clean_html(desc),
                        "pub_date": pub_date,
                        "source": source_name
                    })
        except Exception as e:
            print(f"⚠️ Errore nel caricamento del feed {feed_url}: {e}", file=sys.stderr)

    return entries

def fetch_single_url_entry(url: str):
    """Scarica e parsa metadati da una pagina web specifica (es. Hogrefe, blog, testata)."""
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
        
        # Estrai og:title o title
        title_match = re.search(r'<meta property="og:title" content="([^"]+)"', html) or re.search(r'<title>([^<]+)</title>', html)
        title = clean_html(title_match.group(1)) if title_match else url
        
        # Estrai og:description o description
        desc_match = re.search(r'<meta property="og:description" content="([^"]+)"', html) or re.search(r'<meta name="description" content="([^"]+)"', html)
        desc = clean_html(desc_match.group(1)) if desc_match else ""
        
        # Estrai nome sito / fonte
        site_match = re.search(r'<meta property="og:site_name" content="([^"]+)"', html)
        source = clean_html(site_match.group(1)) if site_match else urllib.parse.urlparse(url).netloc
        
        return [{
            "title": title,
            "link": url,
            "summary": desc,
            "pub_date": datetime.now().strftime("%Y-%m-%d"),
            "source": source
        }]
    except Exception as e:
        print(f"⚠️ Errore caricamento URL singolo {url}: {e}", file=sys.stderr)
        return []

def analyze_with_gemini(entry, api_key: str):
    """
    Interroga l'API di Gemini per verificare la rilevanza ed estrarre i campi strutturati.
    """
    endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    headers = {"Content-Type": "application/json"}
    
    prompt = f"""Sei un assistente per la rassegna stampa scientifica e professionale del Dott. Alan Mattiassi (Psicologo del Gioco, Ricercatore, Esperto di Game Science, Game-Based Learning, Edularp).
Nota terminologica vincolante: nei concetti di game design usa sempre 'obiettivi lusori', mai 'obiettivi illusori'.

Valuta la seguente notizia/menzione:
Titolo: {entry['title']}
Fonte indicata: {entry['source']}
Link: {entry['link']}
Data/Snippet: {entry['pub_date']} - {entry['summary']}

Compito:
1. Verifica se la notizia parla effettivamente di Alan Mattiassi o di un suo progetto/intervento/pubblicazione (escludi omonimi non pertinenti).
2. Se NON è rilevante, rispondi con {{"is_relevant": false}}.
3. Se È RILEVANTE, restituisci un JSON con:
   - "is_relevant": true
   - "titolo": titolo pulito e chiaro dell'articolo o dell'intervento
   - "testata": nome reale e pulito della testata/fonte (es. "La Repubblica", "Wired", "RaiNews", "Speck&Tech")
   - "data": data in formato YYYY-MM-DD (se non ricavabile usa quella odierna: "{datetime.now().strftime('%Y-%m-%d')}")
   - "estratto": citazione o sintesi curata di massimo 2 frasi che spieghi di cosa si parla e il ruolo di Alan Mattiassi
   - "tipologia": uno tra ["articolo", "intervista", "podcast", "video", "menzione"]
   - "tag": 1-2 parole chiave (es. "Game-Based Learning", "Psicologia del Gioco", "Serious Games")

Rispondi ESCLUSIVAMENTE con il blocco JSON valido. Nessun markdown o testo extra."""

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.1, "responseMimeType": "application/json"}
    }

    try:
        req = urllib.request.Request(endpoint, data=json.dumps(payload).encode("utf-8"), headers=headers)
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            text = data["candidates"][0]["content"]["parts"][0]["text"]
            parsed = json.loads(text)
            return parsed
    except Exception as e:
        print(f"⚠️ Errore chiamata Gemini API: {e}", file=sys.stderr)
        return None

def heuristic_filter(entry):
    """Filtro di emergenza nel caso in cui GEMINI_API_KEY non sia configurata."""
    text_corpus = (entry["title"] + " " + entry["summary"]).lower()
    
    # Deve contenere esplicitamente "alan mattiassi" o "mattiassi" associato a temi coerenti
    if "alan mattiassi" in text_corpus or ("mattiassi" in text_corpus and any(k in text_corpus for k in ["gioco", "game", "psicolog", "larp", "ludic", "scuola", "talk"])):
        # Stima data odierna se non parsabile
        date_str = datetime.now().strftime("%Y-%m-%d")
        return {
            "is_relevant": True,
            "titolo": entry["title"],
            "testata": entry["source"] or "Web / Stampa",
            "data": date_str,
            "estratto": (entry["summary"][:200] + "...") if len(entry["summary"]) > 200 else entry["summary"],
            "tipologia": "articolo",
            "tag": "Psicologia del Gioco"
        }
    return {"is_relevant": False}

def main():
    print("🔍 Avvio controllo rassegna stampa...")
    
    # 1. Carica le notizie già presenti
    existing_urls, existing_ids, raw_press_content = load_existing_urls_and_items(DATA_FILE)
    print(f"📚 Notizie attualmente in catalogo: {len(existing_urls)}")

    # 2. Configura i feed da interrogare o URL manuale
    manual_url = os.environ.get("MANUAL_URL", "").strip()
    if len(sys.argv) > 1 and sys.argv[1].startswith("http"):
        manual_url = sys.argv[1].strip()

    if manual_url:
        print(f"🎯 Modalità URL diretto: analisi di {manual_url}")
        entries = fetch_single_url_entry(manual_url)
    else:
        custom_alerts = os.environ.get("GOOGLE_ALERTS_RSS_URLS", "").strip()
        feeds_to_check = list(DEFAULT_RSS_FEEDS)
        if custom_alerts:
            for url in custom_alerts.split(","):
                if url.strip():
                    feeds_to_check.append(url.strip())

        # 3. Scarica tutte le voci
        entries = fetch_rss_entries(feeds_to_check)
        print(f"🌐 Voci rilevate dai feed RSS: {len(entries)}")

    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    new_approved_items = []

    # 4. Analisi & Deduplicazione
    for entry in entries:
        clean_url = entry["link"].strip().rstrip("/")
        if not clean_url or clean_url in existing_urls:
            continue

        print(f"➡️ Analisi nuova voce: {entry['title'][:60]}... ({clean_url})")
        
        analysis = None
        if gemini_key:
            analysis = analyze_with_gemini(entry, gemini_key)
        
        if not analysis or "is_relevant" not in analysis:
            analysis = heuristic_filter(entry)

        if analysis and analysis.get("is_relevant"):
            new_id = f"PRESS-{len(existing_ids) + len(new_approved_items) + 1:02d}"
            try:
                anno = int(analysis.get("data", "2026")[:4])
            except:
                anno = datetime.now().year

            item_dict = {
                "id": new_id,
                "data": analysis.get("data", datetime.now().strftime("%Y-%m-%d")),
                "anno": anno,
                "titolo": analysis.get("titolo", entry["title"]),
                "testata": analysis.get("testata", entry["source"]),
                "url": clean_url,
                "estratto": analysis.get("estratto", entry["summary"][:180]),
                "tipologia": analysis.get("tipologia", "articolo"),
                "tag": analysis.get("tag", "Psicologia del Gioco"),
                "highlight": True
            }
            new_approved_items.append(item_dict)
            existing_urls.add(clean_url)

    # 5. Se non ci sono novità, esci
    if not new_approved_items:
        print("✅ Nessuna nuova menzione da aggiungere.")
        if os.path.exists(SUMMARY_FILE):
            os.remove(SUMMARY_FILE)
        return

    print(f"🎉 Trovate {len(new_approved_items)} nuove menzioni rilevanti!")

    # 6. Aggiorna data/press.ts
    # Inseriamo i nuovi item in cima alla lista pressItems
    serialized_new_items = []
    for item in new_approved_items:
        serialized = f"""  {{
    id: {json.dumps(item['id'])},
    data: {json.dumps(item['data'])},
    anno: {item['anno']},
    titolo: {json.dumps(item['titolo'])},
    testata: {json.dumps(item['testata'])},
    url: {json.dumps(item['url'])},
    estratto: {json.dumps(item['estratto'])},
    tipologia: {json.dumps(item['tipologia'])},
    tag: {json.dumps(item['tag'])},
    highlight: true,
  }},"""
        serialized_new_items.append(serialized)

    insertion_str = "\n" + "\n".join(serialized_new_items) + "\n"
    
    # Inserisci subito dopo "export const pressItems: PressItem[] = ["
    marker = "export const pressItems: PressItem[] = ["
    if marker in raw_press_content:
        updated_content = raw_press_content.replace(marker, marker + insertion_str, 1)
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            f.write(updated_content)
        print(f"💾 Aggiornato con successo {DATA_FILE}")
    else:
        print("❌ Impossibile trovare il marcatore in press.ts", file=sys.stderr)
        sys.exit(1)

    # 7. Genera PR_SUMMARY.md per la notifica e descrizione della Pull Request
    summary_lines = [
        f"## 📰 Rassegna Stampa: {len(new_approved_items)} nuove uscite rilevate",
        "",
        "Lo scanner automatico ha individuato nuove menzioni web verificate su Alan Mattiassi:",
        "",
    ]
    for item in new_approved_items:
        summary_lines.append(f"### • [{item['titolo']}]({item['url']})")
        summary_lines.append(f"- **Testata**: `{item['testata']}`")
        summary_lines.append(f"- **Data**: `{item['data']}` | **Tipologia**: `{item['tipologia']}`")
        summary_lines.append(f"- **Estratto**: *\"{item['estratto']}\"*")
        summary_lines.append("")

    summary_lines.extend([
        "---",
        "### 📱 Come procedere dallo Smartphone o Browser:",
        "1. **Per pubblicare subito sul sito**: Fai tap su **`Merge pull request`** (in fondo alla pagina nell'app GitHub o da browser). Vercel aggiornerà il sito live in circa 45 secondi.",
        "2. **Per rifiutare o scartare**: Fai tap su **`Close pull request`**.",
        "",
        "*Generato automaticamente dal bot di rassegna stampa di alanmattiassi.com*"
    ])

    with open(SUMMARY_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(summary_lines))
    print(f"📝 Generato riepilogo in {SUMMARY_FILE}")

if __name__ == "__main__":
    main()
