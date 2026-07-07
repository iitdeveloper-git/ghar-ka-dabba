import React from 'react';

export default function Services() {
  return (
    <section id="menu" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 class="section-title">Our Services</h2>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {/* Service 1: MENU */}
          <div className="service-card">
            <div className="service-img-container bg-cream">
              <svg className="service-svg-illus" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#FFF7ED"/>
                <rect x="85" y="80" width="30" height="60" rx="15" fill="#1F2937"/>
                <circle cx="100" cy="60" r="16" fill="#F97316"/>
                <path d="M70 120 C 70 100, 130 100, 130 120" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>
                <rect x="110" y="85" width="12" height="22" rx="3" fill="#FFF" stroke="#F97316" stroke-width="2"/>
                <circle cx="116" cy="96" r="2" fill="#16A34A"/>
              </svg>
            </div>
            <h3 className="service-card-title">MENU</h3>
            <p className="service-card-desc">Wide Range of Indian Food</p>
          </div>

          {/* Service 2: CATERING */}
          <div className="service-card">
            <div className="service-img-container bg-cream">
              <svg className="service-svg-illus" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#FFF7ED"/>
                <circle cx="100" cy="55" r="15" fill="#F97316"/>
                <path d="M85 80 L 115 80 L 110 130 L 90 130 Z" fill="#1F2937"/>
                <path d="M70 95 L 90 85" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>
                <path d="M130 95 L 110 85" stroke="#1F2937" stroke-width="6" stroke-linecap="round"/>
                <rect x="62" y="94" width="20" height="6" rx="2" fill="#F97316"/>
              </svg>
            </div>
            <h3 className="service-card-title">CATERING</h3>
            <p className="service-card-desc">Wide Range of Indian Food</p>
          </div>

          {/* Service 3: MEAL BOXES */}
          <div className="service-card">
            <div className="service-img-container bg-cream relative">
              <span className="coming-soon-badge">Coming Soon</span>
              <svg className="service-svg-illus" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#FFF7ED"/>
                <rect x="70" y="80" width="60" height="50" rx="10" fill="#F97316"/>
                <rect x="70" y="70" width="60" height="8" rx="4" fill="#E05A10"/>
                <rect x="92" y="58" width="16" height="12" rx="3" fill="#1F2937"/>
                <circle cx="100" cy="105" r="14" fill="#16A34A" opacity="0.3"/>
              </svg>
            </div>
            <h3 className="service-card-title">MEAL BOXES</h3>
            <p className="service-card-desc">Wide Range of Indian Food</p>
          </div>
        </div>
      </div>
    </section>
  );
}
