import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Which coffee roast is right for me?</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">Our Story</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
