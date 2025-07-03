import React from 'react';
import './KompetensPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import kompetensImg from '../assets/images/kompetens.png';

const KompetensPage = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('scrollToContact', 'true');
    navigate('/');
  };

  return (
    <div className="kompetens-root">
      <div className="kompetens-hero" style={{ backgroundImage: `url(${kompetensImg})` }}>
        <div className="kompetens-hero-overlay"></div>
        <div className="kompetens-hero-content">
          <h1 className="kompetens-title">Kompetens och utbildning</h1>
          <p className="kompetens-subtitle">
            På rehabinstitutet värdesätter vi vidareutbildning och kompetensutveckling högt. Våra terapeuter deltar årligen i både interna och externa utbildningar för att säkerställa bästa möjliga vård.
          </p>
        </div>
      </div>
      
      <div className="kompetens-content">
        <div className="kompetens-text-section">
          <div className="kompetens-intro">
            <p>
              På kliniken besitter våra terapeuter hög kunskap inom det muskuloskeletala systemet och samtliga är vidareutbildade inom idrottsmedicin. Utöver det erbjuder vi diagnostiskt ultraljud samt behandling och diagnostik utifrån McKenziemetoden och ortopedisk manuell terapi (OMT). Med en bred behandlingsarsenal kan vi skräddarsy vården efter dina individuella behov och önskemål. Besök oss för en noggrann undersökning och effektiv behandling.
            </p>
          </div>

          <div className="kompetens-section">
            <h2>Ortopedisk Manuell Terapi (OMT)</h2>
            <p>
              Ortopedisk Manuell Terapi är ett specialistområde inom fysioterapi som riktar sig till undersökning och behandling av akuta och långvariga besvär i rörelsesystemet. Det inkluderar manuella undersöknings- och behandlingsmetoder såsom bland annat ledmobilisering, manipulationer, anpassad träning och mjukdelsbehandling vilket ofta kan minska potentiell smärta och öka rörelseomfång i en muskel eller led. Med en noggrann undersökning och individanpassad behandlingsplan kan jag hjälpa dig uppnå dina mål och öka fysisk kapacitet samt göra vävnaden mer tolerant mot smärta och skada.
            </p>
          </div>

          <div className="kompetens-section">
            <h2>Diagnostiskt ultraljud</h2>
            <p>
              Ultraljudsdiagnostik tillåter oss att ta diagnostiken ett steg längre genom att se in i vävnaden och kunna upptäcka eventuella skador. Ultraljudsdiagnostik lämpar sig extra bra för att utreda ledband, senor och muskelrupturer. Våra terapeuter som är vidareutbildade i ultraljudsdiagnostik har genomgått ett gediget grundutbildningsprogram samt flertalet extrakurser inom ultraljudsdiagnostik och besitter mångårig erfarenhet med verktyget. Denna erfarenhet gör det också markant lättare att även utan ultraljudet kunna känna igen när symtom indikerar att det finns en skada.
            </p>
          </div>

          <div className="kompetens-section">
            <h2>Fortbildning och specialistexamen</h2>
            <p>
              Alla våra terapeuter har antingen en fullföljd masterexamen, som innebär 4 års avancerade halvtidsstudier, eller är för närvarande under pågående utbildning. Dessutom genomgår våra terapeuter specialistutbildning inom fysisk aktivitet och idrottsmedicin. Denna specialistkompetens innebär fördjupad kunskap inom områden som idrottsskador, överbelastningsproblematik, artros samt behandling av smärta relaterad till senor och leder.
            </p>
          </div>

          <div className="kompetens-section">
            <h2>McKenzie metoden (MDT)</h2>
            <p>
              Mekanisk Diagnostik och Terapi (MDT) är en metod för att diagnosticera och behandla problem från rygg, nacke, leder och lednära strukturer. Metoden är en av de ledande behandlingsformerna för rygg, nacke och ledbesvär.
            </p>
          </div>

          <div className="kompetens-section">
            <h2>Idrottsmedicin</h2>
            <p>
              Med vidareutbildning inom idrottsmedicin och ett stort intresse av idrott och prestation behandlar våra terapeuter skador hos högpresterande idrottare. Behandlingen är utformad för att patienten ska återgå till full prestation efter en skada. Besöket inkludera bedömning av led- och muskelfunktion samt träning av styrka, funktion, rörlighet och koordination efter behov.
            </p>
            <button className="kompetens-highlight" onClick={handleContactClick}>
              Läs mer om idrottsskador här
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="kompetens-team-section">
            <h2>Möt våra terapeuter</h2>
            <p>Läs mer om våra legitimerade fysioterapeuter och deras specialområden.</p>
            <div className="team-links">
              <Link to="/team/adam" className="team-link">
                <div className="team-link-content">
                  <h3>Adam Carlén</h3>
                  <p>Leg. Fysioterapeut, MSc</p>
                  <span className="team-link-arrow">Läs mer →</span>
                </div>
              </Link>
              <Link to="/team/anton" className="team-link">
                <div className="team-link-content">
                  <h3>Anton Zackrisson</h3>
                  <p>Leg. Fysioterapeut, MSc</p>
                  <span className="team-link-arrow">Läs mer →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KompetensPage; 