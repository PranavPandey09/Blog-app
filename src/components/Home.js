import React from 'react';
import { Fade } from 'react-reveal';
import './Home.css';
import profileImage from '../assets/profile.jpg';  // Ensure this path is correct

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <Fade left>
          <img src={profileImage} alt="Profile" className="home-image" />
        </Fade>
      </div>
      <div className="home-right">
        <Fade right>
          <h1>Hello, I'm</h1>
          <h2>Pranav Pandey</h2>
          <p>A Full Stack Developer is a professional responsible for working on both frontend and backend development process. They desgin, develop, and maintian fully-fledged and functioning platforms with databases or servers.</p>
          {/* <p>I have expertise in HTML, CSS, JavaScript, and ReactJS.</p> */}
        </Fade>
      </div>
    </section>
  );
};

export default Home;
