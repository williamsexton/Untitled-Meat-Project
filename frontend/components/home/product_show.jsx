import React from 'react';
import ProductDisplay from './product_display';
export default class CategoryShow extends React.Component {
  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  render() {
    const { product } = this.props;
    if (!product) return null;
    return (
      <div id="product-show">
        <img id="product-show-picture" src={product.imgUrl} alt="placeholder" />
        <div id="product-show-options">
          <h1 id="product-show-name">{product.name}</h1>
          <h2 id="product-show-price">${product.price}</h2>
          <h3 id="product-show-description">{product.description}</h3>
          <h2 id="product-show-sub-blurb">Subscribe now and save!</h2>
          <h2 id="product-show-sub-price">
            Now available for subscription for only ${product.subscription_price}
          </h2>
          <button type="submit">ADD TO BOX</button>
        </div>
      </div>
    );
  }
}
