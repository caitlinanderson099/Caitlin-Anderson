// Base Imports
import { useState } from "react";


// Icon Imports
import { Instagram, Linkedin, Github } from 'react-bootstrap-icons';

// Component Imports
import MobileMenu from "./MobileMenu"; // adjust path as needed



const Navbar = () => {
          const [menuOpen, setMenuOpen] = useState(false);
      
          const toggleMenu = () => {
            setMenuOpen(!menuOpen);
          };
           const closeMenu = () => {
    setMenuOpen(false);
  };
      
          return (
            <header>
              <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <a href="/" className="navbar-brand">
                <img src="/caitlin_logo.png" alt="Portfolio Avatar"/>
                </a>
                <button className="navbar-toggle" onClick={toggleMenu}>
                  ☰
                </button>
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                  <a href="#my-projects" onClick={() => setMenuOpen(false)}>
                    My Projects
                  </a>
                  <a href="#get-in-touch" onClick={() => setMenuOpen(false)}>
                    Get In Touch
                  </a>
                  <div className={`navbar-menu icon-cont ${menuOpen ? 'active' : ''}`}>
                     <a href="https://www.linkedin.com/in/caitlin-anderson-75bb16270/" onClick={() => setMenuOpen(false)}>
                    <Linkedin/>
                  </a>
                  <a href="https://www.instagram.com/caitlinanderson099" onClick={() => setMenuOpen(false)}>
                    <Instagram/>
                  </a>
                  <a href="https://github.com/caitlinanderson099" onClick={() => setMenuOpen(false)}>
                    <Github/>
                  </a>
                  </div>
                </div>
                <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
              </nav>
            </header>
          );
    };
    export default Navbar;