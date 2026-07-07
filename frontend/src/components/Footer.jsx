import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    // If on gallery page, standard link behavior takes them home, then hash scroll
    if (window.location.pathname === '/gallery') {
      return;
    }
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="logo-wrapper" onClick={(e) => handleNavClick(e, 'home')}>
            <img src="/images/logo.png" alt="Ghar Ka Dabba Logo" className="logo-img" />
            <div className="logo-text text-white">
              <span className="hindi-title">घर का डब्बा</span>
              <span className="eng-subtitle text-white-50">GHAR KA DABBA</span>
            </div>
          </Link>
          <p className="brand-pitch">
            Bringing the purity, health, and unmatched flavor of mother's kitchen straight to you.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-list">
            <li>+91-730275534</li>
            <li>gharkadabba@gmail.com</li>
            <li>Outer Ring Road, HSR Layout, Delhi, India</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/" onClick={(e) => handleNavClick(e, 'home')}>Home</Link></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
            <li><a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a></li>
            <li><a href="#plans" onClick={(e) => handleNavClick(e, 'plans')}>Plans</a></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-col">
          <h4 className="footer-col-title">Opening Hours</h4>
          <ul className="footer-list">
            <li>Monday - Saturday<br /><span className="highlight-time">08:00 AM - 10:00 PM</span></li>
            <li>Sunday<br /><span className="highlight-time">09:00 AM - 09:00 PM</span></li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="copyright-bar">
        <div className="container copyright-flex">
          <p>
            &copy; 2026 <a href="https://iitdeveloper.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-orange)', fontWeight: 600 }}>Ghar Ka Dabba</a>. All Rights Reserved. | Created by <a href="https://iitdeveloper.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-orange)', fontWeight: 600 }}>IIT-Developer</a>
          </p>
          <div className="legal-links">
            <a href="#">Terms & Conditions</a>
            <span className="divider">|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
