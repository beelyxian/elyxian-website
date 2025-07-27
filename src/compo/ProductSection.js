// import React, { useEffect, useState } from 'react';
// import '../styles/ProductSection.css';
// import seed from '../assest/Chiaseed.png'
// function ProductSection() {
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   fetch('/data.json')
//   //     .then((res) => res.json())
//   //     .then((data) => setProducts(data));
//   // }, []);

//   return (
//     <div className="product-section">
//       <h2>Explore Our Seeds</h2>
//       <div className="product-grid">
//         {products.map((item) => (
//           <div className="product-card" key={item.id}>
//             <img src={seed} alt={item.name} />
//             <h3>{item.name}</h3>
//             <p className="price">{item.price}</p>
//             <a href="#" className="buy-btn">Buy Now</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductSection;
