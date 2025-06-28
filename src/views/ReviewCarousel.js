import React, { useState, useEffect, useRef } from 'react';
import './ReviewCarousel.css';

const reviews = [
  {
    text: `Recently went to Adam for a muscle strain. He gave me exercises which gave immediate relief, and followed up with a professional pdf explaining them with photos. Great service!`,
    author: 'L. McDonald'
  },
  {
    text: `Fantastiskt bra ställe! Adam har varit otroligt engagerad och följt upp ändra fram tills skadan var helt läkt. Rekommenderar varmt!”`,
    author: 'H. Källgren'
  },
  {
    text: `Woke up one day with 30-40% mobility in my left arm, without any known reason except for long working hours in front of the computer. Booked an appointment with Adam H, that has systematically and methodically helped me build back my strength and flexibility to now being fully recovered”`,
    author: 'Pancrase'
  },
  {
    text: `Fantastiskt bra klinik, besökte Fysioterapeut Anton som är engagerad och kunnig, samt utför ultraljud av min meniskskada i ett knä som jag haft. Efteråt följer han upp och frågar hur det gått med min knäoperation som jag gjort. Fått bra övningar både under och efter behandling hos honom, som varit bra för mig.\nKan varmt rekommendera`,
    author: 'E-L Johansson'
  },
  {
    text: `The best fysioterapeut, attentive, good in listening to the patient, good recommendations and training with the best results`,
    author: 'I. Faal'
  }
];

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('right');
  const timeoutRef = useRef(null);

  const prevReview = () => {
    setDirection('left');
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setDirection('right');
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  // Auto-advance every 12 seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection('right');
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 12000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="review-carousel-section styled-bg">
      <div className="review-carousel-header-row">
        <h2 className="review-carousel-title">Vad våra kunder säger</h2>
        <div className="review-carousel-arrows">
          <button className="carousel-arrow outline left" onClick={prevReview} aria-label="Föregående omdöme">&#8592;</button>
          <button className="carousel-arrow outline right" onClick={nextReview} aria-label="Nästa omdöme">&#8594;</button>
        </div>
      </div>
      <div className="review-carousel-slider">
        <div className={`review-card slide-${direction}`} key={current}>
          <p className="review-text">“{reviews[current].text}”</p>
          <div className="review-author">- {reviews[current].author}</div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel; 