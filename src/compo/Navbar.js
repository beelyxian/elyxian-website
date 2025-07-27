// src/components/Navbar.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css'
function Navbar() {
  // const [isOpen, setIsOpen] = useState('')
  return (
    <nav className="navbar">
      <div className="nav-left" />
      
      <div className="nav-center">
        <Link to="/" className="logo-text">ELYXIAN</Link>
      </div>

      <div className="nav-right">
        <div className="hamburger">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <div className={`menu-dropdown-wrapper ${'' ? 'show' : ''}`}>
        <div className="menu-dropdown">
          <Link to="/" >Home</Link>
          <Link to="/products" >Products</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
// import logo from '../assets/logo.png'; // your logo path


