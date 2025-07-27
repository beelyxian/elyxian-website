// // src/App.js
// import React from "react";
// import './App.css';

// function App() {
//   return (
//     <div className="container">
//       <h1 className="brand">🌱 Elyxian Seeds</h1>
//       <p className="coming-soon">WE ARE COMING SOON...</p>
//       <p className="subtext">We’re bringing premium superfoods to your doorstep</p>

//       <div className="products">
//         <p>🥜 Sunflower Seeds</p>
//         <p>🌾 Flax Seeds</p>
//         <p>🎃 Pumpkin Seeds</p>
//         <p>🌱 Chia Seeds</p>

//       </div>

//       <p className="dm-text">📦 DM us to Pre-order</p>

//       <div className="buttons">
//         <a
//           href="https://wa.me/91XXXXXXXXXX"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp"
//         >
//           WhatsApp Now
//         </a>
//         <a
//           href="https://instagram.com/your_insta"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="instagram"
//         >
//           Instagram
//         </a>
//       </div>

//       <footer className="footer">📍 Made with ❤️ by Elyxian</footer>
//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './compo/Navbar';
import Footer from './compo/Footer';
import Home from './pages/home';
// import About from './pages/About'; // Uncomment if you have more routes

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Add more routes here as needed */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;










// import React from 'react';
// import './App.css';  // Import the CSS file from the same folder
// import logo from './img/public/logo1520.png'
// import bgvideo from './img/bgvideo.mp4'
// import flipkartlogo from './img/public/flipkartlogo.jpeg'
// import amazonlogo from "./img/public/amazonlogo1.png"
// import facewash from './img/public/elyxian gluta vita facewash gold.jpg'
// import faceserum from './img/public/Gluta vita face serum elyxian.jpg'
// function App() {
//   return (
//     <div className="landing-page">
//           <video autoPlay loop muted className="background-video">
//         <source src={bgvideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       {/* Navbar Section */}
//       <nav className="navbar">
//       <img src={logo} alt="Company Logo" className="navbar-title" />  
//         {/* <h1 className="navbar-title">Elyxian</h1>  Replace with your company name */}
//       </nav>
      
//       {/* Main Content */}
//       <div className="content">
//         <h1>We are launching soon Website!</h1>
//         <p>Stay tuned for our exciting products.</p>
//         <div className="marketplace-links">
//            {/* Amazon Button */}
//            {/* <a
//             href="https://www.amazon.in/Elyxian-Gluta-Vita-Face-Serum/dp/B0CZXQM1GK"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn amazon-btn"
//           >
//             Buy on Amazon
//           </a> */}
// {/* Updated Box Section */}
// <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//   <div style={{ backgroundColor: 'white', height: '350px', width: '300px', padding: '20px', textAlign: 'center', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}>
//     <img src={facewash} alt="Face Wash" style={{ height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
//     <h2 style={{color:'black'}}>Gluta Vita Face Wash</h2>
//     <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
//       <a href="https://www.amazon.in/Glutathione-Brightening-Hydration-Cleansing-Anti-Aging/dp/B0DHPSVR72/ref=sr_1_5?crid=1P0U7CHSD2WLS&dib=eyJ2IjoiMSJ9.h3JUIkxutc0dczA6m9woAOJjonXS5r2yL1LKlyY6JTmsuFfouQeYjoFTHf3X6KdmMaq1N7X58wjtOYWuk5YaY4zrqdDPsXOyo8HOwdf2Da_5tJ900mTORT6TGsW80yLAaiVsIMrGeu5Xe-R1jz1zJ8mG_-SAeXszwsq59wtt4lwQEx5q8X9nsSniTF94mNJ0DQtqHRjJvbz34ZizCDcxC9JvuUNtDX5ezt317OxIe-SojFDxm1w_gqUV80GOqH477TMzXzlSvHPFHjfRnX3LK_4ynsbbMXEr-dt3aL2NNnE.5GEU7ggWpgtZV2rkc2_VMQP5VA4_dKkSOr__nlGYpJc&dib_tag=se&keywords=gluta+vita+facewash&nsdOptOutParam=true&qid=1730460953&s=beauty&sprefix=gluta+vita+facew%2Cbeauty%2C582&sr=1-5" target="_blank" rel="noopener noreferrer" className="btn amazon-btn">
//         Buy on Amazon
//       </a>
//       <a href="https://www.flipkart.com/elyxian-gluta-vita-glutathione-vitamin-c-advanced-skin-brightening-hydration-deep-cleansing-anti-aging-all-types-100ml-face-wash/p/itm753dd089285cc?pid=FCWH4ZW4YMSGTVZE&lid=LSTFCWH4ZW4YMSGTVZE5FCOEY&marketplace=FLIPKART&q=gluta+vita+facewash&store=g9b%2Fema%2F5la%2Fjav&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=793b9191-ebc4-4e36-a89e-40895688b955.FCWH4ZW4YMSGTVZE.SEARCH&ppt=pp&ppn=pp&ssid=4ynwd2qyk00000001730461010383&qH=7161d5910e110db4" target="_blank" rel="noopener noreferrer" className="btn flipkart-btn">
//         Buy on Flipkart
//       </a>
//     </div>
//   </div>

//   <div style={{ backgroundColor: 'white', height: '350px', width: '300px', padding: '20px', textAlign: 'center', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}>
//     <img src={faceserum} alt="Face Serum" style={{ height: '180px', objectFit: 'cover', borderRadius: '10px' }} />
//     <h2 style={{color:'black'}}>Gluta Vita Face Serum</h2>
//     <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
//       <a href="https://www.amazon.in/Elyxian-Gluta-Vita-Face-Serum/dp/B0CZXQM1GK" target="_blank" rel="noopener noreferrer" className="btn amazon-btn">
//         Buy on Amazon
//       </a>
//       <a href="https://www.flipkart.com/elyxian-gluta-vita-face-serum-30ml-glutathione-vitamin-c-kojic-hyaluronic-acid/p/itmc1ea4ce43727b?pid=BSTGZD8RJXG4GDG4&lid=LSTBSTGZD8RJXG4GDG41O05JN&marketplace=FLIPKART&cmpid=content_skin-treatment_8965229628_gmc" target="_blank" rel="noopener noreferrer" className="btn flipkart-btn">
//         Buy on Flipkart
//       </a>
//     </div>
//   </div>
// </div>



          {/* Flipkart Button */}
          {/* <a
            href="https://www.flipkart.com/elyxian-gluta-vita-face-serum-30ml-glutathione-vitamin-c-kojic-hyaluronic-acid/p/itmc1ea4ce43727b?pid=BSTGZD8RJXG4GDG4&lid=LSTBSTGZD8RJXG4GDG41O05JN&marketplace=FLIPKART&cmpid=content_skin-treatment_8965229628_gmc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flipkart-btn"
          >
            Buy on Flipkart
          </a> */}
//         </div>
//       </div>
   
//     </div>
//   );
// }

// export default App;
