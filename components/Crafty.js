import { useState } from "react";

export default function Crafty() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "crafty", text: "👋 Hi, I’m Crafty! Pick a mode and let’s chat." },
  ]);
  const [mode, setMode] = useState("chill"); // default mode
  const [input, setInput] = useState("");

  const modes = {
    boss: "💼 Boss Mode: Sharp. Direct. No fluff.",
    chill: "😎 Chill Mode: Easy, relaxed vibes.",
    saas: "👑 SaaS Queen Mode: Witty & bold.",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);

    // Example Crafty responses
    let response = "";
    if (mode === "boss") {
      response = "Let’s cut to the chase. What’s blocking you?";
    } else if (mode === "chill") {
      response = "No stress 😌 let’s think this through.";
    } else if (mode === "saas") {
      response = "Honey, if it doesn’t sparkle, it won’t sell. ✨";
    }

    setMessages((prev) => [...prev, { from: "crafty", text: response }]);
    setInput("");
  };

  return (
    <div>
      {/* Floating Button */}
      <button className="crafty-btn" onClick={() => setOpen(!open)}>
        🤖 Crafty
      </button>

      {/* Chat Window */}
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

      <style jsx>{`
        .crafty-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #0070f3;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .crafty-window {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 320px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .crafty-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          background: #f3f3f3;
          border-bottom: 1px solid #ddd;
        }
        .crafty-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          max-height: 250px;
        }
        .crafty-messages .user {
          text-align: right;
          color: blue;
          margin: 5px 0;
        }
        .crafty-messages .crafty {
          text-align: left;
          color: black;
          margin: 5px 0;
        }
        .crafty-input {
          display: flex;
          border-top: 1px solid #ddd;
        }
        .crafty-input input {
          flex: 1;
          border: none;
          padding: 10px;
        }
        .crafty-input button {
          border: none;
          padding: 10px;
          background: #0070f3;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
