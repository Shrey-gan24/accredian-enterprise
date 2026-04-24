'use client';

export default function CTABanner({ openModal }) {
  return (
    <section className="section" style={{ padding: '0 20px 80px 20px' }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-bg-pattern"></div>
          <div className="cta-left">
            <div className="cta-icon-wrapper">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <div className="cta-text">
              <h3>Want to Learn More About Our Training Solutions?</h3>
              <p>Get Expert Guidance for Your Team's Success!</p>
            </div>
          </div>
          
          <div className="cta-right">
            <button className="cta-btn" onClick={openModal}>
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-banner {
          background-color: #2563EB;
          border-radius: 16px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
        }
        .cta-bg-pattern {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, transparent 20%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 28%, transparent 28%, transparent 36%, rgba(255,255,255,0.06) 36%, rgba(255,255,255,0.06) 44%, transparent 44%, transparent 52%, rgba(255,255,255,0.06) 52%, rgba(255,255,255,0.06) 60%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
        .cta-left, .cta-right {
          position: relative;
          z-index: 1;
        }
        .cta-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .cta-icon-wrapper {
          background-color: white;
          width: 70px;
          height: 70px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .cta-text h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 8px 0;
        }
        .cta-text p {
          margin: 0;
          font-size: 1.05rem;
          opacity: 0.9;
        }
        .cta-btn {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
          white-space: nowrap;
        }
        .cta-btn:hover {
          background-color: white;
          color: #2563EB;
        }
        @media (max-width: 768px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          .cta-left {
            flex-direction: column;
          }
          .cta-bg-pattern {
            left: 50%;
          }
        }
      `}</style>
    </section>
  );
}
