import { RECEIVE_PRODUCT } from '../actions/product_actions';
import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return { ...state, ...action.product };
    case RECEIVE_CATEGORIES:
      return { ...state, ...action.products };
    case RECEIVE_CATEGORY:
      return { ...state, ...action.products };
    default:
      return state;
  }
};

export default productsReducer;
