import { combineReducers } from 'redux';

import boxDisplayReducer from './box_display_reducer';
import searchDisplayReducer from './search_display_reducer';

const uiReducer = combineReducers({
  boxDisplay: boxDisplayReducer,
  searchDisplay: searchDisplayReducer,
});

export default uiReducer;
