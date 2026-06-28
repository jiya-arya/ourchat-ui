// scrollReveal.js

export function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".feature-card, .hero-content, .chat-card, .features-heading, .footer"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}