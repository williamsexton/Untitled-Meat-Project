import React from 'react';
import { Link } from 'react-router-dom'
import OrderDisplay from './order_display'
export default class OrderIndex extends React.Component {
  componentDidMount() {
    const { fetchOrders, currentUser } = this.props;
    fetchOrders(currentUser);
  }

  // componentWillUpdate() {
  //   const { fetchOrders, currentUser } = this.props;
  //   fetchOrders(currentUser);
  // }

  render() {
    const { orders, products } = this.props;
    function propProds(order) {
      const propProducts = order.productIds.map((id) => products[id]);
      return <OrderDisplay key={order.id} order={order} products={propProducts} />
    }
    return (
      <ul className="all-orders">
        <div id="phantom-div"></div>
        <h1 className="order-index-title">Your Orders</h1>
        {Object.values(orders).reverse().map((order) => propProds(order))}
        <div className="shopp-link">
        <Link to="/"><button type="button" id="back-home-button">Back to Shopping</button></Link>
        </div>
      </ul>
    );
  }
}