import React from 'react';

const ProductDisplay = ({ name, price }) => {
  return (
    <div className="product-display">
      <h1 className="product-name">{name}</h1>
      <h2 className="product-price">${price}</h2>
    </div>
  );
};

export default ProductDisplay;
