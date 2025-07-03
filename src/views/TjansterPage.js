import React from 'react';
import { Link } from 'react-router-dom';
import './OmOssPage.css';
import './TjansterPage.css';
import tjansterHero from '../assets/images/tjanster_hero.png';

const services = [
  {
    title: 'Online Coaching',
    description: 'Få professionell hjälp av en av våra fysioterapeuter – var du än är. Flexibelt och effektivt alternativ till traditionella rehabiliteringskonsultationer.',
    link: '/onlinebesok',
    linkText: 'Läs mer om Online Coaching',
  },
  {
    title: 'Ergonomiföreläsning',
    description: 'Ergonomigenomgång för en bättre arbetsmiljö. Förebygg överbelastningsbesvär och förbättra produktiviteten hos dina anställda med rätt verktyg.',
    link: '/ergonomi',
    linkText: 'Läs mer om Ergonomi',
  },
  {
    title: 'Hemrehab',
    description: 'Rehabilitering i hemmet - professionell hjälp där du är. Vi kommer hem till dig och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.',
    link: '/hemrehab',
    linkText: 'Läs mer om Hemrehab',
  },
  {
    title: 'Tränings- & rehabiliteringsprogram',
    description: 'Våra digitala rehabiliteringsprogram är framtagna för dig som vill återfå eller förbättra styrka, rörlighet och funktion i en frisk eller skadad kroppsdel.',
    link: '/program',
    linkText: 'Läs mer om Program',
  },
];

const TjansterPage = () => {
  return (
    <div className="tjanster-root">
      {/* Hero Section */}
      <div className="tjanster-hero">
        <div className="tjanster-hero-overlay">
          <div className="tjanster-hero-content">
            <h1 className="tjanster-hero-title">Våra Tjänster</h1>
            <p className="tjanster-hero-subtitle">
              Professionell rehabilitering anpassad för dig - oavsett var du befinner dig i din återhämtningsresa
            </p>
          </div>
        </div>
        <img src={tjansterHero} alt="Rehabinstitutet tjänster" className="tjanster-hero-image" />
      </div>

      {/* Main Content */}
      <div className="tjanster-container">
        <div className="tjanster-intro">
          <p>
            Vi erbjuder ett brett utbud av rehabiliteringstjänster anpassade för både privatpersoner och företag. 
            Alla våra tjänster bygger på evidensbaserad forskning och vår erfarenhet inom fysioterapi.
          </p>
        </div>
        <div className="tjanster-grid tjanster-grid-modern">
          {services.map((service, idx) => (
            <div className="tjanster-modern-card" key={idx}>
              <h3 className="tjanster-modern-title">{service.title}</h3>
              <p className="tjanster-modern-desc">{service.description}</p>
              <Link to={service.link} className="tjanster-modern-btn">{service.linkText}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TjansterPage; 