import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Your logo or branding */}
          <h2>Company Logo</h2>
        </div>
        <div className="footer-links">
         
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./about">About</a></li>
            <li><a href="../services">Services</a></li>
            <li><a href=".../contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
        <a href="" target="blank"><FaFacebook /></a>
        <a href="https://twitter.com/BrianBogita" target="blank"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/bogita-brian-41b9b21a0/" target="blank"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-bottom">
        
        <p>&copy; 2023 Bogita Relocators. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
