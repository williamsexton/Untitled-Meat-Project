import { RECEIVE_PRODUCTS } from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, ...action.filters };
    default:
      return state;
  }
};

export default productsReducer;