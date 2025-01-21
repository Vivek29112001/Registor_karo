import React from 'react';
import Card from '../Card/card.js';
import { FaBuilding, FaChartLine, FaAddressCard, FaCogs, FaShoppingCart, FaBook } from 'react-icons/fa';
import './service.css';

const Services = () => {
  const servicesData = [
    { icon: <FaBuilding />, title: 'Company Formation', description: 'Build web-based solutions that enhance customer experience.' },
    { icon: <FaChartLine />, title: 'Company Secretarial Services', description: 'Make data-driven decisions and utilize technology to reach business goals.' },
    { icon: <FaAddressCard />, title: 'Virtual Office Address', description: 'Foster customer relationships by effectively serving your market.' },
    { icon: <FaCogs />, title: 'Annual Compliance Services', description: 'Turn your ideas into modern products with our design experts.' },
    { icon: <FaShoppingCart />, title: 'Payroll Services', description: 'Expand your business across the globe with minimal effort.' },
    { icon: <FaBook />, title: 'Bookkeeping Services', description: 'Steering user behaviours with creative design, data insights & technology.' },
  ];

  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <Card key={index} {...service} />
      ))}
      <div className="button-container">
         <button className="see-all-services">See All Services</button> 
      </div>
    </div>
  );
};

export default Services;
