import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="App-footer">
         <nav>
        <ul className="footer-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <p>2023 Coffee Roasts by Julie Vitkovskaya</p>
    </footer>
  );
}

export default Footer;
