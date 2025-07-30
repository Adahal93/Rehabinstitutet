import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Download, CreditCard, Smartphone, ExternalLink } from 'lucide-react';
import './ProgramDetailPage.css';
import styrketraningForLopare from '../assets/images/styrketräning_för_löpare.png';
import hamstringprogrammet from '../assets/images/hamstringprogrammet.png';
import artrosprogramKna from '../assets/images/artrosprogram_knä.png';
import fotachillesProgram from '../assets/images/fotachilles-program.png';
import traningsprogram3ggr from '../assets/images/träningsprogram_3ggr_v.png';

// Program data - this could be moved to a separate file later
const programData = {
  'styrketraning-for-lopare': {
    id: 'styrketraning-for-lopare',
    title: 'Styrketräning för löpare',
    subtitle: '12-veckors program för förbättrad löpekonomi och skadeprevention',
    price: 399,
    description: 'Ett komplett 12-veckors program utvecklat för löpare som vill förbättra sin löpekonomi, öka maxhastighet, bygga styrka och minska skaderisken. Programmet är baserat på senaste forskningen inom löparträning och skadeprevention.',
    longDescription: `
      <p>Detta program är skapat för dig som vill ta ditt löpande till nästa nivå. Genom systematisk styrketräning kommer du att:</p>
      <ul>
        <li>Förbättra din löpekonomi och effektivitet</li>
        <li>Öka din maxhastighet och uthållighet</li>
        <li>Minska risken för vanliga löparskador</li>
        <li>Bygga funktionell styrka specifikt för löpning</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>12 veckors progressivt träningsschema</li>
        <li>Detaljerade övningsbeskrivningar med bilder</li>
        <li>Videoinstruktioner för alla övningar</li>
        <li>Teoretiskt ramverk och förklaringar</li>
        <li>Skadepreventiva övningar</li>
        <li>Mobilitets- och rörlighetsprogram</li>
      </ul>
    `,
    features: [
      '12 veckors progressivt schema',
      'Videoinstruktioner för alla övningar',
      'Teoretiskt ramverk ingår',
      'Skadepreventiva övningar',
      'Mobilitets- och rörlighetsprogram',
      'Lätt att följa format',
      'Lämpligt för alla nivåer',
      'Evidensbaserat program'
    ],
    duration: '12 veckor',
    level: 'Alla nivåer',
    delivery: 'Digitalt (PDF + videos)',
    image: styrketraningForLopare,
    swishNumber: '123 456 7890', // Ersätt med riktigt företags-Swish
    swishMessage: 'STYRKELOPARE',
    equipment: [
      'Tillgång till gym eller hemmagym med hantlar/skivstång',
      'Vikter upp till 60kg (kvinnor) / 80kg (män)'
    ],
    affiliateProducts: [
      {
        name: 'Justerbara Hantlar Premium',
        link: 'https://gymkompaniet.se/nuo-athletics-nuobell-set-2-32kg-parvis?___store=default',
        description: 'Högkvalitativt justerbart hantelset 2-32kg per hantel'
      },
      {
        name: 'Justerbara Hantlar Kostnadseffektivt',
        link: 'https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html',
        description: 'Kostnadseffektivt justerbart hantelset 2-24kg per hantel'
      }
    ]
  },
  'hamstringprogrammet': {
    id: 'hamstringprogrammet',
    title: 'Hamstringprogrammet',
    subtitle: '12-veckors program för att bli av med hamstringtendinopatier',
    price: 449,
    description: 'Specifikt utformat för att bli av med hamstringtendinopatier (smärta från senan) och förebygga skador i baksida lår. Ett 12-veckors progressivt schema som kombinerar rehab och prehab.',
    longDescription: `
      <p>Hamstringtendinopatier är en vanlig och frustrerande skada som kan påverka både vardagsliv och träning. Detta program är specialutformat för att:</p>
      <ul>
        <li>Minska smärta från hamstringsenan</li>
        <li>Återställa funktionell styrka</li>
        <li>Förebygga framtida skador</li>
        <li>Förbättra rörlighet och mobilitet</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>12 veckors progressivt rehab-schema</li>
        <li>Specifika övningar för hamstringtendinopatier</li>
        <li>Gradvis ökning av belastning</li>
        <li>Mobilitets- och stretchingprogram</li>
        <li>Råd för återgång till träning</li>
      </ul>
    `,
    features: [
      '12 veckors progressivt schema',
      'Specifikt för hamstringtendinopatier',
      'Rehab och prehab kombinerat',
      'Gradvis belastningsökning',
      'Mobilitetsprogram',
      'Återgångsplan',
      'Videoinstruktioner',
      'Evidensbaserat program'
    ],
    duration: '12 veckor',
    level: 'Alla nivåer',
    delivery: 'Digitalt (PDF + videos)',
    image: hamstringprogrammet,
    swishNumber: '123 456 7890',
    swishMessage: 'HAMSTRING',
    equipment: [
      'Foamroller av valfri storlek',
      'Tillgång till gym eller hemmagym med hantlar/skivstång upp till 60kg'
    ],
    affiliateProducts: [
      {
        name: 'Gummiband Varierande Styrka',
        link: 'https://www.gymgrossisten.com/gummiband-45---795-kg/1095-01R.html',
        description: 'Hållbara gummiband för rehabträning'
      },
      {
        name: 'Justerbara Hantlar Kostnadseffektivt',
        link: 'https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html',
        description: 'Kostnadseffektivt justerbart hantelset 2-24kg per hantel'
      }
    ]
  },
  'artrosprogram-kna-och-hoft': {
    id: 'artrosprogram-kna-och-hoft',
    title: 'Artrosprogrammet (knä och höft)',
    subtitle: '8-veckors program för att minska smärta och öka rörlighet vid artros',
    price: 499,
    description: 'Beprövat 8-veckorsprogram utvecklat för att minska smärta och öka rörlighet vid artros i knä och höft. Godkänt av fysioterapeuter.',
    longDescription: `
      <p>Artros i knä och höft är en vanlig och frustrerande åkomma som kan påverka både vardagsliv och träning. Detta program är specialutformat för att:</p>
      <ul>
        <li>Minska smärta från artros</li>
        <li>Återställa funktionell styrka</li>
        <li>Förebygga framtida skador</li>
        <li>Förbättra rörlighet och mobilitet</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>8 veckors progressivt rehab-schema</li>
        <li>Specifika övningar för artros</li>
        <li>Gradvis ökning av belastning</li>
        <li>Mobilitets- och stretchingprogram</li>
        <li>Råd för återgång till träning</li>
      </ul>
    `,
    features: [
      '8 veckors progressivt schema',
      'Specifikt för artros',
      'Rehab och prehab kombinerat',
      'Gradvis belastningsökning',
      'Mobilitetsprogram',
      'Återgångsplan',
      'Videoinstruktioner',
      'Godkänt av fysioterapeuter'
    ],
    duration: '8 veckor',
    level: 'Alla nivåer',
    delivery: 'Digitalt (PDF + videos)',
    image: artrosprogramKna,
    swishNumber: '123 456 7890',
    swishMessage: 'ARTROS',
    equipment: [
      'En vikt upp till 30kg (kettlebell, hantel eller viktväst)'
    ],
    affiliateProducts: [
      {
        name: 'Justerbar Kettlebell',
        link: 'https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default',
        description: 'Justerbar kettlebell 4.5-13.5kg'
      },
      {
        name: 'Kettlebell Standard',
        link: 'https://www.gymgrossisten.com/kettlebell-bc-4%E2%80%9348-kg/68-2178-10R.html',
        description: 'Högkvalitativ kettlebell i olika storlekar'
      },
      {
        name: 'Justerbara Hantlar Kostnadseffektivt',
        link: 'https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html',
        description: 'Kostnadseffektivt justerbart hantelset 2-24kg per hantel'
      }
    ]
  },
  'fot-och-achillesprogrammet': {
    id: 'fot-och-achillesprogrammet',
    title: 'Fot- och Achillesprogrammet',
    subtitle: '6-veckors program för att stärka fot och hälsena',
    price: 449,
    description: 'Ett 6-veckorsprogram för att stärka fot och hälsena, förbättra balans och minska risken för överbelastningsskador. Stegrande övningar med video.',
    longDescription: `
      <p>Fot- och Achillesledsskador är vanliga och frustrerande skador som kan påverka både vardagsliv och träning. Detta program är specialutformat för att:</p>
      <ul>
        <li>Stärka fot och hälsena</li>
        <li>Förbättra balans och stabilitet</li>
        <li>Minska risken för överbelastningsskador</li>
        <li>Förbättra rörlighet och mobilitet</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>6 veckors progressivt rehab-schema</li>
        <li>Specifika övningar för fot och hälsena</li>
        <li>Gradvis ökning av belastning</li>
        <li>Mobilitets- och stretchingprogram</li>
        <li>Stegrande övningar med video</li>
      </ul>
    `,
    features: [
      '6 veckors progressivt schema',
      'Specifikt för fot och hälsena',
      'Rehab och prehab kombinerat',
      'Gradvis belastningsökning',
      'Mobilitetsprogram',
      'Stegrande övningar med video',
      'Videoinstruktioner',
      'Evidensbaserat program'
    ],
    duration: '6 veckor',
    level: 'Alla nivåer',
    delivery: 'Digitalt (PDF + videos)',
    image: fotachillesProgram,
    swishNumber: '123 456 7890',
    swishMessage: 'FOTACHILLES',
    equipment: [
      'Foamroller',
      'En vikt upp till 30kg (kettlebell, hantel eller viktväst)'
    ],
    affiliateProducts: [
      {
        name: 'Justerbar Kettlebell',
        link: 'https://gymkompaniet.se/quick-lock-kettlebell-13-5kg-gymstick?___store=default',
        description: 'Justerbar kettlebell 4.5-13.5kg'
      },
      {
        name: 'Kettlebell Standard',
        link: 'https://www.gymgrossisten.com/kettlebell-bc-4%E2%80%9348-kg/68-2178-10R.html',
        description: 'Högkvalitativ kettlebell i olika storlekar'
      },
      {
        name: 'Justerbara Hantlar Kostnadseffektivt',
        link: 'https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html',
        description: 'Kostnadseffektivt justerbart hantelset 2-24kg per hantel'
      }
    ]
  },
  'traningsprogram-3-ggr': {
    id: 'traningsprogram-3-ggr',
    title: 'Träningsprogram 3 gånger i veckan',
    subtitle: '8-veckors program för balans mellan styrka, kondition och rörlighet',
    price: 399,
    description: 'Optimalt upplägg för dig som vill träna tre gånger i veckan med balans mellan styrka, kondition och rörlighet. Perfekt för upptagna scheman.',
    longDescription: `
      <p>Detta program är skapat för dig som vill ha en balanserad träning. Genom systematisk träning kommer du att:</p>
      <ul>
        <li>Bygga styrka och kondition</li>
        <li>Förbättra rörlighet och mobilitet</li>
        <li>Minska risken för skador</li>
        <li>Förbättra allmän hälsa</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>8 veckors balanserat träningsschema</li>
        <li>Detaljerade övningsbeskrivningar med bilder</li>
        <li>Videoinstruktioner för alla övningar</li>
        <li>Teoretiskt ramverk och förklaringar</li>
        <li>Skadepreventiva övningar</li>
        <li>Mobilitets- och rörlighetsprogram</li>
      </ul>
    `,
    features: [
      '8 veckors balanserat schema',
      'Videoinstruktioner för alla övningar',
      'Teoretiskt ramverk ingår',
      'Skadepreventiva övningar',
      'Mobilitets- och rörlighetsprogram',
      'Lätt att följa format',
      'Perfekt för upptagna scheman',
      'Evidensbaserat program'
    ],
    duration: '8 veckor',
    level: 'Nybörjare+',
    delivery: 'Digitalt (PDF + videos)',
    image: traningsprogram3ggr,
    swishNumber: '123 456 7890',
    swishMessage: 'TRÄNING3GGR',
    equipment: [
      'Grundläggande träningsutrustning (gummiband, kroppsvikt)',
      'Valfritt: hantlar eller kettlebell för progression'
    ],
    affiliateProducts: [
      {
        name: 'Gummiband Varierande Styrka',
        link: 'https://www.gymgrossisten.com/gummiband-45---795-kg/1095-01R.html',
        description: 'Hållbara gummiband för olika träningsnivåer'
      },
      {
        name: 'Gummiband Med Handtag',
        link: 'https://www.gymgrossisten.com/exertube-eco-traningsband-med-handtag/37356R.html',
        description: 'Gummiband med handtag för hemmaträning'
      }
    ]
  },
  'traningsprogram-4-ggr': {
    id: 'traningsprogram-4-ggr',
    title: 'Träningsprogram 4 gånger i veckan',
    subtitle: '8-veckors program för avancerad träning',
    price: 449,
    description: 'Fyra välplanerade pass per vecka för dig som vill ta nästa steg – variation av styrka, core och kondition. Både hemma & gymvänligt.',
    longDescription: `
      <p>Detta avancerade program är skapat för dig som vill ta sin träning till nästa nivå. Genom intensiv träning kommer du att:</p>
      <ul>
        <li>Bygga styrka och kondition</li>
        <li>Förbättra core-styrka</li>
        <li>Minska risken för skador</li>
        <li>Förbättra allmän hälsa</li>
      </ul>
      <p>Programmet innehåller:</p>
      <ul>
        <li>8 veckors intensivt träningsschema</li>
        <li>Detaljerade övningsbeskrivningar med bilder</li>
        <li>Videoinstruktioner för alla övningar</li>
        <li>Teoretiskt ramverk och förklaringar</li>
        <li>Skadepreventiva övningar</li>
        <li>Mobilitets- och rörlighetsprogram</li>
      </ul>
    `,
    features: [
      '8 veckors intensivt schema',
      'Videoinstruktioner för alla övningar',
      'Teoretiskt ramverk ingår',
      'Skadepreventiva övningar',
      'Mobilitets- och rörlighetsprogram',
      'Lätt att följa format',
      'Både hemma & gymvänligt',
      'Evidensbaserat program'
    ],
    duration: '8 veckor',
    level: 'Erfaren',
    delivery: 'Digitalt (PDF + videos)',
    image: traningsprogram3ggr,
    swishNumber: '123 456 7890',
    swishMessage: 'TRÄNING4GGR',
    equipment: [
      'Tillgång till gym eller hemmagym med hantlar/skivstång',
      'Vikter upp till 60kg (kvinnor) / 80kg (män)'
    ],
    affiliateProducts: [
      {
        name: 'Justerbara Hantlar Premium',
        link: 'https://gymkompaniet.se/nuo-athletics-nuobell-set-2-32kg-parvis?___store=default',
        description: 'Högkvalitativt justerbart hantelset 2-32kg per hantel'
      },
      {
        name: 'Justerbara Hantlar Kostnadseffektivt',
        link: 'https://www.gymgrossisten.com/bowflex-selecttech-552i/373384.html',
        description: 'Kostnadseffektivt justerbart hantelset 2-24kg per hantel'
      }
    ]
  }
  // Fler program kan läggas till här
};

