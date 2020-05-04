import { RECEIVE_PRODUCT } from '../actions/product_actions';
import { RECEIVE_BOX } from '../actions/box_actions';
import { RECEIVE_ORDER, RECEIVE_ORDERS } from '../actions/order_actions';
import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_INCLUSION } from '../actions/inclusion_actions';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return { ...state, ...action.product };
    case RECEIVE_CATEGORIES:
      return { ...state, ...action.products };
    case RECEIVE_CATEGORY:
      return { ...state, ...action.products };
    case RECEIVE_BOX:
      return { ...state, ...action.products };
    case RECEIVE_ORDER:
      return { ...state, ...action.products };
    case RECEIVE_ORDERS:
      return { ...state, ...action.products };
    default:
      return state;
  }
};

export default productsReducer;
