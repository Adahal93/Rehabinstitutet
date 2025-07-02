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
          
          <div className="ergonomi-process">
            <h3>Kontakt</h3>
            <p>
              Har du svårt att ta dig till rehabilitering eller föredrar att inte lämna hemmet? Vi erbjuder privat hemrehab för personer som behöver stöd i sin återhämtning, oavsett om du genomgått en omfattande höft- eller knäoperation som knäplastik eller höftplastik, lider av långvariga besvär eller helt enkelt inte vill ta dig hemifrån för rehabiliteringen. Våra erfarna fysioterapeuter kommer hem till dig och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.
            </p>
          </div>
          
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