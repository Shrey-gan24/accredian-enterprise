'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function CAT() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.2);

  return (
    <section id="cat" className="section cat-framework" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>The CAT Framework</h2>
        <p className={`section-subtitle animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>Our unique approach to learning</p>
        
        <div className={`cat-container animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
          <div className="cat-circle">
            <div className="cat-icon">💡</div>
            <div className="cat-title">Concept</div>
          </div>
          
          <div className="cat-circle">
            <div className="cat-icon">⚙️</div>
            <div className="cat-title">Application</div>
          </div>
          
          <div className="cat-circle">
            <div className="cat-icon">🛠️</div>
            <div className="cat-title">Tools</div>
          </div>
          
          <div className="cat-line"></div>
        </div>
      </div>
    </section>
  );
}
