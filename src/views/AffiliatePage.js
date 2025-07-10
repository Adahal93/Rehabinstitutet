import React from 'react';
import './AffiliatePage.css';
import hanteldyrImage from '../assets/images/4x4/hanteldyr.png';
import hantelbilligImage from '../assets/images/4x4/hantelbillig.png';
import gummibandhandtagImage from '../assets/images/4x4/gummibandhandtag.png';
import gummibandImage from '../assets/images/4x4/gummiband.png';
import kbstandardImage from '../assets/images/4x4/kbstandard.png';
import kbjusterbarImage from '../assets/images/4x4/kbjusterbar.png';
import kalciumvitdImage from '../assets/images/4x4/kalciumvitd.png';
import kreatinImage from '../assets/images/4x4/kreatin.png';
import proteinpulverImage from '../assets/images/4x4/proteinpulver.png';

const AffiliatePage = () => {
  // Dummy data för produkter
  const products = {
    trainingEquipment: [
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
        name: "Justerbar Kettlebell ",
        description: "För dig som vill ha en enkel kettlebell som man kan justera mellan 4.5-13.5kg. Något mer otymplig än en standardvariant, men gör jobbet.",
        affiliateLink: "https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default",
        image: kbjusterbarImage
      }
    ],
    supplements: [
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
        id: 5,
        name: "Proteinpulver",
        description: "Proteinpulver är ett enkelt och effektivt sätt att öka ditt dagliga proteinintag, särskilt för dig som tränar, vill bygga muskler eller återhämta dig snabbare. Denna är en permiumvariant, men även de billigare alternativen är bra. Ett smidigt komplement till en balanserad kost!. ",
        affiliateLink: "https://www.gymgrossisten.com/100-whey-gold-standard-vassleprotein-908-g/6870R.html",
        image: proteinpulverImage
      },
      {
        id: 6,
        name: "Vitamin D3 + Kalcium",
        description: "Tabletterna innehåller en kombination av Kalcium och Vitamin D för optimal benhälsa. Denna kombination har tillsammans visat sig vara ett effektivt sätt att minska risk för frakturer kopplade till benskörhet och stressfrakturer hos idrottare.",
        affiliateLink: "https://www.svensktkosttillskott.se/core-calcium-complex-plus",
        image: kalciumvitdImage
      }
    ],
    rehabilitation: [
      {
        id: 7,
        name: "Ergonomic Office Chair",
        description: "Ergonomisk kontorsstol som stödjer rygg och nacke. Viktigt för långa arbetsdagar.",
        affiliateLink: "https://example.com/office-chair",
        image: "https://via.placeholder.com/400x400?text=Office+Chair"
      },
      {
        id: 8,
        name: "Hälkil 1,5cm",
        description: "Hälkilar har visat sig vara lindrande vid besvär från hälsenan och är ett gott komplemment till sedvanlig rehabilitering för att påskynda förloppet och minska smärta",
        affiliateLink: "https://example.com/standing-desk",
        image: "https://via.placeholder.com/400x400?text=Standing+Desk"
      },
      {
        id: 9,
        name: "Ergonomisk kudde ländrygg - Mckenzie",
        description: "En kudde som stödjer ländryggen och minskar belastningen på ryggen. Bra för att minska smärta för dig med återkommande ländryggsbesvär.",
        affiliateLink: "https://www.mckenzie.se/produkt/mckenzie-lankrygg-kudde-15cm/",
        image: "https://via.placeholder.com/400x400?text=Keyboard"
      }
    ],
    appsSoftware: [
      {
        id: 10,
        name: "MyFitnessPal Premium",
        description: "App för kostspårning och träningslogg. Bra för att hålla koll på rehabiliteringsprocessen.",
        affiliateLink: "https://example.com/myfitnesspal",
        image: "https://via.placeholder.com/400x400?text=MyFitnessPal"
      },
      {
        id: 11,
        name: "Headspace Meditation",
        description: "Meditationsapp för stresshantering och återhämtning. Viktigt för rehabilitering.",
        affiliateLink: "https://example.com/headspace",
        image: "https://via.placeholder.com/400x400?text=Headspace"
      },
      {
        id: 12,
        name: "Strava Premium",
        description: "Träningsapp för att spåra aktiviteter och framsteg. Perfekt för rehabilitering.",
        affiliateLink: "https://example.com/strava",
        image: "https://via.placeholder.com/400x400?text=Strava"
      }
    ]
  };

  // Återanvändbar produktkort-komponent
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

  // Återanvändbar kategorisektion-komponent
  const CategorySection = ({ title, products, categoryClass, linkPath }) => {
    return (
      <section className={`category-section ${categoryClass}`}>
        <h2 className="category-title">{title}</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="category-footer">
          <a href={linkPath || "#"} className="view-all-link">
            Se hela listan
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    );
  };

  return (
    <div className="affiliate-page">
      <div className="affiliate-header">
        <h1>Rekommenderade Produkter</h1>
        <p>
          Vi har samlat produkter som vi tror kan hjälpa dig i din rehabilitering och träning. 
          Alla produkter är handplockade av oss med en extra tanke till kvalitet, funktion och pris. 
        </p>
      </div>

      <div className="affiliate-content">
        <CategorySection 
          title="Träningsutrustning" 
          products={products.trainingEquipment}
          categoryClass="training"
          linkPath="/training-equipment"
        />
        
        <CategorySection 
          title="Kosttillskott" 
          products={products.supplements}
          categoryClass="supplements"
          linkPath="/supplements"
        />
        
        <CategorySection 
          title="Rehabilitering" 
          products={products.rehabilitation}
          categoryClass="rehabilitation"
          linkPath="/rehabilitation"
        />
        
        <CategorySection 
          title="Appar & Mjukvara" 
          products={products.appsSoftware}
          categoryClass="software"
          linkPath="/apps-software"
        />
      </div>
    </div>
  );
};

export default AffiliatePage; 