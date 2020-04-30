import { combineReducers } from "redux";
import categoriesReducer from './categories_reducer';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default entitiesReducer;
