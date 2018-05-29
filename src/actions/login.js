import { LOGIN_SUCCESS, LOGIN_UNAUTHERIZED, SERVER_ERROR } from './types'
import axios from 'axios'

export function login(data){
  return function (dispatch){
    return axios.post("http://localhost:3000/api/Users/login", 
    data).then(function(response){
      switch(response.status){
        case 200: 
        return dispatch({
          type: LOGIN_SUCCESS,
          response
        })
      }
    }).catch(error => {
      switch(error.response.status){
        case 401: 
        return dispatch({
          type: LOGIN_UNAUTHERIZED
        })
        case 500: 
        return dispatch({
          type: SERVER_ERROR
        })
      }
    });
  }
}