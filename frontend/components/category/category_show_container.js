import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/category_actions';
import { withRouter } from "react-router";
import { getCategoryProducts } from '../../reducers/selectors';
import CategoryShow from './category_show';

const mSTP = (state, ownProps) => ({
  category: state.entities.categories[ownProps.match.params.id],
  products: getCategoryProducts(state, ownProps.match.params.id),
});

const mDTP = (dispatch, ownProps) => ({
  fetchCategory: () => dispatch(fetchCategory(ownProps.match.params.id)),
});

const CategoryShowContainer = connect(mSTP, mDTP)(CategoryShow);
export default withRouter(CategoryShowContainer);
