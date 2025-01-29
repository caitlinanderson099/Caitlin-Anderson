// Base Imports
import { useEffect } from 'react';
import { useState } from 'react';
// Icon Imports
import { Instagram, Linkedin } from 'react-bootstrap-icons';

const Home = () => {

  // AOS Initialization
    useEffect(() => {
      AOS.init();
    }, []);

    // Navbar Component
  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <header>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <a href="/" className="navbar-brand">
          <img src="/caitlin anderson.png" alt="Portfolio Avatar"/>
          </a>
          <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#my-wall" onClick={() => setMenuOpen(false)}>
              My Wall
            </a>
            <a href="#my-projects" onClick={() => setMenuOpen(false)}>
              My Projects
            </a>
            <a href="#get-in-touch" onClick={() => setMenuOpen(false)}>
              Get In Touch
            </a>
          </div>
        </nav>
      </header>
    );
  };

    // Landing Page Component
    const LandingPage = () => {
      return (
        <>
        <div className='landing-page' data-aos="fade-up" data-aos-duration="3000">
          <div className='landing-content'>
            <h1 id='landing-header'>Welcome!</h1>
            <h2>Hi, my name is Caitlin and I am a Web <span> Designer/Developer </span></h2>
            <p>All projects included in this website for created for educational purposes</p>

            <div className='landing-navigation'>
              <a href="#get-in-touch"> Get In Touch </a>
              <a href="#my-projects">Explore My Projects</a>
            </div>
          </div>
      </div>
      </>
      )
    }

    // Footer Component
    const Footer = () => {
      return (
        <footer>
          <div className='footer-inner'>
            <a href=""> <Linkedin/> @caitlinanderson099 </a>
            <h4>© Caitlin Anderson 2025</h4>
            <a href=""> <Instagram/> @caitlinanderson099 </a>
          </div>
        </footer>
      )
    }


    // Home Page Master Return
    return (
      <>
        <div className='home' id='home'>
          <Navbar/>
          <LandingPage/>
          <Footer/>
        </div>
      </>
    )
}

export default Home