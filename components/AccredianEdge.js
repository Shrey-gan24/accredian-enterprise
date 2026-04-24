'use client'
import { useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

const nodes = [
  {
    id: 1,
    label: 'Tailored Solutions',
    desc: "Programs customized to your organization's goals and challenges.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
        <line x1="9" y1="21" x2="15" y2="21"/>
      </svg>
    ),
    position: 'top',
    isFirst: true
  },
  {
    id: 2,
    label: 'Expert Guidance',
    desc: 'Learn from industry leaders with real-world success.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M16 11l1.5 1.5L22 8"/>
      </svg>
    ),
    position: 'bottom'
  },
  {
    id: 3,
    label: 'Innovative Framework',
    desc: 'Proprietary methods for impactful, application-driven results.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    position: 'top'
  },
  {
    id: 4,
    label: 'Advanced Technology',
    desc: 'State-of-the-art LMS for seamless learning experiences.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    position: 'bottom'
  },
  {
    id: 5,
    label: 'Diverse Offerings',
    desc: 'Courses across industries, skill levels, and emerging fields.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="15" y1="3" x2="21" y2="3"/>
        <line x1="21" y1="3" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="3" y2="21"/>
        <line x1="3" y1="21" x2="3" y2="15"/>
        <line x1="21" y1="3" x2="14" y2="10"/>
        <line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    ),
    position: 'top'
  },
  {
    id: 6,
    label: 'Proven Impact',
    desc: 'Trusted by leading organizations for measurable ROI.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    position: 'bottom'
  },
  {
    id: 7,
    label: 'Flexible Delivery',
    desc: 'Online and offline options tailored to your needs.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    position: 'top'
  }
];

