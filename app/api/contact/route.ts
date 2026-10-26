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
        Origin: "https://www.alanmattiassi.com",
        Referer: "https://www.alanmattiassi.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => ({}));

    // Se FormSubmit risponde 200 (incluso quando richiede l'attivazione iniziale 1-click via email), consideriamo la richiesta acquisita
    const isSuccess =
      response.ok &&
      (result?.success === "true" ||
        result?.success === true ||
        (typeof result?.message === "string" && result.message.includes("Activation")));

    if (!isSuccess && !response.ok) {
      console.warn("FormSubmit risposta non OK:", response.status, result);
      return NextResponse.json(
        { error: "Errore durante l'inoltro a FormSubmit", details: result },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Messaggio inoltrato correttamente ad alan.mattiassi@gmail.com",
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
