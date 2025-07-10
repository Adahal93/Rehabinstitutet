import React from 'react';
import './AffiliatePage.css';
import kalciumvitdImage from '../assets/images/4x4/kalciumvitd.png';
import kreatinImage from '../assets/images/4x4/kreatin.png';
import proteinpulverImage from '../assets/images/4x4/proteinpulver.png';
import kollagenImage from '../assets/images/4x4/kollagen.png';
import koffeintablettImage from '../assets/images/4x4/koffeintablett.png';
import proteinpulverbilligImage from '../assets/images/4x4/proteinpulverbillig.png';

const SupplementsPage = () => {
  const products = [
          {
        id: 1,
        name: "Kreatin",
        description: (
          <>
            När det kommer till kreatin finns det en djungel av produkter. Vanligt kreatin monohydrat som detta har visat sig minst lika effektivt som de dyrare alternativen. Kreatin är det mest välstuderade kosttillskottet och det finns tung evidens som tyder på att det är mycket effektivt för att öka muskelstyrka och tillväxt.
            <br />
            <a 
              href="/kreatin-evidens" 
              className="evidence-link"
              style={{ color: '#1a3d2c', textDecoration: 'underline', fontWeight: '500' }}
            >
              Läs om evidens här
            </a>
            .
          </>
        ),
        affiliateLink: "https://www.gymgrossisten.com/creatine-monohydrate-500-g/609.html",
        image: kreatinImage
      },
    {
      id: 2,
      name: "Proteinpulver",
      description: "Proteinpulver är ett enkelt och effektivt sätt att öka ditt dagliga proteinintag, särskilt för dig som tränar, vill bygga muskler eller återhämta dig snabbare. Denna är en permiumvariant, men även de billigare alternativen är bra. Ett smidigt komplement till en balanserad kost!",
      affiliateLink: "https://www.gymgrossisten.com/100-whey-gold-standard-vassleprotein-908-g/6870R.html",
      image: proteinpulverImage
    },
    {
      id: 3,
      name: "Vitamin D3 + Kalcium",
      description: "Tabletterna innehåller en kombination av Kalcium och Vitamin D för optimal benhälsa. Denna kombination har tillsammans visat sig vara ett effektivt sätt att minska risk för frakturer kopplade till benskörhet och stressfrakturer hos idrottare.",
      affiliateLink: "https://www.svensktkosttillskott.se/core-calcium-complex-plus",
      image: kalciumvitdImage
    },
          {
        id: 1,
        name: "Kollagen",
        description: (
          <>
            Detta är ett billigt kosttillskott som kan tänkas bidra till att förbättra läkning och hållbarhet av kollagenstrukturer i kroppen, exempelvis senor och ledband. Evidensen är dessväre komplex och svårt att uttala sig definitivt om i detta området.
            <br />
            <a 
              href="/kollagen-evidens" 
              className="evidence-link"
              style={{ color: '#1a3d2c', textDecoration: 'underline', fontWeight: '500' }}
            >
              Läs om evidens här
            </a>
            .
          </>
        ),
        affiliateLink: "https://www.gymgrossisten.com/kollagen-120-tabletter/A7692.html",
        image: kollagenImage
      },
      {
        id: 2,
        name: "Koffein",
        description: "Länken visar tabletter, men du kan ersätta det med vanligt kaffe, energidryck eller annat koffeinhaltigt. Koffein är ett välstuderat och effektivt sätt att öka din träningsprestation både i konditionsträning och styrketräning. För optimal effekt på prestation brukar rekommenderas att ta 3-4mg/kg kroppsvikt (Tänk dock på att det är en relativt hög dos). ",
        affiliateLink: "https://www.gymgrossisten.com/koffeintabletter-100-mg-90-kapslar/6571.html",
        image: koffeintablettImage
      },
      {
        id: 3,
        name: "Proteinpulver - Billigare alternativ",
        description: "Proteinpulver är ett enkelt och effektivt sätt att öka ditt dagliga proteinintag, särskilt för dig som tränar, vill bygga muskler eller återhämta dig snabbare. Denna är en billigare variant som fortfarande ger bra kvalitet till rätt pris.",
        affiliateLink: "https://www.gymgrossisten.com/mixochmatch-4-x-whey-80-vassleprotein-1-kg/SETW80MIX.html",
        image: proteinpulverbilligImage
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
          <div className="product-description">
            {typeof product.description === 'string' ? product.description : product.description}
          </div>
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
        <h1>Kosttillskott</h1>
        <p>
          Här hittar du alla kosttillskott vi rekommenderar för att stödja din rehabilitering och träning. 
          Trots att de tär en miljardindustri är de flesta kosttillskotten helt och hållet pengar i sjön. 
          Därför har vi gjort en lista på kosttillskott som faktiskt fungerar. 
          Skulle du ha några fårgor om dessa eller andra kosttillskott, kontakta oss gärna!
        </p>
      </div>

      <div className="affiliate-content">
        <section className="category-section supplements">
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

export default SupplementsPage; 