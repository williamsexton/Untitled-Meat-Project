import { connect } from 'react-redux';
import { fetchOrder } from '../../actions/order_actions';
import { withRouter } from "react-router";
import { getOrderProducts, getOrderInclusions } from '../../reducers/selectors';
import OrderShow from './order_show';

const mSTP = (state, ownProps) => {
  let currentUser = state.session.id;
  let inclusions = (state.entities.orders[ownProps.match.params.id]) ? getOrderInclusions(ownProps.match.params.id) : [];
  let products = (state.entities.orders[ownProps.match.params.id]) ? getOrderProducts(ownProps.match.params.id) : [];
  return {
    order: state.entities.orders[ownProps.match.params.id],
    currentUser,
    inclusions,
    products,
  }
};

const mDTP = (dispatch, ownProps) => ({
  fetchOrder: () => dispatch(fetchOrder(ownProps.match.params.id)),
});

const OrderShowContainer = connect(mSTP, mDTP)(OrderShow);
export default withRouter(OrderShowContainer);
