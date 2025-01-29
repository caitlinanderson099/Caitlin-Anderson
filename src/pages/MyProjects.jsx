import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Instagram, Linkedin } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

const MyProjects = () => {

  // AOS Initialization
  useEffect(() => {
    AOS.init();
  }, []);

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

    // States & Variables
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
              <h4> {project.project_type}</h4>
              <div className="project-open">
                <a onClick={() => handleOpenProject(project._id)}>Open Project!</a>
              </div>
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


    // Projects Section Component
    const FeaturedSection = () => {
        const featuredProjects = projects.filter((project) => project.is_featured); // Assuming 'is_featured' is a boolean
        return (
          <div className='featured-section'>
            <div id="projectGrid">
              {loading ? (
                <p>Loading...</p>
              ) : featuredProjects.length === 0 ? (
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
            <Navbar/>
            <h1 data-aos="fade-up" data-aos-duration="2000">My Projects</h1>
            <div className="project-page-content" data-aos="fade-up" data-aos-duration="2000">
            <FeaturedSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default MyProjects
