function Features() {
  return (
    <section className="features-wrapper">

      <div className="features-heading">
        <h2>Why OurChat.UI?</h2>

        <p>
          Everything you need for human and AI conversations
          in a single modern workspace.
        </p>
      </div>

      <div className="features">

        {/* FEATURE 1 */}
        <div className="feature-card large">
          <div className="icon">💬</div>

          <h3>Unified Conversations</h3>

          <p>
            Manage personal chats and AI interactions within a single interface.
          </p>

          <span className="subtext">
            No switching apps — everything in one workspace.
          </span>

          <div className="tag">Core Feature</div>
        </div>

        {/* FEATURE 2 */}
        <div className="feature-card">
          <div className="icon">🤖</div>

          <h3>AI Assistant</h3>

          <p>
            Get instant help through a dedicated AI chat.
          </p>

          <span className="subtext">
            Smart responses with contextual understanding.
          </span>
        </div>

        {/* FEATURE 3 */}
        <div className="feature-card">
          <div className="icon">📱</div>

          <h3>Responsive Design</h3>

          <p>
            Optimized for desktop, tablet and mobile.
          </p>

          <span className="subtext">
            Seamless experience across all screen sizes.
          </span>
        </div>

        {/* FEATURE 4 */}
        <div className="feature-card wide">
          <div className="icon">⚛️</div>

          <h3>Built with React</h3>

          <p>
            Developed using reusable React components and modern frontend practices.
          </p>

          <span className="subtext">
            Clean architecture designed for scalability and future expansion.
          </span>

          <div className="tag">Frontend Stack</div>
        </div>

      </div>

    </section>
  );
}

export default Features;