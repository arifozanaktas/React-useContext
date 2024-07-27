import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Services</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" className="footer-social-link">Facebook</a>
          <a href="#" className="footer-social-link">Twitter</a>
          <a href="#" className="footer-social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
