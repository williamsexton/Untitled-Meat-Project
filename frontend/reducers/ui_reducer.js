import { combineReducers } from 'redux';

import boxDisplayReducer from './box_display_reducer';

const uiReducer = combineReducers({
  boxDisplay: boxDisplayReducer,
});

export default uiReducer;
