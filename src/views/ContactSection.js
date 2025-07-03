import React from 'react';
import './ContactSection.css';
import logo from '../assets/images/logo_u_bakgrund.png';

const ContactSection = ({ id }) => {
  return (
    <footer className="contact-footer" id={id}>
      <div className="footer-left">
        <img src={logo} alt="Rehabinstitutet Logo" className="footer-logo" />
      </div>
      <div className="footer-info-wrapper">
        <div className="footer-center">
          <div className="footer-partnerships-title">SAMARBETEN</div>
          <div className="footer-partnerships-text">Kontakta oss angående samarbeten genom</div>
          <a href="mailto:info@rehabinstitutet.se" className="footer-partnerships-link">info@rehabinstitutet.se</a>
          <div style={{ height: 18 }} />
          <div className="footer-instagram-section">
            <a href="https://instagram.com/rehabinstitutet" target="_blank" rel="noopener noreferrer" className="footer-instagram-link">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 8, verticalAlign: 'middle'}}>
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span style={{verticalAlign: 'middle'}}>rehabinstitutet</span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-contact-title">KONTAKT</div>
          <a href="mailto:info@rehabinstitutet.se" className="footer-partnerships-link">info@rehabinstitutet.se</a>
          <div className="footer-contact-org">Org. no: 559529-7671</div>
        </div>
      </div>
      <div className="footer-bottom">
        MSKRehab AB
      </div>
    </footer>
  );
};

export default ContactSection; 