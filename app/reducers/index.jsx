
import { combineReducers } from 'redux'

import {
  DO_LOGOUT,

  SET_API_URL,

  SET_LOCATION,

  SET_PROFILE,

  SET_SITE_NEWSITEMS,

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
import { reportsShowReducer, reportsReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer'
import { venuesShowReducer } from './venuesReducer'

import TgmApi from '../components/App/TgmApi'

import config from 'config'

function leftPaneReducer (state = {}, action) {
  return({ name: 'key-name', description: 'key-description', modelName: 'Report' })
}

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
      /**
       * facebook: either info is passed, or I have it in localStorage, or I don't have it.
       */
      if (action.profile) {
        // just logged in
        fetch(TgmApi.fbLogin, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            accessToken: action.profile.accessToken,
            userId:      action.profile.userId,
            email:       action.profile.email,
            name:        action.profile.name,
          }),
        }).then(r => r.json()).then(_data => {
          action.profile.longAccessToken = _data.profile.fb_long_access_token
          action.profile.token           = _data.profile.fb_long_access_token
        })

        localStorage.setItem('fbAccount', JSON.stringify(action.profile))
        return action.profile

      } else if (localStorage.getItem('fbAccount')) {
        // was already logged in
        let fbAccount = JSON.parse(localStorage.getItem('fbAccount'))
        action.profile = fbAccount

      } else {
        // not logged in, browse anonymously
        action.profile = {}
      }

      /**
       * ishapi: get current city
       */
      if (!action.profile.current_city) {
        fetch(TgmApi.profile, {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            accessToken: action.profile.accessToken,
          })
        }).then(r => r.json()).then(_data => {
          action.profile = Object.assign({}, action.profile, _data)
          // action.profile.current_city    = _data.current_city
          // action.profile.about           = _data.about
          // action.profile.current_city_id = _data.current_city_id
        })
      }
      return action.profile

    case DO_LOGOUT:
      localStorage.removeItem('fbAccount')
      return {}
    default:
      return state
  }
}

function rightPaneReducer (state = {}, action) {
  return state
}


export default combineReducers({
  apiUrl: apiUrlReducer,

  cities: citiesIndexReducer,
  city: citiesShowReducer,

  gallery: galleriesShowReducer,

  leftPane: leftPaneReducer,
  location: locationReducer,

  myReports: myReportsReducer,
  myGalleries: myGalleriesReducer,

  newsitems: newsitemsReducer,

  profile: profileReducer,

  report: reportsShowReducer,
  reports: reportsReducer,
  rightPane: rightPaneReducer,

  site: sitesReducer,

  venue: venuesShowReducer,
})
