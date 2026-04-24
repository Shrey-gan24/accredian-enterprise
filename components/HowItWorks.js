'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);

  return (
    <section id="how-it-works" className="section how-it-works" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>How We Deliver Results That Matter?</h2>
        
        <div className="steps-grid">
          <div className={`step-card animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>
            <div className="step-badge">1</div>
            <div className="step-icon">📊</div>
            <div className="step-title">Skill Gap Analysis</div>
            <div className="step-desc">
              We identify the areas where your team needs the most improvement to achieve your business goals.
            </div>
          </div>
          
          <div className={`step-card animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
            <div className="step-badge">2</div>
            <div className="step-icon">💻</div>
            <div className="step-title">Customized Training Plan</div>
            <div className="step-desc">
              Our experts design a tailored curriculum that addresses your specific organizational needs.
            </div>
          </div>
          
          <div className={`step-card animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '300ms'}}>
            <div className="step-badge">3</div>
            <div className="step-icon">🖥️</div>
            <div className="step-title">Flexible Program Delivery</div>
            <div className="step-desc">
              We offer various delivery methods to ensure your team learns in the most effective way possible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
