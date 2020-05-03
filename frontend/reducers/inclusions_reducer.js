import { RECEIVE_BOX } from '../actions/box_actions';
import { RECEIVE_ORDER } from '../actions/order_actions';
import { RECEIVE_INCLUSION, REMOVE_INCLUSION } from '../actions/inclusion_actions';


const inclusionsReducer = (state = {}, action) => {
  Object.freeze(state);

  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_BOX:
      return { ...state, ...action.inclusions };

    case RECEIVE_INCLUSION:
      return { ...state, ...action.inclusions };

    case REMOVE_INCLUSION:
      let { incId } = action.inclusions;
      delete newState[incId];
      return newState;

    case RECEIVE_ORDER:
      return { ...state, ...action.inclusions };

    default:
      return state;
  }
};

export default inclusionsReducer;
