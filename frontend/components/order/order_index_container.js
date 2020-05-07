import { connect } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';
import OrderIndex from './order_index';

const mSTP = (state, ownProps) => {
  const currentUser = state.session.id;
  const {products, orders} = state.entities;
  return {
    currentUser,
    orders: Object.values(orders),
    products,
  }
};

const mDTP = (dispatch, ownProps) => ({
  fetchOrders: (id) => dispatch(fetchOrders(id)),
});

const OrderIndexContainer = connect(mSTP, mDTP)(OrderIndex);
export default OrderIndexContainer;
