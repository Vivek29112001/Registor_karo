import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import './card.css';

const Card = ({ icon, title, description }) => (
  <div className="card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="learn-more" id="learn-more">
      Learn more <FaArrowCircleRight className="arrow-icon" />
    </a>
  </div>
);

export default Card;
