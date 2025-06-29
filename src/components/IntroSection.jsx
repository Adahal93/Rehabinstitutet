import React, { useState, useEffect, useCallback } from 'react';
import './IntroSection.css';

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

  return (
    <div className="bg-white text-black min-h-screen transition duration-500">
      {/* Top Headline */}
      <div className="w-full bg-white border-b border-gray-100 py-3 animate-fade-in-down">
        <div className="container mx-auto px-6">
          <span className="font-semibold headline tracking-tight text-black font-sans">
            Träning, utbildning och rehabilitering
          </span>
        </div>
      </div>

      {/* Navigation */}
      <header className="w-full bg-white backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 animate-fade-in-down">
        <div className="container mx-auto px-6">
          <nav className="py-4 flex justify-between items-center relative">
            <a href="/" className="text-xl font-bold tracking-wider text-green flex items-center gap-2 font-sans">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
              </svg>
              <span className="font-sans uppercase tracking-wider font-semibold text-green">REHABINSTITUTET</span>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md-hidden text-green hover-text-black transition" 
              aria-label="Öppna meny"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div className="hidden md-flex gap-8">
              <a href="/om-oss" className="nav-link relative hover-text-green transition text-sm font-medium text-black tracking-wider">Om Oss</a>
              <a href="/program" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Program</a>
              <a href="/ovningar" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Övningar</a>
              <a href="/kompetens" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Kompetens</a>
              <a href="/tjanster" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Tjänster</a>
              <a href="/kontakt" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Kontakt</a>
            </div>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="md-hidden bg-white backdrop-blur-md border-t border-gray-100 animate-fade-in-down">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="/om-oss" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Om Oss</a>
              <a href="/program" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Program</a>
              <a href="/ovningar" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Övningar</a>
              <a href="/kompetens" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Kompetens</a>
              <a href="/tjanster" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Tjänster</a>
              <a href="/kontakt" className="text-sm tracking-wider py-2 text-black hover-text-green transition font-sans">Kontakt</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-70vh sm-min-h-80vh sm-py-28 animate-fade-in-up pt-12 pb-12 items-center justify-center">
        <div className="absolute inset-0 pointer-events-none select-none z-neg-10">
          <div className="absolute top-neg-24 right-neg-24 w-80 h-80 bg-gradient-tr from-light-green-40 to-green-10 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-br from-light-green-70 to-green-10 rounded-full blur-3xl opacity-60"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-7">
            <h1 className="sm-text-6xl md-text-7xl lg-text-5rem leading-105 animate-fade-in-up text-5xl font-semibold tracking-tight text-black">
              Din partner för <span className="font-semibold text-green">träning, utbildning </span> & <span className="font-sans font-semibold">rehabilitering</span>
            </h1>
            <p className="sm-text-lg md-text-xl max-w-2xl leading-relaxed animate-fade-in-up text-base text-gray-700 mr-auto ml-auto">
              Vi erbjuder träningsprogram, utbildning och rehabilitering för både privatpersoner och företag. Vårt team av experter hjälper dig att nå dina mål, oavsett nivå eller bakgrund.
            </p>
            <div className="mt-6 flex flex-col sm-flex-row justify-center gap-4 animate-fade-in-up">
              <a href="/tjanster" className="px-8 py-3 border border-green text-green hover-bg-green hover-text-white rounded-lg font-semibold tracking-wider text-sm shadow-sm transition duration-300 outline-none focus-ring-2 focus-ring-green-40 font-sans">
                Utforska våra tjänster
              </a>
              <a href="/kontakt" className="px-8 py-3 bg-green text-white hover-bg-black border border-green rounded-lg font-semibold tracking-wider text-sm shadow-sm transition duration-300 outline-none focus-ring-2 focus-ring-green-40 font-sans">
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
        {/* Bouncing Arrow - wrapper for X-centering, bounce on inner */}
        <div className="absolute bottom-8 center-abs-x" style={{cursor: 'pointer'}} onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-light-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" 
                alt="Person som tränar med fysioterapeut" 
                className="w-full max-w-md h-72 object-cover rounded-2xl shadow-2xl border border-gray-100 transition hover-scale-105 hover-shadow-3xl duration-300 outline-none" 
                style={{zIndex: 1}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-title" className="w-full py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="w-full border-t border-gray-100 mb-10"></div>
            <h2 id="testimonials-title" className="text-3xl sm-text-4xl font-semibold tracking-tight text-black text-center mb-2 font-sans animate-fade-in-up">
              Vad våra klienter säger
            </h2>
            <p className="text-green text-base sm-text-lg text-center mb-6 font-normal animate-fade-in-up">
              Omdömen och berättelser från några av våra nöjda klienter
            </p>
            <div className="flex justify-center items-center gap-6 mb-10 animate-fade-in-up">
              <button 
                onClick={prevTestimonial}
                type="button" 
                aria-label="Föregående omdöme" 
                className="group rounded-lg border border-gray-200 bg-white shadow hover-border-green hover-bg-light-green focus-outline-none focus-visible-ring-2 focus-visible-ring-green-40 transition p-2 disabled-opacity-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green group-hover-text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                type="button" 
                aria-label="Nästa omdöme" 
                className="group rounded-lg border border-gray-200 bg-white shadow hover-border-green hover-bg-light-green focus-outline-none focus-visible-ring-2 focus-visible-ring-green-40 transition p-2 disabled-opacity-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green group-hover-text-black transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
            <div className="relative flex justify-center items-center min-h-280px">
              <div aria-live="polite" className="w-full text-center">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-green font-semibold">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section aria-labelledby="explore-title" className="w-full py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl shadow-xl bg-white border border-gray-100 p-10 md-p-14 transition-all duration-300">
            <h2 id="explore-title" className="text-3xl sm-text-4xl font-semibold tracking-tight text-black text-center mb-2 font-sans">
              Utforska våra tjänster
            </h2>
            <p className="text-green text-base sm-text-lg text-center mb-8 font-normal">
              Vi erbjuder ett brett utbud av tjänster och program för att möta just dina behov.
            </p>
            <div className="grid grid-cols-1 sm-grid-cols-2 gap-6 md-gap-8">
              <div className="rounded-xl bg-white hover-bg-light-green transition border border-gray-100 shadow-sm p-7 flex flex-col items-start h-full">
                <div className="mb-4 flex items-center justify-center h-11 w-11 rounded-lg bg-light-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="8" width="18" height="11" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                    <path d="M16 3v4M8 3v4M12 11v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-black mb-2 font-sans">
                  Ergonomiföreläsning
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-normal mb-5">
                  Föreläsningar & workshops inom ergonomi, arbetsmiljö och hälsa – för företag och organisationer som vill skapa bättre arbetsvanor och förebygga besvär.
                </p>
                <a href="/ergonomi" className="mt-auto inline-flex items-center gap-1 px-5 py-2 border border-green text-green bg-white rounded-lg font-medium text-sm transition duration-200 hover-bg-green hover-text-white focus-outline-none focus-ring-2 focus-ring-green-40 shadow-sm">
                  Läs mer
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="rounded-xl bg-white hover-bg-light-green transition border border-gray-100 shadow-sm p-7 flex flex-col items-start h-full">
                <div className="mb-4 flex items-center justify-center h-11 w-11 rounded-lg bg-light-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-black mb-2 font-sans">
                  Onlinebesök
                </h3>
                <p className="text-gray-700 leading-relaxed text-base font-normal mb-5">
                  Få professionell hjälp från våra legitimerade fysioterapeuter via video. Perfekt för dig som vill få hjälp hemifrån eller har begränsad tid.
                </p>
                <a href="/onlinebesok" className="mt-auto inline-flex items-center gap-1 px-5 py-2 border border-green text-green bg-white rounded-lg font-medium text-sm transition duration-200 hover-bg-green hover-text-white focus-outline-none focus-ring-2 focus-ring-green-40 shadow-sm">
                  Läs mer
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 contact-section">
        <div className="container mx-auto px-6 flex flex-col md-flex-row items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex-1 flex justify-center md-justify-start mb-8 md-mb-0">
            <img src={require('../assets/images/logo512.png')} alt="Rehabinstitutet logotyp" style={{width: 120, height: 120}} />
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-center md-items-start text-white">
            <h2 className="text-3xl font-semibold mb-6 font-sans">Kontakta oss</h2>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-semibold">T:</span>
              <a href="tel:+46701234567" className="underline hover-text-light-green">070-123 45 67</a>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-semibold">E:</span>
              <a href="mailto:kontakt@rehabinstitutet.se" className="underline hover-text-light-green">kontakt@rehabinstitutet.se</a>
            </div>
            <div className="mb-3 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 0v0Zm8.5 0v0ZM12 7.25A4.75 4.75 0 1 0 12 16.75A4.75 4.75 0 1 0 12 7.25Zm6.25-1.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://instagram.com/rehabinstitutet" target="_blank" rel="noopener noreferrer" className="underline hover-text-light-green">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSection;