import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ProfHacks 2026</h3>
          <p>Space Cowboys Edition</p>
          <p className="footer-tagline">Saddle up for the ultimate coding adventure</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#prizes">Prizes</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@profhacks.org</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ProfHacks. All rights reserved. Made with 🤠 in space.</p>
      </div>
    </footer>
  )
}

export default Footer

