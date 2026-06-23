function MessagingApp() {
  return (
    <div className="messaging-app">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="sidebar-header">
          💬 OurChats
        </div>

        {/* empty state */}
        <div className="sidebar-empty">
          No chats yet
        </div>

      </div>

      {/* CHAT AREA */}
      <div className="chat-area">

        <div className="chat-header">
          Select a chat
        </div>

        {/* empty messages state */}
        <div className="messages empty-state">
          <p>Start a conversation</p>
        </div>

        {/* input still present but inactive */}
        <div className="input-box">

          <input
            type="text"
            placeholder="Type a message..."
            disabled
          />

          <button disabled>Send</button>

        </div>

      </div>

    </div>
  );
}

export default MessagingApp;