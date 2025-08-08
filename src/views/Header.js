import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo512.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [omOssDropdownOpen, setOmOssDropdownOpen] = useState(false);
  const [tjansterDropdownOpen, setTjansterDropdownOpen] = useState(false);
  const [produkterDropdownOpen, setProdukterDropdownOpen] = useState(false);
  const [mobileOmOssOpen, setMobileOmOssOpen] = useState(false);
  const [mobileTjansterOpen, setMobileTjansterOpen] = useState(false);
  const [mobileProdukterOpen, setMobileProdukterOpen] = useState(false);
  let dropdownCloseTimeout = null;
  const navigate = useNavigate();

  // Helper to close all dropdowns
  const closeAllDropdowns = () => {
    setOmOssDropdownOpen(false);
    setTjansterDropdownOpen(false);
    setProdukterDropdownOpen(false);
  };

  // Helper to close mobile menu and all dropdowns
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOmOssOpen(false);
    setMobileTjansterOpen(false);
    setMobileProdukterOpen(false);
  };

  // Handle mobile link click
  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <header className="sticky-header">
      <div className="logo-nav">
        <Link to="/" className="header-title" onClick={closeMobileMenu}>
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
            setProdukterDropdownOpen(false);
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
              <Link to="/kompetens">Kompetens</Link>
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
        
        <Link to="/blog" className="nav-link">Blogg</Link>
        <Link to="/kontakt" className="nav-link">Kontakt</Link>

      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {/* Om Oss Section */}
            <div className="mobile-dropdown-section">
              <button 
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setMobileOmOssOpen(!mobileOmOssOpen)}
              >
                Om Oss <span className="mobile-dropdown-arrow">{mobileOmOssOpen ? '▲' : '▼'}</span>
              </button>
              {mobileOmOssOpen && (
                <div className="mobile-submenu">
                  <Link to="/team" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Teamet</Link>
                  <Link to="/kompetens" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Kompetens</Link>
                </div>
              )}
            </div>

            {/* Tjänster Section */}
            <div className="mobile-dropdown-section">
              <button 
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setMobileTjansterOpen(!mobileTjansterOpen)}
              >
                Tjänster <span className="mobile-dropdown-arrow">{mobileTjansterOpen ? '▲' : '▼'}</span>
              </button>
              {mobileTjansterOpen && (
                <div className="mobile-submenu">
                  <Link to="/onlinebesok" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Online Coaching</Link>
                  <Link to="/ergonomi" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Ergonomiföreläsning</Link>
                  <Link to="/hemrehab" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Hemrehab</Link>
                  <Link to="/program" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Tränings- & rehabiliteringsprogram</Link>
                </div>
              )}
            </div>

            <Link to="/program" className="mobile-nav-link" onClick={handleMobileLinkClick}>Program</Link>

            {/* Rekommenderade Produkter Section */}
            <div className="mobile-dropdown-section">
              <button 
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setMobileProdukterOpen(!mobileProdukterOpen)}
              >
                Rekommenderade Produkter <span className="mobile-dropdown-arrow">{mobileProdukterOpen ? '▲' : '▼'}</span>
              </button>
              {mobileProdukterOpen && (
                <div className="mobile-submenu">
                  <Link to="/training-equipment" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Träningsutrustning</Link>
                  <Link to="/supplements" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Kosttillskott</Link>
                  <Link to="/rehabilitation" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Rehabilitering</Link>
                  <Link to="/apps-software" className="mobile-nav-link submenu-item" onClick={handleMobileLinkClick}>Appar & Mjukvara</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="mobile-nav-link" onClick={handleMobileLinkClick}>Blogg</Link>
            <Link to="/kontakt" className="mobile-nav-link" onClick={handleMobileLinkClick}>Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;