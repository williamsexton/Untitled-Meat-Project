import { connect } from 'react-redux';
import { fetchBox } from '../../actions/box_actions';
import { createOrder } from '../../actions/order_actions';
import { hideBox } from '../../actions/box_display_actions';
import { withRouter } from 'react-router-dom';
// import { withRouter } from "react-router";
import { getBoxInclusions, getBoxProducts, getUserBox } from '../../reducers/selectors';
import Checkout from './checkout';

const mSTP = (state, ownProps) => {
  let currentUser = state.session.id;
  let box = (state.session.id) ? getUserBox(state, state.session.id) : {};
  let inclusions = (state.session.id) ? getBoxInclusions(state, state.session.id) : {};
  let products = (state.session.id) ? getBoxProducts(state, state.session.id) : {};
  return {
    currentUser,
    box,
    inclusions,
    products,
  }
};

const mDTP = (dispatch, ownProps) => ({
  fetchBox: (id) => dispatch(fetchBox(id)),
  createOrder: (order) => dispatch(createOrder(order))
});

const CheckoutContainer = connect(mSTP, mDTP)(Checkout);
export default withRouter(CheckoutContainer);
