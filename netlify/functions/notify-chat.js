const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    console.log("🔍 Received body:", JSON.stringify(body, null, 2));

    let message = "🤖 Ukendt besked fra webhook.";
    const payload = body.payload;

    // 📬 Case: Kontaktformular
    if (payload && payload.form_name === "contact" && payload.data) {
      const { name, email, message: userMessage } = payload.data;

      if (!name || !email || !userMessage) {
        console.warn("⚠️ Manglende formularfelter");
        return {
          statusCode: 400,
          body: "Formularfelter mangler",
        };
      }

      message = `📬 **Ny besked fra kontaktformularen**\n\n👤 *Navn:* ${name}\n✉️ *Email:* ${email}\n📝 *Besked:* ${userMessage}`;
    }

    // 🚀 Case: Deploy notification
    else if (payload && payload.deploy) {
      const { state, branch, commit_ref, deploy_url, error_message } = payload.deploy;

      if (state === "ready") {
        message = `✅ **Deploy fullført** på *${branch}*\n🔗 ${deploy_url}\n🔀 Commit: ${commit_ref}`;
      } else if (state === "error") {
        message = `❌ **Deploy FEJLEDE** på *${branch}*\n🔀 Commit: ${commit_ref}\n💥 Fejl: ${error_message || "Ukendt fejl"}`;
      } else {
        message = `ℹ️ **Deploy-status:** ${state} på *${branch}*`;
      }
    }

    // 📤 Send besked til Google Chat
    const chatRes = await fetch("https://chat.googleapis.com/v1/spaces/AAQAjulFuQs/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=j8QzeBMgwf7zJqPQ6MluEsjtr3taF38Yc8iTpudRtNM", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });

    if (!chatRes.ok) {
      const errText = await chatRes.text();
      console.error("🚨 Fejl ved Google Chat-webhook:", errText);
      return {
        statusCode: 500,
        body: `Fejl ved Google Chat-webhook: ${errText}`,
      };
    }

    return {
      statusCode: 200,
      body: "Besked sendt til Google Chat",
    };

  } catch (err) {
    console.error("💥 Fejl i webhook-funktionen:", err);
    return {
      statusCode: 500,
      body: `Intern fejl: ${err.message}`,
    };
  }
};
