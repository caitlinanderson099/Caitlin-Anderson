import axios from 'axios'
import { TelephoneFill } from 'react-bootstrap-icons'
import { EnvelopeAtFill } from 'react-bootstrap-icons'
import { Linkedin } from 'react-bootstrap-icons'
import { Github } from 'react-bootstrap-icons'
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './home.scss'

const Home = () => {

const [projects, setProjects] = useState([]);
  const [projectType, setProjectType] = useState('');
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

  const filteredProjects = projects.filter(project => {
    return (
      (projectType === '' || project.project_type === projectType));
  });

  const featuredProjects = projects.filter(project => project.is_featured);

  const handleNavigate = (projectId) => {
    let path = `/singleproject/${projectId}`;
    navigate(path);
  }


  // Component to display each project card
  const ProjectCard = ({ projects }) => {
    return projects.map((project, index) => {
      const firstImage = Array.isArray(project.project_images) ? project.project_images[0] : project.project_images;
  
      return (
        <div key={index} className='project-card' onClick={() => handleNavigate(project._id)}>
          <img src={firstImage} alt='project image' className='project-image'/>
          <div className='project-card-details'>
            <h2>{project.project_name}</h2>
            <h3>{project.project_type} </h3>
            <p>{project.description}</p>
          </div>
        </div>
      );
    });
  }



  return (
    <div className='home'>
        <div className='home-top'>
            <div className='left-side'>
                <img src="/Image (1).jpeg" alt="photo placeholder" />
            </div>

            <div className='right-side'>
                <div className='info-cont'>
                    <h2 id='name-heading'> Hey there, my name is Caitlin! </h2>
                    <h3> Digital Design Student at Yoobee Colleges Wgtn </h3>
                    <p> I am very passionate about digital design, specifically web and UX design, creating projects that engage and excite others. I am a very organised person and love to show that with my work. In my spare time, I enjoy collecting and building Lego Sets, curling up with a good book, and going on adventures with friends. Hope you enjoy having a looksie through my works:) </p>

                    <h3> Soft Skills </h3>
                    <p> Time Management | Team Work & Communication | Problem Solving & Critical Thinking | Resilience & Adaptability </p>

                    <h3> Technical Skills </h3>
                    <p> HTML & CSS/SASS | Javascript & jQuery | React & Vite | VSCode | GitHub & Vercel | Adobe Creative Suite | Figma Prototyping </p>
                </div>
                
            </div>
        </div>

        <hr></hr>

        <div className='home-bottom'>
        <h2> Featured Projects </h2>
            <div className='featured'>
            <ProjectCard projects={featuredProjects} />
            </div>
        </div>      
    </div>
  )
}

export default Home
