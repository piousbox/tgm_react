
import { combineReducers } from 'redux'

import {
  DO_LOGOUT,

  SET,
  SET_LOCATION,
  SET_SITE_NEWSITEMS,

} from '../constants'

import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer, reportsReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venueReducer, venuesReducer, } from './venuesReducer'

import TgmApi from '../components/App/TgmApi'

import config from 'config'

// e
const event = (state={}, action) => {
  switch (action.type) {
      case SET.event:
      return action.event
    default:
      return state
  }
}

// f
const featureCities = (state=[], action) => {
  switch (action.type) {
    case SET.featureCities:
      return action.cities
    default:
      return state
  }
}

// g
const galleries = (state=[], action) => {
  switch (action.type) {
    case SET.galleries:
      console.log('+++ galleries reducer:', action)
      return action.galleries
    default: 
      return state
  }
}

// l
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

// m
function myReportsReducer (state = {}, action) {
  return state
}

function myGalleriesReducer (state = {}, action) {
  return state
}

// n
function n_newsitems (state = 0, action) {
  switch (action.type) {
    case SET.news:
      return action.n_newsitems
    default:
      return state
  }
}

function newsitems(state = [], action) {
  switch (action.type) {
    case SET.news:
      return action.newsitems
    default:
      return state
  }
}

// p
function path (state={}, action) {
  switch (action.type) {
      case SET.path:
      return action.params
    default:
      return state
  }
}

function profileReducer (state = {}, action) {
  switch (action.type) {
    case SET.profile:
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

  event,

  featureCities,

  gallery: galleriesShowReducer,
  galleries,

  location: locationReducer,

  myReports: myReportsReducer,
  myGalleries: myGalleriesReducer,

  n_newsitems,
  newsitems,

  path,
  profile: profileReducer,

  report: reportsShowReducer,
  reports: reportsReducer,

  site: sitesReducer,

  tag,
  tags,

  venue: venueReducer,
  venues: venuesReducer,
})
