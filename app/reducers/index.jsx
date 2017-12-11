
import { combineReducers } from 'redux'

import {
  DO_LOGOUT,

  SET,
  SET_LOCATION,
  SET_PROFILE,
  SET_SITE_NEWSITEMS,

} from '../constants/AppConstants'

import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer, reportsReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venueReducer, venuesReducer,
} from './venuesReducer'

import TgmApi from '../components/App/TgmApi'

import config from 'config'

function locationReducer (state = {}, action) {
  switch (action.type) {
    case SET_LOCATION:
      /* fetch(TgmApi.location( action.locationname )).then(r => r.json()).then(_data => {
        console.log("+++ +++ locationReducer data is:", _data)
        return _data.location
      }) */
      return action.location
    default:
      return state
  }
}

function myReportsReducer (state = {}, action) {
  // @TODO
  return state
}

function myGalleriesReducer (state = {}, action) {
  // @TODO
  return state
}

function newsitemsReducer(state = {}, action) {
  switch (action.type) {
    case SET_SITE_NEWSITEMS:
      return action.newsitems
    default:
      return state
  }
}

function profileReducer (state = {}, action) {
  switch (action.type) {
    case SET_PROFILE:
      return action.fbAccount

    default:
      return state
  }
}

const tag = (state={}, action) => {
  switch (action.type) {
    case SET.tag:
      return action.tag
    default:
      return state
  }
}

const tags = (state=[], action) => {
  switch (action.type) {
    case SET.tags:
      return action.tags
    default: 
      return state
  }
}

export default combineReducers({
  cities: citiesIndexReducer,
  city: citiesShowReducer,

  gallery: galleriesShowReducer,

  location: locationReducer,

  myReports: myReportsReducer,
  myGalleries: myGalleriesReducer,

  newsitems: newsitemsReducer,

  profile: profileReducer,

  report: reportsShowReducer,
  reports: reportsReducer,

  site: sitesReducer,

  tag,
  tags,

  venue: venueReducer,
  venues: venuesReducer,
})
