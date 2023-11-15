const CoffeeItem = ({ coffee }) => {
 
  return (
    <div className="coffee-item">
      <h3>{coffee.name}</h3>
      <p>Origin: {coffee.origin}</p>
      <p>Roast Level: {coffee.roastLevel}</p>
      <p>Flavor Profile: {coffee.flavorProfile}</p>
    </div>
  );
};

export default CoffeeItem;
