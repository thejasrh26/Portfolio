import React from 'react';
import { portfolioData } from '../data';
import './Skills.css';

const skillCategories = [
  { key: 'programmingWeb', label: 'Web & Programming',     icon: 'fas fa-code' },
  { key: 'concepts',       label: 'Core Concepts',         icon: 'fas fa-brain' },
  { key: 'toolsPlatforms', label: 'Tools & Platforms',     icon: 'fas fa-tools' },
  { key: 'softSkills',     label: 'Soft Skills',           icon: 'fas fa-users' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I <span>Know</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-header">
                <div className="skill-icon"><i className={cat.icon}></i></div>
                <h3>{cat.label}</h3>
              </div>
              <div className="skill-tags">
                {skills[cat.key].map((tag, j) => (
                  <span className="skill-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
