'use client';

import { useState } from 'react';

export default function OAIHeader() {
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const workshops = [
    { title: 'Production Ready Agentic AI Systems', href: '#' },
    { title: 'How to use OpenClaw', href: '#' },
    { title: 'Context Engineering', href: '#' },
    { title: 'Building an AI-Native Career', href: '#' },
    { title: 'Mastering GPUs & Agentic Coding', href: '#' },
    { title: 'Multi Agent Architecture', href: '#' },
    { title: 'Optimizing LLM Training and Inference', href: '#' },
    { title: 'Trustworthy Agentic AI', href: '#' },
    { title: 'Optimizing Retrieval for Agentic Systems', href: '#' },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="header-logo">
          <div className="logo-text">OAI</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <a href="/" className="nav-link nav-link-home">Home</a>
          
          <div className="nav-dropdown">
            <button
              className="nav-link nav-link-dropdown"
              onClick={() => setWorkshopsOpen(!workshopsOpen)}
            >
              Workshops
              <span className="dropdown-arrow">▼</span>
            </button>
            {workshopsOpen && (
              <div className="dropdown-menu">
                {workshops.map((workshop, idx) => (
                  <a key={idx} href={workshop.href} className="dropdown-item">
                    {workshop.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="nav-link">Program</a>
          <a href="#" className="nav-link">Speakers</a>
          <a href="#" className="nav-link">Registration</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>

        {/* Call for Speakers Button */}
        <a href="#" className="cfs-button">
          Call for Speakers
          <span className="cfs-arrow">→</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <a href="/" className="mobile-nav-link">Home</a>
          <div className="mobile-nav-section">
            <button
              className="mobile-nav-link mobile-dropdown-toggle"
              onClick={() => setWorkshopsOpen(!workshopsOpen)}
            >
              Workshops
              <span className={`arrow ${workshopsOpen ? 'open' : ''}`}>▼</span>
            </button>
            {workshopsOpen && (
              <div className="mobile-dropdown">
                {workshops.map((workshop, idx) => (
                  <a key={idx} href={workshop.href} className="mobile-dropdown-item">
                    {workshop.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="mobile-nav-link">Program</a>
          <a href="#" className="mobile-nav-link">Speakers</a>
          <a href="#" className="mobile-nav-link">Registration</a>
          <a href="#" className="mobile-nav-link">Contact Us</a>
          <a href="#" className="mobile-cfs-button">Call for Speakers</a>
        </nav>
      )}
    </header>
  );
}
