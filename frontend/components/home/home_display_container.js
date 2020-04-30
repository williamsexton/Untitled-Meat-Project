import { connect } from 'react-redux';
import HomeDisplay from './home_display';
import { fetchCategories } from '../../actions/category_actions';

const mSTP = (state) => ({
  categories: state.entities.categories,
  products: state.entities.products,
});

const mDTP = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

const HomeDisplayContainer = connect(mSTP, mDTP)(HomeDisplay);
export default HomeDisplayContainer;
