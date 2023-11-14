import React from 'react';
import './App.css';
import Header from './components/Header';
import CoffeeList from './components/CoffeeList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CoffeeList />
      <Footer />
    </div>
  );
}

export default App;
