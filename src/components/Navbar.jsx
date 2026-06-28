import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo-remove2.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <div className="logo">
          <img
            src={logo}
            alt="OurChat.UI"
            className="navbar-logo"
          />

          <div className="logo-content">
            <h3>OurChat.UI</h3>
            <span>Messaging Platform Prototype</span>
          </div>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#preview">Preview</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="navbar-right">
        <Link to="/app" className="nav-btn">
          Open Workspace
          <span>→</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;