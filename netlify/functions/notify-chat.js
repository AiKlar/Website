// Ingen ekstern fetch- eller abort-controller-pakke – brug Node.js 18+ global fetch og AbortController

const CHAT_WEBHOOK_URL = process.env.GOOGLE_CHAT_WEBHOOK_URL;

exports.handler = async function(event) {
  // Sørg for at webhook URL er sat
  if (!CHAT_WEBHOOK_URL) {
    console.error("🚨 Mangler miljøvariablen GOOGLE_CHAT_WEBHOOK_URL");
    return { statusCode: 500, body: "Server konfigurationsfejl" };
  }

  console.log("🔍 Incoming raw event:", JSON.stringify(event, null, 2));

  let body;
  try {
    if (!event.body) throw new Error("Manglende request body");
    body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    console.log("🔍 Parsed body:", JSON.stringify(body, null, 2));
  } catch (err) {
    console.error("💥 Kunne ikke parse body som JSON:", err);
    try {
      await sendToChat(`❗️ Fejl ved parsing af body:\n\`\`\`${err.message}\`\`\`\nOriginal payload:\n\`\`\`${event.body}\`\`\``);
    } catch {}
    return { statusCode: 400, body: `Invalid JSON: ${err.message}` };
  }

  const payload = body.payload || {};
  let message = "🤖 Ukendt besked fra webhook.";

  try {
    if (payload.data) {
      const lines = Object.entries(payload.data)
        .map(([key, val]) => `- *${key}:* ${val}`)
        .join("\n");
      message = `📬 **Ny formular‑indsendelse (${payload.form_name || payload.form_id || 'ukendt'})**\n\n${lines}`;
    } else if (payload.state) {
      const { state, branch, commit_ref, deploy_url, error_message } = payload;
      if (state === "ready") {
        message = `✅ **Deploy fuldført** på *${branch}*\n🔗 ${deploy_url}\n🔀 Commit: ${commit_ref}`;
      } else if (state === "error") {
        message = `❌ **Deploy fejlede** på *${branch}*\n🔀 Commit: ${commit_ref}\n💥 Fejl: ${error_message || "Ukendt fejl"}`;
      } else {
        message = `ℹ️ **Deploy‑status:** ${state} på *${branch}*`;
      }
    } else {
      message = `ℹ️ Ukendt hændelse:\n\`\`\`json
${JSON.stringify(payload, null, 2)}\n\`\`\``;
    }
  } catch (err) {
    console.error("💥 Fejl ved behandling af payload:", err);
    message = `❗️ Fejl ved behandling af payload:\n\`\`\`${err.message}\`\`\``;
  }

  try {
    await sendToChat(message);
    return { statusCode: 200, body: "Besked sendt til Google Chat" };
  } catch (err) {
    console.error("🚨 Fejl ved sending til Google Chat:", err);
    return { statusCode: 500, body: `Fejl ved Google Chat-webhook: ${err.message}` };
  }
};

async function sendToChat(text) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(CHAT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
