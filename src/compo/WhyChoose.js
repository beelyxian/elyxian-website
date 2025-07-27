import React from 'react';
import '../styles/WhyChoose.css';

function WhyChoose() {
    const benefits = [
        { title: "🌿 100% Natural", desc: "Sourced directly from nature with no additives." },
        { title: "✅ FSSAI Certified", desc: "Approved for quality, purity & safety." },
        { title: "🚫🧪 No Preservatives", desc: "Only fresh, clean seeds — nothing else." },
        { title: "🛍️ Small Batch Quality", desc: "Packed in small batches to preserve freshness." },
        { title: "❤️👥 1000+ Happy Customers", desc: "Trusted by health-conscious buyers across India." }
      ];
      

  return (
    <section className="why-choose-section">
      <h2>Why Choose <span>Elyxian</span>?</h2>
      <div className="benefit-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
