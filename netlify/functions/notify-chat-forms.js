// /netlify/functions/notify-chat.js
exports.handler = async (event) => {
    const data = JSON.parse(event.body);
  
    const message = `📬 Ny besked fra kontaktformularen:\n
  Navn: ${data.name}\n
  Email: ${data.email}\n
  Besked: ${data.message}`;
  
    const response = await fetch("https://chat.googleapis.com/v1/spaces/AAQAjulFuQs/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=j8QzeBMgwf7zJqPQ6MluEsjtr3taF38Yc8iTpudRtNM", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });
  
    return {
      statusCode: 200,
      body: "Notified Google Chat",
    };
  };
  