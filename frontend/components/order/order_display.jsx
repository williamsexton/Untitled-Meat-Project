import React from 'react';
import { Link } from 'react-router-dom';

const OrderDisplay = ({ order, products }) => (
  <div className="category-display order-display">
    <div className="category-header order-header">
      <h1 className="category-title order-title">--- ORDER: {order.id} ---</h1>
      <h1 className="category-title order-title">--- DATE: {order.created_at.slice(0,10)} ---</h1>
      <h1 className="category-title order-title">--- PRICE: ${order.price}.00 ---</h1>
    </div>
    <div id="category-link-outer"><Link className="category-link order-link" to={`/orders/${order.id}`}>SEE ORDER</Link></div>
    <ul className="order-name-list">
      {products.map((product) => (
        <li className="order-index-name">{product.name}</li>
      ))}
    </ul>
    <ul className="category-products order-products">
      <div className="order-row">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="order-row-item">
              <img className="order-index-image" src={product.imgUrl} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </ul>
  </div>
);

export default OrderDisplay;
