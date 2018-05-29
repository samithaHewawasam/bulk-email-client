import { combineReducers } from 'redux'
import { login_reducers } from './login';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  login_reducers,
  form: formReducer
})
