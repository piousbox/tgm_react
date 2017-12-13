
/*
 * citiesReducer
 */

import {
  SET,
} from '../constants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

const citiesIndexReducer = (state=[], action) => {
  switch (action.type) {
    case SET.cities:
      return action.cities
    default:
      return state
  }
}

const citiesShowReducer = (state={}, action) => {
  switch (action.type) {
    case SET.city:
      return action.city
    default:
      return state
  }
}

export default {
  citiesIndexReducer,
  citiesShowReducer,
}
