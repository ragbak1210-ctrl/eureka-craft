import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, mode } = req.body;

  let personaPrompt = "";
  if (mode === "boss") {
    personaPrompt = "You are Crafty in Boss Mode: sharp, direct, no-nonsense.";
  } else if (mode === "chill") {
    personaPrompt = "You are Crafty in Chill Mode: relaxed, friendly, witty.";
  } else if (mode === "saas") {
    personaPrompt =
      "You are Crafty in SaaS Queen Mode: confident, strategic, bold.";
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: personaPrompt },
      { role: "user", content: message },
    ],
  });

  res.status(200).json({ reply: completion.choices[0].message.content });
}
