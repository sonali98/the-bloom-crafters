import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/Navbar.css'; 

const Navbar = () => (
  <header className="navbar">
    <div className="navbar-container">
      <div className="navbar-brand">
        <h1>The Bloom Crafters</h1>
      </div>
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/products" className="navbar-link">Products</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
