import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRepos = createReducer({}, {
  [types.SET_SEARCHED_REPOS](state, action) {
    let newState = {};
    action.repos.forEach( (repo) => {
      newState[repo.id] = repo
    });
    return newState;
  }
});

export const repoCount = createReducer(0, {
  [types.SET_SEARCHED_REPOS](state, action) {
    return action.repos.length;
  },
  [types.ADD_REPO](state, action) {
    return state + 1;
  },
})
