import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h1>My Latest Projects</h1>
      <div className="projects-container">
        <div className="project-box">
          <h3>E-commerce website using Mern Stack</h3>
          <p>Project Description: Developed a fully functional and responsive e-commerce website using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The website allows users to browse products, add items to a cart, and proceed through the checkout process, offering a seamless shopping experience.</p>
        </div>
        <div className="project-box">
          <h3> Registration Form using MERN Stack</h3>
          <p>Project Description: Developed a fully functional registration form using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Integrated form validation on both the frontend and backend to ensure data integrity. Used React.js to build a responsive and dynamic UI, with Node.js and Express.js handling the server-side logic. Connected the application to MongoDB for secure user data storage. Implemented authentication and password encryption for enhanced security.</p>
        </div>
        <div className="project-box">
          <h3>Email OTP Validation System with Firebase</h3>
          <p>Project Description: Developed and implemented a secure email-based OTP (One-Time Password) validation system using Firebase Authentication. The system validates users' email addresses during account registration and password recovery processes by sending an OTP to their registered email, which must be verified before further access is granted.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
