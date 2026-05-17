import React from 'react';
import { portfolioData } from '../data';
import './Education.css';

const Education = () => {
  const { education, certifications, achievements } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic <span>Background</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="education-grid">
          {/* Left — Education */}
          <div>
            <div className="edu-column-title">
              <i className="fas fa-graduation-cap"></i> Education
            </div>
            {education.map((edu, i) => (
              <div className="edu-card" key={i}>
                <span className="edu-date-badge">{edu.duration}</span>
                <h4>{edu.degree}</h4>
                <h5>{edu.institution}</h5>
                <span className="edu-score">{edu.score}</span>
              </div>
            ))}
          </div>

          {/* Right — Certs & Achievements */}
          <div>
            <div className="edu-column-title">
              <i className="fas fa-trophy"></i> Certifications & Achievements
            </div>
            <div className="list-panel">
              <h4><i className="fas fa-certificate" style={{ marginRight: '0.5rem' }}></i>Certifications</h4>
              <ul>
                {certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="list-panel">
              <h4><i className="fas fa-medal" style={{ marginRight: '0.5rem' }}></i>Achievements</h4>
              <ul>
                {achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
