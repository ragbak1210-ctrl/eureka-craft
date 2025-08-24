import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Crafty() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "crafty", text: "👋 Hi, I’m Crafty! Pick a mode and let’s chat." },
  ]);
  const [mode, setMode] = useState("chill");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const modes = {
    boss: "You are Crafty in Boss Mode: assertive, no-fluff, straight to solutions.",
    chill: "You are Crafty in Chill Mode: friendly, casual, stress-free vibes.",
    saas: "You are Crafty in SaaS Queen Mode: witty, bold, and marketing-savvy.",
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Save to Firestore
      await addDoc(collection(db, "crafty-conversations"), {
        mode,
        message: input,
        from: "user",
        createdAt: serverTimestamp(),
      });

      // Call backend API for response
      const res = await fetch("/api/crafty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, mode }),
      });

      const data = await res.json();
      const reply = { from: "crafty", text: data.reply };

      setMessages((prev) => [...prev, reply]);

      // Save Crafty's reply
      await addDoc(collection(db, "crafty-conversations"), {
        mode,
        message: data.reply,
        from: "crafty",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "crafty", text: "⚠️ Oops, I couldn’t fetch a reply." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      <button className="crafty-btn" onClick={() => setOpen(!open)}>
        🤖 Crafty
      </button>

      {open && (
        <div className="crafty-window">
          <div className="crafty-header">
            <h3>Crafty Assistant</h3>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="boss">Boss Mode</option>
              <option value="chill">Chill Mode</option>
              <option value="saas">SaaS Queen</option>
            </select>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="crafty-messages">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="crafty">⏳ Crafty is thinking...</div>}
          </div>

          <div className="crafty-input">
            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
