import { connect } from 'react-redux';
import { searchProducts } from '../../actions/product_actions';
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import { getSearchProducts } from '../../reducers/selectors';
import Search from './search';

const mSTP = (state, ownProps) => {
  const products = getSearchProducts(state);
  return {
    products,
  };
};

const mDTP = (dispatch, ownProps) => {
  const values = queryString.parse(ownProps.location.search);
  return {
    searchProducts: () => dispatch(searchProducts(values.query)),
  };
};

const SearchContainer = connect(mSTP, mDTP)(Search);
export default withRouter(SearchContainer);
