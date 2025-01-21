import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import './Manage.css';

function Manage() {
  return (
    <div className="Manage">
      <header className="Manage-header">
        <div className="top-section">
          <div className="text-content">
            <h1>Manage Your Services by your Mobile Phone</h1>
            <p className="down">Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.</p>
            <div className="download-buttons">
              <a href="https://www.apple.com/app-store/" className="app-store">
              <FaGooglePlay size={20} style={{ marginRight: '8px' }} />Get on App Store</a>
              <a href="https://play.google.com/store" className="google-play">
                <FaGooglePlay size={20} style={{ marginRight: '8px' }} /> Get on Google Play
              </a>
            </div>
          </div>
          <div className="phone-images">
            <img src="phone.png" alt="Phone with RegisterKaro app" />
            <img src="phone.png" alt="Phone with RegisterKaro app" />
          </div>
        </div>
      </header>
      <section className="numbers-section">
        <h2 className="orange-h2">WHY REGISTER KARO</h2>
        <h3 className="h3-o">Some Numbers are important</h3>
        <div className="numbers">
          <div className="number-item">
            <h4>1M+</h4>
            <p>CUSTOMERS</p>
          </div>
          <div className="number-item">
            <h4>12+</h4>
            <p>YEARS OF EXCELLENCE</p>
          </div>
          <div className="number-item">
            <h4>41+</h4>
            <p>R&D ENGINEERS</p>
          </div>
          <div className="number-item">
            <h4>78+</h4>
            <p>COUNTRIES</p>
          </div>
          <div className="number-item">
            <h4>3287+</h4>
            <p>PARTNERS</p>
          </div>
          <div className="number-item">
            <h4>41+</h4>
            <p>AWARDS RECEIVED</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Manage;
