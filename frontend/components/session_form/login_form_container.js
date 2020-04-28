import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Sign in to Untitled Meat Project"
})
const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

const LoginForm = connect(mSTP, mDTP)(SessionForm)
export default LoginForm;