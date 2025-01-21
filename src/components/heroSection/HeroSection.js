import React from 'react';
import { FaStar, FaUsers, FaHandHoldingUsd, FaYoutube } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h1>Your Trusted Partner <br />for Compliance Business Needs</h1>
        <p className="pag">An online business compliance platform that helps entrepreneurs and other individuals with various registrations, tax filings, and other legal matters.</p>
        <div className="stats">
          <div className="stat">
            <FaStar size={30} color="#FFD700" />
            <span>4.5+</span>
            <p>Customer Rating</p>
          </div>
          <div className="stat">
            <FaUsers size={30} color="#007bff" />
            <span>20,000+</span>
            <p>Clients</p>
          </div>
          <div className="stat">
            <FaHandHoldingUsd size={30} color="#28a745" />
            <span>99.8%</span>
            <p>Financial Stability</p>
          </div>
        </div>
        <div className="button-group">
          <button className="talk-expert">Talk An Expert</button>
          <button className="see-how"><FaYoutube className="FaYoutube" /> See How It Works</button>
        </div>
      </div>
      <div className="side-buttons">
        <button>Annual Compliance</button>
        <button>Payroll Services</button>
        <button>Company Formation</button>
        <button>Annual Compliance</button>
      </div>
      
    </section>
  );
};

export default HeroSection;
