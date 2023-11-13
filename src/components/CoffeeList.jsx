import React from 'react';
import CoffeeItem from './CoffeeItem';
import coffeeData from '../coffeeData.json';

const CoffeeList = () => {
  return (
    <div className="coffee-list">
      {coffeeData.map((coffee, index) => (
        <CoffeeItem key={index} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;
