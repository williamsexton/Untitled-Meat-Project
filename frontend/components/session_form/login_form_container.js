import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session,
    formType: "login"
})
const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

const LoginForm = connect(mSTP, mDTP)(SessionForm)
export default LoginForm;