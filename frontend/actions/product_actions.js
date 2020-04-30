import * as API from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProduct = ({ product, categories }) => ({
  type: RECEIVE_PRODUCT,
  product,
  categories,
});

export const fetchProduct = (id) => (dispatch) => (
  API.fetchProduct(id)
    .then(({ product, categories }) => dispatch(receiveProduct({ product, categories })))
);
