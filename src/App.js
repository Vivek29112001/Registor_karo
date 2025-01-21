import React from 'react';
import Header from './components/header/Header.js';
import HeroSection from './components/heroSection/HeroSection.js';
import Services from './components/Services/Services';
import About from './components/About/About.js';
import './App.css' ;
import Choose from './components/Choose/choose.js';
import Footer from './components/Footer/Footer.js';
// import client from './components/client/client.js';
import Client from './components/client/client.js';
import BlogLayout from './components/Blog/bloglayput.js';
import Feedback from './components/feedback/feedback.js';
import TrustSection from './components/TrustSection/TrustSection.js';
import Industry from './components/Industry/industry.js';
import Manage from './components/ManageService/Manage.js';
const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TrustSection/>
      <Services />
      <About/>
      <Choose/>
      <Client />
      <BlogLayout/>
      <Feedback/>
      <Manage/>
      <Industry/>
      <Footer />
    </div>
  );
};

export default App;
