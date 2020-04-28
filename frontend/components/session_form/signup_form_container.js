import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Create your Account"
})
const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

const SignupForm = connect(mSTP, mDTP)(SessionForm)
export default SignupForm;