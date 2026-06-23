import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span>💬</span>
        <h2>OurChat.UI</h2>
      </div>

      <ul className="nav-links">
        <li>Features</li>
        <li>About</li>
      </ul>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;