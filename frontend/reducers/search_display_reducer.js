import { SHOW_SEARCH, HIDE_SEARCH } from '../actions/search_display_actions';


const searchDisplayReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_SEARCH:
      return true;
    case HIDE_SEARCH:
      return false;
    default:
      return state;
  }
};

export default searchDisplayReducer;
