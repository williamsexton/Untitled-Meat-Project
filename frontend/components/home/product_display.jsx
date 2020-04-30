import React from 'react';

const ProductDisplay = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
    <div className="product-display">
      <img className="product-image" src={imgUrl} alt="" />
      <h1 className="product-name">{name}</h1>
      <h2 className="product-price">${price}</h2>
    </div>
  );
};

export default ProductDisplay;
