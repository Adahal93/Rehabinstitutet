import React from 'react';
import './OnlineVisitPage.css';
import onlineImg from '../assets/images/online_coaching.png';
import onlineMeetingImg from '../assets/images/online_meeting.webp';
import { useNavigate } from 'react-router-dom';
import CodepenPriceTable from './CodepenPriceTable';
import { scrollToContact } from '../utils/scrollToContact';

const OnlineVisitPage = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('scrollToContact', 'true');
    navigate('/');
  };



  return (
    <div className="onlinevisit-page">
      <div className="onlinevisit-hero">
        <div className="onlinevisit-hero-content">
          <h1 className="onlinevisit-title">Online Coaching</h1>
          <h2 className="onlinevisit-subtitle">Få professionell hjälp av en av våra fysioterapeuter – var du än är</h2>
          <p className="onlinevisit-hero-description">
            Enkelt, bekvämt och lika professionellt som ett fysiskt besök!
          </p>
        </div>
        <div className="onlinevisit-hero-image">
          <img src={onlineImg} alt="Online coaching fysioterapeut" />
        </div>
      </div>
      
      <div className="onlinevisit-content">
        <div className="onlinevisit-intro-section">
          <p className="onlinevisit-intro">
            Onlinebesök är ett flexibelt och effektivt alternativ till traditionella rehabiliteringskonsultationer. Du kan få professionell hjälp direkt hemifrån, vilket sparar tid och eliminerar behovet av resor. Våra digitala möten gör det möjligt att anpassa rehabiliteringsplanen till dina unika behov, samtidigt som du får personlig kontakt med en fysioterapeut. Med hjälp av videoanalys och tydliga instruktioner kan vi guida dig i träning och återhämtning, oavsett var du befinner dig.
          </p>
          <div className="onlinevisit-intro-image">
            <img src={onlineMeetingImg} alt="Online möte med fysioterapeut" />
          </div>
        </div>

        <div className="onlinevisit-timeline-section">
          <h2 className="onlinevisit-timeline-title">Så går ett onlinebesök till</h2>
          <div className="onlinevisit-timeline">
            <div className="timeline-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="timeline-step-content">
                <h3>Boka tid</h3>
                <p>Du bokar enkelt en tid online via vårt bokningssystem</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L11 14L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="timeline-step-content">
                <h3>Videosamtal</h3>
                <p>Träffa en legitimerad fysioterapeut via videosamtal</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="timeline-step-content">
                <h3>Bedömning</h3>
                <p>Vi gör en grundlig bedömning och ger individuella råd</p>
              </div>
            </div>
            
            <div className="timeline-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="timeline-step-content">
                <h3>Digitalt material</h3>
                <p>Få träningsprogram och material skickat digitalt</p>
              </div>
            </div>
          </div>
        </div>

        <div className="onlinevisit-benefits-section">
          <h2 className="onlinevisit-benefits-title">Fördelar med online coaching</h2>
          <div className="onlinevisit-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card-content">
                <h3>Flexibilitet</h3>
                <p>Konsultation från ditt eget hem och rehab oavsett vart du bor i landet.</p>
              </div>
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card-content">
                <h3>Kostnadseffektivt</h3>
                <p>Spar tid på resor och parkering. Vi kan hålla nere priserna då vi ej behöver betala lokalhyra.</p>
              </div>
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card-content">
                <h3>Digitalt stöd</h3>
                <p>Få tillgång till övningar, instruktioner och utbildningsmaterial genom våra digitala verktyg.</p>
              </div>
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-card-content">
                <h3>Goda resultat</h3>
                <p>Forskningen stödjer att onlinekonsultationer är ett pålitligt och effektivt alternativ till fysiska besök för många typer av rehabilitering.</p>
              </div>
              <div className="benefit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="onlinevisit-cta-section">
          <button className="onlinevisit-highlight" onClick={e => { e.preventDefault(); scrollToContact(); }}>
            Kontakta oss idag för diskussion kring upplägg och tidsbokning!
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5L20 12L13 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="onlinevisit-pricing-section">
          <div className="pricing-header">
            <h2 className="pricing-title">Prislista</h2>
          </div>
          <div id="onlinevisit-price-table">
            <CodepenPriceTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineVisitPage; 