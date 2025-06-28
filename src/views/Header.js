import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo512.png';

const Header = () => {
  const [tjänsterOpen, setTjänsterOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const closeDropdowns = () => {
    setTjänsterOpen(false);
    setProgramOpen(false);
  };

  return (
    <header className="sticky-header">
      <div className="logo-nav">
        <img src={logo} alt="Rehabinstitutet Logo" className="header-logo" />
        <span className="header-title">REHABINSTITUTET</span>
      </div>
      <nav className="header-nav">
        <a href="#om">Om Oss</a>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setProgramOpen(true)}
          onMouseLeave={closeDropdowns}
        >
          <a 
            href="#program" 
            className="dropdown-trigger"
            onClick={e => { e.preventDefault(); setProgramOpen(!programOpen); setTjänsterOpen(false); }}
          >
            Program
            <span className="dropdown-arrow">▼</span>
          </a>
          {programOpen && (
            <div className="dropdown-menu">
              <a href="#rehabprogram" onClick={closeDropdowns}>Rehabprogram</a>
              <a href="#träningsprogram" onClick={closeDropdowns}>Träningsprogram</a>
            </div>
          )}
        </div>
        <a href="#övningar">Övningar</a>
        <a href="#kompetens">Kompetens</a>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setTjänsterOpen(true)}
          onMouseLeave={closeDropdowns}
        >
          <a 
            href="#tjänster" 
            className="dropdown-trigger"
            onClick={e => { e.preventDefault(); setTjänsterOpen(!tjänsterOpen); setProgramOpen(false); }}
          >
            Tjänster
            <span className="dropdown-arrow">▼</span>
          </a>
          {tjänsterOpen && (
            <div className="dropdown-menu">
              <a href="#ergonomi" onClick={closeDropdowns}>Ergonomi</a>
              <a href="#onlinebesök" onClick={closeDropdowns}>Onlinebesök</a>
              <a href="#varför-onlinebesök" onClick={closeDropdowns}>Varför onlinebesök</a>
              <a href="#personlig-träning" onClick={closeDropdowns}>Personlig träning</a>
            </div>
          )}
        </div>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>
  );
};

export default Header;