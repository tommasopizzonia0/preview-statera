import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "stateranutrition.info@gmail.com";

const topics: Record<string, string> = {
  info: "Richiesta informazioni",
  demo: "Partecipazione alla beta",
  support: "Supporto tecnico",
  other: "Altra richiesta",
};

// I dati arrivano dall'utente: vanno sempre escapati prima di finire nell'HTML.
function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Template email: solo stili inline e layout a tabelle, gli unici affidabili
// nei client di posta (Gmail, Outlook, Apple Mail).
function buildEmailHtml(name: string, email: string, topic: string, message: string) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeTopic = escapeHtml(topic);
  const safeMessage = escapeHtml(message || "Nessun messaggio aggiuntivo.").replaceAll("\n", "<br />");

  const infoRow = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;width:120px;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;font-weight:600;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html lang="it">
  <body style="margin:0;padding:0;background-color:#f0fdf7;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d1fae5;">
            <!-- Header -->
            <tr>
              <td style="background-color:#022c22;padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-size:18px;font-weight:800;letter-spacing:0.18em;color:#ffffff;">STATERA</td>
                    <td align="right">
                      <span style="display:inline-block;background-color:#10b981;color:#022c22;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">${safeTopic}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Corpo -->
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 6px;font-size:22px;line-height:1.3;color:#0f172a;">Nuova richiesta dal sito</h1>
                <p style="margin:0 0 24px;font-size:14px;color:#64748b;">Ricevuta dal form contatti di statera-nutrition.it</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                  ${infoRow("Nome", safeName)}
                  ${infoRow("Email", `<a href="mailto:${safeEmail}" style="color:#059669;text-decoration:none;">${safeEmail}</a>`)}
                  ${infoRow("Argomento", safeTopic)}
                </table>
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Messaggio</p>
                <div style="background-color:#f0fdf7;border:1px solid #d1fae5;border-left:4px solid #10b981;border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:#0f172a;">${safeMessage}</div>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:13px;color:#64748b;">Rispondi direttamente a questa email per scrivere a <strong style="color:#0f172a;">${safeName}</strong>.</p>
              </td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;">© Statera — notifica automatica del form contatti</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// I dati personali inviati alla Conversions API vanno pseudonimizzati
// con SHA-256, come richiesto da Meta per l'advanced matching.
function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function getCookieValue(cookieHeader: string | null, name: string): string | undefined {
  const match = cookieHeader?.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match?.[1];
}

// Evento "Lead" server-side (Conversions API): recupera i tracciamenti persi
// da ad-blocker e restrizioni browser. L'eventId arriva dal client solo se
// l'utente ha dato il consenso marketing, e coincide con quello dell'evento
// browser così Meta li deduplica.
async function sendMetaLeadEvent(request: Request, eventId: string, email: string, name: string) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const [firstName, ...otherNames] = name.split(/\s+/);
  const lastName = otherNames.join(" ");
  const cookieHeader = request.headers.get("cookie");
  const fbp = getCookieValue(cookieHeader, "_fbp");
  const fbc = getCookieValue(cookieHeader, "_fbc");
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const userAgent = request.headers.get("user-agent");

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: request.headers.get("referer") ?? undefined,
        user_data: {
          em: [sha256(email)],
          fn: firstName ? [sha256(firstName)] : undefined,
          ln: lastName ? [sha256(lastName)] : undefined,
          client_ip_address: clientIp,
          client_user_agent: userAgent ?? undefined,
          fbp,
          fbc,
        },
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    console.error("Meta CAPI error:", response.status, await response.text());
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const topic = topics[String(body.subject)] ?? topics.demo;
    // Presente solo se l'utente ha acconsentito ai cookie di marketing.
    const rawEventId = String(body.eventId ?? "");
    const eventId = /^[0-9a-f-]{36}$/i.test(rawEventId) ? rawEventId : null;

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
      html: buildEmailHtml(name, email, topic, message),
      // Fallback testuale per client senza HTML (e migliora la deliverability).
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

    // Non bloccante: un errore verso Meta non deve far fallire l'invio della richiesta.
    if (eventId) {
      await sendMetaLeadEvent(request, eventId, email, name).catch((capiError) => {
        console.error("Meta CAPI error:", capiError);
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Richiesta non valida." },
      { status: 400 }
    );
  }
}
