import { combineReducers } from 'redux'
import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'

// using ES6's property shorthand
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
export default combineReducers({
  authedUser,
  users,
  tweets,
})
