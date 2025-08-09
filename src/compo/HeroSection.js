import React from "react";
import "../styles/HeroSection.css";
import mix from '../assest/mixseed.png'
const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Premium Superfood Seeds for Daily Wellness</h1>
        <p>
          Explore Elyxian’s clean, energizing seeds — Chia, Flax, Pumpkin & Sunflower. 
          Boost immunity, energy, and vitality naturally.
        </p>
        <a href="/products" className="hero-btn">Shop Now</a>
      </div>

      <div className="hero-image">
        <img src={mix} alt="Elyxian Seed Pouches" />
      </div>
    </section>
  );
};

export default HeroSection;

