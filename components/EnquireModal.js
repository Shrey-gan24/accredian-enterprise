'use client';
import { useState, useEffect } from 'react';

export default function EnquireModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', domain: '', candidates: '', mode: '', location: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Enquire Now</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        {status === 'success' ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>Enquiry received!</h3>
            <p>Our team will contact you shortly.</p>
          </div>
        ) : (
          <div className="modal-form-container">
            <div className="form-group">
              <label>Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <div className="phone-input">
                <span className="phone-prefix">🇮🇳 +91</span>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
            </div>
            
            <div className="form-group">
              <label>Select Domain</label>
              <select value={formData.domain} onChange={e => setFormData({...formData, domain: e.target.value})}>
                <option value="">Select a domain</option>
                <option value="Product & Innovation">Product & Innovation</option>
                <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                <option value="Leadership">Leadership</option>
                <option value="Tech & Data">Tech & Data</option>
                <option value="Operations">Operations</option>
                <option value="Digital Enterprise">Digital Enterprise</option>
                <option value="Fintech">Fintech</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Number of Candidates</label>
              <input type="number" value={formData.candidates} onChange={e => setFormData({...formData, candidates: e.target.value})} />
            </div>
            
            <div className="form-group">
              <label>Mode of Delivery</label>
              <select value={formData.mode} onChange={e => setFormData({...formData, mode: e.target.value})}>
                <option value="">Select mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Location</label>
              <input type="text" placeholder="Eg: Gurgaon, Delhi, India" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
            </div>
            
            <button className="modal-submit-btn" onClick={handleSubmit} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
            {status === 'error' && <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>Something went wrong.</div>}
          </div>
        )}
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: var(--card-bg, #fff);
          color: var(--text, #111);
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-muted, #666);
        }
        .form-group {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 5px;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .form-group input, .form-group select {
          padding: 10px;
          border: 1px solid var(--border, #ccc);
          border-radius: 8px;
          background: var(--bg, #fff);
          color: var(--text, #111);
          font-size: 1rem;
        }
        .phone-input {
          display: flex;
          align-items: center;
          border: 1px solid var(--border, #ccc);
          border-radius: 8px;
          background: var(--bg, #fff);
          overflow: hidden;
        }
        .phone-prefix {
          padding: 10px;
          background: var(--bg-secondary, #f5f5f5);
          border-right: 1px solid var(--border, #ccc);
          white-space: nowrap;
        }
        .phone-input input {
          border: none;
          flex: 1;
          border-radius: 0;
        }
        .modal-submit-btn {
          width: 100%;
          padding: 15px;
          background: #2563EB;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s;
        }
        .modal-submit-btn:hover {
          background: #1d4ed8;
        }
        .modal-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .modal-success {
          text-align: center;
          padding: 40px 0;
        }
        .success-icon {
          width: 60px;
          height: 60px;
          background: #22c55e;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 20px;
        }
      `}</style>
    </div>
  );
}
