import { Link } from "react-router-dom";
import logo from "../assets/logo-remove2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <span>READY TO START?</span>

        <h2>
          Experience intelligent messaging
          <br />
          inside one beautiful workspace.
        </h2>

        <Link to="/app" className="footer-btn">
          Launch Workspace →
        </Link>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-main">
        <div className="footer-brand">
          <img
            src={logo}
            alt="OurChat.UI"
            className="footer-logo"
          />

          <div className="foot-logo-text">
            <h2>OurChat.UI</h2>

            <p>
              Modern messaging platform built with React and AI
              assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 OurChat.UI • Crafted with React.
      </div>
    </footer>
  );
}

export default Footer;