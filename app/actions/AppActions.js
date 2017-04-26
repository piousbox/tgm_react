
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

  SET_API_URL_STRING,
} from '../constants/AppConstants';

import config from 'config'

export default {

  setApiUrlString() {
    AppDispatch.dispatch({
      actionType: SET_API_URL_STRING,
      apiUrl: config.apiUrl,
      // envName: config.envName
    })
  },

  citiesIndex() {
    let url = "http://localhost:3000/api/cities.json"
    fetch(url).then(response => {
      return response.json()
    }).then(_data => {
      AppDispatcher.dispatch({
        actionType: CITIES_INDEX_SUCCESS,
        cities: _data,
      })
    }).catch( () => {
      AppDispatcher.dispatch({
        actionType: CITIES_INDEX_ERROR
      })
    })
  },

  // this is from the tutorial, don't need it anymore.
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



