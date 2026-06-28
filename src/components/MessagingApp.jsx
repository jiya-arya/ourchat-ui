import { useState } from "react";
import logo from "../assets/logo-remove2.png";

function MessagingApp() {
  const chats = [
    {
      id: 1,
      name: "AI Assistant",
      icon: "🤖",
      online: true,
      last: "Ready to help.",
      unread: 2,
    },
    {
      id: 2,
      name: "Mahak",
      icon: "👩",
      online: true,
      last: "Let's meet tomorrow.",
      unread: 0,
    },
    {
      id: 3,
      name: "Team OurChat-UI",
      icon: "👥",
      online: false,
      last: "Project updated.",
      unread: 4,
    },
    {
      id: 4,
      name: "Design Team",
      icon: "🎨",
      online: true,
      last: "New mockups ready.",
      unread: 0,
    },
  ];

  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="messaging-app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-header">
            <img
              src={logo}
              alt="OurChat"
              className="sidebar-logo-img"
            />

            <div>
              <h3>OurChat.UI</h3>
              <span>Workspace</span>
            </div>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search conversations..."
            />
          </div>
        </div>

        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${
                activeChat?.id === chat.id ? "active" : ""
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <div className="chat-avatar">
                {chat.icon}
                {chat.online && (
                  <span className="online-dot"></span>
                )}
              </div>

              <div className="chat-info">
                <h4>{chat.name}</h4>
                <p>{chat.last}</p>
              </div>

              {chat.unread > 0 && (
                <span className="unread-badge">
                  {chat.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <section className="chat-area">
        {!activeChat ? (
          <div className="welcome-screen">
            <img
              src={logo}
              alt="OurChat"
              className="welcome-logo"
            />

            <span className="welcome-tag">
              AI WORKSPACE
            </span>

            <h1>
              Welcome to
              <br />
              OurChat.UI
            </h1>

            <p>
              One workspace for your conversations,
              collaboration and AI assistance.
              Select a conversation from the sidebar
              to get started.
            </p>

            <div className="welcome-actions">
              <button
                className="welcome-primary"
                onClick={() => setActiveChat(chats[0])}
              >
                🤖 Open AI Assistant
              </button>

              <button className="welcome-secondary">
                + New Conversation
              </button>
            </div>
          </div>
        ) : (
          <>
            <header className="chat-header">
              <div className="chat-user">
                <div className="chat-avatar large">
                  {activeChat.icon}
                </div>

                <div>
                  <h3>{activeChat.name}</h3>

                  <span>
                    {activeChat.online
                      ? "Online"
                      : "Offline"}
                  </span>
                </div>
              </div>

              <div className="header-actions">
                <button>📞</button>
                <button>🎥</button>
                <button>⋮</button>
              </div>
            </header>

            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#7F8A9E",
              }}
            >
              Conversation will appear here.
            </div>

            <div className="input-box">
              <button>😊</button>
              <button>📎</button>

              <input
                type="text"
                placeholder={`Message ${activeChat.name}...`}
              />

              <button>🎤</button>

              <button className="send-btn">
                ➜
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default MessagingApp;