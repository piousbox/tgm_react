
/*
 * sitesReducer
 */

import {
  SET_SITE,

} from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

function sitesReducer (state = {}, action) {
  switch (action.type) {
    case SET_SITE:
      return action.site
    default:
      return state
  }
}

export default {
  sitesReducer,
}
