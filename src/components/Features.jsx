function Features() {
  const features = [
    {
      title: "Unified Messaging",
      description:
        "Switch seamlessly between personal conversations, team discussions and AI interactions inside one workspace.",
      number: "01",
    },
    {
      title: "AI Assistant",
      description:
        "Generate ideas, summarize conversations and receive intelligent responses without leaving the chat.",
      number: "02",
    },
    {
      title: "Modern Workspace",
      description:
        "Designed using React with reusable components, scalable architecture and responsive layouts.",
      number: "03",
    },
    {
      title: "Beautiful Interface",
      description:
        "Minimal design, smooth interactions and premium visual language inspired by modern SaaS products.",
      number: "04",
    },
  ];

  return (
    <section className="features-wrapper" id="features">
      <div className="section-title">
        <span>FEATURES</span>

        <h2>
          Everything you need
          <br />
          in one intelligent workspace.
        </h2>

        <p>
          Designed for productivity, collaboration and AI-assisted
          communication.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="feature-box"
          >
            <div className="feature-number">
              {feature.number}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <button>Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;