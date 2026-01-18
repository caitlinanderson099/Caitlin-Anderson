/* eslint-disable react/prop-types */
// Base Imports
import { useState, useEffect } from "react";
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

  // States
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');
  const [loading] = useState(false);
  const navigate = useNavigate();

  // Open Project
  const handleOpenProject = (projectId) => {
    window.scrollTo(0, 0);
    let path = `/singleproject/${projectId}`;
    navigate(path);
  };

  // Render Project Cards
  const Projects = ({ projects }) => {
    const mappedProjects = projects.map((project) => {
      const imageUrl = Array.isArray(project.project_images)
        ? project.project_images[0]
        : project.project_images;

      return (
        <div
          className='project-card'
          key={project._id}
          onClick={() => handleOpenProject(project._id)}
        >
          {project.is_favourite && (
            <div className="favourite-badge">
              <span className="icon">❤️</span>
              <span className="label">Creator&apos;s Favourite</span>
            </div>
          )}
          <img
            src={imageUrl}
            className='project-image'
            alt="first image of the project"
            loading="lazy"
          />
          <div className="project-details">
            <h3>{project.project_name}</h3>
            <h4>{project.project_type}</h4>
          </div>
        </div>
      );
    });

    return <>{mappedProjects}</>;
  };

  // Fetch Projects
  useEffect(() => {
    axios.get('/PROJECTS.json')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  // Filter Logic
  const getFilteredProjects = () => {
    switch (filter) {
      case "Web Design / UX Design":
        return projects.filter(p => p.project_type.includes("Web Design") || p.project_type.includes("UX Design"));
      case "Graphic Design":
        return projects.filter(p => p.project_type.includes("Graphic Design"));
      case "Branding & Identity Design":
        return projects.filter(p => p.project_type.includes("Branding & Identity Design"));
      case "Creator's Favourite":
        return projects.filter(p => p.is_favourite);
      case "All":
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  // Filter Buttons
  const FilterBar = () => (
  <div className="project-filter-wrapper">
    {/* Dropdown for mobile */}
    <div className="filter-dropdown">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {["All", "Web Design / UX Design", "Graphic Design", "Branding & Identity Design", "Creator's Favourite"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    {/* Buttons for desktop */}
    <div className="project-filter-bar">
      {["All", "Web Design / UX Design", "Graphic Design", "Branding & Identity Design", "Creator's Favourite"].map((category) => (
        <button
          key={category}
          className={`filter-btn ${filter === category ? 'active' : ''}`}
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

  // Section
  const FeaturedSection = () => {
    return (
      <div className='projects-section' data-aos="fade-up" data-aos-duration="2000">
        <FilterBar />
        <div id="projectGrid">
          {loading ? (
            <p>Loading...</p>
          ) : filteredProjects.length === 0 ? (
            <p className="filter-error-message">No projects available for this category.</p>
          ) : (
            <Projects projects={filteredProjects} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='my-projects'>
      <Seo
        title="My Projects | Caitlin Anderson Design NZ"
        description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
        url="https://caitlin-anderson-design.vercel.app/"
      />
      <Navbar />
      <div className="projects-cont">
        <h1 data-aos="fade-up" data-aos-duration="2000">My Projects</h1>
        <FeaturedSection />
      </div>
      <Footer />
    </div>
  );
};

export default MyProjects;
