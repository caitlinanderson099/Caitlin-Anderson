import React, { useRef } from 'react';
import { EnvelopeFill, Instagram, Linkedin } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useState } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID


const Contact = () => {

      // AOS Initialization
        useEffect(() => {
          AOS.init();
        }, []);
    
        const [formData, setFormData] = useState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({...formData, [name]: value})
        }

        const handleSubmit = (e) => {
          e.preventDefault();
          emailjs
            .send(
              SERVICE_ID,
              TEMPLATE_ID,
              formData,
              USER_ID
            )
            .then(
              (response) => {
                toast.success('Message has been sent successfully! Thank you for your message:)')
                setFormData({name: "", email: "", subject: "", message: ""})
              },
              (error) => {
                toast.error('Failed to send message. Please try again.')
              }
            );
        }


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
    
        // Footer Component
        const Footer = () => {
          return (
            <footer>
              <div className='footer-inner'>
                <a href="https://www.linkedin.com/in/caitlin-anderson-75bb16270/"> <Linkedin/> @caitlinanderson099 </a>
                <h4>© Caitlin Anderson 2025</h4>
                <a href="https://www.instagram.com/caitlinanderson099/#"> <Instagram/> @caitlinanderson099 </a>
              </div>
            </footer>
          )
        }
  return (
    <div className='contact-page'>
        <Navbar/>
        <Toaster position='top-right'/>
        <div className='contact-content' data-aos="fade-up" data-aos-duration="2000">
            <h1>Get In Touch</h1>

            <div className='contact-details'>
                <p>You can find me on any of my socials or feel free to fill out an enquiry form down below!</p>

                <div className='socials-row'>
                   <a href="https://www.linkedin.com/in/caitlin-anderson-75bb16270/"> <Linkedin/></a>
                   <a href="https://www.instagram.com/caitlinanderson099/#"> <Instagram/></a>
                   <a href="mailto:caitlinanderson099@gmail.com" target="_blank"> <EnvelopeFill/></a>
                </div>


                <form onSubmit={handleSubmit}>

                  <label>Name:</label>
                  <input 
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />

                  <label>Email:</label>
                  <input 
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />

                  <label>Subject:</label>
                  <input 
                    type="text"
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />

                  <label>Message:</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button type='submit'> Send Message </button>



                </form>


            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
