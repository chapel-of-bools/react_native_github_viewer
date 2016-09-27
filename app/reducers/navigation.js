import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const allTabs = [
  (lastRoute) => lastRoute || { key: 'home', index: 0 },
  (lastRoute) => lastRoute || { key: 'about', index: 1 },
];

export const tabs = createReducer({index: 0, key: 'home', routes: allTabs } , {
  [types.SET_TAB](state, action) {
    return Object.assign({}, state, allTabs[action.index]());
  }
});

export const navigationState = createReducer({ index: 0, routes: [
  { key: 'ApplicationTabs' },
  { key: 'Detail' }
]}, {
  [types.NAVIGATION_FORWARD](state, action) {
    return NavigationStateUtils.forward(state);
  },
  [types.NAVIGATION_BACK](state, action) {
    return NavigationStateUtils.back(state);
  },
});

export const navigationParams = createReducer({}, {
  [types.NAVIGATION_FORWARD](state, action) {
    return action.state;
  },
});
