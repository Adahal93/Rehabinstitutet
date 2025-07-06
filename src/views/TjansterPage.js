import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OmOssPage.css';
import './TjansterPage.css';
import tjansterHero from '../assets/images/tjanster_hero.png';
import { PriceListMini } from './CodepenPriceTable';
import hantelImg from '../assets/images/hantel.png';
import screenImg from '../assets/images/screen.png';
import stockholmImg from '../assets/images/stockholm.png';
import ergonomicsImg from '../assets/images/ergonomics.png';

const services = [
  {
    title: 'Online Coaching',
    description: 'Få professionell hjälp av en av våra fysioterapeuter – var du än är. Flexibelt och effektivt alternativ till traditionella rehabiliteringskonsultationer.',
    link: '/onlinebesok',
    linkText: 'Läs mer om Online Coaching',
    icon: screenImg,
    size: 'large',
    color: 'blue',
    features: ['Flexibel tid', 'Var som helst', 'Professionell hjälp']
  },
  {
    title: 'Ergonomi',
    description: 'Ergonomigenomgång för en bättre arbetsmiljö. Förebygg överbelastningsbesvär och förbättra produktiviteten hos dina anställda med rätt verktyg.',
    link: '/ergonomi',
    linkText: 'Läs mer om Ergonomi',
    icon: ergonomicsImg,
    size: 'medium',
    color: 'green',
    features: ['Förebyggande', 'Arbetsmiljö', 'Teoretiskt och praktiskt']
  },
  {
    title: 'Hemrehab',
    description: 'Rehabilitering i hemmet - professionell hjälp där du är. Vi kommer hem till dig och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.',
    link: '/hemrehab',
    linkText: 'Läs mer om Hemrehab',
    icon: stockholmImg,
    size: 'large',
    color: 'orange',
    features: ['Stockholm City', 'Skräddarsytt', 'Funktionsbedömning']
  },
  {
    title: 'Tränings- & rehabiliteringsprogram',
    description: 'Våra digitala rehabiliteringsprogram är framtagna för dig som vill återfå eller förbättra styrka, rörlighet och funktion i en frisk eller skadad kroppsdel.',
    link: '/program',
    linkText: 'Läs mer om Program',
    icon: hantelImg,
    size: 'medium',
    color: 'purple',
    features: ['Digitalt', 'Evidensbaserat', 'Utarbetat av Fysioterapeuter']
  },
];

const TjansterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainService = services.find(s => s.title === 'Tränings- & rehabiliteringsprogram');
  const otherServices = services.filter(s => s.title !== 'Tränings- & rehabiliteringsprogram');

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
        {/* Top main service */}
        <div className="tjanster-featured-row">
          <div className={`tjanster-featured-card tjanster-masonry-card tjanster-masonry-card-${mainService.color}`}> 
            <div className="tjanster-masonry-card-header">
              <div className="tjanster-masonry-icon"><img src={mainService.icon} alt="" className="tjanster-masonry-img-icon" /></div>
              <h3 className="tjanster-masonry-title">{mainService.title}</h3>
            </div>
            <p className="tjanster-masonry-desc">{mainService.description}</p>
            <div className="tjanster-masonry-features">
              {mainService.features.map((feature, featureIdx) => (
                <span key={featureIdx} className="tjanster-masonry-feature">
                  {feature}
                </span>
              ))}
            </div>
            <Link to={mainService.link} className="tjanster-masonry-btn">
              {mainService.linkText}
              <span className="tjanster-masonry-btn-arrow">→</span>
            </Link>
          </div>
        </div>
        {/* Grid for other services */}
        <div className="tjanster-row-grid">
          {otherServices.map((service, idx) => (
            <div 
              className={`tjanster-row-card tjanster-masonry-card tjanster-masonry-card-${service.color}`} 
              key={idx}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="tjanster-masonry-card-header">
                <div className="tjanster-masonry-icon"><img src={service.icon} alt="" className="tjanster-masonry-img-icon" /></div>
                <h3 className="tjanster-masonry-title">{service.title}</h3>
              </div>
              <p className="tjanster-masonry-desc">{service.description}</p>
              {/* Remove price list for Online Coaching */}
              {/* {service.title === 'Online Coaching' && (
                <div style={{ margin: '18px 0 10px 0' }}>
                  <PriceListMini />
                </div>
              )} */}
              <div className="tjanster-masonry-features">
                {service.features.map((feature, featureIdx) => (
                  <span key={featureIdx} className="tjanster-masonry-feature">
                    {feature}
                  </span>
                ))}
              </div>
              <Link to={service.link} className="tjanster-masonry-btn">
                {service.linkText}
                <span className="tjanster-masonry-btn-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TjansterPage; 