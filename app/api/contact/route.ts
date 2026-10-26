import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      _subject: body._subject || "Nuova richiesta dal sito alanmattiassi.com",
      _template: "table",
      _captcha: "false",
      ...body,
    };

    const response = await fetch("https://formsubmit.co/ajax/alan.mattiassi@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: "Errore durante l'inoltro a FormSubmit", details: result },
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
