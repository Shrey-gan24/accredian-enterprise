'use client';
import Image from 'next/image';

export default function Hero({ openModal }) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-card" style={{ background: '#f0f6ff', overflow: 'hidden' }}>
          <div className="hero-content">
            <h1 className="hero-title">
              Next-Gen <span style={{color: '#2563EB'}}>Expertise</span> For<br className="mobile-break" /> Your <span style={{color: '#2563EB'}}>Enterprise</span>
            </h1>
            
            <p className="hero-subtitle">
              Cultivate high-performance teams through expert learning.
            </p>

            <div className="hero-badges-inline">
              <span className="badge-inline">
                <span className="badge-icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                Tailored Solutions
              </span>
              <span className="badge-inline">
                <span className="badge-icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                Industry Insights
              </span>
              <span className="badge-inline">
                <span className="badge-icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                Expert Guidance
              </span>
              <span className="badge-inline">
                <span className="badge-icon-green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                Measurable Impact
              </span>
            </div>
            
            <button className="btn hero-btn" onClick={openModal} style={{ marginTop: '30px' }}>
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
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #0f172a;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: #334155;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .mobile-break {
          display: none;
        }
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
          color: #0f172a;
          font-weight: 500;
        }
        .badge-icon-green {
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
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
          .hero-card {
            display: flex !important;
            flex-direction: column !important;
            padding: 0 !important;
          }
          .hero-content {
            order: 2;
            padding: 0 20px 40px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 1.8rem;
          }
          .mobile-break {
            display: block;
          }
          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 10px;
          }
          .hero-badges-inline {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px 10px;
            text-align: left;
            margin-top: 20px;
            width: 100%;
          }
          .badge-inline {
            font-size: 0.8rem;
          }
          .badge-icon-green svg {
            width: 16px;
            height: 16px;
          }
          .hero-btn {
            width: 100%;
            max-width: 320px;
          }
          .hero-visual-img {
            order: 1;
            min-height: auto;
            margin-top: 0;
            margin-bottom: 20px;
            padding-top: 20px;
          }
          .hero-image {
            height: auto;
            max-height: 350px;
            border-radius: 0;
            object-fit: contain;
          }
        }
      `}</style>
    </section>
  );
}
