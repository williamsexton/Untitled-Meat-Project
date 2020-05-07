import * as API from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProduct = ({ product, categories }) => ({
  type: RECEIVE_PRODUCT,
  product,
  categories,
});

export const receiveProducts = ({ products, filters }) => ({
  type: RECEIVE_PRODUCTS,
  products,
  filters,
});

export const fetchProduct = (id) => (dispatch) => (
  API.fetchProduct(id)
    .then(({ product, categories }) => dispatch(receiveProduct({ product, categories })))
);
export const searchProducts = (query) => (dispatch) => (
  API.searchProducts(query)
    .then(({ products, filters }) => dispatch(receiveProducts({ products, filters })))
);
