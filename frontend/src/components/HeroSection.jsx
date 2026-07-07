import React from 'react';

export default function HeroSection({ onOrderClick, onViewMenuClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Ghar Ka Khana, <br />
            <span className="highlight-text">Delivered Daily</span>
          </h1>
          <div className="hero-features">
            <span className="feature-badge badge-green">Healthy</span>
            <span className="badge-dot">•</span>
            <span className="feature-badge badge-orange">Hygienic</span>
            <span className="badge-dot">•</span>
            <span className="feature-badge">Homemade</span>
          </div>
          <p className="hero-desc">
            Enjoy delicious, home-style meals cooked with love and delivered to your doorstep.
          </p>
          
          <div className="hero-buttons">
            <a 
              href="#plans" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onOrderClick();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              Order Now
            </a>
            <a 
              href="#menu" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                onViewMenuClick();
              }}
            >
              View Menu
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <img src="/images/hero_rider.png" alt="Indian Tiffin Delivery Rider on Bicycle Cart" className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}
