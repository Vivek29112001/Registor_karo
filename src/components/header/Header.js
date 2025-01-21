import React from 'react';
import './Header.css';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
      <header className="header">
        <div className="top-row">
          <div className="contact-info">
            <a href="mailto:www.registerkaro.com" className="contact-item">
              <FaEnvelope /> www.registerkaro.com
            </a>
            <a href="tel:+919876543210" className="contact-item">
              <FaPhone /> +91 98765 43210
            </a> 
            <a href="https://www.facebook.com/yourfacebookpage" target="_blank" className="contact-item">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/yourtwitterhandle" target="_blank" className="contact-item">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" className="contact-item">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="bottom-row">
          <div className="logo-and-nav">
            <div className="logo-main">Register Karo</div>
            <nav>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#block">Block</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><button className="talk-expert">Talk An Expert</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
