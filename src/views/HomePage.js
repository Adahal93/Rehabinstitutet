// src/Views/HomePage.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import img1 from '../assets/images/rehabinstitutet_skiing_v1.png';
import img2 from '../assets/images/skiing_woman.png';
import img3 from '../assets/images/running_woman.png';
import img4 from '../assets/images/walking_woman.png';
import img5 from '../assets/images/stretching_woman.png';
import img6 from '../assets/images/strength_train_man.png';
import styrketraningImg from '../assets/images/styrketräning_för_löpare.png';
import logotype from '../assets/images/logotype_chatgpt.png';
import './HomePage.css';
import ContactSection from './ContactSection';
import ReviewCarousel from './ReviewCarousel';

const images = [img1, img2, img3, img4, img5, img6];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="hero-image-carousel-container">
        <div className="hero-overlay-text">
          Träning, utbildning och rehabilitering
        </div>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Hero ${idx + 1}`}
            className={`carousel-image${current === idx ? ' active' : ''}`}
            style={{
              opacity: current === idx ? 1 : 0,
              zIndex: current === idx ? 2 : 1
            }}
          />
        ))}
      </div>
      
      <section className="welcome-section">
        <div className="welcome-text">
          <h2>Träningsprogram online – utvecklade av legitimerad fysioterapeut</h2>
          <p>
            Våra digitala rehabiliteringsprogram är framtagna för dig som vill återfå eller förbättra styrka, rörlighet och funktion i en frisk eller skadad kroppsdel.
          </p>
          <p>
            Programmen riktar sig till vanliga besvär i leder och senor, som bland annat axel, knä, höft eller fot, och passar både nybörjare och dig med tidigare träningsvana.<br/>
            Varje program innehåller ett tydligt teoretiskt ramverk, evidensbaserade övningar och instruktiva videoklipp som guidar dig steg för steg.<br/>
            Innehållet bygger på beprövad erfarenhet och aktuell forskning inom fysioterapi och träning.<br/>
            Många användare upplever förbättring redan inom några veckor – trots tidigare misslyckade försök.
          </p>
        </div>
        <div className="welcome-image-frame">
          <div className="welcome-image-bg" />
          <img src={styrketraningImg} alt="Styrketräning för löpare" className="welcome-image" />
        </div>
      </section>
      <div className="cafe-homepage">
        {/* Your homepage content here */}
      </div>
      <ReviewCarousel />
      <ContactSection />
    </>
  );
};

export default HomePage;