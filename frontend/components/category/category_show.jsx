import React from 'react';
import ProductDisplay from '../product/product_display';
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
          <img id="category-show-banner-image" src={category.imgUrl} alt=""/>
          <h1 className="category-show-title">{category.name.toUpperCase()}</h1>
          <h2 id="category-show-description">{category.description}</h2>
        </div>
        <div id="show-blurb">
          For more up to date information on our products, reach out by email.
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
