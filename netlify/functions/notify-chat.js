// Node.js 18+: brug global fetch & AbortController
const CHAT_WEBHOOK_URL = process.env.GOOGLE_CHAT_WEBHOOK_URL;

exports.handler = async function(event) {
  if (!CHAT_WEBHOOK_URL) {
    console.error("🚨 Mangler miljøvariablen GOOGLE_CHAT_WEBHOOK_URL");
    return { statusCode: 500, body: "Server konfigurationsfejl" };
  }

  console.log("🔍 Incoming raw event:", JSON.stringify(event, null, 2));

  // Parse JSON-body
  let body;
  try {
    if (!event.body) throw new Error("Manglende request body");
    body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    console.log("🔍 Parsed body:", JSON.stringify(body, null, 2));
  } catch (err) {
    console.error("💥 Kunne ikke parse body:", err);
    try { await sendToChat(`❗️ Fejl ved JSON-parse:\n\`\`\`${err.message}\`\`\``); } catch {}
    return { statusCode: 400, body: `Invalid JSON: ${err.message}` };
  }

  // Netlify-event header
  const netlifyEvent = (event.headers['x-netlify-event'] || '').toLowerCase();

  // Payload: hvis body.payload findes, ellers hele body
  const payload = body.payload || body;
  let message = "🤖 Ukendt besked fra webhook.";

  try {
    // Form submission
    if (netlifyEvent === 'submission_created' || payload.data) {
      const formName = payload.form_name || payload.form_id || 'ukendt';
      const lines = Object.entries(payload.data || {})
        .map(([k, v]) => `- *${k}:* ${v}`)
        .join("\n");
      message = `📬 **Ny formular‑indsendelse (${formName})**\n\n${lines}`;
    }
    // Deploy event
    else if (payload.state) {
      const { state, branch, commit_ref, deploy_url, error_message } = payload;
      if (state === 'ready') {
        message = `✅ **Deploy fuldført** på *${branch}*\n🔗 ${deploy_url}\n🔀 Commit: ${commit_ref}`;
      } else if (state === 'error') {
        message = `❌ **Deploy fejlede** på *${branch}*\n🔀 Commit: ${commit_ref}\n💥 Fejl: ${error_message || 'Ukendt fejl'}`;
      } else {
        message = `ℹ️ **Deploy-status:** ${state} på *${branch}*`;
      }
    }
    // Fallback: dump payload
    else {
      message = `ℹ️ Ukendt hændelse:\n\`\`\`json
${JSON.stringify(payload, null, 2)}\n\`\`\``;
    }
  } catch (err) {
    console.error("💥 Fejl ved behandling af payload:", err);
    message = `❗️ Fejl ved behandling af payload: ${err.message}`;
  }

  // Send til Google Chat
  try {
    await sendToChat(message);
    return { statusCode: 200, body: "Besked sendt til Google Chat" };
  } catch (err) {
    console.error("🚨 Fejl ved sendToChat:", err);
    return { statusCode: 500, body: `Fejl: ${err.message}` };
  }
};

async function sendToChat(text) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(CHAT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || `HTTP ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
