import React, { useState } from 'react';
import { FAQ_CATEGORIES } from './faqData';
import './FAQSection.css';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]?.slug || '');

  const toggleItem = (categorySlug, itemIndex) => {
    const key = `${categorySlug}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isItemOpen = (categorySlug, itemIndex) => {
    const key = `${categorySlug}-${itemIndex}`;
    return openItems[key] || false;
  };

  const handleCategoryChange = (categorySlug) => {
    setActiveCategory(categorySlug);
    // Close all items when changing category
    setOpenItems({});
  };

  const activeCategoryData = FAQ_CATEGORIES.find(cat => cat.slug === activeCategory);

  return (
    <div className="faq-section">
      <div className="faq-header">
        <h2>Vanliga frågor</h2>
        <p>Här hittar du svar på de vanligaste frågorna om våra program och tjänster</p>
      </div>

      <div className="faq-container">
        {/* Category Navigation */}
        <div className="faq-categories">
          {FAQ_CATEGORIES.map((category) => (
            <button
              key={category.slug}
              className={`faq-category-btn ${activeCategory === category.slug ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.slug)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          {activeCategoryData && activeCategoryData.items.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${isItemOpen(activeCategory, index) ? 'open' : ''}`}
                onClick={() => toggleItem(activeCategory, index)}
              >
                <span>{item.question}</span>
                <svg
                  className={`faq-icon ${isItemOpen(activeCategory, index) ? 'rotated' : ''}`}
                  width="24"
                  height="24"
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
              <div className={`faq-answer ${isItemOpen(activeCategory, index) ? 'open' : ''}`}>
                <div 
                  className="faq-answer-content"
                  dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
