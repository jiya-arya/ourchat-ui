import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-remove2.png";

function Hero() {
  const conversation = [
    {
      role: "ai",
      text: "👋 Welcome User",
    },
    {
      role: "user",
      text: "What is this about.",
    },
    {
      role: "ai",
      text: "This is a prototype UI interface built with React.",
    },
    {
      role: "user",
      text: "Share it with other users.",
    },
    {
      role: "ai",
      text: "Shared successfully.",
    },
  ];

  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= conversation.length) return;

    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, conversation[index]]);
      setIndex((prev) => prev + 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse"></span>
          AI Powered Messaging Platform
        </div>

        <h1>
          One Workspace.
          <br />
          Every Conversation.
          <br />
          Smarter with AI.
        </h1>

        <p>
          OurChat.UI combines messaging, collaboration and AI
          assistance into one beautifully designed workspace
          built for modern communication.
        </p>

        <div className="hero-buttons">
          <Link to="/app" className="hero-primary-btn">
            Open Workspace →
          </Link>

          <button className="hero-secondary-btn">
            Live Preview
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>Unified</h3>
            <span>Human + AI Chats</span>
          </div>

          <div>
            <h3>React</h3>
            <span>Modern Frontend</span>
          </div>

          <div>
            <h3>Fast</h3>
            <span>Realtime Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-preview">
        <div className="preview-window">
          <div className="preview-header">
            <div className="preview-left">
              <img
                src={logo}
                alt="OurChat.UI"
                className="preview-logo"
              />

              <div>
                <h4>AI Assistant</h4>
                <span>Online</span>
              </div>
            </div>

            <div className="preview-actions">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="preview-chat">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`preview-message ${msg.role}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="preview-input">
            <input
              placeholder="Ask anything..."
              disabled
            />

            <button disabled>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;