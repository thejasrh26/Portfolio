import React from 'react';
import { portfolioData } from '../data';
import './Hero.css';

const Hero = () => {
  const { name, role, email, summary } = portfolioData.personalInfo;

  return (
    <section id="home" className="hero-section">
      {/* Decorative particles */}
      <div className="hero-decorations">
        <div className="decor dash-1"></div>
        <div className="decor dash-2"></div>
        <div className="decor dash-3"></div>
        <div className="decor circle-1"></div>
        <div className="decor circle-2"></div>
        <div className="decor dot-1"></div>
        <div className="decor dot-2"></div>
      </div>

      <div className="container hero-container">
        {/* LEFT — content */}
        <div className="hero-content">
          {/* Status badge */}
          <div className="hero-status">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Hello, I'm
            <span className="name-highlight">{name}</span>
          </h1>

          {/* Role tags */}
          <div className="hero-roles">
            <span className="role-tag"><i className="fas fa-code"></i> Full Stack Developer</span>
            <span className="role-tag"><i className="fas fa-microchip"></i> IoT &amp; Embedded Systems</span>
          </div>

          {/* Summary */}
          <p className="hero-subtitle">{summary}</p>

          {/* CTAs */}
          <div className="hero-cta">
            <a href={`mailto:${email}`} className="email-box">
              <div className="email-icon"><i className="fas fa-envelope"></i></div>
              <span>{email}</span>
            </a>
            <a href="#footer" className="btn btn-primary">
              Connect With Me
            </a>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="hero-image-wrapper">
          <img
            src="/profile-nobg.png"
            alt={name}
            className="hero-profile-img"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-line"></span>
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
