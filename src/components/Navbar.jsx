import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { linkedin, github } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About',     href: '#about' },
    { name: 'Experience',href: '#experience' },
    { name: 'Projects',  href: '#projects' },
    { name: 'Skills',    href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <img src="/profile-nobg.png" alt="TRH" className="logo-avatar" />
          <span className="logo-text">THEJAS <span>R H</span></span>
        </a>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="nav-actions">
          <a href={`https://${linkedin}`} target="_blank" rel="noreferrer" className="nav-icon-btn" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={`https://${github}`} target="_blank" rel="noreferrer" className="nav-icon-btn" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#footer" className="btn btn-primary" style={{ height: '38px', padding: '0 1.2rem', fontSize: '0.85rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
