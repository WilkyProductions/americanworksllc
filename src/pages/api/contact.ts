import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const TO_EMAIL = "office@americanworksllc.com";
const FROM_EMAIL = import.meta.env.CONTACT_FROM_EMAIL || "American Works Website <onboarding@resend.dev>";

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
};
function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) => ESCAPE_MAP[c]);
}

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: real users never fill this hidden field.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return jsonResponse({ ok: true }, 200);
  }

  const firstName = String(data.first_name || "").trim();
  const lastName = String(data.last_name || "").trim();
  const email = String(data.email || "").trim();
  const phone = String(data.phone || "").trim();
  const zip = String(data.zip || "").trim();
  const service = String(data.service || "").trim();
  const message = String(data.message || "").trim();

  if (!firstName || !lastName || !email || !phone || !service) {
    return jsonResponse({ ok: false, error: "Please fill in all required fields." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return jsonResponse({ ok: false, error: "Could not send your request. Please call us directly." }, 500);
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New estimate request — ${firstName} ${lastName} (${service})`,
      html: `
        <h2>New Estimate Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Zip Code:</strong> ${escapeHtml(zip) || "—"}</p>
        <p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>") || "—"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return jsonResponse({ ok: false, error: "Could not send your request. Please call us directly." }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (err) {
    console.error("Contact form error:", err);
    return jsonResponse({ ok: false, error: "Could not send your request. Please call us directly." }, 500);
  }
};
