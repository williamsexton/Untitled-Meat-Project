import { RECEIVE_BOX } from '../actions/box_actions';
import { RECEIVE_INCLUSION, REMOVE_INCLUSION } from '../actions/inclusion_actions';


const boxesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INCLUSION:
      return { ...state, ...action.boxes };
    case REMOVE_INCLUSION:
      return {
        ...state,
        ...action.boxes,
      };
    case RECEIVE_BOX:
      return action.boxes;
    default:
      return state;
  }
};

export default boxesReducer;