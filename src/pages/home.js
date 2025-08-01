// src/pages/Home.js
import React from 'react';
import './../styles/Home.css'
import HeroSection from '../compo/HeroSection';
import ProductSection from '../compo/ProductSection';
import WhyChoose from '../compo/WhyChoose';
import Testimonials from '../compo/Testimonials';
import StickyWhatsApp from '../compo/StickyWhatsApp';
import BlogSection from '../compo/BlogSection';
function Home() {
  return (
    <div className="home">
     <HeroSection/>
     <ProductSection/>
     <WhyChoose/>
     <Testimonials/>
     <StickyWhatsApp/>
     <BlogSection/>
    </div>
  );
}

export default Home;
