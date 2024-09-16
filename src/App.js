import React from 'react';
import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        <p>© 2024 Portfolio | All Rights Reserved</p>
      </footer>
      <Link to="navbar" smooth={true} duration={500} className="scroll-up">
        <i className="up-arrow-icon">↑</i>
      </Link>
    </>
  );
};

export default App;
