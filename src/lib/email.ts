import { SITE } from "./site";

type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ subject, html, replyTo }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? SITE.email;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM ?? `Unique Agency <noreply@${SITE.url.replace("https://", "")}>`,
        to: [to],
        subject,
        html,
        reply_to: replyTo,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Email delivery failed: ${error}`);
    }
    return { success: true, provider: "resend" };
  }

  console.info("[Email]", { to, subject, replyTo, html });
  return { success: true, provider: "console" };
}

export function formatEmailTable(data: Record<string, string | string[]>) {
  const rows = Object.entries(data)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;text-transform:capitalize;border-bottom:1px solid #eee;">${key.replace(/([A-Z])/g, " $1")}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${Array.isArray(value) ? value.join(", ") : value}</td></tr>`
    )
    .join("");
  return `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`;
}
