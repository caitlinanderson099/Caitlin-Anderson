// Base Imports
import { useEffect } from 'react';
import { useState } from 'react';
// Icon Imports
import { Instagram, Linkedin } from 'react-bootstrap-icons';
import TypedText from '../components/TypedText';
import AOS from 'aos';
import 'aos/dist/aos.css';


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

  const TypedIntro = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 type-text-section">
      <div className="text-center px-4 content" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <TypedText
          sentences={[
            "My name is Caitlin.",
            "I specialize in UI/UX Design and Web Development",
            "Take a look through my projects!"
          ]}
          speed={70}
          delayBetween={1500}
        />
        <p className="mt-4 text-gray-600">
          <strong>Disclaimer:</strong> All projects in this website were created for educational purposes
        </p>
      </div>
    </div>

    );
  }

    // Landing Page Component
    const LandingPage = () => {
      return (
        <>
        <div className='landing-page' data-aos="fade-up" data-aos-duration="3000">
          <div className='landing-content'>
            <TypedIntro/>

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