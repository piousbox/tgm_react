
/*
 * tgm_react appActions.js
 */

import AppDispatcher from '../dispatcher/AppDispatcher'
import WebAPI        from '../util/WebAPI'

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,

  CITIES_INDEX_SUCCESS,
  CITIES_INDEX_ERROR,

  SET_API_URL,

  SET_CITIES_INDEX,

} from '../constants/AppConstants';

import config from 'config'

export default {

  setApiUrl() {
    AppDispatcher.dispatch({
      actionType: SET_API_URL,
      apiUrl: config.apiUrl,
    })
  },

  citiesIndex() {
    let url = "http://localhost:3000/api/cities.json"
    fetch(url).then(response => {
      return response.json()
    }).then(_data => {
      AppDispatcher.dispatch({
        actionType: SET_CITIES_INDEX,
        cities: _data,
      })
    }).catch( (r) => {
      AppDispatcher.dispatch({
        actionType: SET_CITIES_INDEX,
        error: e,
      })
    })
  },

  getItems() {
    WebAPI.getItems()
    .then((items) => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_SUCCESS,
        items: items
      });
    })
    .catch(() => {
      AppDispatcher.dispatch({
        actionType: ITEMS_GET_ERROR
      });
    });
  } 

}



