import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mSTP = state => ({
    currentUser: state.session,
})
const mDTP = dispatch => ({
})

const NavBarContainer = connect(mSTP, mDTP)(NavBar)
export default NavBarContainer;