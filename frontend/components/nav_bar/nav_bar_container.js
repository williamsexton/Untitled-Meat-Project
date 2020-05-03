import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { hideBox } from '../../actions/box_display_actions';

const mSTP = (state) => ({
  currentUser: state.session,
  boxDisplay: state.ui.boxDisplay,
});
const mDTP = (dispatch) => ({
  hideBox: (e) => {
    if (e.currentTarget===e.target) {
      window.setTimeout(() => dispatch(hideBox()), 1000)
      let ele = document.getElementById('box-modal-inner')
      ele.classList.add("box-exit")
    }
  },
});

const NavBarContainer = connect(mSTP, mDTP)(NavBar);
export default NavBarContainer;
