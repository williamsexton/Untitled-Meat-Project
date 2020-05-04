import React from 'react';
import ProductDisplay from '../product/product_display';
import { Link } from 'react-router-dom';

const CategoryDisplay = ({ category, products }) => (
  <div className="category-display">
    <div className="category-header">
      <h1 className="category-title">--- {category.name.toUpperCase()} ---</h1>
      <h2 id="category-blurb"> You can't go wrong with {category.name}</h2>
      <div id="category-link-outer"><Link className="category-link" to={`/categories/${category.id}`}>SEE ALL {category.name.toUpperCase()} &gt;&gt;</Link></div>

    </div>
      <ul className="category-products">
        {products.slice(0, 3).map((product) => <Link key= { product.id } to={`/products/${product.id}`}><ProductDisplay product={product} /></Link>)}
    </ul>
  </div>
);

export default CategoryDisplay;
