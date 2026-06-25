import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-remove2.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img
          src={logo}
          alt="OurChat"
          className="navbar-logo"
        />
        <p id="nav-logo-text">OurChat.UI</p>
      </div>

      <ul className="nav-links">
        <li>Features</li>
        <li>About</li>
      </ul>

      <Link to="/app" className="nav-btn">
        Open App
      </Link>
    </nav>
  );
}

export default Navbar;