import React from 'react';
import { Fade } from 'react-reveal';
import './About.css';
import aboutImage from '../assets/about.jpg';  // Ensure the image path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <Fade left>
          <h1>About Me</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I am a Full Stack Developer with experience in both frontend and backend technologies.
            I have worked on numerous projects, focusing on building scalable and efficient web
            applications using modern frameworks and tools.
          </p>
        </Fade>
      </div>
      <div className="about-right">
        <Fade right>
          <img src={aboutImage} alt="About" className="about-image" />
        </Fade>
      </div>
    </section>
  );
};

export default About;
