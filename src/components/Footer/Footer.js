import React from 'react';
import { FaFacebook, FaGoogle, FaApple, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
          <div className="social-icons">
            <FaFacebook />
            <FaGoogle />
            <FaApple />
            <FaInstagram />
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h3>START A BUSINESS</h3>
            <ul>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>GOVERNMENT REGISTRATION</h3>
            <ul>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>COMPLIANCE & TAX</h3>
            <ul>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>BIS & CDSCO</h3>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
        <div className="up-arrow">
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
