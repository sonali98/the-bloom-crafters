import React from "react";
import '../assets/styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <p>&copy; 2025 The Bloom Crafters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
