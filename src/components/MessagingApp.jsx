import { useState } from "react";
import logo from "../assets/logo-remove2.png";


function MessagingApp() {

  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="messaging-app">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-header">
          <img
            src={logo}
            alt="OurChat"
            className="sidebar-logo-img"
          />
          <p>OurChat.UI</p>
        </div>

        <div
          className={`chat-item ${activeChat === "assistant" ? "active" : ""
            }`}
          onClick={() => setActiveChat("assistant")}
        >
          🤖 AI Assistant
        </div>

        <div className="chat-item disabled">
          💬 Sarah
        </div>

        <div className="chat-item disabled">
          👥 Team Alpha
        </div>

      </div>

      {/* CHAT AREA */}
      <div className="chat-area">

        {!activeChat ? (

          <>
            <div className="chat-header">
              Workspace
            </div>

            <div className="messages empty-state">

              <div className="empty-card">

                <h2>Welcome to OurChat</h2>

                <p>
                  Select a conversation from the sidebar
                  to start messaging.
                </p>

              </div>

            </div>
          </>

        ) : (

          <>
            <div className="chat-header">
              🤖 AI Assistant
            </div>

            <div className="messages">

              <div className="msg ai">
                Hello 👋 I am your AI assistant.
              </div>

              <div className="msg user">
                What is React?
              </div>

              <div className="msg ai">
                React is a JavaScript library for building user interfaces.
              </div>

            </div>

            <div className="input-box">

              <input
                type="text"
                placeholder="Type a message..."
                disabled
              />

              <button disabled>
                Send
              </button>

            </div>

          </>
        )}

      </div>

    </div>
  );
}

export default MessagingApp;