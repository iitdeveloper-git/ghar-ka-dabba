import React, { useState } from 'react';

export default function StayUpdated({ showToast }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      
      if (response.ok && data.success) {
        showToast(data.message || 'Subscription successful! Check your inbox for updates.', true);
        setEmail('');
      } else {
        showToast(data.message || 'Something went wrong. Please try again.', false);
      }
    } catch (err) {
      console.error(err);
      showToast('Network error. Failed to connect to server.', false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="stay-updated-section">
      <div className="container stay-updated-grid">
        <div className="stay-updated-content">
          <h2 className="stay-updated-title">Stay Updated</h2>
          <p className="stay-updated-desc">Subscribe to get special offers and updates.</p>
          
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="subscribe-input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required 
            />
            <button 
              type="submit" 
              className="subscribe-btn" 
              aria-label="Subscribe"
              disabled={loading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" x1="11" y1="2" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
        
        <div className="stay-updated-image-wrapper">
          <svg className="cooking-svg" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Two Indian women cooking illustration">
            <circle cx="150" cy="100" r="90" fill="#FFF7ED"/>
            {/* Woman 1 (Left) */}
            <circle cx="100" cy="90" r="16" fill="#F97316"/>
            <path d="M80 140 C 80 110, 120 110, 120 140" fill="#1F2937"/>
            <path d="M75 90 C 70 100, 70 120, 85 130" stroke="#F97316" stroke-width="4" stroke-linecap="round"/>
            {/* Woman 2 (Right) */}
            <circle cx="200" cy="90" r="16" fill="#16A34A"/>
            <path d="M180 140 C 180 110, 220 110, 220 140" fill="#1F2937"/>
            <path d="M225 90 C 230 100, 230 120, 215 130" stroke="#16A34A" stroke-width="4" stroke-linecap="round"/>
            {/* Pot in between */}
            <rect x="135" y="115" width="30" height="22" rx="4" fill="#F97316"/>
            <rect x="131" y="111" width="38" height="5" rx="2" fill="#E05A10"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
