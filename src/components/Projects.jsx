import React from 'react';
import { portfolioData } from '../data';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-number">0{i + 1}</div>
              <h3>{proj.title}</h3>
              <div className="tech-stack">
                {proj.technologies.split(',').map((tech, j) => (
                  <span className="tech-tag" key={j}>{tech.trim()}</span>
                ))}
              </div>
              <ul className="project-details">
                {proj.details.map((detail, k) => (
                  <li key={k}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
