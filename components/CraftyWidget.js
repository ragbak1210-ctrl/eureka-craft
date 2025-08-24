import { useState, useEffect, useRef } from "react";

export default function CraftyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("chill"); // default mode
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("crafty-chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // Save chat history
  useEffect(() => {
    localStorage.setItem("crafty-chat", JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Voice synthesis (Indian-accent Donna-style fallback)
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN"; // Indian English accent
      utterance.rate = 1;
      utterance.pitch = 1.1;
      speechSynthesis.speak(utterance);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/crafty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, mode }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      speak(data.reply); // voice output
    } catch (err) {
      console.error(err);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden animate-slide-up">
          {/* Header with Modes */}
          <div className="bg-purple-600 text-white p-2 flex justify-between items-center">
            <span>🤖 Crafty</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="bg-purple-500 text-white rounded px-1"
            >
              <option value="boss">Boss Mode</option>
              <option value="chill">Chill Mode</option>
              <option value="saas">SaaS Queen</option>
            </select>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`my-1 p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-gray-200 p-2 rounded-lg inline-block">
                <span className="animate-pulse">Typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2"
              placeholder="Ask Crafty..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
