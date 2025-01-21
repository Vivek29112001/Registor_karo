import './client.css';
import { FaFileAlt, FaCreditCard, FaUserTie, FaEnvelopeOpen, FaArrowRight } from 'react-icons/fa';

const clients = [
  { src: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png', alt: 'Logo 1' },
  { src: 'https://morpheusdata.com/wp-content/uploads/2020/04/morpheus-logo-v2.svg', alt: 'Logo 2' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png', alt: 'Logo 3' },
  { src: 'https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo-640x360.png', alt: 'Logo 4' },
  { src: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png', alt: 'Logo 5' },
  { src: 'https://morpheusdata.com/wp-content/uploads/2020/04/morpheus-logo-v2.svg', alt: 'Logo 6' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png', alt: 'Logo 7' },
  { src: 'https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo-640x360.png', alt: 'Logo 8' },
];

const steps = [
  { icon: <FaFileAlt />, text: 'Fill up Application Form' },
  { icon: <FaCreditCard />, text: 'Make Online Payment' },
  { icon: <FaUserTie />, text: 'Executive will Process Application' },
  { icon: <FaEnvelopeOpen />, text: 'Get Confirm Mail' },
];

const Client = () => {
  return (
    <div className="Client">
      <section className="clients-section">
        <h2>Our Happy Clients</h2>
        <p>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
        <div className="clients-logos">
          {clients.map((client, index) => (
            <img key={index} src={client.src} alt={client.alt} className="client-logo" />
          ))}
        </div>
        <a href="#more" className="show-more1">Show more
          <FaArrowRight className="arrow-icon" /> 
        </a>
      </section>
      <section className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Client;
