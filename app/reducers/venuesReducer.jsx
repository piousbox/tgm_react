
/*
 * venuesReducer
 */

import {
  CONST,
  SET_VENUE,
} from '../constants'

import AppDispatcher from '../dispatcher/AppDispatcher'

const venueReducer = (state={}, action) => {
  switch (action.type) {
    case SET_VENUE:
      return action.venue
    default:
      return state
  }
}

const venuesReducer = (state=[], action) => {
  switch (action.type) {
    case CONST.setVenues:
      // console.log('+++ venuesReducer:', action)
      return action.venues
    default:
      return state
  }
}

export default {
  venueReducer,
  venuesReducer,
}
