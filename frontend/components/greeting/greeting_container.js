import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { showBox, hideBox } from '../../actions/box_display_actions'
import { showSearch, hideSearch } from '../../actions/search_display_actions'


const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boxDisplay: state.ui.boxDisplay,
  searchDisplay: state.ui.searchDisplay,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  showBox: () => dispatch(showBox()),
  hideBox: () => dispatch(hideBox()),
  showSearch: () => dispatch(showSearch()),
  hideSearch: () => dispatch(hideSearch()),
});

const GreetingContainer = connect(mSTP, mDTP)(Greeting);
export default GreetingContainer;
