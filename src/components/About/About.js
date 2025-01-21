import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import { FaBuilding, FaChartLine, FaAddressCard } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h3 className="h3">WELCOME TO REGISTORKRO.IN</h3>
      <header>
        <h1 className="h1">About <span className="span">Register Karo</span></h1>
      </header>
      <section className="about-section">
        <div className="about-content">
          <div className="text-container">
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit quidem quod quam hic nobis doloremque voluptatum ullam numquam pariatur adipisci cupiditate vero similique voluptas veritatis aliquid in, ipsam enim ad! Minus perspiciatis laborum dicta consequuntur adipisci molestiae voluptas ipsum optio nam, voluptates, ut assumenda neque totam harum temporibus atque in ab facilis? Temporibus voluptatum iste magni recusandae, enim quasi sint dicta asperiores repudiandae quas eligendi voluptate provident. Corporis natus corrupti, quae aperiam labore est, aut nam cumque dolorum voluptates itaque quos! Nisi animi repellendus nihil aliquam reiciendis temporibus quidem atque ea recusandae odio voluptates reprehenderit labore nemo, itaque, ratione magni, dolorum vel similique! Distinctio explicabo a placeat laudantium eos perspiciatis. Eaque, provident et neque saepe voluptas est quis quae assumenda omnis molestiae illum, dolorum veritatis quia ut unde numquam voluptatem quas culpa sit consectetur quos sequi. Officia corporis maxime est inventore deleniti placeat possimus eligendi corrupti, ipsa dolores dolor porro consequuntur et? Quae ea non dolorum nobis similique nam iusto fugit consequatur hic obcaecati, accusamus illo inventore dolor quidem cum aut! Voluptatem amet repellendus placeat repellat corrupti, incidunt nam aliquam sint labore modi atque beatae quod qui, sunt numquam accusantium quo magni ratione dolorum voluptatibus reiciendis dolorem! Autem consectetur excepturi pariatur accusantium id nostrum possimus est eos. Ipsa quam reprehenderit velit, magni accusamus voluptate eum tempore voluptatum veniam voluptas alias placeat vitae maiores ad necessitatibus ipsum fuga magnam? Dolore dignissimos sunt, dolorem fugit quae nulla quam omnis enim debitis exercitationem, aliquid ipsa reprehenderit repellat. Commodi odit quas sit rerum.</p>
            <a href="#" className="learn-more">
                  Learn more <FaArrowCircleRight className="arrow-icon" />
            </a>
          </div>
          <div className="image-container">
            <img src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?t=st=1737393530~exp=1737397130~hmac=1ee003e1f4df3cbada5aa6bd59e4294f6040e1d37042ba4f65ce3f3a2721c64e&w=996" alt="About Us" className="about-image"/>
          </div>
        </div>
        

      </section>
    </div>
  );
};

export default About;