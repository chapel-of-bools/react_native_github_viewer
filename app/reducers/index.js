import { combineReducers } from 'redux';
import * as reposReducer from './repos';
import @ as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  reposReducer,
  navigationReducer,
));
