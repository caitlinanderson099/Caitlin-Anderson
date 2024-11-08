import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen); // that toggles between TRUE and FALSE
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'; //disable page scroll when menu is open
};

const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
};

  return (
    <header>
        <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
            <NavLink to="/" className="logo">
               {/* <img src="/logo.svg" alt="website logo" /> */}
            </NavLink>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`bar bar1 ${isOpen ? "toggle" : ""}`}></div>
                <div className={`bar bar2 ${isOpen ? "toggle" : ""}`}></div>
                <div className={`bar bar3 ${isOpen ? "toggle" : ""}`}></div>
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li>
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? "active-link" : "")}>
                            Home
                        </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? "active-link" : "")}>
                            About Me
                        </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? "active-link" : "")}>
                            Projects
                        </NavLink>
                </li>

                <button>
                    Get In Touch
                </button>
            </ul>
        </nav>
        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      
    </header>
  )
}

export default Navbar
