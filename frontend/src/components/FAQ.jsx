import React, { useState } from 'react';

const FAQS = [
  {
    id: 1,
    question: 'What are the delivery timings?',
    answer: 'Lunch is delivered between 11:30 AM to 01:30 PM. Dinner is delivered between 07:30 PM to 09:30 PM. You can specify your preferred timing slot in your account settings.'
  },
  {
    id: 2,
    question: 'Can I skip or pause my tiffin plan?',
    answer: 'Yes, absolutely. You can skip or pause your subscription directly through your profile panel before 08:00 AM for lunch and before 04:00 PM for dinner. No extra charges apply.'
  },
  {
    id: 3,
    question: 'Do you offer vegetarian and non-vegetarian options?',
    answer: 'Yes, we provide separate vegetarian and non-vegetarian menus cooked in isolated sections of our kitchen to maintain absolute purity and hygiene.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="title-underline"></div>
        </div>
        <div className="faq-accordion">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                {faq.question} 
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
