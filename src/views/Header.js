import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo512.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [omOssDropdownOpen, setOmOssDropdownOpen] = useState(false);
  const [tjansterDropdownOpen, setTjansterDropdownOpen] = useState(false);
  let dropdownCloseTimeout = null;
  const navigate = useNavigate();

  // Helper to close all dropdowns
  const closeAllDropdowns = () => {
    setOmOssDropdownOpen(false);
    setTjansterDropdownOpen(false);
  };

  return (
    <header className="w-full bg-white backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 animate-fade-in-down">
      <div className="container mx-auto px-6">
        <nav className="py-4 flex justify-between items-center relative">
          <Link to="/" className="text-xl font-bold tracking-wider text-green flex items-center gap-2 font-sans">
            <img src={logo} alt="Rehabinstitutet logotyp" className="h-7 w-7 text-green" style={{borderRadius: 8}} />
            <span className="font-sans uppercase tracking-wider font-semibold text-green">REHABINSTITUTET</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md-hidden text-green hover-text-black transition" 
            aria-label="Öppna meny"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden md-flex gap-8">
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
              <Link to="/om-oss" className="nav-link relative hover-text-green transition text-sm font-medium text-black tracking-wider dropdown-trigger" onClick={() => setOmOssDropdownOpen(!omOssDropdownOpen)}>
                Om Oss <span className="dropdown-arrow">▼</span>
              </Link>
              {omOssDropdownOpen && (
                <div className="dropdown-menu" style={{marginTop: 16}}>
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
              }}
              onMouseLeave={() => {
                dropdownCloseTimeout = setTimeout(() => setTjansterDropdownOpen(false), 150);
              }}
            >
              <Link to="/tjanster" className="nav-link relative hover-text-green transition text-sm font-medium text-black tracking-wider dropdown-trigger" onClick={() => setTjansterDropdownOpen(!tjansterDropdownOpen)}>
                Tjänster <span className="dropdown-arrow">▼</span>
              </Link>
              {tjansterDropdownOpen && (
                <div className="dropdown-menu" style={{marginTop: 16}}>
                  <Link to="/onlinebesok">Online Coaching</Link>
                  <Link to="/ergonomi">Ergonomiföreläsning</Link>
                  <Link to="/hemrehab">Hemrehab</Link>
                  <Link to="/program">Tränings- & rehabiliteringsprogram</Link>
                </div>
              )}
            </div>
            <Link to="/program" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Program</Link>
            <Link to="/ovningar" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Övningar</Link>
            <Link to="/kompetens" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans">Kompetens</Link>
            <a href="#contact" className="nav-link relative text-sm tracking-wider text-black hover-text-green font-medium transition font-sans" onClick={e => {
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
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="md-hidden bg-white backdrop-blur-md border-t border-gray-100 animate-fade-in-down">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link to="/om-oss" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Om Oss</Link>
            <Link to="/program" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Program</Link>
            <Link to="/ovningar" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Övningar</Link>
            <Link to="/kompetens" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Kompetens</Link>
            <Link to="/tjanster" className="text-sm tracking-wider py-2 border-b border-gray-100 text-black hover-text-green transition font-sans">Tjänster</Link>
            <Link to="/kontakt" className="text-sm tracking-wider py-2 text-black hover-text-green transition font-sans">Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;