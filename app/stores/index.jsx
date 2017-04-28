
import { createStore, combineReducers } from 'redux'

import config from 'config'

import {
  SET_API_URL,

  SET_CITIES_INDEX,
  SET_CITIES_INDEX_OK,
  SET_CITIES,
  SET_CITIES_OK,

} from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'

function apiUrlReducer (state = 'none-set', action) {
  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

function citiesIndexReducer (state = {}, action) {
  console.log("+++ +++ citiesIndexReducer with action:", action)

  switch (action.type) {
    case SET_CITIES_INDEX:
      fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
        let citiesIndex = { a: 'b', c: 'd' }
        let toDispatch = { type: SET_CITIES_INDEX_OK, citiesIndex: citiesIndex }
        console.log("+++ +++ AppDispatcher dispatching:", toDispatch);
        AppDispatcher.dispatch( toDispatch )
      })
      return ''

    case SET_CITIES_INDEX_OK:
      return action.citiesIndex

    default:
      return ''
  }
}

function citiesReducer (state = {}, action) {
  switch (action.type) {
    case SET_CITIES:
      return action.cities
    default:
      return state
  }
}

let reducer_sets = combineReducers({
  apiUrl: apiUrlReducer,
  citiesIndex: citiesIndexReducer,
  cities: citiesReducer
})

let store = createStore( reducer_sets )

export default store
