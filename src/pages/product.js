import React, { useEffect } from 'react';
import '../styles/Products.css'; // You can customize this file
import img from '../assest/pumpkin.png'
const productList = [
  {
    name: 'Pumpkin Seeds',
    image: img,
    description: 'Rich in protein, iron, and antioxidants. Great for snacking or mixing with meals.',
    link: 'https://wa.me/91XXXXXXXXXX?text=I want to order Pumpkin Seeds'
  },
  {
    name: 'Chia Seeds',
    image: img,
    description: 'Packed with omega-3, fiber, and energy. Perfect for smoothies & puddings.',
    link: 'https://wa.me/91XXXXXXXXXX?text=I want to order Chia Seeds'
  },
  {
    name: 'Sunflower Seeds',
    image:img,
    description: 'Loaded with vitamin E and good fats. A tasty, healthy crunch.',
    link: 'https://wa.me/91XXXXXXXXXX?text=I want to order Sunflower Seeds'
  },
  {
    name: 'Flax Seeds',
    image: img,
    description: 'High in fiber and omega-3. Helps with digestion and heart health.',
    link: 'https://wa.me/91XXXXXXXXXX?text=I want to order Flax Seeds'
  }
];

function Products() {


  return (
    <div className="products-page">
      <h2 className="product-title">Our Premium Super Seeds 🌿</h2>
      <div className="product-grid">
        {productList.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <a href={product.link} className="order-btn" target="_blank" rel="noreferrer">Order Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
