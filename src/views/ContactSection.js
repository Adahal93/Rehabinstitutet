import React from 'react';
import './ContactSection.css';
import logo from '../assets/images/logo_u_bakgrund.png';

const ContactSection = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-left">
        <img src={logo} alt="Rehabinstitutet Logo" className="footer-logo" />
      </div>
      <div className="footer-info-wrapper">
        <div className="footer-center">
          <div className="footer-partnerships-title">SAMARBETEN</div>
          <div className="footer-partnerships-text">Kontakta oss angående samarbeten genom</div>
          <a href="mailto:info@rehabinstitutet.se" className="footer-partnerships-link">info@rehabinstitutet.se</a>
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