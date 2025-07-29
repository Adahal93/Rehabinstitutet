import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Download, CreditCard, Smartphone } from 'lucide-react';
import './ProgramDetailPage.css';
import styrketraningForLopare from '../assets/images/styrketräning_för_löpare.png';
import hamstringprogrammet from '../assets/images/hamstringprogrammet.png';

// Program data - this could be moved to a separate file later
const programData = {
  'styrketraning-for-lopare': {
    id: 'styrketraning-for-lopare',
    title: 'Styrketräning för löpare',
    subtitle: '12-veckors program för förbättrad löpekonomi och skadeprevention',
    price: 399,
    originalPrice: 599,
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
    swishMessage: 'STYRKELOPARE'
  },
  'hamstringprogrammet': {
    id: 'hamstringprogrammet',
    title: 'Hamstringprogrammet',
    subtitle: '12-veckors program för att bli av med hamstringtendinopatier',
    price: 449,
    originalPrice: 649,
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
    swishMessage: 'HAMSTRING'
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
              <span className="original-price">{program.originalPrice} kr</span>
              <span className="discount">Spara {program.originalPrice - program.price} kr</span>
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
                  <span className="original-price">{program.originalPrice} kr</span>
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