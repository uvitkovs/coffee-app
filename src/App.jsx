import React from 'react';
import './App.css';
import Header from './components/Header';
import Promo from './components/Promo';
import CoffeeList from './components/CoffeeList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <CoffeeList />
      <Footer />
    </div>
  );
}

export default App;
