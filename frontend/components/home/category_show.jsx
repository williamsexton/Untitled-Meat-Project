import React from 'react';
import ProductDisplay from './product_display';
import {Link} from 'react-router-dom'
export default class CategoryShow extends React.Component {
  componentDidMount() {
    const { fetchCategory } = this.props;
    fetchCategory();
  }

  render() {
    const { category, products } = this.props;
    if (!category) return null;
    return (
      <div className="category-show">
        <div className="category-show-banner">
          <h1 className="category-show-title">{category.name.toUpperCase()}</h1>
          <h2 id="category-show-description">{category.description}</h2>
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
