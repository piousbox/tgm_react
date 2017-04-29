
import { combineReducers } from 'redux'

import {
  SET_API_URL,
} from '../constants/AppConstants'

function apiUrlReducer(state = 'no-state', action) {
  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

import { citiesIndexReducer } from './citiesReducer'

export default combineReducers({
  apiUrl: apiUrlReducer,
  citiesIndex: citiesIndexReducer
})
