import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "stateranutrition.info@gmail.com";

const topics: Record<string, string> = {
  info: "Richiesta informazioni",
  demo: "Prenotazione demo",
  support: "Supporto tecnico",
  other: "Altra richiesta",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const topic = topics[String(body.subject)] ?? topics.demo;

    // Honeypot: i visitatori reali non compilano questo campo.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { error: "I dati inseriti non sono validi." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Il servizio email non è ancora configurato." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Statera <onboarding@resend.dev>",
      to: [RECIPIENT],
      replyTo: email,
      subject: `[Statera] ${topic} — ${name}`,
      text: [
        `Nome: ${name}`,
        `Email: ${email}`,
        `Argomento: ${topic}`,
        "",
        "Messaggio:",
        message || "Nessun messaggio aggiuntivo.",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Non è stato possibile inviare la richiesta." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Richiesta non valida." },
      { status: 400 }
    );
  }
}
