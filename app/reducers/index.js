import { combineReducers } from 'redux';
import * as reposReducer from './repos';

export default combineReducers(Object.assign(
  reposReducer,
));
