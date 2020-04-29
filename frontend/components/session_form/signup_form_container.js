import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Create your Account"
})
const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
})

const SignupForm = connect(mSTP, mDTP)(SessionForm)
export default SignupForm;