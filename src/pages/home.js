// src/pages/Home.js
import React, {useEffect} from 'react';
import './../styles/Home.css'
import HeroSection from '../compo/HeroSection';
import ProductSection from '../compo/ProductSection';
import WhyChoose from '../compo/WhyChoose';
import Testimonials from '../compo/Testimonials';
import StickyWhatsApp from '../compo/StickyWhatsApp';
import BlogSection from '../compo/BlogSection';
function Home() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
