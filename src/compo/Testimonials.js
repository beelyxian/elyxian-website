import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const reviews = [
    {
      name: "Radhika S.",
      review: "Elyxian seeds are super fresh and pure! I can feel the difference.",
      stars: 5
    },
    {
      name: "Ankit M.",
      review: "Clean packaging, great taste. Worth every rupee!",
      stars: 5
    },
    {
      name: "Simran P.",
      review: "I’m ordering my third pack! Love how natural and premium it feels.",
      stars: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">{"⭐".repeat(item.stars)}</div>
            <p className="review-text">"{item.review}"</p>
            <p className="reviewer">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
