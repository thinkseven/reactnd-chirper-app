import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
        /*
        https://redux.js.org/recipes/usingobjectspreadoperator
        Similiar to
        Object.assign({}, state, {
          tweets: action.tweets,
        })
        */
      }
    default:
      return state
  }
}
