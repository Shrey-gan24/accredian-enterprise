'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch('/api/leads');
        const data = await res.json();
        // Sort newest first
        setLeads(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
      } catch (err) {
        console.error('Failed to load leads', err);
      } finally {
        setLoading(false);
      }
    }
    
    // Read theme preference for dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }

    fetchLeads();
  }, []);

  return (
    <div className="section" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-secondary)', padding: '40px 20px' }}>
      <div className="container">
        <a href="/" className="back-link">← Back to Site</a>
        
        <div className="admin-header">
          <h1>Lead Dashboard</h1>
          <div className="admin-stats">
            <div className="stat-card">
              <h3>Total Leads</h3>
              <div className="count">{leads.length}</div>
            </div>
          </div>
        </div>

        <div className="admin-table-container">
          {loading ? (
            <div className="admin-empty">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="admin-empty">
              <h3>No leads yet</h3>
              <p>When users submit the enquiry form, they will appear here.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Phone</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr key={lead.id}>
                    <td>{leads.length - index}</td>
                    <td style={{ fontWeight: 600 }}>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.company}</td>
                    <td>{lead.phone}</td>
                    <td>{new Date(lead.timestamp).toLocaleDateString()} {new Date(lead.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
