import React from 'react';
import { portfolioData } from '../data';
import './About.css';

const About = () => {
  const { summary, phone, email, location, linkedin, github } = portfolioData.personalInfo;

  const contactItems = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: location },
    { icon: 'fas fa-phone',          label: 'Phone',    value: phone },
    { icon: 'fas fa-envelope',       label: 'Email',    value: email },
    { icon: 'fab fa-linkedin-in',    label: 'LinkedIn', value: linkedin },
    { icon: 'fab fa-github',         label: 'GitHub',   value: github },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-grid">
          {/* Left */}
          <div className="about-text-block">
            <h3>ECE Graduate &amp; Developer</h3>
            <p>{summary}</p>
            <div className="about-links">
              <a href={`https://${linkedin}`} target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
              <a href={`https://${github}`} target="_blank" rel="noreferrer" className="btn btn-outline">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="contact-cards">
            {contactItems.map((item, i) => (
              <div className="contact-card" key={i}>
                <div className="contact-card-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-card-info">
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
