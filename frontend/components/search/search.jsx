import React from 'react';
import ProductDisplay from '../product/product_display';
import { Link } from 'react-router-dom';
export default class Search extends React.Component {
  componentDidMount() {
    const { searchProducts } = this.props;
    searchProducts();
  }

  render() {
    const { products } = this.props;
    if (!products) return null;
    return (
      <div className="category-show">
        <div className="seach-header">
          <h1 className="search-title">Search</h1>
          <h2 id="search-description">{products.length + ' '} results for your search</h2>
        </div>
        <ul className="category-products">
          {products.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductDisplay
                product={product}
              />
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}
