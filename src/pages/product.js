import React, { useEffect, useState } from 'react';
import '../styles/Products.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PremiumLoader from '../compo/PremiumLoader';

function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleOrderNow = (id) => {
    navigate(`/productdetail/${id}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://elyxianback.onrender.com/api/products');
        setProductList(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <h2 className="product-title">🌿 Explore Our Premium Super Seeds</h2>

      {loading ? (
        <PremiumLoader />
      ) : (
        <div className="product-grid">
          {productList.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={product.images?.[0] || 'https://via.placeholder.com/150'}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price}</p>
                <button
                  onClick={() => handleOrderNow(product.id)}
                  className="order-btn"
                  aria-label={`Order now for ${product.name}`}
                >
                  Order Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
