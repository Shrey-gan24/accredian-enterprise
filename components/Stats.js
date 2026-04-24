'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

function Counter({ target, duration, inView, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, target, duration]);

  // Format large numbers (10000 -> 10K)
  let formattedCount = count.toString();
  if (count >= 1000) {
    formattedCount = (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'K';
  }

  return <>{formattedCount}{suffix}</>;
}

export default function Stats() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.2);

  return (
    <section id="stats" className="section stats" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>Our <span style={{color:'#2563EB'}}>Track Record</span></h2>
        <p className={`section-subtitle animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '100ms'}}>The Numbers Behind <span style={{color:'#2563EB'}}>Our Success</span></p>
        
        <div className={`stats-grid animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '200ms'}}>
          <div className="stat-item">
            <div className="stat-number">
              <Counter target={10000} duration={1500} inView={inView} suffix="+" />
            </div>
            <div className="stat-label">Professionals Trained</div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-number">
              <Counter target={200} duration={1500} inView={inView} suffix="+" />
            </div>
            <div className="stat-label">Sessions Delivered</div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-number">
              <Counter target={5000} duration={1500} inView={inView} suffix="+" />
            </div>
            <div className="stat-label">Active Learners</div>
          </div>
        </div>
      </div>
    </section>
  );
}
