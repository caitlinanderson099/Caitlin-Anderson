import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'react-bootstrap-icons';

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook

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

  return (
    <div className="single-project">
      <button onClick={() => navigate(-1)} className='back-btn'><ArrowLeft /> Back</button>
      <div className='single-project-details'>
        <div className='single-project-left'>
          <h1>{project.project_name}</h1>
          <h3>{project.project_type} | {project.date}</h3>
          <p>{project.extended_description}</p>
          <h3> Skills / Technologies Used: </h3>
          <div className='skills-cont'>
            {project.skills_used && project.skills_used.map((image, index) => (            
              <img key={index} src={image} alt={`project skill ${index + 1}`} className='project-skill' />
            ))}
          </div>
          {project.link && (
            <>
              <h3> Vercel Link: </h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            </>
          )}
        </div>

        <div className='images-grid single-project-right'>
          {project.project_images && project.project_images.map((image, index) => (            
            <img key={index} src={image} alt={`project image ${index + 1}`} className='project-image' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
