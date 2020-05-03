import { SHOW_BOX, HIDE_BOX } from '../actions/box_display_actions';


const boxDisplayReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_BOX:
      return true;
    case HIDE_BOX:
      return false;
    default:
      return state;
  }
};

export default boxDisplayReducer;