import React from 'react';
import '../assets/styles/Home.css';
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.png';
import image3 from '../assets/images/image_3.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to The Bloom Crafters</h1>
          <p>Explore our handcrafted real flower jewelry, Ari work blouses, and much more!</p>
          <button href="/products" className="cta-btn">Shop Now</button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At The Bloom Crafters, we create exquisite handcrafted jewelry, clothing and many handcrafted things, bringing the beauty of nature and art together. Our real flower jewelry is made with love, and each Ari work blouse is a masterpiece, crafted to perfection for special occasions.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={image1} alt="Real Flower Necklace" />
            <p>Real Flower Necklace</p>
          </div>
          <div className="product-card">
            <img src={image2} alt="Ari Work Blouse" />
            <p>Ari Work Blouse</p>
          </div>
          <div className="product-card">
            <img src={image3} alt="Handcrafted Doll" />
            <p>Handcrafted Doll</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-card">
          <p>"The flower jewelry I ordered was beyond beautiful! So delicate and unique. I can't wait to wear it to my wedding!"</p>
          <p>- Ayesha K.</p>
        </div>
        <div className="testimonial-card">
          <p>"I bought an Ari work blouse for a family wedding, and it was absolutely stunning. The craftsmanship is unmatched!"</p>
          <p>- Priya M.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Add Some Bloom to Your Life?</h2>
        <p>Explore our unique, handcrafted creations today and make your special occasion unforgettable.</p>
        <a href="/products" className="cta-btn">Browse Our Collection</a>
      </section>
    </div>
  );
};

export default Home;
