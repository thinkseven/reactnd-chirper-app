import { RECEIVE_USERS } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
        /*
        https://redux.js.org/recipes/usingobjectspreadoperator
        Similiar to
        Object.assign({}, state, {
          users: action.users,
        })
        */
      }
    default:
      return state
  }
}
