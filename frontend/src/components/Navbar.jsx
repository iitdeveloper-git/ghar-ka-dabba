import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenCart, onOpenAuth, cartItem, isLoggedIn, user, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isGalleryPage = location.pathname === '/gallery';

  const handleNavClick = (e, targetId) => {
    if (isGalleryPage) {
      // Allow default Link routing
      return;
    }
    
    // For homepage, smooth scroll
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
    setMobileOpen(false);
  };

  return (
    <header className={`header ${scrolled || isGalleryPage ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-wrapper" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/images/logo.png" alt="Ghar Ka Dabba Logo" class="logo-img" />
          <div className="logo-text">
            <span className="hindi-title">घर का डब्बा</span>
            <span className="eng-subtitle">GHAR KA DABBA</span>
          </div>
        </Link>
        
        <nav className={`nav-links-wrapper ${mobileOpen ? 'open' : ''}`} id="navMenu">
          <Link 
            to="/" 
            className={`nav-link ${!isGalleryPage ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </Link>
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About Us
          </a>
          <a 
            href="#menu" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'menu')}
          >
            Menu
          </a>
          <a 
            href="#plans" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'plans')}
          >
            Plans
          </a>
          <Link 
            to="/gallery" 
            className={`nav-link ${isGalleryPage ? 'active' : ''}`}
          >
            Gallery
          </Link>
          <a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact Us
          </a>
        </nav>

        <div className="nav-actions">
          {/* Cart Icon */}
          <button className="action-btn" aria-label="Shopping Cart" onClick={onOpenCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            {cartItem && <span className="cart-badge-dot"></span>}
          </button>

          {/* Profile/User Icon */}
          <button className="action-btn" aria-label="User Profile" onClick={onOpenAuth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              {isLoggedIn ? (
                <circle cx="12" cy="12" r="10" fill="var(--color-orange-light)" stroke="var(--color-orange)"/>
              ) : (
                <>
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </>
              )}
            </svg>
          </button>
          
          {/* Order Now CTA */}
          <a href="#plans" className="cta-nav-btn" onClick={(e) => handleNavClick(e, 'plans')}>
            Order Now
          </a>
          
          {/* Mobile Toggle Menu */}
          <button 
            className="mobile-toggle" 
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="menu-icon">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x1="20" y1="12" y2="12"/>
                  <line x1="4" x1="20" y1="6" y2="6"/>
                  <line x1="4" x1="20" y1="18" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