const ProgramDetailPage = () => {
  const { programId } = useParams();
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  
  const program = programData[programId];
  
  if (!program) {
    return (
      <div className="program-detail-page program-detail-isolated">
        <div className="container program-detail-container">
          <h1>Program hittades inte</h1>
          <Link to="/program" className="back-link">← Tillbaka till alla program</Link>
        </div>
      </div>
    );
  }

  const handlePayment = (method) => {
    setPaymentMethod(method);
    setShowPaymentOptions(true);
  };

  const handleSwishPayment = () => {
    // Här skulle vi implementera Swish-betalning
    alert(`Swish ${program.price} kr till ${program.swishNumber} med meddelande: ${program.swishMessage}`);
  };

  const handleCardPayment = () => {
    // Här skulle vi implementera kortbetalning
    alert('Kortbetalning kommer att implementeras här');
  };

  return (
    <div className="program-detail-page program-detail-isolated">
      <div className="container program-detail-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/program">Program</Link>
          <span>→</span>
          <span>{program.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-image">
            <img src={program.image} alt={program.title} />
          </div>
          <div className="hero-content">
            <h1 className="program-title">{program.title}</h1>
            <p className="program-subtitle">{program.subtitle}</p>
            <div className="price-section">
              <span className="current-price">{program.price} kr</span>
            </div>
            <p className="program-description">{program.description}</p>
            <button 
              className="buy-button"
              onClick={() => setShowPaymentOptions(true)}
            >
              Köp nu för {program.price} kr
            </button>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentOptions && (
          <div className="payment-modal-overlay" onClick={() => setShowPaymentOptions(false)}>
            <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Välj betalningsmetod</h2>
              <div className="payment-options">
                <button 
                  className="payment-option swish-option"
                  onClick={handleSwishPayment}
                >
                  <Smartphone className="icon" />
                  <div>
                    <h3>Swish</h3>
                    <p>Snabb och enkel betalning</p>
                  </div>
                </button>
                <button 
                  className="payment-option card-option"
                  onClick={handleCardPayment}
                >
                  <CreditCard className="icon" />
                  <div>
                    <h3>Kortbetalning</h3>
                    <p>Betala med kort</p>
                  </div>
                </button>
              </div>
              <button 
                className="close-button"
                onClick={() => setShowPaymentOptions(false)}
              >
                Stäng
              </button>
            </div>
          </div>
        )}

        {/* Program Details */}
        <div className="program-details">
          <div className="details-grid">
            <div className="main-content">
              <h2>Om programmet</h2>
              <div 
                className="long-description"
                dangerouslySetInnerHTML={{ __html: program.longDescription }}
              />
              
              <h2>Vad du får</h2>
              <div className="features-grid">
                {program.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <h2>Utrustningskrav</h2>
              <div className="equipment-section">
                <p className="equipment-intro">
                  För att kunna genomföra detta program effektivt behöver du följande utrustning:
                </p>
                <div className="equipment-list">
                  {program.equipment && program.equipment.map((item, index) => (
                    <div key={index} className="equipment-item">
                      <CheckCircle className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                {program.affiliateProducts && program.affiliateProducts.length > 0 && (
                  <div className="affiliate-section">
                    <h3>Rekommenderade produkter</h3>
                    <p>Vi rekommenderar följande produkter för att få bästa resultat:</p>
                    <div className="affiliate-products">
                      {program.affiliateProducts.map((product, index) => (
                        <div key={index} className="affiliate-product">
                          <a 
                            href={product.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="affiliate-link"
                          >
                            <span className="product-name">{product.name}</span>
                            <ExternalLink className="external-link-icon" />
                          </a>
                          <p className="product-description">{product.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="affiliate-footer">
                      <Link to="/rekommenderade-produkter" className="view-all-products-link">
                        Se alla rekommenderade produkter →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="sidebar">
              <div className="info-card">
                <h3>Programinformation</h3>
                <div className="info-item">
                  <strong>Längd:</strong> {program.duration}
                </div>
                <div className="info-item">
                  <strong>Nivå:</strong> {program.level}
                </div>
                <div className="info-item">
                  <strong>Leverans:</strong> {program.delivery}
                </div>
              </div>
              
              <div className="purchase-card">
                <h3>Köp programmet</h3>
                <div className="price-display">
                  <span className="current-price">{program.price} kr</span>
                </div>
                <button 
                  className="buy-button-full"
                  onClick={() => setShowPaymentOptions(true)}
                >
                  Köp nu
                </button>
                <p className="guarantee">
                  ✓ 14 dagars öppet köp<br/>
                  ✓ Direkt leverans<br/>
                  ✓ Livstidsåtkomst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage; 