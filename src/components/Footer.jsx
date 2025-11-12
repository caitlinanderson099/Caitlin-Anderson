import { Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer-grid">
      <div className="footer-logo">
        <img src="/caitlin-anderson-logo.png" alt="Caitlin Anderson Logo" />
      </div>
      <div className="footer-copy">
        <p>© 2025 Caitlin Anderson</p>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/caitlinandersondesign" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} />
          <span>@caitlinandersondesign</span>
        </a>
        <a href="https://www.linkedin.com/in/caitlin-anderson099" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
          <span>@caitlin-anderson099</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
