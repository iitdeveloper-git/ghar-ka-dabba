import React from 'react';

export default function FeaturesBar() {
  return (
    <section className="features-bar">
      <div className="container bar-grid">
        <div className="bar-item">
          <div className="bar-icon icon-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div className="bar-info">
            <h3>Tasty Food</h3>
            <p>Homemade food just like maa ke haath ka.</p>
          </div>
        </div>
        
        <div className="bar-item">
          <div className="bar-icon icon-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <div className="bar-info">
            <h3>Swift Delivery</h3>
            <p>On-time delivery at your doorstep.</p>
          </div>
        </div>

        <div className="bar-item">
          <div className="bar-icon icon-brown">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div className="bar-info">
            <h3>To Your Location</h3>
            <p>We deliver across your city.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
