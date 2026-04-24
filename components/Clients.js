'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Clients() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);
  
  const clientLogos = [
    { name: 'Reliance', src: '/logos/reliance.png' },
    { name: 'HCL', src: '/logos/hcl.png' },
    { name: 'IBM', src: '/logos/ibm.png' },
    { name: 'ADP', src: '/logos/adp.png' },
    { name: 'Bayer', src: '/logos/bayer.png' }
  ];

  return (
    <section id="clients" className="section clients" ref={sectionRef} style={{ background: 'var(--bg-secondary)', padding: '80px 20px', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className={`animate-on-scroll ${inView ? 'visible' : ''}`} style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text)', margin: '0 0 12px 0' }}>
            Our Proven <span style={{color:'#2563EB'}}>Partnerships</span>
          </h2>
          <p className={`animate-on-scroll ${inView ? 'visible' : ''}`} style={{ transitionDelay: '100ms', fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0' }}>
            Successful Collaborations With the <span style={{color:'#2563EB'}}>Industry's Best</span>
          </p>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          .clients-marquee-container {
            width: 100%;
            overflow: hidden;
            display: flex;
            position: relative;
            padding: 20px 0;
          }
          .clients-marquee-container::before,
          .clients-marquee-container::after {
            content: '';
            position: absolute;
            top: 0;
            width: 120px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
          }
          .clients-marquee-container::before {
            left: 0;
            background: linear-gradient(to right, var(--bg-secondary), transparent);
          }
          .clients-marquee-container::after {
            right: 0;
            background: linear-gradient(to left, var(--bg-secondary), transparent);
          }
          .clients-marquee {
            display: flex;
            align-items: center;
            animation: scroll-clients 30s linear infinite;
          }
          .clients-marquee:hover {
            animation-play-state: paused;
          }
          .clients-marquee-content {
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
            gap: 80px;
            padding: 0 40px;
          }
          .client-logo-img {
            height: 80px;
            width: auto;
            max-width: 220px;
            object-fit: contain;
            transition: transform 0.3s;
          }
          .client-logo-img:hover {
            transform: scale(1.05);
          }
          @keyframes scroll-clients {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 768px) {
            .clients-marquee-content {
              gap: 50px;
            }
            .client-logo-img {
              height: 55px;
            }
            .clients-marquee-container::before,
            .clients-marquee-container::after {
              width: 50px;
            }
          }
        `}} />

        <div className={`clients-marquee-container animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
          <div className="clients-marquee">
            <div className="clients-marquee-content">
              {clientLogos.map((client, index) => (
                <img key={`logo-1-${index}`} src={client.src} alt={client.name} className="client-logo-img" />
              ))}
              {clientLogos.map((client, index) => (
                <img key={`logo-1b-${index}`} src={client.src} alt={client.name} className="client-logo-img" />
              ))}
            </div>
            <div className="clients-marquee-content">
              {clientLogos.map((client, index) => (
                <img key={`logo-2-${index}`} src={client.src} alt={client.name} className="client-logo-img" />
              ))}
              {clientLogos.map((client, index) => (
                <img key={`logo-2b-${index}`} src={client.src} alt={client.name} className="client-logo-img" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
