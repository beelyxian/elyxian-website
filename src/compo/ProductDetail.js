// ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ProductDetail.css';
import visa from '../assest/atm-card.png';
import upi from '../assest/download.png';
import mastercard from '../assest/atm-card.png';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import PremiumLoader from './PremiumLoader';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [mainImage, setMainImage] = useState('');
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Review form states
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleBuyNow = () => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout");
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`https://elyxianback.onrender.com/api/reviews/recent`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://elyxianback.onrender.com/api/reviews`, {
        productId: id,
        name,
        rating: Number(rating),
        comment
      });
      alert("✅ Review submitted!");
      setShowForm(false);
      setName('');
      setComment('');
      setRating(5);
      fetchReviews();
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("❌ Failed to submit review");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://elyxianback.onrender.com/api/products/${id}`);
        setProduct(res.data);
        if (res.data.images?.length > 0) {
          setMainImage(res.data.images[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  if (!product) return <div className='product-page'><PremiumLoader /></div>;

  return (
    <div className='product-page fade-in'>
      <div className="product-detail-container premium-layout">
        
        {/* Left - Images */}
        <div className="product-images">
          <img src={mainImage} alt="Main" className="main-img zoom-on-hover" />
          <div className="thumbnail-row">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                className={`thumb ${mainImage === img ? 'active-thumb' : ''}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="product-info">
          <h1 className="product-name elegant-heading">{product.name}</h1>
          
          <div className="price-section">
            <span className="price premium-price">₹{product.price}</span>
            <span className="mrp">₹{product.mrp}</span>
            <span className="discount">
              {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
            </span>
          </div>

          <ul className="benefits">
            {product.line1 && <li>{product.line1}</li>}
            {product.line2 && <li>{product.line2}</li>}
            {product.line3 && <li>{product.line3}</li>}
          </ul>

          <button className="buy-btn gradient-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
          <div className="mobile-buy-now">
            <a href="#!" className="buy-now-btn" onClick={handleBuyNow}>Buy Now</a>
          </div>
          <div className="payment-icons">
            <p>Secure Payment via</p>
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={upi} alt="UPI" />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="product-description-container">
        <h2 className="section-heading">About {product.name}</h2>
        <p>{product.description}</p>
      </div>

      {/* Reviews */}
      <div className="review-container">
        <h2 className="review-heading">Customer Reviews</h2>

        {loadingReviews ? (
          <p>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div className="review-card fade-up" key={review.id}>
              <div className="review-stars">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="review-text">"{review.comment}"</p>
              <p className="review-author">— {review.name}</p>
            </div>
          ))
        )}

        <button 
          className="write-review-btn outline-btn"
          onClick={() => setShowForm(true)}
        >
          Write a Review
        </button>

        {/* Review Form Modal */}
        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Write a Review</h3>
              <form onSubmit={handleReviewSubmit}>
                <label>
                  Name:
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </label>
                <label>
                  Rating:
                  <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    {[5,4,3,2,1].map(num => (
                      <option key={num} value={num}>{num} Stars</option>
                    ))}
                  </select>
                </label>
                <label>
                  Comment:
                  <textarea 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    required
                  />
                </label>
                <div className="modal-buttons">
                  <button type="submit" className="gradient-btn">Submit</button>
                  <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
