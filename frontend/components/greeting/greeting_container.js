import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

const GreetingContainer = connect(mSTP, mDTP)(Greeting);
export default GreetingContainer;