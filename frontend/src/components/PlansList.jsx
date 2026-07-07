import React from 'react';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 120,
    features: [
      '1 Sabji + 4 Roti + Dal + Rice',
      'Weekly skip available',
      'Perfect for individuals'
    ],
    badge: 'Popular',
    featured: false,
    defaultRoti: 4
  },
  {
    id: 'family',
    name: 'Family Plan',
    price: 299,
    features: [
      '3 Sabji + 12 Roti + Dal + Rice + Sweet',
      'Hassle-free custom timings',
      'Perfect for 3-4 family members'
    ],
    badge: 'Best Value',
    featured: true,
    defaultRoti: 12
  },
  {
    id: 'office',
    name: 'Office Plan',
    price: 99,
    features: [
      'Custom Sabji + 5 Roti/Rice + Salad',
      'Timely office desk delivery',
      'Requires min. 5 subscriptions'
    ],
    badge: 'Bulk Offer',
    featured: false,
    defaultRoti: 5
  }
];

export default function PlansList({ onSelectPlan }) {
  return (
    <section id="plans" className="plans-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Subscription Plan</h2>
          <div className="title-underline"></div>
        </div>
        <div className="plans-grid">
          {PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`plan-card ${plan.featured ? 'featured-plan' : ''}`}
            >
              {plan.badge && <span className="plan-badge">{plan.badge}</span>}
              <h3 className="plan-title">{plan.name}</h3>
              <div className="plan-price">
                ₹{plan.price} <span className="plan-unit">/ meal</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button 
                className="btn btn-primary w-full plan-btn"
                onClick={() => onSelectPlan(plan)}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { PLANS };
