import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRepos = createReducer({}, {

});

export const repoCount = createReducer(0, {
  [types.ADD_REPO](state, action) {
    return state + 1;
  }
})
