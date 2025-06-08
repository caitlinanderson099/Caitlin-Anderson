import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID


const ContactSection = () => {

     const [formData, setFormData] = useState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({...formData, [name]: value})
        }

        const handleSubmit = (e) => {
          e.preventDefault();
          emailjs
            .send(
              SERVICE_ID,
              TEMPLATE_ID,
              formData,
              USER_ID
            )
            .then(
              () => {
                toast.success('Message has been sent successfully! Thank you for your message:)')
                setFormData({name: "", email: "", subject: "", message: ""})
              },
              () => {
                toast.error('Failed to send message. Please try again.')
              }
            );
        }

    return (
      <div className="contact-section"  id="contactSection" data-aos="fade-up" data-aos-duration="2000">
        <Toaster position='top-right'/>
            <div className="left-side">
            <img src="/project-img/jewellery-supreme-mockup(3).png" alt="Mockup of jewellery store website" />
            </div>
            <div className="right-side">
            <h2>Let&apos;s Get <span>Connected!</span></h2>
            <p>Feel free to fill out the form below and I will get back to you ASAP</p>

            <form onSubmit={handleSubmit}>

                  <label>Name:</label>
                  <input 
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />

                  <label>Email:</label>
                  <input 
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />

                  <label>Subject:</label>
                  <input 
                    type="text"
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />

                  <label>Message:</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button type='submit'> Send Your Message </button>



                </form>
            </div>
          
      </div>
    )
  }

export default ContactSection;