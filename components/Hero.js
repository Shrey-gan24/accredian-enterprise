'use client';
import Image from 'next/image';

export default function Hero({ openModal }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-card" style={{ background: '#f0f6ff', overflow: 'hidden' }}>
          <div className="hero-content">
            <h1 className="hero-title">
              Next-Gen <span style={{color: '#2563EB'}}>Expertise</span><br />
              For Your <span style={{color: '#2563EB'}}>Enterprise</span>
            </h1>
            
            <p className="hero-subtitle">
              Cultivate high-performance<br />
              teams through expert learning.
            </p>

            <div className="hero-badges-inline">
              <span className="badge-inline">
                <span className="badge-icon-green">✓</span> Tailored Solutions
              </span>
              <span className="badge-inline">
                <span className="badge-icon-green">✓</span> Industry Insights
              </span>
              <span className="badge-inline">
                <span className="badge-icon-green">✓</span> Expert Guidance
              </span>
            </div>
            
            <button className="btn" onClick={openModal} style={{ marginTop: '30px' }}>
              Enquire Now
            </button>
          </div>
          
          <div className="hero-visual-img">
            <img 
              src="/images/hero_image.png" 
              alt="Professional corporate training" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-badges-inline {
          display: flex;
          gap: 20px;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        .badge-inline {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: var(--text);
          font-weight: 500;
        }
        .badge-icon-green {
          color: #10b981;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .hero-visual-img {
          position: relative;
          height: 100%;
          min-height: 400px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex: 1;
        }
        .hero-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-bottom-right-radius: 24px;
        }
        @media (max-width: 768px) {
          .hero-badges-inline {
            flex-direction: column;
            gap: 10px;
          }
          .hero-visual-img {
            min-height: auto;
            margin-top: 30px;
          }
          .hero-image {
            height: auto;
            max-height: 350px;
            border-radius: 16px;
            object-position: top;
          }
        }
      `}</style>
    </section>
  );
}
