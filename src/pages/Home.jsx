// Base Imports
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Seo from '../components/Seo'


// Icon Imports
import { Download} from 'react-bootstrap-icons';


// Package Imports
import TypedIntro from '../components/TypedIntro';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

// Component Imports
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Home = () => {

  // AOS Initialization
    useEffect(() => {
      AOS.init();
    }, []);

  // Typed Text Component
  const TypedUpIntro = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 type-text-section">
        <div className="text-center px-4 content" data-aos="fade-up">
          <TypedIntro
            sentences={[
              "A designer passionate about creating beautiful user friendly products.",
              "Feel free to look around and explore:)"

            ]}
            speed={70}
            delayBetween={1200}
            loop={true} // If your component supports this prop
          />
        </div>
      </div>
    );
  };
  
  // About Me Section Component
  const AboutSection = () => {
    const navigate = useNavigate();

    const handleConnect = (e) => {
      e.preventDefault();
      window.scrollTo(top);
      navigate('/get-in-touch');
    }
    return (
      <div className="about-section" data-aos="fade-up" data-aos-duration="2000">
        <div className="about-cont" >
        <div className='left-side'>
          <h2>Nice to <span>Meet</span> You!</h2>
          <h3>My name is Caitlin Anderson</h3>
          <p> I&apos;m a Web & UX Design graduate based in Wellington, New Zealand, with a passion for creating thoughtful, user-friendly digital experiences. I specialize in hospitality and retail design, blending creativity with strategy to craft websites and apps that not only look great but work beautifully.</p>
          <div className="button-cont">
            <button onClick={handleConnect} className='connect-button'>Let&apos;s Connect!</button>
            <a href="/Caitlin_Anderson_CV.pdf" download className="cv-button">
              Download My CV <Download className='download-icon'/>
            </a>          
          </div>
        </div>
          <img src="/self-portrait.png" alt="" />
          <div>
          </div>
        </div>
      </div>
    )
  }

  // Skills Section Component
  const SkillSection = () => {
    return (
      <div className='skill-section' data-aos="fade-up" data-aos-duration="2000">

        <div className="skill-cont">

          <h2>My <span>Work</span> Skills</h2>

          <div className='skill-count-section' data-aos="fade-up" data-aos-duration="2000">

            {/* Skill #1 */}
            <div className="stat-box" >
            <img src="/skill-img/frontend-logo.png" alt="" />
            <h3>Frontend Development</h3>
              <CountUp className='number' end={45} duration={4} enableScrollSpy suffix="%" />
            </div>

            {/* Skill #2 */}
            <div className="stat-box" data-aos="fade-up" data-aos-duration="2000">
            <img src="/skill-img/backend-logo.svg" alt="" />
            <h3>Backend Development</h3>
              <CountUp className='number' end={30} duration={4} enableScrollSpy suffix="%" />
            </div>

            {/* Skill #3 */}
            <div className="stat-box" data-aos="fade-up" data-aos-duration="2000">
            <img src="/skill-img/wordpress-logo.png" alt="" />
            <h3>WordPress</h3>
              <CountUp className='number' end={30} duration={4} enableScrollSpy suffix="%" />
            </div>

            {/* Skill #4 */}
            <div className="stat-box" data-aos="fade-up" data-aos-duration="2000">
            <img src="/skill-img/figma-logo.png" alt="" />
            <h3>Figma</h3>
              <CountUp className='number' end={55} duration={4} enableScrollSpy suffix="%" />
            </div>

            {/* Skill #5 */}
            <div className="stat-box" data-aos="fade-up" data-aos-duration="2000">
            <img src="/skill-img/github-logo.png" alt="" />
            <h3>GitHub</h3>
              <CountUp className='number' end={55} duration={4} enableScrollSpy suffix="%" />
            </div>

            {/* Skill #6 */}
            <div className="stat-box" data-aos="fade-up" data-aos-duration="2000">
              <img src="/skill-img/vscode-logo.png" alt="" />
              <h3>VSCode</h3>
              <CountUp className='number' end={78} duration={4} enableScrollSpy suffix="%" />
            </div>

          </div>
        </div>
      </div>
    )
  }

  // Landing Page Component
  const LandingPage = () => {
    return (
      <>
      <div className='landing-page'>
        <div className='landing-content' data-aos="fade-up" data-aos-duration="3000">
          <div className="landing-text">
            <h1>Welcome!</h1>
            <p>My name is Caitlin and I’m a <span className='landing-span'>UX Designer & Web Developer</span></p>
            <TypedUpIntro/>
          </div>
        </div>
    </div>
    </>
    )
  }

  // Featured Projects Section Component
  const FeaturedSection = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      axios.get('/PROJECTS.json')
        .then(response => {
          const latest = response.data.slice(0, 3);
          setProjects(latest);
        })
        .catch(error => {
          console.error('Error fetching project data:', error);
        });
    }, []);
  
     // Open Project Function
     const handleOpenProject = (projectId) => {
      window.scrollTo(0,0);
      let path = `/singleproject/${projectId}`;
      navigate(path);
    }

    const handleProjects = () => {
      navigate('/my-projects')
    }
  
    return (
      <div className='featured-section' data-aos="fade-up" data-aos-duration="2000">
        <h2 className='section-title'> My <span>Latest</span> Projects</h2>
        <div className="project-cards">
          {projects.map(project => (
            <div className="project-card" key={project._id} onClick={() => handleOpenProject(project._id)}>
              <img src={project.project_images?.[0]} alt={project.title} />
              <div className="project-details">
                <h3>{project.project_name}</h3>
                <h3>{project.project_type} | {project.date}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className='see-all' onClick={handleProjects}>View All Projects</button>
      </div>
    );
  };
  


  // Home Page Master Return
  return (
    <>
      <div className='home' id='home'>
        <Seo 
          title="Home | Caitlin Anderson Portfolio"
          description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
        />
        <Navbar/>
        <LandingPage/>
        <SkillSection/>
        <AboutSection/>
        <FeaturedSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </>
  );
}

export default Home