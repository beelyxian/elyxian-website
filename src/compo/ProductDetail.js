// src/pages/ProductDetail.js
import React,{useState} from 'react';
import '../styles/ProductDetail.css';
import img1 from '../assest/aipumpkin.png';
import img2 from '../assest/Chiaseed.png';
import img3 from '../assest/Chiaseed.png';
import visa from '../assest/atm-card.png';
import upi from '../assest/download.png'
import mastercard from '../assest/atm-card.png';

const ProductDetail = () => {
  const images = [
    img1
   ,img2
    ,img3
  ];
  const [mainImage, setMainImage] = useState(img1);

  return (
    <div className='product-page'>
    <div className="product-detail-container">
      {/* Image Gallery */}
      <div className="product-images">
        <img src={mainImage} alt="Main Pumpkin Seed" className="main-img" />
        <div className="thumbnail-row">
          <img src={img1} alt="Thumb 1" className="thumb" onClick={() => setMainImage(img1)} />
          <img src={img2} alt="Thumb 2" className="thumb" onClick={() => setMainImage(img2)} />
          <img src={img3} alt="Thumb 3" className="thumb" onClick={() => setMainImage(img3)} />
        </div>
        </div>

      {/* Product Info */}
      <div className="product-info">
        <h1>Elyxian Premium Pumpkin Seeds</h1>
        <p className="price">₹199 / 250g</p>
        <ul className="benefits">
          <li>✅ Rich in Protein & Fiber</li>
          <li>💚 Supports Heart & Immune Health</li>
          <li>🌿 100% Natural & Gluten-Free</li>
        </ul>

        {/* Buy Now Button */}
        <button className="buy-btn">Buy Now</button>
        <div className="mobile-buy-now">
  <a href="#buy-now-link" className="buy-now-btn">
    Buy Now
  </a>
</div>

        {/* Payment Icons */}
        <div className="payment-icons">
          <p>Secure Payment via</p>
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={upi} alt="UPI" />
        </div>

        {/* Orders & Reviews */}

      </div>
    </div>
    <div className="product-description-container">
  <h2>About Pumpkin Seeds</h2>
  <p>
    Our premium quality Pumpkin Seeds are 100% natural, roasted to perfection, and packed with nutrients.
    Ideal for snacking, baking, or adding a crunchy twist to your meals.
  </p>

  <h3>Key Benefits:</h3>
  <ul>
    <li>✔ Rich in Magnesium & Zinc</li>
    <li>✔ Boosts Immunity & Energy</li>
    <li>✔ Promotes Heart & Prostate Health</li>
    <li>✔ Great source of Plant-Based Protein</li>
  </ul>

  <h3>How to Use:</h3>
  <p>
    Eat raw, roasted, or mix with smoothies, salads, or cereals. Perfect for gym-goers, diet-conscious individuals, and daily health routines.
  </p>
</div>
<div className="review-container">
  <h2 className="review-heading">Customer Reviews</h2>

  <div className="review-card">
    <div className="review-stars">⭐⭐⭐⭐⭐</div>
    <p className="review-text">"The chia seeds are so fresh and crunchy. Loved the eco-friendly packaging!"</p>
    <p className="review-author">— Ayesha K.</p>
  </div>

  <div className="review-card">
    <div className="review-stars">⭐⭐⭐⭐</div>
    <p className="review-text">"Great value for money. I mix them in my protein shake every morning."</p>
    <p className="review-author">— Rahul V.</p>
  </div>

  <div className="review-card">
    <div className="review-stars">⭐⭐⭐⭐⭐</div>
    <p className="review-text">"Perfect for my keto diet. Clean taste, great quality!"</p>
    <p className="review-author">— Sneha R.</p>
  </div>

  {/* Optional Button */}
  <button className="write-review-btn">Write a Review</button>
</div>

    </div>
  );
};

export default ProductDetail;
