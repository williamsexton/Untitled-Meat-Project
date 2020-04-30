import React from 'react';
import ProductDisplay from './product_display';

const CategoryDisplay = ({ category, products }) => (
  <div className="category-display">
    <h1 className="category-title">{category.name}</h1>
    <ul className="category-products">
      {products.slice(0,3).map((product) => <ProductDisplay key={product.id} name={product.name} price={product.price} />)}
    </ul>
  </div>
);

export default CategoryDisplay;
