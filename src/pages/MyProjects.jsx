// Base Imports
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Seo from '../components/Seo'


// Package Imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Imports
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';


const MyProjects = () => {

  // AOS Initialization
  useEffect(() => {
    AOS.init();
  }, []);


  // States & Variables
  const [projects, setProjects] = useState([]);
  const [projectType] = useState('');
  const [year] = useState('');
  const [loading] = useState();
  const navigate = useNavigate();

  // Open Project Function
  const handleOpenProject = (projectId) => {
    window.scrollTo(0,0);
    let path = `/singleproject/${projectId}`;
    navigate(path);
  }

  // Projects Map Data
  // eslint-disable-next-line react/prop-types
  const Projects = ({projects}) => {
      // eslint-disable-next-line react/prop-types
      const mappedProjects = projects.map((project) => {
        const imageUrl = Array.isArray(project.project_images)
      ? project.project_images[0]
      : project.project_images;
        return (
          <div className='project-card' key={project._id} onClick={() => handleOpenProject(project._id)}>
            <img src={imageUrl} className='project-image' alt="first image of the project" loading="lazy"/>
            <div className="project-details">
            <h3> {project.project_name}</h3>
            <h4> {project.project_type}</h4>
            </div>
          </div>
        )
      });

      return (
        <>{mappedProjects}</>
      )
  }

  // Fetching Projects
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


  // Projects Section Component
  const FeaturedSection = () => {
      const featuredProjects = projects.filter((project) => project.is_featured); // Assuming 'is_featured' is a boolean
      return (
        <div className='projects-section' data-aos="fade-up" data-aos-duration="2000">
          <div id="projectGrid">
            {loading ? (
              <p>Loading...</p>
            ) : filteredProjects.length === 0 ? (
              <p className="filter-error-message">No featured projects available.</p>
            ) : (
              <Projects projects={featuredProjects} />
            )}
          </div>
        </div>
      );
  };

  // My Projects Master Return
  return (
    <div className='my-projects'>
      <Seo
          title="My Projects | Caitlin Anderson Portfolio"
          description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
          url="https://caitlinandersondesign.co.nz/"
        />
      <Navbar/>
      <div className="projects-cont">
        <h1 data-aos="fade-up" data-aos-duration="2000">My <span>Projects</span> </h1>
        <FeaturedSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default MyProjects