export default function AccredianEdgeSection() {
  const scrollRef = useRef(null)
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);
  const [activeSegment, setActiveSegment] = useState(0);

  const handleSegmentScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    if (width > 0) {
      const index = Math.round(scrollLeft / width);
      if (index !== activeSegment) setActiveSegment(index);
    }
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
    }
  }

  const domains = [
    {
      title: 'Product & Innovation Hub',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z"/>
          <line x1="9" y1="21" x2="15" y2="21"/>
        </svg>
      )
    },
    {
      title: 'Gen-AI Mastery',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5A2.5 2.5 0 0 1 17 5a2.5 2.5 0 0 1 2 4.5 3 3 0 0 1-3 3H8a3 3 0 0 1-3-3A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 2.5-2.5V2z"/>
          <path d="M12 12v9M8 17h8"/>
        </svg>
      )
    },
    {
      title: 'Leadership Elevation',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <circle cx="9" cy="7" r="3"/>
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          <path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
        </svg>
      )
    },
    {
      title: 'Tech & Data Insights',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      title: 'Operations Excellence',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      )
    },
    {
      title: 'Digital Enterprise',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: 'Fintech Innovation Lab',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
          <circle cx="8" cy="15" r="1" fill="#2563EB"/>
          <circle cx="12" cy="15" r="1" fill="#2563EB"/>
        </svg>
      )
    }
  ];

  const courseSegments = [
    { 
      title: 'Program Specific', 
      sub: 'Certificate, Executive, Post Graduate Certificate',
      image: '/images/course_program.png'
    },
    { 
      title: 'Industry Specific', 
      sub: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: '/images/course_industry.png'
    },
    { 
      title: 'Topic Specific', 
      sub: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: '/images/course_topic.png'
    },
    { 
      title: 'Level Specific', 
      sub: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: '/images/course_level.png'
    }
  ];

  return (
    <section id="accredian-edge" ref={sectionRef} style={{ padding: '80px 40px', background: 'var(--bg)' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text)' }}>
          The <span style={{ color: '#2563EB' }}>Accredian Edge</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '1rem' }}>
          Key Aspects of <span style={{ color: '#2563EB' }}>Our Strategic Training</span>
        </p>
      </div>

      {/* Slider wrapper */}
      <div className="desktop-slider" style={{ position: 'relative', alignItems: 'center', marginTop: '20px' }}>

        {/* Left scroll button */}
        <button onClick={() => scroll(-1)} style={{
          background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem',
          color: 'var(--text-muted)', flexShrink: 0, marginRight: '16px', zIndex: 10,
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>‹</button>

        {/* Scrollable row */}
        <div ref={scrollRef} style={{
          display: 'flex', overflowX: 'auto',
          scrollbarWidth: 'none', flex: 1,
          position: 'relative', height: '400px'
        }}>
          {/* SVG Sine Wave Background */}
          <svg style={{ position: 'absolute', top: 0, left: 0, height: '400px', width: '1400px', zIndex: 0 }}>
            <path 
              d="M 100 140 C 200 140, 200 260, 300 260 C 400 260, 400 140, 500 140 C 600 140, 600 260, 700 260 C 800 260, 800 140, 900 140 C 1000 140, 1000 260, 1100 260 C 1200 260, 1200 140, 1300 140" 
              fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" 
            />
            {/* Double arrows at midpoints */}
            <g fill="#9ca3af" fontSize="24" fontFamily="sans-serif" textAnchor="middle">
              <text x="200" y="208">»</text>
              <text x="400" y="208">»</text>
              <text x="600" y="208">»</text>
              <text x="800" y="208">»</text>
              <text x="1000" y="208">»</text>
              <text x="1200" y="208">»</text>
            </g>
          </svg>

          {/* Nodes */}
          <div style={{ display: 'flex', position: 'relative', zIndex: 1, width: '1400px' }}>
            {nodes.map((node, index) => (
              <div key={node.id} style={{ width: '200px', height: '400px', flexShrink: 0, position: 'relative' }}>
                
                {node.position === 'top' ? (
                  <>
                    {/* Text Area */}
                    <div style={{ position: 'absolute', top: '0px', left: '96px', width: '220px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '4px' }}>
                        <span style={{ color: '#2563EB', fontSize: '14px', lineHeight: '1.2' }}>●</span>
                        <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text)', margin: 0, lineHeight: '1.2' }}>{node.label}</p>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '20px', lineHeight: '1.4' }}>{node.desc}</p>
                    </div>
                    {/* Vertical line */}
                    <div style={{ position: 'absolute', top: '15px', left: '100px', width: '2px', height: '65px', background: '#2563EB', transform: 'translateX(-50%)' }} />
                    {/* Circle */}
                    <div style={{ 
                      position: 'absolute', top: '90px', left: '50px',
                      width: '100px', height: '100px', borderRadius: '50%',
                      background: node.isFirst ? 'linear-gradient(135deg, #06b6d4, #2563eb)' : '#1e3a8a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '6px solid var(--bg)',
                      boxShadow: '0 0 0 1px #cbd5e1, 0 10px 25px rgba(37,99,235,0.15)',
                      color: '#fff'
                    }}>
                      {node.icon}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Circle */}
                    <div style={{ 
                      position: 'absolute', top: '210px', left: '50px',
                      width: '100px', height: '100px', borderRadius: '50%',
                      background: node.isFirst ? 'linear-gradient(135deg, #06b6d4, #2563eb)' : '#1e3a8a',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '6px solid var(--bg)',
                      boxShadow: '0 0 0 1px #cbd5e1, 0 10px 25px rgba(37,99,235,0.15)',
                      color: '#fff'
                    }}>
                      {node.icon}
                    </div>
                    {/* Vertical line */}
                    <div style={{ position: 'absolute', top: '320px', left: '100px', width: '2px', height: '65px', background: '#2563EB', transform: 'translateX(-50%)' }} />
                    {/* Text Area */}
                    <div style={{ position: 'absolute', top: '380px', left: '96px', width: '220px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '4px' }}>
                        <span style={{ color: '#2563EB', fontSize: '14px', lineHeight: '1.2' }}>●</span>
                        <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text)', margin: 0, lineHeight: '1.2' }}>{node.label}</p>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, paddingLeft: '20px', lineHeight: '1.4' }}>{node.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right scroll button */}
        <button onClick={() => scroll(1)} style={{
          background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '50%',
          width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem',
          color: 'var(--text-muted)', flexShrink: 0, marginLeft: '16px', zIndex: 10,
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>›</button>
      </div>

      {/* Mobile USPS Alternative */}
      <div className="mobile-usps-list">
        {nodes.map(node => (
          <div key={node.id} className="mobile-usps-card">
            <div className="mobile-usps-icon">{node.icon}</div>
            <div className="mobile-usps-content">
              <h4>{node.label}</h4>
              <p>{node.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`} style={{marginTop: '80px', marginBottom: '8px', transitionDelay: '200ms'}}>
          Our <span style={{color:'#2563EB'}}>Domain Expertise</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px', marginBottom: '40px' }}>
          <span style={{color:'#2563EB'}}>Specialized Programs</span> Designed to Fuel Innovation
        </p>
        
        <style>{`
          .desktop-slider {
            display: flex;
          }
          .mobile-usps-list {
            display: none;
          }
          .mobile-usps-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
            display: flex;
            align-items: flex-start;
            gap: 16px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          .mobile-usps-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, #06b6d4, #2563eb);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 0 4px 10px rgba(37,99,235,0.2);
          }
          .mobile-usps-icon svg {
            width: 24px;
            height: 24px;
          }
          .mobile-usps-content h4 {
            margin: 0 0 4px 0;
            font-size: 1.1rem;
            color: var(--text);
            font-weight: 700;
          }
          .mobile-usps-content p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-muted);
            line-height: 1.4;
          }
          .new-domain-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 40px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-shadow: 0 1px 4px rgba(0,0,0,0.06);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }
          .new-domain-card:hover {
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            transform: translateY(-2px);
          }
          .new-domain-card-icon {
            margin-bottom: 16px;
          }
          .new-domain-card-title {
            font-weight: 600;
            font-size: 0.95rem;
            color: var(--text);
          }
          .custom-domain-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 24px;
          }
          @media (max-width: 900px) {
            .custom-domain-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .desktop-slider {
              display: none !important;
            }
            .mobile-usps-list {
              display: block;
              margin-top: 20px;
              margin-bottom: 40px;
            }
          }
          @media (max-width: 600px) {
            .custom-domain-grid {
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }
            .new-domain-card {
              flex-direction: column;
              padding: 16px 8px;
              justify-content: center;
              text-align: center;
              gap: 8px;
            }
            .new-domain-card-icon {
              margin-bottom: 4px;
            }
            .new-domain-card-icon svg {
              width: 28px;
              height: 28px;
            }
            .new-domain-card-title {
              font-size: 0.85rem;
              line-height: 1.3;
            }
            .new-domain-card:nth-child(7) {
              grid-column: span 2;
            }
          }
        `}</style>

        <div className="custom-domain-grid">
          {domains.map((domain, idx) => (
            <div key={idx} className="new-domain-card">
              <div className="new-domain-card-icon">
                {domain.icon}
              </div>
              <div className="new-domain-card-title">{domain.title}</div>
            </div>
          ))}
        </div>

        <h2 className={`section-title animate-on-scroll ${inView ? 'visible' : ''}`} style={{marginTop: '80px', marginBottom: '8px', transitionDelay: '200ms'}}>
          Tailored <span style={{color:'#2563EB'}}>Course Segmentation</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px', marginBottom: '40px' }}>
          Explore <span style={{color:'#2563EB'}}>Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>

        <style>{`
          .segment-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }
          .segment-card:hover {
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            transform: translateY(-4px);
          }
          .segment-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
          .segment-body {
            padding: 24px 16px;
          }
          .segment-title {
            color: #2563EB;
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 12px;
          }
          .segment-sub {
            color: var(--text-muted);
            font-size: 0.85rem;
            line-height: 1.5;
          }
          @media (max-width: 992px) {
            .segment-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .segment-grid {
              display: flex !important;
              overflow-x: auto;
              scroll-snap-type: x proximity;
              scroll-behavior: smooth;
              gap: 16px;
              padding-bottom: 10px;
              scrollbar-width: none;
            }
            .segment-grid::-webkit-scrollbar {
              display: none;
            }
            .segment-card {
              min-width: 100%;
              scroll-snap-align: start;
              flex-shrink: 0;
            }
            .segment-sub {
              display: none;
            }
            .segment-title {
              text-align: center;
              font-size: 1.4rem;
              margin-bottom: 0;
            }
            .segment-body {
              padding: 16px;
            }
            .segment-dots {
              display: flex !important;
            }
          }
        `}</style>

        <div className="segment-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }} onScroll={handleSegmentScroll}>
          {courseSegments.map((course, idx) => (
            <div key={idx} className="segment-card">
              <img src={course.image} alt={course.title} className="segment-img" />
              <div className="segment-body">
                <div className="segment-title">{course.title}</div>
                <div className="segment-sub">{course.sub}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="segment-dots" style={{ display: 'none', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {courseSegments.map((_, idx) => (
            <div key={idx} style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: activeSegment === idx ? '#2563EB' : '#cbd5e1',
              transition: 'background-color 0.3s'
            }} />
          ))}
        </div>

        <style>{`
          .new-audience-banner {
            background-color: #2563EB;
            border-radius: 12px;
            padding: 48px;
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            color: #ffffff;
            position: relative;
            overflow: hidden;
            margin-top: 40px;
          }
          .audience-left {
            flex: 0 0 45%;
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
          }
          .audience-right {
            flex: 0 0 50%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            z-index: 2;
          }
          .audience-image {
            margin-top: auto;
            align-self: flex-start;
            max-width: 100%;
            width: 320px;
            object-fit: contain;
            mix-blend-mode: normal;
          }
          .audience-item-icon {
            display: inline-flex;
            margin-bottom: 12px;
          }
          @media (max-width: 900px) {
            .new-audience-banner {
              flex-direction: column;
              padding: 40px 20px;
              border-radius: 0;
              margin-left: -20px;
              margin-right: -20px;
              width: calc(100% + 40px);
            }
            .audience-image {
              display: none;
            }
            .audience-left {
              margin-bottom: 32px;
            }
            .audience-main-title {
              font-size: 2rem !important;
            }
            .audience-right {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .audience-item {
              display: flex;
              align-items: flex-start;
              gap: 16px;
            }
            .audience-item-icon {
              margin-bottom: 0;
              flex-shrink: 0;
            }
          }
        `}</style>

        <div className={`new-audience-banner animate-on-scroll ${inView ? 'visible' : ''}`} style={{transitionDelay: '400ms'}}>
          <div className="audience-left">
            <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>Who Should Join?</p>
            <h2 className="audience-main-title" style={{ fontSize: '2.5rem', fontWeight: '700', lineHeight: '1.2' }}>Strategic Skill Enhancement</h2>
            <img src="/images/who_should_join.png" alt="Professionals" className="audience-image" />
          </div>
          <div className="audience-right">
            <div className="audience-item">
              <div className="audience-item-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M9 10l2 2 4-4"/>
                </svg>
              </div>
              <div className="audience-item-text">
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Tech Professionals</h3>
                <p style={{ fontSize: '0.9rem', color: '#e0e7ff', lineHeight: '1.5' }}>Enhance expertise, embrace tech, drive innovation.</p>
              </div>
            </div>
            <div className="audience-item">
              <div className="audience-item-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <line x1="9" y1="7" x2="15" y2="13"/>
                  <line x1="15" y1="7" x2="9" y2="13"/>
                </svg>
              </div>
              <div className="audience-item-text">
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Non-Tech Professionals</h3>
                <p style={{ fontSize: '0.9rem', color: '#e0e7ff', lineHeight: '1.5' }}>Adapt digitally, collaborate in tech environments.</p>
              </div>
            </div>
            <div className="audience-item">
              <div className="audience-item-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="audience-item-text">
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Emerging Professionals</h3>
                <p style={{ fontSize: '0.9rem', color: '#e0e7ff', lineHeight: '1.5' }}>Develop powerful skills for rapid career growth.</p>
              </div>
            </div>
            <div className="audience-item">
              <div className="audience-item-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div className="audience-item-text">
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Senior Professionals</h3>
                <p style={{ fontSize: '0.9rem', color: '#e0e7ff', lineHeight: '1.5' }}>Strengthen leadership, enhance strategic decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
