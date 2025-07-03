import React from 'react';
import './ErgonomiPage.css';
import ergonomiImage from '../assets/images/ergonomi.png';
import { useNavigate } from 'react-router-dom';

const ErgonomiPage = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    // Spara i sessionStorage att vi vill scrolla till kontakt
    window.sessionStorage.setItem('scrollToContact', 'true');
    navigate('/');
  };

  return (
    <div className="ergonomi-page">
      <div className="ergonomi-hero">
        <div className="ergonomi-hero-content">
          <h1 className="ergonomi-title">Ergonomi</h1>
          <h2 className="ergonomi-subtitle">Ergonomigenomgång för en bättre arbetsmiljö</h2>
        </div>
        <div className="ergonomi-hero-image">
          <img src={ergonomiImage} alt="Ergonomi och arbetsmiljö" />
        </div>
      </div>
      
      <div className="ergonomi-content">
        <div className="ergonomi-text-section">
          <p className="ergonomi-intro">
            Förebygg överbelastningsbesvär och förbättra produktiviteten hos dina anställda med rätt verktyg. Våra fysioterapeuter ger praktiska råd om arbetsställning och ergonomiska lösningar samt råd om träning, pauser och stress för att minska smärta i nacke, rygg och axlar. Boka en arbetsplatsanalys och ergonomiföreläsning idag och investera i en hälsosam arbetsmiljö!
          </p>
          
          <button className="ergonomi-highlight" onClick={handleContactClick}>
            Kontakta oss idag för diskussion kring upplägg och pris!
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="ergonomi-process">
            <h3>Vårt upplägg</h3>
            <p>
              Oftast inleds besöket med en föreläsning om ergonomi, stress, smärta och träning som sedan följs upp av en arbetsplatsanalys för varje anställd. Men givetvis anpassar vi upplägget utifrån era behov och önskemål.
            </p>
          </div>
          
          <div className="ergonomi-benefits">
            <h3>Fördelar med vår ergonomigenomgång</h3>
            <ul>
              <li>Baserat på senaste forskningen inom ergonomi och hälsa</li>
              <li>Ökad kunskap om hur man kan förebygga överbelastningsbesvär</li>
              <li>Praktiska råd för rätt arbetsställning</li>
              <li>Ergonomiska lösningar anpassade för er verksamhet</li>
              <li>Strategier för träning, pauser och stresshantering</li>
              <li>Vetenskapligt grundad information om stress, träning och smärta</li>
              <li>Minskad smärta i nacke, rygg och axlar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErgonomiPage; 