import React, { useState } from 'react';
import { LANDING_FAQ_ITEMS } from './landingFAQData';
import './LandingFAQ.css';

const LandingFAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="landing-faq">
      <div className="landing-faq-container">
        <div className="landing-faq-header">
          <h2>Vanliga frågor</h2>
          <p>Här hittar du svar på de vanligaste frågorna om våra program och tjänster</p>
        </div>

        <div className="landing-faq-items">
          {LANDING_FAQ_ITEMS.map((item, index) => (
            <div key={index} className="landing-faq-item">
              <button
                className={`landing-faq-question ${openItems[index] ? 'open' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`landing-faq-icon ${openItems[index] ? 'rotated' : ''}`}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`landing-faq-answer ${openItems[index] ? 'open' : ''}`}>
                <div 
                  className="landing-faq-answer-content"
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="landing-faq-footer">
          <p>Har du fler frågor? <a href="/faq">Besök vår kompletta FAQ-sida</a> eller <a href="/kontakt">kontakta oss</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
