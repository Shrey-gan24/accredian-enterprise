'use client';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);

  const testimonials = [
    {
      quote: "Accredian's training programs have significantly improved our team's productivity and innovation capabilities.",
      author: "Jane Doe",
      initials: "JD",
      company: "Tech Solutions Inc."
    },
    {
      quote: "The customized curriculum and expert trainers made a real difference in our digital transformation journey.",
      author: "John Smith",
      initials: "JS",
      company: "Global Innovations Ltd."
    },
    {
      quote: "We saw a measurable ROI within months of completing the leadership elevation program.",
      author: "Sarah Johnson",
      initials: "SJ",
      company: "Future Enterprises"
    }
  ];

  return (
    <section id="testimonials" className="section testimonials" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`}>What Our Clients Say</h2>
        
        <div className="test-grid">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className={`test-card animate-on-scroll ${inView ? 'visible' : ''}`}
              style={{transitionDelay: `${100 + (index * 100)}ms`}}
            >
              <div className="quote-mark">"</div>
              <div className="stars">★★★★★</div>
              <div className="quote">{test.quote}</div>
              
              <div className="test-author-box">
                <div className="test-avatar">{test.initials}</div>
                <div>
                  <div className="author">{test.author}</div>
                  <div className="company">{test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
