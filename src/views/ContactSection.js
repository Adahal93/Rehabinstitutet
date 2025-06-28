import React from 'react';
import './ContactSection.css';
import logo from '../assets/images/logo512.png';

const ContactSection = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-left">
        <img src={logo} alt="Rehabinstitutet Logo" className="footer-logo" />
        <div className="footer-brand">REHABINSTITUTET</div>
      </div>
      <div className="footer-center">
        <h2 className="footer-title">Kontakta oss</h2>
        <div className="footer-contact-row"><span className="footer-label">T:</span> <span>070-123 45 67</span></div>
        <div className="footer-contact-row"><span className="footer-label">E:</span> <a href="mailto:kontakt@rehabinstitutet.se" className="footer-link">kontakt@rehabinstitutet.se</a></div>
        <div className="footer-contact-row">
          <span className="footer-label"><span className="footer-ig-icon">&#x1F465;</span></span>
          <a href="https://instagram.com/rehabinstitutet" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
      <div className="footer-right">
        <ul className="footer-nav">
          <li><a href="#om">Om Oss</a></li>
          <li><a href="#program">Program</a></li>
          <li><a href="#övningar">Övningar</a></li>
          <li><a href="#kompetens">Kompetens</a></li>
          <li><a href="#tjänster">Tjänster</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactSection; 