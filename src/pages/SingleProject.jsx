import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// Swiper Installs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// Optional Swiper modules
import { Pagination, Navigation } from 'swiper';
import { Instagram, Linkedin } from 'react-bootstrap-icons';



const SingleProject = () => {

    // AOS Initialization
    useEffect(() => {
      AOS.init();
    }, []);
  
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate(); 
  const [modalImage, setModalImage] = useState(null); 

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
        <a href=""> <Linkedin/> @caitlinanderson099 </a>
        <h4>© Caitlin Anderson 2025</h4>
        <a href=""> <Instagram/> @caitlinanderson099 </a>
      </div>
    </footer>
  )
}

  useEffect(() => {
    axios.get('/PROJECTS.json')
      .then(response => {
        const foundProject = response.data.find(p => p._id === id);
        setProject(foundProject);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, [id]);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1);
  }
  
  return (
    <div className='single-page'>
      {/* Navbar */}
      <Navbar/> 
      {/* Single Page Details */}
      <div className='single-project-details' data-aos="fade-up" data-aos-duration="2000">
        <div className='back-title'>
          <a className='back-btn' onClick={() => handleBack()}> Back </a>
          <h1>{project.project_name}</h1>
        </div>

        <div className='single-project-card'>
          <div className='img-cont'>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              spaceBetween={10}
              slidesPerView={1}
            >
              {project.project_images.map((image, index) => (
                <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.project_name} ${index + 1}`}
                  onClick={() => openModal(image)}
                  style={{ cursor: 'pointer' }}
                />
              </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='single-details'>
          <h2>{project.project_type} | {project.date}</h2>
          <p> {project.extended_description} </p>
          <h4>Skills:</h4>
          <p>{project.skills_used}</p>
          {project.link && (
            <>
              <h2> Project Link(s): </h2>
              <div className='links-group'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
              <a href={project.backend_link} target="_blank" rel="noopener noreferrer">{project.backend_link}</a>
              <a href={project.frontend_link} target="_blank" rel="noopener noreferrer">{project.frontend_link}</a>
              <a href={project.api_link} target="_blank" rel="noopener noreferrer">{project.api_link}</a>
              </div>
            </>
          )}
          </div>
        </div>

        </div>

        {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}

export default SingleProject
