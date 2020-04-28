export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER'
import * as API from '../util/session_api_util'

export const login = (user) => {
    return (dispatch) => {
        return ( API.login(user)
        .then(
            (currentUser)=>( dispatch(receiveCurrentUser(currentUser))),
            errors => dispatch(receiveErrors(errors.responseJSON))))
    }

}
export const signup = (user) => {
    return (dispatch) => {
        return API.signup(user)
        .then((currentUser)=>dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
    }

}

export const logout = () => (dispatch) => (
    API.logout().then(dispatch(logoutCurrentUser()))
)





export const receiveCurrentUser = (currentUser) => {
    return {
    type: RECEIVE_CURRENT_USER,
    currentUser
}}


export const logoutCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})


export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors

})



