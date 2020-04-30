import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { withRouter } from "react-router";
import { getCategoryProducts } from '../../reducers/selectors';
import ProductShow from './product_show';

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
});

const mDTP = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default withRouter(ProductShowContainer);
