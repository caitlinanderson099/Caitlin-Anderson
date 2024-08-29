import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ArrowLeft } from 'react-bootstrap-icons';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('./PROJECTS.json')
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const handleClearFilters = () => {
    setProjectType('');
    setYear('');
  }

  const filteredProjects = projects.filter(project => {
    return (
      (projectType === '' || project.project_type === projectType) &&
      (year === '' || project.date === year)
    );
  });

  const handleNavigate = (projectId) => {
    let path = `/singleproject/${projectId}`;
    navigate(path);
  }

  const ProjectCard = ({ projects }) => {
    const mappedProjects = projects.map((project, index) => {
      const firstImage = Array.isArray(project.project_images) ? project.project_images[0] : project.project_images;
  
      return (
        <div key={index} className='project-card' onClick={() => handleNavigate(project._id)}>
          <img src={firstImage} alt='project image' className='project-image'/>
          <div className='project-card-details'>
            <h2>{project.project_name}</h2>
            <h3>{project.project_type} | {project.date}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      );
    });
  
    return (
      <>
        {mappedProjects}
      </>
    );
  }
  
  return (
    <div id='projects-page'>
        <h1>Take a Look At My Projects</h1>


      <div id='projectCont'>
        <ProjectCard projects={filteredProjects} />
      </div>

    </div>
  )
}

export default Projects