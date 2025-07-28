import React from 'react';
import '../styles/about.css'; // Make sure this path is correct
import img from "../assest/mixseed.png"
const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Elyxian</h1>
        <p>Delivering premium, chemical-free superfoods with love 💚</p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Elyxian, we’re on a mission to provide clean, nutrient-rich seeds
            that support your health naturally. From sourcing to packing, every
            step is driven by our love for wellness.
          </p>
        </div>
        <img
          src={img} // Use your actual image path here
          alt="Elyxian Seed Pack"
          className="mission-image"
        />
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="icon">🌿</span>
            <h3>Purity First</h3>
            <p>Only natural, chemical-free seeds for your daily health needs.</p>
          </div>
          <div className="value-card">
            <span className="icon">♻️</span>
            <h3>Sustainability</h3>
            <p>We care for the planet – eco-friendly sourcing & packaging.</p>
          </div>
          <div className="value-card">
            <span className="icon">🤝</span>
            <h3>Customer Trust</h3>
            <p>Honest ingredients, no false promises – just clean nutrition.</p>
          </div>
          <div className="value-card">
            <span className="icon">📦</span>
            <h3>Handled with Care</h3>
            <p>Every pack is sealed with hygiene, safety & love.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Have a Question or Want to Order?</h2>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
