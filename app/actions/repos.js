import * as types from './types'
import Api from '../lib/api'

export function fetchRepos(username) {
  return (dispatch, getState) => {
    const params = [
      `${encodeURIComponent(username)}`,
    ]
    return Api.get(`/users/?${params}/repos`).then(resp => {
      console.log('got here!');
      console.log(resp);
    }).catch( (ex) => {
      console.log(ex);
    })
  }
}
export function addRepo() {
  return {
    type: types.ADD_REPO,
  }
}
