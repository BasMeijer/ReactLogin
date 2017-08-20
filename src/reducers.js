import { combineReducers } from 'redux'
import { loginReducer } from './components/Login/redux/reducers'
import { loadProperty } from './utils/persist.js'

// read stored authentication token from local storage
let auth = loadProperty('auth', {
    token: null,
    username: null,
    email: null,
    userId: null,
    timestamp: null
})


export const initialState = {
    login: {
        auth
    }
}

export const combinedReducers = combineReducers({
  login: loginReducer,
})