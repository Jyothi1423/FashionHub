import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand/About Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">YOUR LOGO</h2>
          <p>Discover our curated collection of premium menswear, handpicked for quality and style.</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <ul>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#featured">Featured Products</a></li>
              <li><a href="#men">Men's Clothing</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h4>Support</h4>
            <ul>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe to get special offers and first look at new drops.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address" />
            <button type="button">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;