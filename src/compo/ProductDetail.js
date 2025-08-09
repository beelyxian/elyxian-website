// // src/pages/ProductDetail.js
// import React,{useState} from 'react';
// import '../styles/ProductDetail.css';
// import img1 from '../assest/aipumpkin.png';
// import img2 from '../assest/Chiaseed.png';
// import img3 from '../assest/Chiaseed.png';
// import visa from '../assest/atm-card.png';
// import upi from '../assest/download.png'
// import mastercard from '../assest/atm-card.png';
// import { useNavigate } from "react-router-dom";

// const ProductDetail = () => {
//   const navigate = useNavigate();
//   const handleBuyNow = () => {
//     navigate("/checkout");
//   };
//   const [mainImage, setMainImage] = useState(img1);

  
//   return (
//     <div className='product-page'>
//     <div className="product-detail-container">
//       {/* Image Gallery */}
//       <div className="product-images">
//         <img src={mainImage} alt="Main Pumpkin Seed" className="main-img" />
//         <div className="thumbnail-row">
//           <img src={img1} alt="Thumb 1" className="thumb" onClick={() => setMainImage(img1)} />
//           <img src={img2} alt="Thumb 2" className="thumb" onClick={() => setMainImage(img2)} />
//           <img src={img3} alt="Thumb 3" className="thumb" onClick={() => setMainImage(img3)} />
//         </div>
//         </div>

//       {/* Product Info */}
//       <div className="product-info">
//         <h1>Elyxian Premium Pumpkin Seeds</h1>
//         <p className="price">₹199 / 250g</p>
//         <ul className="benefits">
//           <li>✅ Rich in Protein & Fiber</li>
//           <li>💚 Supports Heart & Immune Health</li>
//           <li>🌿 100% Natural & Gluten-Free</li>
//         </ul>

//         {/* Buy Now Button */}
//         <button className="buy-btn">Buy Now</button>
        
//         <div className="mobile-buy-now">
//         <a href="#!" className="buy-now-btn" onClick={() => handleBuyNow()}>Buy Now</a>

// </div>

//         {/* Payment Icons */}
//         <div className="payment-icons">
//           <p>Secure Payment via</p>
//           <img src={visa} alt="Visa" />
//           <img src={mastercard} alt="Mastercard" />
//           <img src={upi} alt="UPI" />
//         </div>

//         {/* Orders & Reviews */}

//       </div>
//     </div>
//     <div className="product-description-container">
//   <h2>About Pumpkin Seeds</h2>
//   <p>
//     Our premium quality Pumpkin Seeds are 100% natural, roasted to perfection, and packed with nutrients.
//     Ideal for snacking, baking, or adding a crunchy twist to your meals.
//   </p>

//   <h3>Key Benefits:</h3>
//   <ul>
//     <li>✔ Rich in Magnesium & Zinc</li>
//     <li>✔ Boosts Immunity & Energy</li>
//     <li>✔ Promotes Heart & Prostate Health</li>
//     <li>✔ Great source of Plant-Based Protein</li>
//   </ul>

//   <h3>How to Use:</h3>
//   <p>
//     Eat raw, roasted, or mix with smoothies, salads, or cereals. Perfect for gym-goers, diet-conscious individuals, and daily health routines.
//   </p>
// </div>
// <div className="review-container">
//   <h2 className="review-heading">Customer Reviews</h2>

//   <div className="review-card">
//     <div className="review-stars">⭐⭐⭐⭐⭐</div>
//     <p className="review-text">"The chia seeds are so fresh and crunchy. Loved the eco-friendly packaging!"</p>
//     <p className="review-author">— Ayesha K.</p>
//   </div>

//   <div className="review-card">
//     <div className="review-stars">⭐⭐⭐⭐</div>
//     <p className="review-text">"Great value for money. I mix them in my protein shake every morning."</p>
//     <p className="review-author">— Rahul V.</p>
//   </div>

//   <div className="review-card">
//     <div className="review-stars">⭐⭐⭐⭐⭐</div>
//     <p className="review-text">"Perfect for my keto diet. Clean taste, great quality!"</p>
//     <p className="review-author">— Sneha R.</p>
//   </div>

//   {/* Optional Button */}
//   <button className="write-review-btn">Write a Review</button>
// </div>

//     </div>
//   );
// };

