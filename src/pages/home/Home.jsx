// Base Imports
import { useNavigate, NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import toast, {Toaster} from 'react-hot-toast';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
// Sass Import
import './home.scss';
// Icon Imports
import { ArrowDown, Behance, Envelope, Instagram, Linkedin } from 'react-bootstrap-icons';

const Home = () => {

    AOS.init();

    const [projects, setProjects] = useState([]);
    const [projectType, setProjectType] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    // Open Project Function
    const handleOpenProject = (projectId) => {
      window.scrollTo(0,0);
      let path = `/singleproject/${projectId}`;
      navigate(path);
    }

    // Projects Map Data
    const Projects = ({projects}) => {
      const mappedProjects = projects.map((project, index) => {
        const imageUrl = Array.isArray(project.project_images)
      ? project.project_images[0]
      : project.project_images;
        return (
          <div className='project-card' key={project._id}>
            <img src={imageUrl} className='project-image' alt="first image of the project" />
            <div className="project-details">
            <h3> {project.project_name} </h3>
            <h4> {project.project_type} </h4>
            <button onClick={() => handleOpenProject(project._id)}> Open Project! </button>
            </div>
          </div>
        )
      });

      return (
        <>{mappedProjects}</>
      )
    }

    // Fetching Projects for Filtering
    useEffect(() => {
        axios.get('/PROJECTS.json')
          .then((response) => setProjects(response.data))
          .catch((error) => console.error('Error fetching projects:', error));
      }, []);
      const filteredProjects = projects.filter((project) => {
        return (
          (projectType === '' || project.project_type.split(', ').includes(projectType)) &&
          (year === '' || project.date === year)
        );
      });

    // Section Refs for Navbar scrolling
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const landingRef = useRef(null);
    // Scroll To Section Function
    const scrollToSection = (sectionRef) => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Variables for Navbar
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Responsive Navbar Functions
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    };

    // Variables for Contact Form - Imported From env File
    const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID 
    const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID

    // FormData Variables
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });

    // Handling Input Changes Functions
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
    };

    // Handle Submit Function
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
            toast.success('Message Sent Successfully!');
            setFormData({name: "", email: "", number: "", subject: "", message: ""});
          },
          (error) => {
            toast.error('Failed To Send Message. Please Try Again');
          }
        )
    };

    // Handle Web Design Navigation
    const handleWeb = (e) => {
      e.preventDefault();
      navigate('/web-projects');
    }

    // Home Page Master Return
    return (
      <>
        <div className='home' id='home'>
          {/* Navbar */}
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
                          to="#" onClick={() => { scrollToSection(landingRef); closeMenu(); }}>
                              Home
                          </NavLink>
                  </li>

                  <li>
                      <NavLink
                          to="#" onClick={() => { scrollToSection(aboutRef); closeMenu(); }}>
                              About Me
                          </NavLink>
                  </li>

                  <li>
                      <NavLink
                          to="#" onClick={() => { scrollToSection(projectsRef); closeMenu(); }}>
                              Projects
                          </NavLink>
                  </li>

                  <button to="#" onClick={() => { scrollToSection(contactRef); closeMenu(); }}>
                      Get In Touch
                  </button>
              </ul>
          </nav>
          {isOpen && <div className="overlay" onClick={closeMenu}></div>}
        
          </header>
          {/* Landing Page */}
          <div ref={landingRef} className='landing-page'>
            <div className='header-subheader' data-aos="fade-up" data-aos-duration="1000">
              <h1> Welcome to Caitlin Anderson's Design Portfolio! </h1>
              <h2> Disclaimer: All Projects Were Created For Educational Purposes Only </h2>
            </div>

            <div className='landing-buttons' data-aos="fade-up" data-aos-duration="1000">
            <button onClick={() => scrollToSection(contactRef)} className='chat-btn'> Let's Chat! </button>
            <button onClick={() => scrollToSection(aboutRef)}> Explore Website </button>
            </div>

            <ArrowDown className='arrow-icon' onClick={() => scrollToSection(aboutRef)} />
          </div>
          {/* About Me Section */}
          <div ref={aboutRef} className='about-page'>
          <div className='about-content'>

            <div className='img-cont'>
              <img src="/portfolio-pfp.jpeg" alt="Photo of myself" />
            </div>

            <div className='about-info'>
              <div className='about-group'>
              <h2> Caitlin Anderson </h2>
              <h3 className='specification'> Web & UX Designer and Frontend Developer </h3>
              </div>

              <div className='about-group'>
                <p> I am very passionate about digital design, specifically web and UX design, creating projects that engage and excite others. I am a very organised person and love to show that with my work. In my spare time, I enjoy collecting and building Lego Sets, curling up with a good book, and going on adventures with friends. Hope you enjoy having a looksie through my works:) </p>
              </div>

              <div className="about-group">
                <h3> Skills </h3>
                <p> Time Management | Team Work & Communication | Problem Solving & Critical Thinking | Resilience & Adaptability </p>
                <p> HTML & CSS/SASS | Javascript & jQuery | React & Vite | VSCode | GitHub & Vercel | Adobe Creative Suite | Figma Prototyping | WordPress | MongoDB</p>
              </div>

              <div className="social-cont">
                <a href="https://www.instagram.com/caitlinanderson099/#" target='_blank'>
                <Instagram className='icon'/>
                </a>
                <a href="https://www.behance.net/caitlinanderson099" target='_blank'>
                <Behance className='icon'/>

                </a>
                <a href="https://www.linkedin.com/in/caitlin-anderson099" target='_blank'>
                <Linkedin className='icon'/>
                </a>
                <a href="">
                <Envelope className='icon'/>
                </a>
              </div>

            </div>
          </div>
          </div>
          {/* Projects Section */}
          <div ref={projectsRef} className='projects-page'>
            <h2> Projects </h2>

            <div className='filter-cont'>
                <div className='filter-group'>
                    <label htmlFor="projectType"> Project Type </label>
                    <select  
                        id="projectType" 
                        value={projectType} 
                        onChange={(e) => setProjectType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Ui Design">Ui Design</option>
                        <option value="UX Design">UX Design</option>
                    </select>
                </div>

                <div className='filter-group'>
                    <label htmlFor="year"> Year </label>
                    <select  
                        id="year" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <button onClick={() => { setProjectType(''); setYear(''); }}> Clear Filters</button>

            </div> 

            <div id='projectGrid'>
              {loading ? (<p>Loading...</p>) : filteredProjects.length === 0 ? (<p className='filter-error-message'>No results found for the selected filters.</p>) : (<Projects projects={filteredProjects} />)}            
            </div>
          </div>
          {/* Contact Section */}
          <div ref={contactRef} className="contact-page">
            <Toaster position='top-center' />

            <div className="heading-text">
                <h2> Get In Touch With Me </h2>
                <h3> To get in touch with me, just message me on any of my socials, or use the contact form below for any and all enquiries :) </h3>
                 {/* Social Icons */}
            <div className="social-icons">
                <Instagram />
                <Behance />
                <Linkedin />
                <Envelope />
            </div>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className='form-group'>
                    <label> Name: </label>
                    <input 
                      type="text" 
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className='form-group'>
                    <label> Email: </label>
                    <input 
                      type="email" 
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Number */}
                  <div className='form-group'>
                    <label> Phone Number: </label>
                    <input 
                      type="text" 
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className='form-group'>
                    <label> Subject: </label>
                    <input 
                      type="text" 
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className='form-group'>
                    <label> Message: </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    >
                    </textarea>
                  </div>

                  <div className="form-group">
                    <button type='submit'> Send Message </button>
                  </div>
                </form>          
            </div>
          </div>
        </div>
      </>
    )
}

export default Home