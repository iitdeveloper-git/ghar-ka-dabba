import React from 'react';

export default function AboutUs() {
  return (
    <>
      {/* Dabba Wala Intro */}
      <section className="dabba-wala-section">
        <div className="container dabba-wala-grid">
          <div className="dabba-wala-image-wrapper">
            <img src="/images/street_food_cart.png" alt="Traditional Street Food Cart Illustration" className="street-cart-img" />
          </div>
          <div className="dabba-wala-content">
            <h2 className="dabba-wala-title">Ghar Ka Dabba</h2>
            <p className="dabba-wala-text">
              Ghar ka swad, ab har roz. Healthy, hygienic aur delicious khana ab aapke door tak.
            </p>
            <a href="#about" className="btn btn-primary dabba-btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="about" className="benefits-section">
        <div className="container benefits-grid">
          <div className="benefits-content">
            <h2 className="benefits-title">Benefits <span className="text-orange">of</span> Account</h2>
            
            <ul className="benefits-list">
              <li>
                <span className="check-icon">✓</span>
                <span>Easy ordering & fast checkout</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Manage your subscriptions</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Track your orders in real-time</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Get exclusive offers & discounts</span>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <span>Save your favorite addresses</span>
              </li>
            </ul>
          </div>
          
          <div className="benefits-image-wrapper">
            <img src="/images/swing_woman.png" alt="Indian Woman on Swing" className="swing-woman-img animate-swing" />
          </div>
        </div>
      </section>
    </>
  );
}
