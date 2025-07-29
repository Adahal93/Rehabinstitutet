import React, { useState } from 'react';
import './KontaktPage.css';
import logo from '../assets/images/logo_u_bakgrund.png';

const KontaktPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Skapa email-innehåll
    const emailBody = `Namn: ${formData.name}\nEmail: ${formData.email}\n\nMeddelande:\n${formData.message}`;
    
    // Skicka direkt till info@rehabinstitutet.se
    const mailtoLink = `mailto:info@rehabinstitutet.se?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Öppna email-klienten
    window.location.href = mailtoLink;
    
    // Rensa formuläret efter skickning
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="kontakt-page">
      {/* Hero Section */}
      <section className="kontakt-hero">
        <div className="kontakt-hero-content">
          <h1 className="kontakt-hero-title">Kontakta oss</h1>
          <p className="kontakt-hero-subtitle">
            Vi finns här för att hjälpa dig med alla frågor om rehabilitering, träning och hälsa
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="kontakt-main">
        <div className="kontakt-container">
          <div className="kontakt-grid">
            {/* Contact Form */}
            <div className="kontakt-form-section">
              <h2 className="kontakt-section-title">Skicka ett meddelande</h2>
              <form className="kontakt-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Namn *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-post *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Ämne *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Meddelande *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit-btn">
                  Skicka meddelande
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="kontakt-info-section">
              <div className="kontakt-info-card">
                <h2 className="kontakt-section-title">Kontaktinformation</h2>
                
                <div className="kontakt-info-item">
                  <div className="kontakt-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="kontakt-info-content">
                    <h3 className="kontakt-info-title">E-post</h3>
                    <a href="mailto:info@rehabinstitutet.se" className="kontakt-info-link">
                      info@rehabinstitutet.se
                    </a>
                  </div>
                </div>

                <div className="kontakt-info-item">
                  <div className="kontakt-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="kontakt-info-content">
                    <h3 className="kontakt-info-title">Telefon</h3>
                    <p className="kontakt-info-text">Kontakta oss via e-post för bästa service</p>
                  </div>
                </div>

                <div className="kontakt-info-item">
                  <div className="kontakt-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="kontakt-info-content">
                    <h3 className="kontakt-info-title">Online</h3>
                    <p className="kontakt-info-text">Vi erbjuder online-konsultationer</p>
                  </div>
                </div>

                <div className="kontakt-info-item">
                  <div className="kontakt-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </div>
                  <div className="kontakt-info-content">
                    <h3 className="kontakt-info-title">Instagram</h3>
                    <a 
                      href="https://instagram.com/rehabinstitutet" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="kontakt-info-link"
                    >
                      @rehabinstitutet
                    </a>
                  </div>
                </div>
                                   </div>
                   </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kontakt-faq">
        <div className="kontakt-container">
          <h2 className="kontakt-section-title">Vanliga frågor</h2>
          <div className="faq-content">
            <div className="faq-item">
              <h3 className="faq-question">Hur bokar jag en konsultation?</h3>
              <p className="faq-answer">
                Kontakta oss via e-post på info@rehabinstitutet.se så hjälper vi dig att boka en tid som passar dig. Vi erbjuder både fysiska och online-konsultationer för din bekvämlighet.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Erbjuder ni online-konsultationer?</h3>
              <p className="faq-answer">
                Ja, vi erbjuder både fysiska och online-konsultationer för din bekvämlighet. Online-konsultationer sker via säkra videomöten och är lika effektiva som fysiska besök.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Vilka betalningsmetoder accepterar ni?</h3>
              <p className="faq-answer">
                Vi accepterar de flesta vanliga betalningsmetoder såsom kort, kort och Swish. Har du några frågor kring andra betalningslösningar är du välkommen att kontakta för mer information om betalningsalternativ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontaktPage; 