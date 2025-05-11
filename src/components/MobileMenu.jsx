import { Instagram, Linkedin, Github } from 'react-bootstrap-icons';

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <a href="#my-projects" onClick={onClose}>
        My Projects
      </a>
      <a href="#get-in-touch" onClick={onClose}>
        Get In Touch
      </a>
      <div className="icon-cont">
        <a href="https://www.linkedin.com/in/caitlin-anderson-75bb16270/" onClick={onClose}>
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/caitlinanderson099" onClick={onClose}>
          <Instagram />
        </a>
        <a href="https://github.com/caitlinanderson099" onClick={onClose}>
          <Github />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
