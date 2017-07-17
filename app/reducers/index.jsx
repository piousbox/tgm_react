
import { combineReducers } from 'redux'

import {
  SET_API_URL,
  SET_PROFILE,
} from '../constants/AppConstants'

function apiUrlReducer(state = 'no-state', action) {
  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venuesShowReducer } from './venuesReducer'

function profileReducer (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      localStorage.setItem('fbAccountId', action.profile.id)
      return action.profile
    default:
      return state
  }
}


export default combineReducers({
  apiUrl: apiUrlReducer,

  citiesIndex: citiesIndexReducer,
  city: citiesShowReducer,

  gallery: galleriesShowReducer,

  profile: profileReducer,

  report: reportsShowReducer,

  siteNewsitems: sitesReducer,

  venue: venuesShowReducer,
})
