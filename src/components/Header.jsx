import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Coffee Roasts for Everyone</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
