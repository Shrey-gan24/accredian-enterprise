export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">ACCREDIAN</div>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Empowering enterprises with next-generation expertise and customized learning solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#home">Home</a></li>
              <li><a href="/#stats">Stats</a></li>
              <li><a href="/#clients">Clients</a></li>
              <li><a href="/#edge">The Accredian Edge</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="/#faqs">FAQs</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@accredian.com">contact@accredian.com</a></li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© 2024 Accredian. All rights reserved.</div>
          <a href="/admin" className="footer-admin-link">Admin Dashboard</a>
        </div>
      </div>
    </footer>
  );
}
