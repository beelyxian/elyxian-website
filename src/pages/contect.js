import React from 'react';
import '../styles/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Elyxian</h1>
      <p className="contact-subtitle">We're here to help. Drop us a message or DM us directly.</p>

      <div className="contact-card">
        {/* Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="👤 Your Name" required />
          <input type="email" placeholder="📧 Your Email" required />
          <textarea placeholder="📝 Your Message..." rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Info */}
        <div className="contact-info">
          <h3>📍 Business Details</h3>
          <p><strong>Email:</strong> support@elyxian.in</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/91XXXXXXXXXX" target="_blank">+91 XXXXXXXXXX</a></p>
          <p><strong>Timings:</strong> Mon–Sat, 10AM – 7PM</p>
          <p><strong>Location:</strong> Mumbai, India 🇮🇳</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
