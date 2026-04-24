'use client';
import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    [
      {
        quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
        type: 'adp'
      },
      {
        quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
        type: 'bayer'
      }
    ],
    [
      {
        quote: "The customized curriculum and expert trainers made a real difference in our digital transformation journey.",
        type: 'adp'
      },
      {
        quote: "We saw a measurable ROI within months of completing the leadership elevation program.",
        type: 'bayer'
      }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section testimonials" ref={sectionRef} style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>Testimonials from <span style={{color:'#2563EB'}}>Our Partners</span></h2>
        <p className={`section-subtitle animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '50ms', marginTop: '-30px', marginBottom: '50px'}}>What <span style={{color:'#2563EB'}}>Our Clients</span> Are Saying</p>
        
        <div className="test-slider-container">
          <div className="test-grid-new" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((pair, pageIndex) => (
              <div key={pageIndex} className="test-page">
                {pair.map((test, index) => (
                  <div key={index} className="test-card-new">
                    <div className="test-logo-wrapper">
                      {test.type === 'adp' ? (
                        <div style={{ color: '#CC0000', fontWeight: '900', fontSize: '2rem', fontStyle: 'italic', letterSpacing: '-1px' }}>ADP</div>
                      ) : (
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#10884A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>BAYER</div>
                      )}
                    </div>
                    <div className="test-quote-new">"{test.quote}"</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="test-dots">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`test-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .test-slider-container {
          overflow: hidden;
          width: 100%;
        }
        .test-grid-new {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }
        .test-page {
          min-width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .test-card-new {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .test-logo-wrapper {
          margin-bottom: 10px;
        }
        .test-quote-new {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .test-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }
        .test-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--border);
          cursor: pointer;
          transition: background-color 0.3s, width 0.3s;
        }
        .test-dot.active {
          background-color: #2563EB;
          width: 24px;
          border-radius: 5px;
        }
        @media (max-width: 768px) {
          .test-page {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
