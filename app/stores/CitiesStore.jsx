
import BaseStore from './BaseStore'
import AppDispatcher from '../dispatcher/AppDispatcher'

import { createStore } from 'redux'
import { ReduceStore } from 'flux/utils'

import {
  SET_CITIES,
  SET_CITIES_OK,

  SET_CITIES_INDEX,
  SET_CITIES_INDEX_OK,
  CITIES_INDEX_UPDATED,

} from '../constants/AppConstants'

import reducer from '../reducers'

let store = createStore(reducer)

/* 
   import config from 'config'
let citiesIndexDispatchToken = AppDispatcher.register((action) => {
  console.log("+++ +++ citiesStore:", action)

  switch (action.type) {
    case SET_CITIES_INDEX:

      fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
        AppDispatcher.dispatch({ type: SET_CITIES_INDEX_OK, cities: data })
      })
      break
  
    case SET_CITIES_INDEX_OK:
      console.log("+++ +++ store:", store)
      break

    default:
      return store // @TODO: probably wrong
  }
}) 
*/

export default store
