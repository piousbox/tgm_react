
/*
 * citiesReducer
 */

import {
  SET_CITIES_INDEX,
  CITIES_INDEX_UPDATED
} from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

function citiesIndexReducer (state = {}, action) {
  console.log("+++ +++ citiesIndexReducer with:", action)

  switch (action.type) {
    case SET_CITIES_INDEX:
      return action.cities

    default:
      return state
  }
}

export default {
  citiesIndexReducer,
}
