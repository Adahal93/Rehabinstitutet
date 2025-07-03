import React, { useState, useEffect } from 'react';
import './ErgonomiPage.css';
import './HemrehabPage.css';
import hemrehab3 from '../assets/images/hemrehab3.png';
import hemrehab4 from '../assets/images/hemrehab4.png';
import { useNavigate } from 'react-router-dom';

const HemrehabPage = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [hemrehab3, hemrehab4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('scrollToContact', 'true');
    navigate('/');
  };

  return (
    <div className="ergonomi-page">
      <div className="ergonomi-hero">
        <div className="ergonomi-hero-content">
          <h1 className="ergonomi-title">Hemrehab</h1>
          <h2 className="ergonomi-subtitle">Rehabilitering i hemmet - professionell hjälp där du är</h2>
        </div>
        <div className="ergonomi-hero-image">
          <div className="hemrehab-carousel">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Hemrehab ${idx + 1}`}
                className={`carousel-image${currentImage === idx ? ' active' : ''}`}
                style={{
                  opacity: currentImage === idx ? 1 : 0,
                  zIndex: currentImage === idx ? 2 : 1
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="ergonomi-content">
        <div className="ergonomi-text-section">
          <p className="ergonomi-intro">
            Är du eller någon närstående i behov utav rehab i hemmet? Vi på Rehabinstitutet erbjuder privat hemrehab inom Stockholms stad.
          </p>
          
          <div className="ergonomi-warning-section" style={{
            backgroundColor: '#fef3f2',
            border: '2px solid #fecaca',
            borderRadius: '12px',
            padding: '32px',
            margin: '40px 0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              color: '#dc2626',
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Varför rätt rehabilitering i hemmet gör skillnad
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#374151',
              marginBottom: '16px'
            }}>
              Bakom varje operation finns en önskan om att återfå rörlighet och självständighet. Men utan rätt stöd i återhämtningen riskerar många att falla tillbaka. Studier visar att upp till 30 % av äldre patienter faller inom tre månader efter en höft- eller knäoperation – ofta på grund av nedsatt styrka, balans och bristande uppföljning (M. Sterling et al 2020)
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#374151'
            }}>
              Det kan leda till nya frakturer, minskad rörlighet och ett ökat beroende av hjälpmedel – ibland till och med isolering i hemmet. Tyvärr kan sedvanlig hemrehab ofta vara bristfällig och vi ser ofta att patienter inte belastas tillräckligt tungt och ofta för att bygga ordentligt med muskelmassa. Med rätt rehabilitering kan vi motverka katastrof och hjälpa dig bygga upp styrka och trygghet på plats i ditt eget hem.
            </p>
          </div>
          
          <p style={{marginBottom: '20px', fontStyle: 'italic', fontWeight: '600', color: '#374151', textAlign: 'center'}}>
            Tjänsten är helt privat och täcks inte av högkostnadsskyddet.
          </p>
          
          <button className="ergonomi-highlight" onClick={handleContactClick}>
            Skicka en förfrågan över mejl så återkommer vi till dig inom kort med mer information.
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <section className="ergonomi-process" aria-labelledby="hemrehab-kontakt">
            <h2 id="hemrehab-kontakt" style={{fontSize: '1.8rem', fontWeight: '700', color: '#1f2937', marginBottom: '24px'}}>
              Privat Hemrehab Stockholm - Kontakta Oss
            </h2>
            <div style={{backgroundColor: '#f8fafc', padding: '28px', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', marginBottom: '20px'}}>
                Har du svårt att ta dig till rehabilitering eller föredrar att inte lämna hemmet? Vi på <strong>Rehabinstitutet</strong> erbjuder <strong>privat hemrehab i Stockholm City</strong> för personer som behöver stöd i sin återhämtning, oavsett om du genomgått en omfattande <strong>höftoperation</strong> eller <strong>knäoperation</strong> som <strong>knäplastik</strong> eller <strong>höftplastik</strong>, lider av långvariga besvär eller helt enkelt inte vill ta dig hemifrån för rehabiliteringen.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', marginBottom: '20px'}}>
                Våra erfarna <strong>fysioterapeuter</strong> kommer hem till dig och skapar ett <strong>skräddarsytt träningsprogram</strong> för att förbättra rörlighet, styrka och funktion. Vår <strong>hemrehab Stockholm</strong> service täcker hela Stockholms stad och ger dig professionell rehabilitering i din egen miljö.
              </p>
                              <div style={{backgroundColor: '#dbeafe', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #3b82f6'}}>
                  <h3 style={{fontSize: '1.3rem', fontWeight: '600', color: '#1e40af', marginBottom: '12px', textAlign: 'left'}}>
                    Varför välja vår hemrehab?
                  </h3>
                  <ul style={{margin: '0', paddingLeft: '20px', textAlign: 'left'}}>
                    <li style={{marginBottom: '8px', color: '#374151', textAlign: 'left'}}>Professionell fysioterapi i hemmet</li>
                    <li style={{marginBottom: '8px', color: '#374151', textAlign: 'left'}}>Skräddarsytt rehabiliteringsprogram</li>
                    <li style={{marginBottom: '8px', color: '#374151', textAlign: 'left'}}>Erfarna fysioterapeuter</li>
                    <li style={{marginBottom: '8px', color: '#374151', textAlign: 'left'}}>Flexibel schemaläggning</li>
                  </ul>
                </div>
            </div>
          </section>
          
          <div className="ergonomi-benefits">
            <h3>Fördelar med vår hemrehab</h3>
            <ul>
              <li>Du behöver inte tänka på utrustning då vi tar med den utrustning som behövs för att genomföra effektiv träning hemma.</li>
              <li>Vi anpassar också övningarna efter dina specifika behov.</li>
              <li>Med vår hemrehab får du den individuella uppmärksamheten och det stöd du behöver för att återhämta dig på bästa sätt, utan att behöva lämna hemmet.</li>
              <li>Rehabiliteringen kan inkludera mobilisering/stretching av en led eller muskel, styrketräning av relevanta områden och vid behov gångträning eller annan specifik träning.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemrehabPage; 