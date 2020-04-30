import * as API from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = ({ categories, products }) => ({
  type: RECEIVE_CATEGORIES,
  categories,
  products,
});
export const receiveCategory = ({ category, products }) => ({
  type: RECEIVE_CATEGORY,
  category,
  products,
});

export const fetchCategories = () => (dispatch) => (
  API.fetchCategories()
    .then(({ categories, products }) => dispatch(receiveCategories({ categories, products })))
);

export const fetchCategory = (id) => (dispatch) => (
  API.fetchCategory(id)
    .then((category) => dispatch(receiveCategory(category)))
);
