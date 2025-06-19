// Base Imports
import { useState } from "react";


// Icon Imports
import { Instagram, Linkedin, Github } from 'react-bootstrap-icons';

// Component Imports
import MobileMenu from "./MobileMenu"; // adjust path as needed

import 'aos/dist/aos.css';



const Navbar = () => {
          const [menuOpen, setMenuOpen] = useState(false);
      
          const toggleMenu = () => {
            setMenuOpen(!menuOpen);
          };
           const closeMenu = () => {
    setMenuOpen(false);
  };
      
          return (
            <header data-aos="fade-down" data-aos-duration="2000">
              <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <a href="/" className="navbar-brand">
                <img src="/caitlins-logo.png" alt="Portfolio Avatar" loading="lazy"/>
                </a>
                <button className="navbar-toggle" onClick={toggleMenu}>
                  ☰
                </button>
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                  <a href="#my-work" onClick={() => setMenuOpen(false)}>
                    My Work
                  </a>
                  <a href="#get-in-touch" onClick={() => setMenuOpen(false)}>
                    Get In Touch
                  </a>
                  <div className={`navbar-menu icon-cont ${menuOpen ? 'active' : ''}`}>
                     <a href="www.linkedin.com/in/caitlin-anderson099" onClick={() => setMenuOpen(false)}>
                    <Linkedin/>
                  </a>
                  <a href="https://www.instagram.com/caitlinandersondesign" onClick={() => setMenuOpen(false)}>
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