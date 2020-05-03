import { RECEIVE_ORDER, RECEIVE_ORDERS } from '../actions/order_actions';
import { RECEIVE_INCLUSION } from '../actions/inclusion_actions';


const ordersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INCLUSION:
      return { ...state, ...action.orders };

    case RECEIVE_ORDER:
      return action.orders;

    case RECEIVE_ORDERS:

      return action.orders;


    default:
      return state;
  }
};

export default ordersReducer;
