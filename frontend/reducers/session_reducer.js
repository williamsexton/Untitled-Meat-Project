import { REMOVE_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
const sessionReducer = (state = { id: null }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const nextState = { id: action.currentUser.id }
            return nextState
        case REMOVE_CURRENT_USER:
            return ({ id: null })
        default:
            return state
    }
}

export default sessionReducer;



// const sessionReducer = (state = { id: null }, action) =>{
//     Object.freeze(state);
//     switch (action.type) {
//         case REMOVE_CURRENT_USER:
//             return { id: null };
    
//         case RECEIVE_CURRENT_USER:
//             debugger
//             return {id: action.currentUser.id};
//         default:
//             return state;
//     }
// }

// export default sessionReducer