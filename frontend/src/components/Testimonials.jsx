import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: 'Rohit Sharma',
    avatar: 'R',
    avatarClass: 'bg-avatar-orange',
    rating: '★★★★★',
    text: 'Amazing food quality and timely delivery. Reminds me of my mother\'s home cooked meals.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    avatar: 'P',
    avatarClass: 'bg-avatar-green',
    rating: '★★★★★',
    text: 'The menu options are incredibly diverse and fresh. Highly recommend the corporate plan!'
  },
  {
    id: 3,
    name: 'Amit Verma',
    avatar: 'A',
    avatarClass: 'bg-avatar-brown',
    rating: '★★★★★',
    text: 'Extremely hygienic packaging. Subscribing to the Office Plan has saved me so much time.'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="testimonials-grid">
          {REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-profile">
                <div className={`profile-avatar ${review.avatarClass}`}>{review.avatar}</div>
                <div className="profile-info">
                  <h4>{review.name}</h4>
                  <div className="rating-stars">{review.rating}</div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
