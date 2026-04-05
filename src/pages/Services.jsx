// Base Imports
import { useEffect } from 'react';
import { useState } from 'react';
import Seo from '../components/Seo'


// Component Imports
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


// Package Imports
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    // AOS Initialization
    useEffect(() => {
          AOS.init();
    }, []);


  // MASTER RETURN
  return (
    <div className='service-page'>
        <Seo 
          title="My Services | DsgnByCait NZ"
          description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
          url="https://caitlin-anderson-design.vercel.app/"
        />
        <Navbar/>
        <div className='service-content' data-aos="fade-up" data-aos-duration="2000">

            <div className="my-services-cont">
                          <h1> My Services (WIP!)</h1>
                          <h3>Feel free to get in touch with me <span>here</span> to book a service</h3>

 <div className="service-list-cont">

              <div className="service-list-item">
                <h2>Standard Graphic Design Package (EXAMPLE)</h2>
                <ul>
                  <li>Logo</li>
                  <li>Colour Palette & Moodboards</li>
                  <li>2 Business Cards</li>
                </ul>
              </div>

              <div className="service-list-item">
                <h2>Standard Website Design Package (EXAMPLE)</h2>
                <ul>
                  <li>Logo</li>
                  <li>Colour Palette & Moodboards</li>
                  <li>2 Prototyped Designs</li>
                  <li>5 Mockups</li>
                </ul>
              </div>

              <div className="service-list-item">
                <h2>Premium Graphic Design Package (EXAMPLE)</h2>
                <ul>
                  <li>Logo</li>
                  <li>Colour Palette & Moodboards</li>
                  <li>5 Social Media mockups</li>
                  <li>2 Business Cards</li>
                </ul>
              </div>

              <div className="service-list-item">
                <h2>Premium Website Design Package (EXAMPLE)</h2>
                <ul>
                  <li>Logo</li>
                  <li>Colour Palette & Moodboards</li>
                  <li>3 Prototyped Designs</li>
                  <li>5 Mockups</li>
                  <li>Coded Public Website</li>
                  <li>Hosting Options</li>
                </ul>
              </div>
             
             
            </div>
            </div>

        </div>

      <Footer/>
    </div>
  )
}

export default Services
