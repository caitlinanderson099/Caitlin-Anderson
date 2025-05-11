// Base Imports
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Component Imports
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Package Imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Pagination, Navigation } from 'swiper';



const SingleProject = () => {

    // AOS Initialization
    useEffect(() => {
      AOS.init();
    }, []);
  
    // States & Variables
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate(); 
    const [modalImage, setModalImage] = useState(null); 

  // Fetching The Specific Project
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

  // Opening & Closing Project Image Modal
  const openModal = (image) => {
    setModalImage(image);
  };
  const closeModal = () => {
    setModalImage(null);
  };

  // Project Loading State
  if (!project) {
    return <div>Loading...</div>;
  }

  // Back Button Function
  const handleBack = () => {
    navigate(-1);
  }
  
  // MASTER RETURN
  return (
    <div className='single-page'>
      <Navbar/> 
      {/* Single Page Details */}
      <div className='single-project-details'>
        <div className='back-title' data-aos="fade-up" data-aos-duration="2000">
          <a className='back-btn' onClick={() => handleBack()}> Back </a>
          <h1>{project.project_name}</h1>
        </div>

        <div className='single-project-card' data-aos="fade-up" data-aos-duration="2000">
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
          <div className='project-desc' dangerouslySetInnerHTML={{ __html: project.extended_description }}/>
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
          <div className='disclaimer' dangerouslySetInnerHTML={{ __html: project.disclaimer}}/>
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

export default SingleProject;