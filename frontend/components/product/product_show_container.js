import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { withRouter } from "react-router";
import { boxInclude, getUserBoxId, getUserBox, isItemInBox} from '../../reducers/selectors';
import ProductShow from './product_show';
import {fetchBox} from '../../actions/box_actions'
import {showBox} from '../../actions/box_display_actions'
import {createInclusion, updateInclusion} from '../../actions/inclusion_actions'

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  currentUser: state.session.id,
  box: getUserBox(state, state.session.id),
  boxId: getUserBoxId(state, state.session.id),
  inBox: isItemInBox(state, ownProps.match.params.id),
  inclusions: state.entities.inclusions,
});

const mDTP = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
  fetchBox: (id) => dispatch(fetchBox(id)),
  showBox: () => dispatch(showBox()),
  createInclusion: (inclusion) => dispatch(createInclusion(inclusion)),
  updateInclusion: (inclusion) => dispatch(updateInclusion(inclusion)),
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default withRouter(ProductShowContainer);
