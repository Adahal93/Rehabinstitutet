import React from 'react';
import './AffiliatePage.css';

const AppsSoftwarePage = () => {
  const products = [
    {
      id: 1,
      name: "MyFitnessPal Premium",
      description: "App för kostspårning och träningslogg. Bra för att hålla koll på rehabiliteringsprocessen.",
      affiliateLink: "https://example.com/myfitnesspal",
      image: "https://via.placeholder.com/400x400?text=MyFitnessPal"
    },
    {
      id: 2,
      name: "Headspace Meditation",
      description: "Meditationsapp för stresshantering och återhämtning. Viktigt för rehabilitering.",
      affiliateLink: "https://example.com/headspace",
      image: "https://via.placeholder.com/400x400?text=Headspace"
    },
    {
      id: 3,
      name: "Strava Premium",
      description: "Träningsapp för att spåra aktiviteter och framsteg. Perfekt för rehabilitering.",
      affiliateLink: "https://example.com/strava",
      image: "https://via.placeholder.com/400x400?text=Strava"
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
        <h1>Appar & Mjukvara</h1>
        <p>
          Här hittar du appar och mjukvara som stödjer din rehabilitering och träning. 
          Alla appar är valda för att hjälpa dig att spåra framsteg och optimera din träning.
        </p>
      </div>

      <div className="affiliate-content">
        <section className="category-section software">
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

export default AppsSoftwarePage; 