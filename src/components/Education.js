import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1>My Education</h1>
      <div className="education-container">
        <div className="education-box">
          <h3>Graduation</h3>
          <p><strong>Bachelor of Technology</strong></p>
          <p>Branch: Computer Science Engineering</p>
          <p>CGPA: 8.47</p>
          <p>Passout Year: 2023</p>
          <p>College: IPS Academy Indore</p>
          <p>University: RGPV Bhopal</p>
        </div>

        <div className="education-box">
          <h3>12th Standard</h3>
          <p><strong>Stream: PCM</strong></p>
          <p>Percentage: 84%</p>
          <p>Passout Year: 2019</p>
          <p>School: Joy Academy Shujalpur</p>
        </div>

        <div className="education-box">
          <h3>10th Standard</h3>
          <p><strong>General</strong></p>
          <p>Percentage: 70%</p>
          <p>Passout Year: 2017</p>
          <p>School: Joy Academy Shujalpur</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
