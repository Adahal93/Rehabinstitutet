import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo512.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [omOssDropdownOpen, setOmOssDropdownOpen] = useState(false);
  const [tjansterDropdownOpen, setTjansterDropdownOpen] = useState(false);
  const [produkterDropdownOpen, setProdukterDropdownOpen] = useState(false);
  let dropdownCloseTimeout = null;
  const navigate = useNavigate();

  // Helper to close all dropdowns
  const closeAllDropdowns = () => {
    setOmOssDropdownOpen(false);
    setTjansterDropdownOpen(false);
    setProdukterDropdownOpen(false);
  };

  return (
    <header className="sticky-header">
      <div className="logo-nav">
        <Link to="/" className="header-title">
          <img src={logo} alt="Rehabinstitutet logotyp" className="header-logo" />
          <span>REHABINSTITUTET</span>
        </Link>
      </div>
      
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="mobile-menu-button" 
        aria-label="Öppna meny"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <div className="header-nav">
        <div
          className="dropdown-container"
          onMouseEnter={() => {
            if (dropdownCloseTimeout) clearTimeout(dropdownCloseTimeout);
            setOmOssDropdownOpen(true);
            setTjansterDropdownOpen(false);
          }}
          onMouseLeave={() => {
            dropdownCloseTimeout = setTimeout(() => setOmOssDropdownOpen(false), 150);
          }}
        >
          <Link to="/om-oss" className="nav-link dropdown-trigger" onClick={() => setOmOssDropdownOpen(!omOssDropdownOpen)}>
            Om Oss <span className="dropdown-arrow">▼</span>
          </Link>
          {omOssDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/team">Teamet</Link>
            </div>
          )}
        </div>
        
        <div
          className="dropdown-container"
          onMouseEnter={() => {
            if (dropdownCloseTimeout) clearTimeout(dropdownCloseTimeout);
            setTjansterDropdownOpen(true);
            setOmOssDropdownOpen(false);
            setProdukterDropdownOpen(false);
          }}
          onMouseLeave={() => {
            dropdownCloseTimeout = setTimeout(() => setTjansterDropdownOpen(false), 150);
          }}
        >
          <Link to="/tjanster" className="nav-link dropdown-trigger" onClick={() => setTjansterDropdownOpen(!tjansterDropdownOpen)}>
            Tjänster <span className="dropdown-arrow">▼</span>
          </Link>
          {tjansterDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/onlinebesok">Online Coaching</Link>
              <Link to="/ergonomi">Ergonomiföreläsning</Link>
              <Link to="/hemrehab">Hemrehab</Link>
              <Link to="/program">Tränings- & rehabiliteringsprogram</Link>
            </div>
          )}
        </div>
        
        <Link to="/program" className="nav-link">Program</Link>
        <Link to="/kompetens" className="nav-link">Kompetens</Link>
        
        <div
          className="dropdown-container"
          onMouseEnter={() => {
            if (dropdownCloseTimeout) clearTimeout(dropdownCloseTimeout);
            setProdukterDropdownOpen(true);
            setOmOssDropdownOpen(false);
            setTjansterDropdownOpen(false);
          }}
          onMouseLeave={() => {
            dropdownCloseTimeout = setTimeout(() => setProdukterDropdownOpen(false), 150);
          }}
        >
          <Link to="/rekommenderade-produkter" className="nav-link dropdown-trigger" onClick={() => setProdukterDropdownOpen(!produkterDropdownOpen)}>
            Rekommenderade Produkter <span className="dropdown-arrow">▼</span>
          </Link>
          {produkterDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/training-equipment">Träningsutrustning</Link>
              <Link to="/supplements">Kosttillskott</Link>
              <Link to="/rehabilitation">Rehabilitering</Link>
              <Link to="/apps-software">Appar & Mjukvara</Link>
            </div>
          )}
        </div>
        <a href="#contact" className="nav-link" onClick={e => {
          e.preventDefault();
          if (window.location.pathname === "/") {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.sessionStorage.setItem('scrollToContact', 'true');
            navigate("/");
          }
        }}>Kontakt</a>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <Link to="/om-oss" className="mobile-nav-link">Om Oss</Link>
            <Link to="/program" className="mobile-nav-link">Program</Link>
            <Link to="/kompetens" className="mobile-nav-link">Kompetens</Link>
            <Link to="/rekommenderade-produkter" className="mobile-nav-link">Rekommenderade Produkter</Link>
            <div className="mobile-submenu">
              <Link to="/training-equipment" className="mobile-nav-link submenu-item">Träningsutrustning</Link>
              <Link to="/supplements" className="mobile-nav-link submenu-item">Kosttillskott</Link>
              <Link to="/rehabilitation" className="mobile-nav-link submenu-item">Rehabilitering</Link>
              <Link to="/apps-software" className="mobile-nav-link submenu-item">Appar & Mjukvara</Link>
            </div>
            <Link to="/tjanster" className="mobile-nav-link">Tjänster</Link>
            <Link to="/kontakt" className="mobile-nav-link">Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;