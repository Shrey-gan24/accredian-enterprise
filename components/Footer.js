'use client';

export default function Footer({ openModal }) {
  return (
    <footer className="footer-new">
      <div className="container">
        
        <div className="footer-top-row">
          <div className="footer-brand-section">
            <div className="footer-logo-container">
              <div className="footer-logo-main">accredian</div>
              <div className="footer-logo-sub">credentials that matter</div>
            </div>
            <div className="footer-social-row">
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" className="social-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1a1a1a"></polygon></svg></a>
            </div>
          </div>
          <div className="footer-action">
            <button className="footer-enquire-btn" onClick={openModal}>Enquire Now</button>
            <span className="footer-advisor-text">Speak with our Advisor</span>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Accredian</h4>
            <ul className="footer-links-new">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Why Accredian</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links-new">
              <li>Email us: <a href="mailto:enterprise@accredian.com" className="blue-link">enterprise@accredian.com</a></li>
              <li className="address-text">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-row">
          <div className="copyright">© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</div>
        </div>

      </div>

      <style jsx>{`
        .footer-new {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 60px 0 30px;
        }
        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .footer-brand-section {
          display: flex;
          flex-direction: column;
        }
        .footer-logo-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        .footer-logo-main {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .footer-logo-sub {
          font-size: 0.8rem;
          color: #9ca3af;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }
        .footer-social-row {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: color 0.3s, transform 0.2s;
        }
        .social-icon:hover {
          color: #3b82f6;
          transform: translateY(-2px);
        }
        .footer-action {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .footer-enquire-btn {
          background-color: #2563EB;
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .footer-enquire-btn:hover {
          background-color: #1d4ed8;
        }
        .footer-advisor-text {
          font-size: 0.9rem;
          color: #ffffff;
          margin-top: 12px;
          font-weight: 500;
        }
        .footer-divider {
          height: 1px;
          background-color: #333333;
          width: 100%;
          margin: 30px 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .footer-heading {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #ffffff;
        }
        .footer-links-new {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links-new li {
          margin-bottom: 15px;
          color: #d1d5db;
          font-size: 1rem;
        }
        .footer-links-new a, .address-text {
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          line-height: 1.6;
        }
        .footer-links-new a:hover {
          color: #3b82f6;
        }
        .blue-link {
          color: #3b82f6 !important;
        }
        .copyright {
          font-size: 0.9rem;
          color: #9ca3af;
          text-align: center;
        }
        @media (max-width: 768px) {
          .footer-top-row {
            flex-direction: column;
            gap: 30px;
          }
          .footer-action {
            align-items: flex-start;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  );
}
