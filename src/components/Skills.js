import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMongodb, SiExpress, SiPython } from 'react-icons/si';
import Fade from 'react-reveal/Fade';

const skills = [
  { name: 'C', percentage: '80%', icon: <SiC /> },
  { name: 'C++', percentage: '85%', icon: <SiCplusplus /> },
  { name: 'HTML', percentage: '90%', icon: <FaHtml5 /> },
  { name: 'CSS', percentage: '85%', icon: <FaCss3Alt /> },
  { name: 'JavaScript', percentage: '80%', icon: <FaJs /> },
  { name: 'ReactJS', percentage: '75%', icon: <FaReact /> },
  { name: 'NodeJS', percentage: '70%', icon: <FaNodeJs /> },
  { name: 'ExpressJS', percentage: '65%', icon: <SiExpress /> },
  { name: 'MongoDB', percentage: '70%', icon: <SiMongodb /> },
  { name: 'Python', percentage: '85%', icon: <SiPython /> }
];

const MySkills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Fade bottom key={index}>
            <div className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-percentage" style={{ width: skill.percentage }}></div>
                </div>
                <p>{skill.percentage}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
