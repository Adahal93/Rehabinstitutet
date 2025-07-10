import React from 'react';
import './AffiliatePage.css';

const RehabilitationPage = () => {
  const products = [
    {
      id: 1,
      name: "Ergonomic Office Chair",
      description: "Ergonomisk kontorsstol som stödjer rygg och nacke. Viktigt för långa arbetsdagar.",
      affiliateLink: "https://example.com/office-chair",
      image: "https://via.placeholder.com/400x400?text=Office+Chair"
    },
    {
      id: 2,
      name: "Hälkil 1,5cm",
      description: "Hälkilar har visat sig vara lindrande vid besvär från hälsenan och är ett gott komplemment till sedvanlig rehabilitering för att påskynda förloppet och minska smärta",
      affiliateLink: "https://example.com/standing-desk",
      image: "https://via.placeholder.com/400x400?text=Standing+Desk"
    },
    {
      id: 3,
      name: "Ergonomisk kudde ländrygg - Mckenzie",
      description: "En kudde som stödjer ländryggen och minskar belastningen på ryggen. Bra för att minska smärta för dig med återkommande ländryggsbesvär.",
      affiliateLink: "https://www.mckenzie.se/produkt/mckenzie-lankrygg-kudde-15cm/",
      image: "https://via.placeholder.com/400x400?text=Keyboard"
    }
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-content">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <a 
            href={product.affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="affiliate-button"
          >
            Köp här
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="affiliate-page">
      <div className="affiliate-header">
        <h1>Rehabilitering</h1>
        <p>
          Här hittar du produkter som stödjer din rehabilitering och återhämtning. 
          Alla produkter är valda för att hjälpa dig att återhämta dig snabbare och mer effektivt.
        </p>
      </div>

      <div className="affiliate-content">
        <section className="category-section rehabilitation">
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RehabilitationPage; 