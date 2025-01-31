import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Travel Guide
      </Link>

      {/* Menu Icon */}
      <button className="navbar-toggler" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/destinations" className="navbar-link">Destinations</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

