
/*
 * venuesReducer
 */

import {
  CONST,
  SET,
} from '../constants'

import AppDispatcher from '../dispatcher/AppDispatcher'

const venueReducer = (state={}, action) => {
  switch (action.type) {
    case SET.venue:
      return action.venue
    default:
      return state
  }
}

const venuesReducer = (state=[], action) => {
  switch (action.type) {
    case SET.venues:
      return action.venues
    default:
      return state
  }
}

export default {
  venueReducer,
  venuesReducer,
}
