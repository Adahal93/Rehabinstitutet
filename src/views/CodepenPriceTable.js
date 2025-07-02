import React from 'react';
import './CodepenPriceTable.css';

const plans = [
  {
    price: 490,
    title: 'Nybebesök',
    period: '30 min',
    currency: 'kr',
    description: 'Första konsultation online med legitimerad fysioterapeut.'
  },
  {
    price: 290,
    title: 'Återbesök',
    period: '15 min',
    currency: 'kr',
    description: 'Uppföljande onlinebesök för dig som redan är patient.'
  }
];

const CodepenPriceTable = () => (
  <div className="container" style={{maxWidth: 700, margin: '0 auto'}}>
    <div className="row flex-items-xs-middle flex-items-xs-center">
      {plans.map((plan, idx) => (
        <div className="price-col" key={plan.title}>
          <div className="card text-xs-center">
            <div className="card-header">
              <div className="price-row">
                <span className="price-value">{plan.price}</span>
                <span className="currency">{plan.currency}</span>
              </div>
              <div className="period-under">{plan.period}</div>
            </div>
            <div className="card-content">
              <h4 className="plan-title">{plan.title}</h4>
              <div className="plan-description">{plan.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CodepenPriceTable;
