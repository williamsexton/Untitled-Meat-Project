// frontend/bench_bnb.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup } from './actions/session_actions';
import { fetchProduct, searchProducts } from './actions/product_actions';
import { fetchBox } from './actions/box_actions';
import { fetchOrder, fetchOrders, createOrder} from './actions/order_actions';
import { createInclusion, updateInclusion, deleteInclusion} from './actions/inclusion_actions';
import { fetchCategory, fetchCategories } from './actions/category_actions';
import * as boxAPI from './util/box_api_util'
import * as inclusionAPI from './util/inclusion_api_util'
import * as orderAPI from './util/order_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.fetchProduct = fetchProduct;
  window.searchProducts = searchProducts;
  window.fetchCategory = fetchCategory;
  window.fetchCategories = fetchCategories;
  window.fetchOrder = fetchOrder;
  window.createOrder = createOrder;
  window.fetchOrders = fetchOrders;
  window.fetchBox = fetchBox;
  window.updateInclusion = updateInclusion;
  window.createInclusion = createInclusion;
  window.deleteInclusion = deleteInclusion;
  window.boxAPI = boxAPI;
  window.inclusionAPI = inclusionAPI;
  window.orderAPI = orderAPI;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
