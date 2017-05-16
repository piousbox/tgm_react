
/*
 * reportsReducer
 */

import {
  SET_REPORT,
} from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

const reportsShowReducer = (state={}, action) => {
  switch (action.type) {
    case SET_REPORT:
      return action.report
    default:
      return state
  }
}

export default {
  reportsShowReducer,
}
