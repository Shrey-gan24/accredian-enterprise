'use client';
import { useState, useEffect } from 'react';
import Toast from '@/components/Toast';

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });
  const [status, setStatus] = useState(''); // '', 'submitting', 'error'
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleExpand = () => setShowForm(true);
    window.addEventListener('expandForm', handleExpand);
    return () => window.removeEventListener('expandForm', handleExpand);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('');
        setFormData({ name: '', email: '', company: '', phone: '' });
        setShowForm(false);
        setShowToast(true);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-card">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="badge">
                <span className="badge-icon">✓</span> Tailored Solutions
              </span>
              <span className="badge">
                <span className="badge-icon">✓</span> Industry Insights
              </span>
              <span className="badge">
                <span className="badge-icon">✓</span> Expert Guidance
              </span>
            </div>
            
            <h1 className="hero-title">
              Next-Gen Expertise For Your <span>Enterprise</span>
            </h1>
            
            <p className="hero-subtitle">
              Cultivate high-performance teams through expert learning.
            </p>
            
            {!showForm && (
              <button className="btn" onClick={() => setShowForm(true)}>
                Enquire Now
              </button>
            )}

            <div className={`form-wrapper ${showForm ? 'expanded' : ''}`}>
              <div className="lead-form-container">
                <form className="lead-form" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    required 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <button type="submit" className="btn" disabled={status === 'submitting'}>
                    {status === 'submitting' && <div className="btn-spinner"></div>}
                    {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                  {status === 'error' && (
                    <div className="form-error">Something went wrong. Please try again.</div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-bubble bubble-1">10K+ Trained</div>
            <div className="floating-bubble bubble-2">200+ Sessions</div>
            
            <svg className="hero-svg" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desktop background element */}
              <rect x="50" y="50" width="400" height="300" rx="20" fill="var(--card-bg)" opacity="0.5" />
              <rect x="70" y="30" width="360" height="340" rx="20" fill="var(--card-bg)" opacity="0.8" />
              
              {/* Person 1 (Left) */}
              <circle cx="180" cy="150" r="40" fill="var(--blue)" />
              <path d="M120 350 C120 250, 240 250, 240 350 Z" fill="var(--blue)" />
              <rect x="140" y="240" width="80" height="40" rx="10" fill="var(--light-blue)" />
              
              {/* Person 2 (Right) */}
              <circle cx="320" cy="170" r="35" fill="var(--accent-blue)" />
              <path d="M260 350 C260 270, 380 270, 380 350 Z" fill="var(--accent-blue)" />
              
              {/* Chart/UI Elements */}
              <rect x="280" y="100" width="100" height="80" rx="8" fill="var(--bg-secondary)" />
              <rect x="290" y="115" width="80" height="8" rx="4" fill="var(--blue)" />
              <rect x="290" y="135" width="60" height="8" rx="4" fill="var(--light-blue)" />
              <rect x="290" y="155" width="40" height="8" rx="4" fill="var(--light-blue)" />
            </svg>
          </div>
        </div>
      </div>
      <Toast 
        show={showToast} 
        onClose={() => setShowToast(false)} 
        message="Thank you! We'll contact you within 24 hours." 
      />
    </section>
  );
}
