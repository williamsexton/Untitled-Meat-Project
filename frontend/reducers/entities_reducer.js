import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import productsReducer from './products_reducer';
import usersReducer from './users_reducer';
import boxesReducer from './boxes_reducer';
import ordersReducer from './orders_reducer';
import inclusionsReducer from './inclusions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  categories: categoriesReducer,
  products: productsReducer,
  boxes: boxesReducer,
  orders: ordersReducer,
  inclusions: inclusionsReducer,
});

export default entitiesReducer;
