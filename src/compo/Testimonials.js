import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Testimonials.css';
import PremiumLoader from './PremiumLoader';

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          'https://elyxianback.onrender.com/api/reviews/recent'
        );
        setReviews(res.data.slice(0, 4)); // Only first 4 reviews
      } catch (error) {
        console.error("❌ Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="loading-text">
        <PremiumLoader />
      </div>
    );
  }

  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {reviews.length > 0 ? (
          reviews.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <span className="quote-icon">❝</span>
              <div className="stars">
                {[...Array(item.rating || 5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="review-text">"{item.comment}"</p>
              <div className="reviewer-info">
                <div className="avatar">
                  {item.name ? item.name.charAt(0).toUpperCase() : "U"}
                </div>
                <p className="reviewer">— {item.name || "Unknown"}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
