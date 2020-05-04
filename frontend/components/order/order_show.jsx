import React from 'react';
import {Link} from 'react-router-dom'
export default class OrderShow extends React.Component {
  componentDidMount() {
    const { fetchOrder } = this.props;
    fetchOrder();
  }

  render() {
    const { inclusions, products, order, currentUser } = this.props;
    const orderRows = [];
    for (let i = 0; i < inclusions.length; i++) {
      orderRows.push({ ...products[i], ...inclusions[i] });
    }
    return (
      <div id="checkout-main">
        <div id="checkout-header">
          <div id="phantom" />
          <h1>Order-summary</h1>
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
          <div id="checkout-total">Order Total: ${order.price}.00</div>
        </div>
        <Link to="/orders"> Return to Order Index</Link>

      </div>
    );
  }
}
