"use client";

import React, { useState, useEffect, useRef } from "react";
import { Crosshair, Send, Copy, X, Check, Sparkles } from "lucide-react";

interface ElementInfo {
  tagName: string;
  id: string;
  className: string;
  textContent: string;
  selectorPath: string;
  approxLocation?: string;
}

export default function VisualInspector() {
  const [isActive, setIsActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [elementInfo, setElementInfo] = useState<ElementInfo | null>(null);
  const [instruction, setInstruction] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [isSending, setIsSending] = useState(false);
  const highlightedRef = useRef<HTMLElement | null>(null);

  // In production, do not render
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  // Generate a friendly path for identifying the element
  const getSelectorPath = (el: HTMLElement): string => {
    const parts: string[] = [];
    let curr: HTMLElement | null = el;

    while (curr && curr !== document.body && parts.length < 4) {
      let identifier = curr.tagName.toLowerCase();
      if (curr.id) {
        identifier += `#${curr.id}`;
      } else if (curr.className && typeof curr.className === "string") {
        const firstClass = curr.className.split(" ").filter(c => c && !c.includes("selected") && !c.includes("highlight"))[0];
        if (firstClass) identifier += `.${firstClass}`;
      }
      parts.unshift(identifier);
      curr = curr.parentElement;
    }

    return parts.join(" > ");
  };

  useEffect(() => {
    if (!isActive) {
      if (highlightedRef.current) {
        highlightedRef.current.style.outline = "";
        highlightedRef.current.style.outlineOffset = "";
        highlightedRef.current = null;
      }
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("#visual-inspector-ui")) return;

      if (highlightedRef.current && highlightedRef.current !== selectedElement) {
        highlightedRef.current.style.outline = "";
        highlightedRef.current.style.outlineOffset = "";
      }

      if (target !== selectedElement) {
        target.style.outline = "2px dashed #06b6d4";
        target.style.outlineOffset = "2px";
        highlightedRef.current = target;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("#visual-inspector-ui")) return;

      if (target !== selectedElement) {
        target.style.outline = "";
        target.style.outlineOffset = "";
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("#visual-inspector-ui")) return;

      e.preventDefault();
      e.stopPropagation();

      if (selectedElement) {
        selectedElement.style.outline = "";
        selectedElement.style.outlineOffset = "";
      }

      target.style.outline = "3px solid #3b82f6";
      target.style.outlineOffset = "2px";
      setSelectedElement(target);

      const path = getSelectorPath(target);
      const text = target.children.length === 0 ? target.innerText.trim() : target.innerText.slice(0, 100).trim();

      setElementInfo({
        tagName: target.tagName.toLowerCase(),
        id: target.id || "",
        className: typeof target.className === "string" ? target.className : "",
        textContent: text,
        selectorPath: path,
      });

      setStatusMsg("");
    };

    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mouseout", handleMouseOut, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isActive, selectedElement]);

  const handleCloseModal = () => {
    if (selectedElement) {
      selectedElement.style.outline = "";
      selectedElement.style.outlineOffset = "";
      setSelectedElement(null);
    }
    setElementInfo(null);
    setInstruction("");
    setStatusMsg("");
  };

  const handleSendRequest = async () => {
    if (!elementInfo || !instruction.trim()) return;
    setIsSending(true);

    try {
      const res = await fetch("/api/visual-edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          elementInfo,
          instruction: instruction.trim(),
          timestamp: new Date().toISOString(),
          pathname: window.location.pathname,
        }),
      });

      if (res.ok) {
        setStatusMsg("✅ Richiesta inviata ad Antigravity! Dì in chat di applicarla.");
      } else {
        setStatusMsg("⚠️ Salvato parzialmente. Puoi copiare il testo.");
      }
    } catch {
      setStatusMsg("⚠️ Copia il messaggio sotto per la chat.");
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyPrompt = () => {
    if (!elementInfo || !instruction.trim()) return;
    const prompt = `[Richiesta Modifica Visuale - Pagina: ${window.location.pathname}]
Elemento: <${elementInfo.tagName}>
Percorso: ${elementInfo.selectorPath}
Classi: ${elementInfo.className}
Testo attuale: "${elementInfo.textContent}"
Modifica richiesta: ${instruction.trim()}`;

    navigator.clipboard.writeText(prompt);
    setStatusMsg("📋 Istruzione copiata negli appunti! Incollala qui in chat.");
  };

  return (
    <div id="visual-inspector-ui" className="fixed z-[999999] pointer-events-auto">
      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          const next = !isActive;
          setIsActive(next);
          if (!next) handleCloseModal();
        }}
        className={`fixed bottom-5 right-5 flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs shadow-2xl transition-all duration-300 border ${
          isActive
            ? "bg-blue-600 text-white border-blue-400 ring-4 ring-blue-500/30 scale-105"
            : "bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80 backdrop-blur"
        }`}
      >
        <Crosshair className={`w-4 h-4 ${isActive ? "animate-spin text-white" : "text-sky-400"}`} />
        <span>{isActive ? "Modalità Visuale ATTIVA" : "Modifica Visuale"}</span>
      </button>

      {/* Selected Element Floating Inspector Modal */}
      {isActive && elementInfo && (
        <div className="fixed bottom-20 right-5 w-96 max-w-[calc(100vw-40px)] bg-slate-900/95 border border-slate-700/90 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-slate-100 space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-blue-500/20 text-blue-400">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Elemento Selezionato</h4>
                <p className="text-[11px] font-mono text-cyan-400 truncate max-w-[220px]">
                  &lt;{elementInfo.tagName}&gt; {elementInfo.selectorPath}
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {elementInfo.textContent && (
            <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1">
              <span className="text-slate-400 font-semibold block text-[10px] uppercase">Testo o Contenuto:</span>
              <p className="text-slate-200 italic line-clamp-2">&ldquo;{elementInfo.textContent}&rdquo;</p>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Cosa vuoi modificare in questo elemento?
            </label>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="Es: Rendi il pulsante verde smeraldo, ingrandisci il font a 20px, oppure cambia il testo in..."
              rows={3}
              className="w-full text-xs p-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none transition"
            />
          </div>

          {statusMsg && (
            <div className="text-[11px] px-2.5 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/60 text-blue-300 animate-in fade-in">
              {statusMsg}
            </div>
          )}

          <div className="flex gap-2 pt-1">
            <button
              onClick={handleSendRequest}
              disabled={!instruction.trim() || isSending}
              className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSending ? "Invio..." : "Invia ad Antigravity"}</span>
            </button>
            <button
              onClick={handleCopyPrompt}
              disabled={!instruction.trim()}
              title="Copia per incollare in chat"
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium border border-slate-700 transition flex items-center justify-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copia</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
