// pages/api/crafty.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt, mode } = req.body;

  const modes = {
    boss: "You are Crafty in Boss Mode: assertive, direct, business-focused.",
    chill: "You are Crafty in Chill Mode: relaxed, casual, supportive.",
    saas: "You are Crafty in SaaS Queen Mode: witty, bold, marketing-savvy.",
  };

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: modes[mode] || modes.chill },
        { role: "user", content: prompt },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "⚠️ Error fetching AI response." });
  }
}
