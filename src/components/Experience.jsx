import React from 'react';
import { portfolioData } from '../data';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My <span>Journey</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <ul className="achievement-list">
                  {exp.achievements.map((ach, j) => (
                    <li key={j}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
