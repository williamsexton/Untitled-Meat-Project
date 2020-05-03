import * as API from '../util/order_api_util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

export const receiveOrders = ({ orders, products }) => {
  if (orders === undefined) orders = {};
  if (products === undefined) products = {};
  return {
    type: RECEIVE_ORDERS,
    orders,
    products,
  };
};
export const receiveOrder = ({ orders, products, inclusions }) => {
  if (orders === undefined) orders = {};
  if (products === undefined) products = {};
  if (inclusions === undefined) inclusions = {};
  return{
  type: RECEIVE_ORDER,
  orders,
  products,
  inclusions,
}};

export const fetchOrders = (userId) => (dispatch) => (
  API.fetchOrders(userId)
    .then((res) => dispatch(receiveOrders(res)))
);

export const fetchOrder = (id) => (dispatch) => (
  API.fetchOrder(id).then(({ orders, products, inclusions }) => dispatch(receiveOrder({ orders, products, inclusions })))
);

export const createOrder = (order) => (dispatch) => (
  API.createOrder(order).then(({ orders, products, inclusions }) => dispatch(receiveOrder({ orders, products, inclusions })))
);
