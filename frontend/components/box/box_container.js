import { connect } from 'react-redux';
import { fetchBox } from '../../actions/box_actions';
import { updateInclusion, deleteInclusion } from '../../actions/inclusion_actions';
import { hideBox } from '../../actions/box_display_actions';
// import { withRouter } from "react-router";
import { getBoxInclusions, getBoxProducts, getUserBox } from '../../reducers/selectors';
import Box from './box';

const mSTP = (state, ownProps) => {
  let currentUser = state.session.id;
  let box = (state.session.id) ? getUserBox(state, state.session.id) : {};
  let inclusions = (state.session.id) ? getBoxInclusions(state, state.session.id) : {};
  let products = (state.session.id) ? getBoxProducts(state, state.session.id) : {};
  return {
    currentUser,
    box,
    inclusions,
    products,
}};

const mDTP = (dispatch, ownProps) => ({
  fetchBox: (id) => dispatch(fetchBox(id)),
  updateInclusion: (inclusion) => dispatch(updateInclusion(inclusion)),
  deleteInclusion: (id) => dispatch(deleteInclusion(id)),
  hideBox: (e) => {
    window.setTimeout(() => dispatch(hideBox()), 1000)
    let ele = document.getElementById('box-modal-inner')
    ele.classList.add("box-exit")
  },
});

const BoxContainer = connect(mSTP, mDTP)(Box);
export default BoxContainer;
