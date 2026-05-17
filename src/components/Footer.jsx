import React from 'react';
import { portfolioData } from '../data';
import './Footer.css';

const Footer = () => {
  const { name, linkedin, github, email } = portfolioData.personalInfo;

  const socials = [
    { icon: 'fab fa-linkedin-in', href: `https://${linkedin}`, label: 'LinkedIn' },
    { icon: 'fab fa-github',      href: `https://${github}`,   label: 'GitHub' },
    { icon: 'fas fa-envelope',    href: `mailto:${email}`,     label: 'Email' },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <h2>{name}</h2>
            <p>Full Stack Developer &amp; IoT Engineer</p>
          </div>

          {/* Socials */}
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn" aria-label={s.label}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <span>{name}</span>. Crafted with <span>♥</span> in Bangalore.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
