import React from 'react';
import './../styles/Footer.css';
import instgramlogo from './../assest/in.gif'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h2>Elyxian</h2>
        <p>Premium Wellness From Nature 🌿</p>

        <div className="footer-contact">
          <p>📞 +91 98765 43210</p>
          <p>📧 care@elyxian.in</p>
        </div>

        <p className="connect-label">Let’s Connect</p>
        <div className="footer-socials">
          <a href="https://instagram.com/elyxian" target="_blank" rel="noopener noreferrer">
            <img src={instgramlogo} alt="Instagram" />
          </a>
        </div>
      </div>
      <p className="footer-copy">© 2025 Elyxian. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
