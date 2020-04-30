import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import { RECEIVE_PRODUCT } from '../actions/product_actions';


const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_PRODUCT:
      return action.categories;
    case RECEIVE_CATEGORY:
      return {
        ...state,
        ...action.category,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
