import React from 'react';
import './../styles/StickyWhatsApp.css';
import wh from './../assest/wh.png'
const WHATSAPP_NUMBER = "917304821641"; // Replace with your WhatsApp number

function StickyWhatsApp() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want to place an order from Elyxian.`;

  return (
    <a href={link} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <img src={wh} alt="WhatsApp" />
    </a>
  );
}

export default StickyWhatsApp;
