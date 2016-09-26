import * as types from './types'
import Api from '../lib/api'

export function fetchRepos(username) {
  return (dispatch, getState) => {
    const params = [
      `${encodeURIComponent(username)}`,
    ]
    return Api.get(`/users/${params}/repos`).then(resp => {
      dispatch(setSearchedRepos({ repos: resp }));
    }).catch( (ex) => {
      console.log(ex);
    })
  }
}

export function setSearchedRepos( { repos } ) {
return {
  type: types.SET_SEARCHED_REPOS,
  repos
  }
}

export function addRepo() {
  return {
    type: types.ADD_REPO,
  }
}
