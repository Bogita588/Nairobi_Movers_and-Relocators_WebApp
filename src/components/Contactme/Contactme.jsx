import React from 'react';
import './contactme.css'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Contactme = () => {
  return (
    <div className="contact-details">
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
       <FaFacebook />
      </a>
      <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
      <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
      </a>
      <a href="tel:+1234567890">
        Phone: +254 (745347544)
      </a>
    </div>
  );
};

export default Contactme;
