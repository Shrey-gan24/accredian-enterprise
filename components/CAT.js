'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function CAT() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.2);

  return (
    <section id="cat" className="cat-framework" ref={sectionRef} style={{ background: 'var(--bg-secondary)', padding: '100px 20px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className={`animate-on-scroll ${inView ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            The CAT Framework
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: '0' }}>
            Our unique approach to learning
          </p>
        </div>
        
        <style>{`
          .cat-layout {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 40px 0;
          }
          .cat-straight-line {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            max-width: 800px;
            height: 2px;
            background-color: #2563EB;
            transform: translate(-50%, -50%);
            z-index: 0;
          }
          .cat-nodes-container {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            width: 100%;
          }
          .cat-circle-node {
            width: 170px;
            height: 170px;
            background: var(--card-bg);
            border: 2px solid #2563EB;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }
          .cat-emoji {
            font-size: 2.8rem;
            margin-bottom: 12px;
            line-height: 1;
          }
          .cat-circle-node h3 {
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--text);
            margin: 0;
          }
          @media (max-width: 768px) {
            .cat-layout {
              padding: 0;
            }
            .cat-straight-line {
              top: 50%;
              left: 50%;
              width: 2px;
              height: 100%;
              transform: translate(-50%, -50%);
            }
            .cat-nodes-container {
              flex-direction: column;
              gap: 40px;
            }
          }
        `}</style>

        <div className={`cat-layout animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
          <div className="cat-straight-line"></div>
          <div className="cat-nodes-container">
            <div className="cat-circle-node">
              <div className="cat-emoji">💡</div>
              <h3>Concept</h3>
            </div>
            <div className="cat-circle-node">
              <div className="cat-emoji">⚙️</div>
              <h3>Application</h3>
            </div>
            <div className="cat-circle-node">
              <div className="cat-emoji">🛠️</div>
              <h3>Tools</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
