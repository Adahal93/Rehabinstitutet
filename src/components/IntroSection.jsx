import React, { useState, useEffect, useCallback } from 'react';
import './IntroSection.css';
import styrketraningForLopare from '../assets/images/styrketräning_för_löpare.png';
import runningWoman from '../assets/images/running_woman.png';
import skiingWoman from '../assets/images/skiing_woman.png';
import stretchingWoman from '../assets/images/stretching_woman.png';
import walkingWoman from '../assets/images/walking_woman.png';
import strengthTrainMan from '../assets/images/strength_train_man.png';
import { Link } from 'react-router-dom';
import { scrollToContact } from '../utils/scrollToContact';

const IntroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Recently went to Adam for a muscle strain. He gave me exercises which gave immediate relief, and followed up with a professional pdf explaining them with photos. Great service!",
      author: "L. McDonald"
    },
    {
      text: "Fantastiskt bra ställe! Adam har varit otroligt engagerad och följt upp ändra fram tills skadan var helt läkt. Rekommenderar varmt!",
      author: "H. Källgren"
    },
    {
      text: "Woke up one day with 30-40% mobility in my left arm, without any known reason except for long working hours in front of the computer. Booked an appointment with Adam H, that has systematically and methodically helped me build back my strength and flexibility to now being fully recovered",
      author: "Pancrase"
    },
    {
      text: "Fantastiskt bra klinik, besökte Fysioterapeut Anton som är engagerad och kunnig, samt utför ultraljud av min meniskskada i ett knä som jag haft. Efteråt följer han upp och frågar hur det gått med min knäoperation som jag gjort. Fått bra övningar både under och efter behandling hos honom, som varit bra för mig. Kan varmt rekommendera",
      author: "E-L Johansson"
    },
    {
      text: "The best fysioterapeut, attentive, good in listening to the patient, good recommendations and training with the best results",
      author: "I. Faal"
    }
  ];

  // HERO IMAGE CAROUSEL STATE
  const heroImages = [
    strengthTrainMan,
    runningWoman,
    skiingWoman,
    stretchingWoman,
    walkingWoman
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 12000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Scroll to contact section if flag is set (for cross-page smooth scroll)
  useEffect(() => {
    if (window.sessionStorage.getItem('scrollToContact')) {
      window.sessionStorage.removeItem('scrollToContact');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  return (
    <div className="bg-white text-black min-h-screen transition duration-500">
      {/* Hero Section */}
      <section className="relative flex min-h-70vh sm-min-h-80vh sm-py-28 animate-fade-in-up pt-12 pb-12 items-center justify-center overflow-hidden">
        {/* Hero background image carousel */}
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero background"
            className={`hero-bg-img transition duration-1000 ${idx === currentHeroImage ? 'opacity-100 z-neg-10' : 'opacity-0 z-neg-20'}`}
            style={{ position: 'absolute', inset: 0, transition: 'opacity 1s', pointerEvents: 'none' }}
          />
        ))}
        <div className="absolute inset-0 pointer-events-none select-none z-neg-10">
          <div className="absolute top-neg-24 right-neg-24 w-80 h-80 bg-gradient-tr from-light-green-40 to-green-10 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-br from-light-green-70 to-green-10 rounded-full blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
            <h1 className="sm-text-6xl md-text-7xl lg-text-5rem leading-105 animate-fade-in-up text-5xl font-semibold tracking-tight text-white" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.45)' }}>
              Din partner för <span className="font-semibold text-white">träning, utbildning </span> & <span className="font-sans font-semibold text-white">rehabilitering</span>
            </h1>
            <p className="sm-text-lg md-text-xl max-w-2xl leading-relaxed animate-fade-in-up text-base text-white mr-auto ml-auto">
              Vi erbjuder träningsprogram, utbildning och rehabilitering för både privatpersoner och företag. Vårt team av experter hjälper dig att nå dina mål, oavsett nivå eller bakgrund.
            </p>
            <div className="mt-6 flex flex-col sm-flex-row justify-center gap-4 animate-fade-in-up">
              <a href="/tjanster" className="px-8 py-3 bg-green text-white hover-bg-black border border-green rounded-lg font-semibold tracking-wider text-lg shadow-xl transition duration-300 outline-none focus-ring-2 focus-ring-green-40 font-sans" style={{textDecoration: 'underline'}}>
                Utforska våra tjänster
              </a>
              <a href="#contact" className="px-8 py-3 bg-white text-green hover-bg-green hover-text-white border border-green rounded-lg font-semibold tracking-wider text-lg shadow-xl transition duration-300 outline-none focus-ring-2 focus-ring-green-40 font-sans" onClick={e => {
                e.preventDefault();
                scrollToContact();
              }}>
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 center-abs-x" style={{cursor: 'pointer'}} onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl shadow-xl border border-gray-100 card-gradient overflow-hidden flex flex-col md-flex-row animate-fade-in-up">
            {/* Left: Text */}
            <div className="w-full md-w-half p-8 md-p-12 flex flex-col justify-center animate-fade-in-up">
              <h2 className="text-2xl sm-text-3xl lg-text-4xl font-semibold tracking-tight text-black mb-4 font-sans">
                Träningsprogram online – utvecklade av legitimerad fysioterapeut
              </h2>
              <p className="text-gray-700 text-base sm-text-lg leading-relaxed font-normal">
                Våra digitala rehabiliteringsprogram är framtagna för dig som vill återfå eller förbättra styrka, rörlighet och funktion i en frisk eller skadad kroppsdel.
                <br /><br />
                Programmen riktar sig till vanliga besvär i leder och senor, som bland annat axel, knä, höft eller fot, och passar både nybörjare och dig med tidigare träningsvana. Varje program innehåller ett tydligt teoretiskt ramverk, evidensbaserade övningar och instruktiva videoklipp som guidar dig steg för steg. Innehållet bygger på beprövad erfarenhet och aktuell forskning inom fysioterapi och träning. Många användare upplever förbättring redan inom några veckor – trots tidigare misslyckade försök.
              </p>
            </div>
            {/* Right: Image */}
            <div className="w-full md-w-half relative flex items-center justify-center bg-white animate-fade-in-up">
              <div className="absolute inset-0 z-neg-10 flex items-center justify-center">
                <div className="w-80 h-80 rounded-3xl bg-gradient-tr from-light-green-60 to-green-10 blur-2xl opacity-60 shadow-2xl"></div>
              </div>
              <img 
                src={styrketraningForLopare}
                alt="Styrketräning för löpare" 
                className="w-full max-w-md object-contain rounded-2xl shadow-2xl border border-gray-100 transition hover-scale-105 hover-shadow-3xl duration-300 outline-none bg-white" 
                style={{zIndex: 1, background: '#fff'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-title" className="w-full py-10 testimonials-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="w-full border-t border-gray-100 mb-8 testimonials-divider"></div>
            <h2 id="testimonials-title" className="text-3xl sm-text-4xl font-semibold tracking-tight text-black text-center mb-2 font-sans animate-fade-in-up">
              Vad våra klienter säger
            </h2>
            <div className="testimonials-quote-icon" aria-hidden="true">“</div>
            <div className="testimonials-flex-row">
              <button 
                onClick={prevTestimonial}
                type="button" 
                aria-label="Föregående omdöme" 
                className="testimonials-arrow-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 testimonials-arrow-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <div className="relative flex-1 flex justify-center items-center min-h-220px testimonials-quote-bg">
                <div aria-live="polite" className="w-full text-center">
                  <p className="testimonials-quote-text">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="testimonials-quote-author">
                    – {testimonials[currentTestimonial].author}
                  </p>
                </div>
              </div>
              <button 
                onClick={nextTestimonial}
                type="button" 
                aria-label="Nästa omdöme" 
                className="testimonials-arrow-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 testimonials-arrow-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section aria-labelledby="explore-title" className="w-full py-14 explore-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl shadow-xl bg-white border border-gray-100 p-10 md-p-14 transition-all duration-300 explore-inner">
            <h2 id="explore-title" className="text-3xl sm-text-4xl font-semibold tracking-tight text-black text-center mb-2 font-sans">
              Utforska våra tjänster
            </h2>
            <div className="explore-divider"></div>
            <p className="text-green text-base sm-text-lg text-center mb-8 font-normal">
              Vi erbjuder ett brett utbud av tjänster och program för att möta just dina behov.
            </p>
            <div className="explore-grid">
              {/* Ergonomi */}
              <div className="explore-card">
                <div className="explore-card-icon" aria-hidden="true">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>
                </div>
                <h3 className="explore-card-title">Ergonomiföreläsning</h3>
                <p className="explore-card-desc">Föreläsningar & workshops inom ergonomi, arbetsmiljö och hälsa – för företag och organisationer som vill skapa bättre arbetsvanor och förebygga besvär.</p>
                <a href="/ergonomi" className="explore-card-btn">Läs mer</a>
              </div>
              {/* Hemrehab */}
              <div className="explore-card">
                <div className="explore-card-icon" aria-hidden="true">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h3 className="explore-card-title">Hemrehab</h3>
                <p className="explore-card-desc">Rehabilitering i hemmet – professionell hjälp där du är. Vi erbjuder privat hemrehab inom Stockholms stad och skapar ett skräddarsytt träningsprogram för att förbättra rörlighet, styrka och funktion.</p>
                <a href="/hemrehab" className="explore-card-btn">Läs mer</a>
              </div>
              {/* Online Coaching/Rehab */}
              <div className="explore-card">
                <div className="explore-card-icon" aria-hidden="true">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
                </div>
                <h3 className="explore-card-title">Online Coaching/Rehab</h3>
                <p className="explore-card-desc">Personlig coaching och rehabilitering online – anpassade tränings- och rehabupplägg med kontinuerlig uppföljning av fysioterapeut.</p>
                <a href="/onlinebesok" className="explore-card-btn">Läs mer</a>
              </div>
              {/* Tränings- och rehabiliteringsprogram */}
              <div className="explore-card">
                <div className="explore-card-icon" aria-hidden="true">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="9" width="4" height="6" rx="1"/><rect x="18" y="9" width="4" height="6" rx="1"/><rect x="7" y="11" width="10" height="2" rx="1"/></svg>
                </div>
                <h3 className="explore-card-title">Tränings- och rehabiliteringsprogram</h3>
                <p className="explore-card-desc">Digitala program för styrka, rörlighet och rehabilitering – utvecklade av legitimerad fysioterapeut och anpassade efter dina behov och mål.</p>
                <a href="/program" className="explore-card-btn">Läs mer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;