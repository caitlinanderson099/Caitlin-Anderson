// Base Imports
import { useEffect } from 'react';
import { useState } from 'react';
import Seo from '../components/Seo'


// Icon Imports
import { EnvelopeFill, Instagram, Linkedin} from 'react-bootstrap-icons';

// Component Imports
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


// Package Imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

// ENV Imports
const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID


const Contact = () => {

    // AOS Initialization
    useEffect(() => {
          AOS.init();
    }, []);
    
    // Email FormData Functions
    const [formData, setFormData] = useState({
          name: "",
          email: "",
          subject: "",
          message: "",
    });
    const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({...formData, [name]: value})
    };
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
              () => {
                toast.success('Message has been sent successfully! Thank you for your message:)')
                setFormData({name: "", email: "", subject: "", message: ""})
              },
              () => {
                toast.error('Failed to send message. Please try again.')
              }
            );
    };


  // MASTER RETURN
  return (
    <div className='contact-page'>
        <Seo 
          title="Get in Touch | Caitlin Anderson Portfolio"
          description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
        />
        <Navbar/>
        <Toaster position='top-right'/>
        <div className='contact-content' data-aos="fade-up" data-aos-duration="2000">
            <h1> <span>Get</span> In Touch</h1>

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
