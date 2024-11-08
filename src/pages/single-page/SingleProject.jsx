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
                  <img src={image} alt={`${project.project_name} ${index + 1}`} />
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
            </>
          )}
        </div>
        </div>
    </div>
  )
}

export default SingleProject
