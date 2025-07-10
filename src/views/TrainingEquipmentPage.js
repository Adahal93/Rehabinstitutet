import React from 'react';
import './AffiliatePage.css';
import hanteldyrImage from '../assets/images/4x4/hanteldyr.png';
import hantelbilligImage from '../assets/images/4x4/hantelbillig.png';
import gummibandhandtagImage from '../assets/images/4x4/gummibandhandtag.png';
import gummibandImage from '../assets/images/4x4/gummiband.png';
import kbstandardImage from '../assets/images/4x4/kbstandard.png';
import kbjusterbarImage from '../assets/images/4x4/kbjusterbar.png';
import dragremImage from '../assets/images/4x4/dragrem.png';
import versagripImage from '../assets/images/4x4/versagrip.png';

const TrainingEquipmentPage = () => {
  const products = [
    {
      id: 1,
      name: "Justerbara Hantlar Premium",
      description: "Högkvalitativt justerbart hantelset för professionell styrketräning. Går mellan 2-32kg per hantel. Perfekt för hemträning utan att ta upp för mycket plats.",
      affiliateLink: "https://gymkompaniet.se/nuo-athletics-nuobell-set-2-32kg-parvis?___store=default",
      image: hanteldyrImage
    },
    {
      id: 2,
      name: "Justerbara Hantlar Kostnadseffektivt",
      description: "Kostnadseffektivt justerbart hantelset för alla träningsnivåer. Justerbart mellan 2-24kg per hantel. Bra kvalitet till rätt pris.",
      affiliateLink: "https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html",
      image: hantelbilligImage
    },
    {
      id: 3,
      name: "Gummiband Varierande Styrka",
      description: "Dessa gummiband kan köpas i olika motståndsgrad. De är hållbara och kan användas från allt mellan rehabträning till styrketräning. Eller varför inte som assistans när du vill lära dig chins eller dips?",
      affiliateLink: "https://www.gymgrossisten.com/gummiband-45---795-kg/1095-01R.html",
      image: gummibandImage
    },
    {
      id: 4,
      name: "Gummiband Med Handtag",
      description: "Gummiband med handtag. Välj mellan lätt, medel eller tung. Perfekt till hemmaträning och när du är på resande fot.",
      affiliateLink: "https://www.gymgrossisten.com/exertube-eco-traningsband-med-handtag/37356R.html",
      image: gummibandhandtagImage
    },
    {
        id: 5,
        name: "Kettlebell Standard",
        description: "Högkvalitativ Kettlebell gjord i järn. Finns i 12 storlekar mellan 4-48kg. Kettlebellen ligger skönt i handen och har ett bra grepp, vilket gör de mer lämpade för att även träna överkroppen",
        affiliateLink: "https://www.gymgrossisten.com/kettlebell-bc-4%E2%80%9348-kg/68-2178-10R.html",
        image: kbstandardImage
      },
      {
        id: 6,
        name: "Justerbar Kettlebell",
        description: "För dig som vill ha en enkel kettlebell som man kan justera mellan 4.5-13.5kg. Något mer otymplig än en standardvariant, men gör jobbet.",
        affiliateLink: "https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default",
        image: kbjusterbarImage
      },
      {
        id: 7,
        name: "Träningsskor Gym",
        description: "Nike Metcon. Dessa träningsskor är perfekta för att utföra gymövningar där du behöver stabilitet till lyftet. De är platta, något bredare och med utmärkt grepp. Som bonus har de en extremt lång livslängd.",
        affiliateLink: "https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default",
        image: kbjusterbarImage
      },
      {
        id: 8,
        name: "Versa Grips",
        description: "Detta är ett kompliment till de klassiska dragremmarna. En fantastisk produkt som sitter bekvämt, håller länge och underlättar lyft där greppet är den begränsande faktorn.",
        affiliateLink: "https://www.gymgrossisten.com/versa-gripps---pro-series-black/PRO-550-BLACK-REG-LR.html",
        image: versagripImage
      },
      {
        id: 9,
        name: "Dragremmar/Lyftarstraps",
        description: "Klassiska dragremmar i god kvalitet. Lätta att använda och gör att greppstyrkan inte blir en limiterande faktor. Passar utmärkt till exempelvis rodd, marklyft och latsdrag.",
        affiliateLink: "https://www.gymgrossisten.com/sbd-lifting-straps/LS007-001.html",
        image: dragremImage
      },
      {
        id: 10,
        name: "Flytande Magnesium",
        description: "Flytande magnesium för bättre grepp vid styrketräning. Hjälper mot svettiga händer och förbättrar greppet vid lyft som marklyft, chins och andra övningar där greppet är viktigt.",
        affiliateLink: "https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default",
        image: kbjusterbarImage
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
        <h1>Träningsutrustning</h1>
        <p>
          Här hittar du all träningsutrustning vi rekommenderar för din rehabilitering och träning. 
          Alla produkter är handplockade med fokus på kvalitet, funktion och pris.
        </p>
      </div>

      <div className="affiliate-content">
        <section className="category-section training">
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

export default TrainingEquipmentPage; 