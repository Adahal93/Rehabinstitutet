import React from 'react';
import './ErgonomiPage.css';
import onlineImg from '../assets/images/online_coaching.png';
import { useNavigate } from 'react-router-dom';
import CodepenPriceTable from './CodepenPriceTable';

const OnlineVisitPage = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('scrollToContact', 'true');
    navigate('/');
  };

  const handleArrowClick = () => {
    const el = document.getElementById('onlinevisit-price-table');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 120; // Offset by 120px higher
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="ergonomi-page">
      <div className="ergonomi-hero">
        <div className="ergonomi-hero-content">
          <h1 className="ergonomi-title">Online Coaching</h1>
          <h2 className="ergonomi-subtitle">Få professionell hjälp av en av våra fysioterapeuter – var du än är</h2>
        </div>
        <div className="ergonomi-hero-image">
          <img src={onlineImg} alt="Online coaching fysioterapeut" />
        </div>
      </div>
      <div className="ergonomi-content">
        <div className="ergonomi-text-section">
          <p className="ergonomi-intro">
            Onlinebesök är ett flexibelt och effektivt alternativ till traditionella rehabiliteringskonsultationer. Du kan få professionell hjälp direkt hemifrån, vilket sparar tid och eliminerar behovet av resor. Våra digitala möten gör det möjligt att anpassa rehabiliteringsplanen till dina unika behov, samtidigt som du får personlig kontakt med en fysioterapeut. Med hjälp av videoanalys och tydliga instruktioner kan vi guida dig i träning och återhämtning, oavsett var du befinner dig.<br/><br/>
            Enkelt, bekvämt och lika professionellt som ett fysiskt besök!
          </p>
          <button className="ergonomi-highlight" onClick={handleContactClick}>
            Kontakta oss idag för diskussion kring upplägg och tidsbokning!
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32, marginBottom: 8}}>
            <span style={{color: '#222', fontWeight: 600, fontSize: '1.35rem', marginBottom: 14, marginTop: -10}}>Prislista</span>
            <div style={{cursor: 'pointer'}} onClick={handleArrowClick}>
              <div className="animate-bounce">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14" stroke="#8DBB7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 16l7 7 7-7" stroke="#8DBB7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="ergonomi-process">
            <h3>Så går ett onlinebesök till</h3>
            <p>
              Du bokar enkelt en tid online. Vid besöket får du träffa en legitimerad fysioterapeut via videosamtal. Vi gör en grundlig bedömning, ger dig individuella råd och skickar digitalt träningsprogram och material efter behov.
            </p>
          </div>
          <div className="ergonomi-benefits">
            <h3>Fördelar med online coaching</h3>
            <ul>
              <li>Flexibilitet: Konsultation från ditt eget hem och rehab oavsett vart du bor i landet.</li>
              <li>Kostnadseffektivt: Spar tid på resor och parkering. Vi kan hålla nere priserna då vi ej behöver betala lokalhyra.</li>
              <li>Digitalt stöd: Få tillgång till övningar, instruktioner och utbildningsmaterial genom våra digitala verktyg.</li>
              <li>Goda resultat: Forskningen stödjer att onlinekonsultationer är ett pålitligt och effektivt alternativ till fysiska besök för många typer av rehabilitering.</li>
            </ul>
          </div>
          <div id="onlinevisit-price-table" style={{marginTop: 32, marginBottom: 0}}>
            <CodepenPriceTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineVisitPage; 