// export default ProductDetail;
// src/pages/ProductDetail.js
// import React, { useState, useEffect } from 'react';
// import '../styles/ProductDetail.css';
// import visa from '../assest/atm-card.png';
// import upi from '../assest/download.png';
// import mastercard from '../assest/atm-card.png';
// import { useNavigate, useParams } from "react-router-dom";
// import axios from 'axios';
// import PremiumLoader from './PremiumLoader';
// const ProductDetail = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [mainImage, setMainImage] = useState('');
//   const [product, setProduct] = useState(null);

//   const handleBuyNow = () => {
//         sessionStorage.setItem("selectedProduct", JSON.stringify(product));

//     navigate("/checkout");
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to top when component mounts
//   }, []);
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`https://elyxianback.onrender.com/api/products/${id}`);
//         setProduct(res.data);
//         if (res.data.images && res.data.images.length > 0) {
//           setMainImage(res.data.images[0]);
//         }
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <div className='product-page'><PremiumLoader/></div>;

//   return (
//     <div className='product-page'>
//       <div className="product-detail-container">
//         {/* Image Gallery */}
//         <div className="product-images">
//           <img src={mainImage} alt="Main" className="main-img" />
//           <div className="thumbnail-row">
//             {product.images.map((img, i) => (
//               <img key={i} src={img} alt={`Thumb ${i}`} className="thumb" onClick={() => setMainImage(img)} />
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="product-info">
//           <h1>{product.name}</h1>
//           <p className="price">₹{product.price} <span className="mrp">MRP ₹{product.mrp}</span></p>
//           <ul className="benefits">
//             <li>{product.line1}</li>
//             <li>{product.line2}</li>
//             <li>{product.line3}</li>
//           </ul>

//           <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>

//           <div className="mobile-buy-now">
//             <a href="#!" className="buy-now-btn" onClick={handleBuyNow}>Buy Now</a>
//           </div>

//           {/* Payment Icons */}
//           <div className="payment-icons">
//             <p>Secure Payment via</p>
//             <img src={visa} alt="Visa" />
//             <img src={mastercard} alt="Mastercard" />
//             <img src={upi} alt="UPI" />
//           </div>
//         </div>
//       </div>

//       {/* Product Description */}
//       <div className="product-description-container">
//         <h2>About {product.name}</h2>
//         <p>{product.description}</p>
//       </div>

//       {/* Reviews - leave this hardcoded as requested */}
//       <div className="review-container">
//         <h2 className="review-heading">Customer Reviews</h2>

//         <div className="review-card">
//           <div className="review-stars">⭐⭐⭐⭐⭐</div>
//           <p className="review-text">"The chia seeds are so fresh and crunchy. Loved the eco-friendly packaging!"</p>
//           <p className="review-author">— Ayesha K.</p>
//         </div>

//         <div className="review-card">
//           <div className="review-stars">⭐⭐⭐⭐</div>
//           <p className="review-text">"Great value for money. I mix them in my protein shake every morning."</p>
//           <p className="review-author">— Rahul V.</p>
//         </div>

//         <div className="review-card">
//           <div className="review-stars">⭐⭐⭐⭐⭐</div>
//           <p className="review-text">"Perfect for my keto diet. Clean taste, great quality!"</p>
//           <p className="review-author">— Sneha R.</p>
//         </div>

//         <button className="write-review-btn">Write a Review</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


        
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

  const handleBuyNow = () => {
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout");
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
  }, [id]);

  if (!product) return <div className='product-page'><PremiumLoader /></div>;

  return (
    <div className='product-page fade-in'>
      <div className="product-detail-container premium-layout">
        
        {/* Left Side - Images */}
        <div className="product-images">
          <img 
            src={mainImage} 
            alt="Main" 
            className="main-img zoom-on-hover" 
          />
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

        {/* Right Side - Info */}
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

      {/* About Section */}
      <div className="product-description-container">
        <h2 className="section-heading">About {product.name}</h2>
        <p>{product.description}</p>
      </div>

      {/* Reviews */}
      <div className="review-container">
        <h2 className="review-heading">Customer Reviews</h2>

        {[
          { stars: 5, text: "The chia seeds are so fresh and crunchy. Loved the eco-friendly packaging!", author: "Ayesha K." },
          { stars: 4, text: "Great value for money. I mix them in my protein shake every morning.", author: "Rahul V." },
          { stars: 5, text: "Perfect for my keto diet. Clean taste, great quality!", author: "Sneha R." }
        ].map((review, i) => (
          <div className="review-card fade-up" key={i}>
            <div className="review-stars">
              {"⭐".repeat(review.stars)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">— {review.author}</p>
          </div>
        ))}

        <button className="write-review-btn outline-btn">Write a Review</button>
      </div>
    </div>
  );
};

export default ProductDetail;

        