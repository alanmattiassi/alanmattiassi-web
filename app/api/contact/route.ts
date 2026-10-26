import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_CONTACT_URL ||
  "https://script.google.com/macros/s/AKfycbwr2Oi1CZBxFYH0kcS-N9NI8txLO1AOomBAS-Ih9Ij2OEkyyPxGBHvDtN8rhWOhB8zn/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      _subject: body._subject || "Nuova richiesta dal sito alanmattiassi.com",
      ...body,
      Data: new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" }),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("Errore risposta Google Script:", response.status, errorText);
      return NextResponse.json(
        { error: "Errore durante l'inoltro della richiesta", details: errorText },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Messaggio inviato correttamente ad alan.mattiassi@gmail.com",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Errore sconosciuto";
    console.error("Errore API /api/contact:", message);
    return NextResponse.json(
      { error: "Errore interno del server", details: message },
      { status: 500 }
    );
  }
}
