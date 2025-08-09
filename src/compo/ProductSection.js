import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductSection.css';
import seed from '../assest/Chiaseed.png'; // fallback image
import { useNavigate } from 'react-router-dom';
import PremiumLoader from './PremiumLoader';

function ProductSection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOrderNow = (id) => {
    navigate(`/productdetail/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://elyxianback.onrender.com/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <PremiumLoader />
      </div>
    );
  }

  return (
    <section className="product-section">
      <h2 className="section-title">Explore Our Seeds</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <img
              src={item.images?.[0] || seed}
              alt={item.name}
              loading="lazy"
              className="product-image"
            />
            <h3 className="product-name">{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <button
              className="buy-btn"
              onClick={() => handleOrderNow(item.id)}
              aria-label={`Buy now: ${item.name}`}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
