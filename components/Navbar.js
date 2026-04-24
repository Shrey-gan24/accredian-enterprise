'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark');
    }

    const handleScroll = () => {
      // Navbar shadow
      setScrolled(window.scrollY > 50);
      
      // Scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Active section detection
      const sections = ['home', 'stats', 'clients', 'edge', 'cat', 'how-it-works', 'faqs', 'testimonials'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="nav-logo-text">accredian</span>
            <span className="nav-logo-sub">credentials that matter</span>
          </div>
          
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {isDark ? '🌙' : '☀'}
            </button>
            
            <div className="nav-links">
              <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
              <a href="#stats" className={activeSection === 'stats' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('stats'); }}>Stats</a>
              <a href="#clients" className={activeSection === 'clients' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('clients'); }}>Clients</a>
              <a href="#edge" className={activeSection === 'edge' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('edge'); }}>Accredian Edge</a>
              <a href="#cat" className={activeSection === 'cat' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('cat'); }}>CAT</a>
              <a href="#how-it-works" className={activeSection === 'how-it-works' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a>
              <a href="#faqs" className={activeSection === 'faqs' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('faqs'); }}>FAQs</a>
              <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Testimonials</a>
            </div>

            <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              ☰
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
            <a href="#stats" onClick={(e) => { e.preventDefault(); scrollTo('stats'); }}>Stats</a>
            <a href="#clients" onClick={(e) => { e.preventDefault(); scrollTo('clients'); }}>Clients</a>
            <a href="#edge" onClick={(e) => { e.preventDefault(); scrollTo('edge'); }}>Accredian Edge</a>
            <a href="#cat" onClick={(e) => { e.preventDefault(); scrollTo('cat'); }}>CAT</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollTo('how-it-works'); }}>How It Works</a>
            <a href="#faqs" onClick={(e) => { e.preventDefault(); scrollTo('faqs'); }}>FAQs</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Testimonials</a>
        </div>
      </nav>
    </>
  );
}
