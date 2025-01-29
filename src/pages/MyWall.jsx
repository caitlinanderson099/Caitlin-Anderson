import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Behance, EnvelopeFill, Github, Instagram, Linkedin, PinMapFill } from 'react-bootstrap-icons';


const MyWall = () => {

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

  const [blogs, setBlogs] = useState([]);

  // Blog Post Data from JSON
  const Blogs = ({ blogs }) => {

    return blogs.map((blog) => {
      const imageUrl = blog.blog_image;

      return (
        <div className="blog-card" key={blog._id}>
          
          <div className='blog-rank'>
            <h2>{blog.rank}</h2>
          </div>

          <img
            src={imageUrl}
            className="blog-image"
            alt={`Image for ${blog.title}`}
          />
          <div className="blog-details">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>

          <div className='blog-date'>
            <p>{blog.date}</p>
          </div>
        </div>
      );
    });
  };

  // UseEffect for Blog Post Data
  useEffect(() => {
    axios
      .get('/POSTS.json') // Adjust path if necessary
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error('Expected an array, got:', response.data);
        }
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);


  // My Wall Master Return
  return (

    <div className='my-wall'>
        <Navbar/>
        <h1 data-aos="fade-up" data-aos-duration="2000">My Wall</h1>

        {/* page content */}
        <div className='wall-content' data-aos="fade-up" data-aos-duration="2000">

          {/* about myself section */}
          <div className='about-me'>
          <img src="/portfolio-pfp.jpeg" alt="pfp" />

          <div className='about-details'>
            <h2>Caitlin Anderson</h2>
            <h3> Web Designer & Developer </h3>
            <h4> <PinMapFill/>  Wellington, New Zealand</h4>
            <p>
              Hi, I'm Caitlin! I'm a passionate coder and designer with a knack for creating engaging and user-friendly websites and apps
            </p>
            <p>
            I am a very organised person and love to show that with my work. In my spare time, I enjoy collecting and building Lego Sets, curling up with a good book, and going on adventures with friends. Hope you enjoy having a looksie through my works:)
            </p>

            <div className='skill-list'>
              <div className='skill'>HTML</div>
              <div className='skill'>CSS/ SASS</div>
              <div className='skill'>JavaScript/ Jquery</div>
              <div className='skill'>React</div>
              <div className='skill'>Databases</div>
              <div className='skill'>Node.js</div>
              <div className='skill'>Wordpress</div>
              <div className='skill'>Figma</div>
              <div className='skill'>Adaptability</div>
              <div className='skill'>Team Work</div>
            </div>

            <div className='icon-cont'>
              <a href="https://www.linkedin.com/in/caitlin-anderson-75bb16270/" target='_blank'><Linkedin/></a>
              <a href="mailto:caitlinanderson099@gmail.com" target='_blank'><EnvelopeFill/></a>
              <a href="https://www.behance.net/caitlinanderson099/projects" target='_blank'><Behance/></a>
              <a href="https://www.instagram.com/caitlinanderson099/#"  target='_blank'><Instagram/></a>
              <a href="https://github.com/caitlinanderson099" target='_blank'><Github/></a>
            </div>

            </div>
          </div>

          {/* blog post container */}
          <div className='blog-container'>
            <Blogs blogs={blogs} />
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default MyWall
