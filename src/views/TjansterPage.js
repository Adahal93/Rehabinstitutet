import React from 'react';
import { Link } from 'react-router-dom';
import './OmOssPage.css';

const TjansterPage = () => {
  return (
    <div className="omoss-root">
      <div className="omoss-container">
        <h1 className="omoss-title">Våra Tjänster</h1>
        <p className="omoss-intro">
          Vi erbjuder ett brett utbud av rehabiliteringstjänster anpassade för både privatpersoner och företag. 
          Alla våra tjänster bygger på evidensbaserad forskning och vår erfarenhet inom fysioterapi.
        </p>
        
        <div className="omoss-grid" style={{gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '900px', margin: '0 auto'}}>
          <div className="omoss-card">
            <h3>Online Coaching</h3>
            <p>
              Få professionell hjälp av en av våra fysioterapeuter – var du än är. 
              Flexibelt och effektivt alternativ till traditionella rehabiliteringskonsultationer.
            </p>
            <Link to="/onlinebesok" className="omoss-btn omoss-btn-small">Läs mer om Online Coaching</Link>
          </div>
          
          <div className="omoss-card">
            <h3>Ergonomiföreläsning</h3>
            <p>
              Ergonomigenomgång för en bättre arbetsmiljö. Förebygg överbelastningsbesvär 
              och förbättra produktiviteten hos dina anställda med rätt verktyg.
            </p>
            <Link to="/ergonomi" className="omoss-btn omoss-btn-small">Läs mer om Ergonomi</Link>
          </div>
          
          <div className="omoss-card">
            <h3>Hemrehab</h3>
            <p>
              Rehabilitering i hemmet - professionell hjälp där du är. Vi kommer hem till dig 
              och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.
            </p>
            <Link to="/hemrehab" className="omoss-btn omoss-btn-small">Läs mer om Hemrehab</Link>
          </div>
          
          <div className="omoss-card">
            <h3>Tränings- & rehabiliteringsprogram</h3>
            <p>
              Våra digitala rehabiliteringsprogram är framtagna för dig som vill återfå eller förbättra 
              styrka, rörlighet och funktion i en frisk eller skadad kroppsdel.
            </p>
            <Link to="/program" className="omoss-btn omoss-btn-small">Läs mer om Program</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TjansterPage; 