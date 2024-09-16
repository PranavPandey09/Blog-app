import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

     // eslint-disable-next-line 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Portfolio</h1>
      </div>
      <div className="nav-center">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
