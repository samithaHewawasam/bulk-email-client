import { login } from '../actions/login'

export function login_reducers(state = [], action){
  switch (action.type) {
    case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {
          user: action.response
        })
    default:
        return state
  }
}
