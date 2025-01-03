import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// Swiper Installs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// Optional Swiper modules
import { Pagination, Navigation } from 'swiper';

import Navbar from '../../components/navbar/Navbar';

const SingleProject = () => {
  
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate(); 
  const [modalImage, setModalImage] = useState(null); 

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
      <div className='single-project-details'>
        <div className='single-project-left'>

        <button onClick={() => handleBack()}> Back </button>

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

        </div>

        <div className="single-project-right">
        <h1>{project.project_name}</h1>
          <h2>{project.project_type} | {project.date}</h2>
          <p> {project.extended_description} </p>

          {project.link && (
            <>
              <h2> Project Link: </h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
              <a href={project.backend_link} target="_blank" rel="noopener noreferrer">{project.backend_link}</a>
              <a href={project.frontend_link} target="_blank" rel="noopener noreferrer">{project.frontend_link}</a>
            </>
          )}
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
    </div>
  )
}

export default SingleProject
