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
          title="Get in Touch | DsgnByCait NZ"
          description="Explore the portfolio of Caitlin Anderson, a UX Designer & Web Developer based in Wellington, NZ. View featured projects and learn more about her skills."
          url="https://caitlin-anderson-design.vercel.app/"
        />
        <Navbar/>
        <div className='service-content' data-aos="fade-up" data-aos-duration="2000">
            <h1> My Services</h1>

            <div className='service-details'>
                <p>You can find me on any of my socials or feel free to fill out an enquiry form down below!</p>
            </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Services
