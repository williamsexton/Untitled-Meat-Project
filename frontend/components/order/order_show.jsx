import React from 'react';
import {Link} from 'react-router-dom'
import OrderRow from './order_row'
export default class OrderShow extends React.Component {
  componentDidMount() {
    const { fetchOrder } = this.props;
    fetchOrder();
  }

  render() {
    const { inclusions, products, order} = this.props;
    const orderRows = [];
    for (let i = 0; i < inclusions.length; i++) {
      orderRows.push({ ...products[i], ...inclusions[i] });
    }
    return (
      <div id="checkout-main">
        <div id="checkout-header">
          <div id="phantom" />
          <h1>Order-summary: </h1>
          {(order) ? <h1>Order #{order.id}</h1> : null}
        </div>
        <ul id="item-list">
          {orderRows.map((row) => (
            <OrderRow
              key={row.id}
              row={row}
            />
          ))}
        </ul>
        <div id="checkout-footer">
          <div id="checkout-total">Order Total: ${(order=== undefined ? 0 : order.price )}.00</div>
        </div>
        <div id="order-show-options">
        <Link to="/orders"> Return to Order Index</Link>
        <Link to="/"><button type="button" id="back-home-button">Back to Shopping</button></Link>
        </div>
      </div>
    );
  }
}
