import { useEffect, useState } from "react";

function Hero() {
  const conversation = [
    { role: "ai", type: "text", text: "Hello 👋 I am your AI assistant." },
    { role: "user", type: "text", text: "What is React?" },
    { role: "ai", type: "typing" },
    { role: "ai", type: "text", text: "React is a JavaScript library for building UIs." },
    { role: "ai", type: "text", text: "It helps you create reusable components." },
  ];

  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (index >= conversation.length) return;

    const timeout = setTimeout(() => {
      setMessages((prev) => [...prev, conversation[index]]);
      setIndex((prev) => prev + 1);
    }, conversation[index].type === "typing" ? 900 : 1200);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Conversations,<br />
          AI Assistance,<br />
          One Interface.
        </h1>

        <p>
          OurChat.UI combines messaging and AI interaction inside a single modern workspace.
        </p>
      </div>

      <div className="hero-preview">
        <div className="chat-card">
          <h3>AI Assistant</h3>

          {messages.map((msg, i) => {
            if (msg.type === "typing") {
              return (
                <div key={i} className="message ai typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              );
            }

            return (
              <div key={i} className={`message ${msg.role}`}>
                {msg.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;