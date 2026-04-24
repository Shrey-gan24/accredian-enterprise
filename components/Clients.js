'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Clients() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);
  
  const clientLogos = [
    { name: 'Reliance', initial: 'R', color: '#7B2D00' },
    { name: 'HCL', initial: 'H', color: '#0068B3' },
    { name: 'IBM', initial: 'I', color: '#1F70C1' },
    { name: 'CRIF', initial: 'C', color: '#FF6B00' },
    { name: 'ADP', initial: 'A', color: '#CC0000' },
    { name: 'Bayer', initial: 'B', color: '#10884A' }
  ];

  return (
    <section id="clients" className="section clients" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>Our Proven Partnerships</h2>
        
        <div className={`marquee-container animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>
          <div className="marquee">
            <div className="marquee-content">
              {clientLogos.map((client, index) => (
                <div key={`logo-1-${index}`} className="client-card">
                  <div className="client-icon" style={{ backgroundColor: client.color }}>
                    {client.initial}
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
            <div className="marquee-content">
              {clientLogos.map((client, index) => (
                <div key={`logo-2-${index}`} className="client-card">
                  <div className="client-icon" style={{ backgroundColor: client.color }}>
                    {client.initial}
                  </div>
                  <div className="client-name">{client.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
