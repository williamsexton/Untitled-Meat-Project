import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/product_actions';
import { withRouter } from "react-router";
import { boxInclude, getUserBoxId } from '../../reducers/selectors';
import ProductShow from './product_show';
import {fetchBox} from '../../actions/box_actions'
import {showBox} from '../../actions/box_display_actions'
import {createInclusion} from '../../actions/inclusion_actions'

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  currentUser: state.session.id,
  boxId: getUserBoxId(state, state.session.id),
  inBox: boxInclude(state, state.session.id, ownProps.match.params.id)
});

const mDTP = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
  fetchBox: (id) => dispatch(fetchBox(id)),
  showBox: () => dispatch(showBox()),
  createInclusion: (inclusion) => dispatch(createInclusion(inclusion)),
});

const ProductShowContainer = connect(mSTP, mDTP)(ProductShow);
export default withRouter(ProductShowContainer);
