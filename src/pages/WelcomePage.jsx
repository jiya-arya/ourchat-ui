import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <h1>Welcome to OurChat</h1>

        <p>
          Manage conversations and interact with AI
          inside one unified workspace.
        </p>

        <div className="chat-options">

          <Link to="/app/assistant" className="option-card">
            <h3>🤖 AI Assistant</h3>
            <p>Chat with the built-in AI assistant.</p>
          </Link>

          <div className="option-card disabled">
            <h3>👥 Team Chat</h3>
            <p>Coming Soon</p>
          </div>

          <div className="option-card disabled">
            <h3>💬 Direct Messages</h3>
            <p>Coming Soon</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WelcomePage;