
/*
 * sitesReducer
 */

import {
  SET_SITE_NEWSITEMS,

} from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

function sitesReducer (state = [], action) {
  switch (action.type) {
    case SET_SITE_NEWSITEMS:
      return action.siteNewsitems
    default:
      return state
  }
}

export default {
  sitesReducer,
}
