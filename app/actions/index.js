
/*
 * tgm_react appActions.js
 */

// import ReduxThunk from 'redux-thunk'

import AppDispatcher from '../dispatcher/AppDispatcher'

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,

  SET_CITIES_INDEX,

  SET_API_URL,
} from '../constants/AppConstants';

import config from 'config'

const setApiUrl = () => {
  return {
    type: SET_API_URL,
    apiUrl: config.apiUrl,
  }
}

const citiesIndex = () => {
  return (dispatch, getState) => {
    console.log("++++ +++ thunk here")

    let state = getState()
    let url = config.apiUrl + "/api/cities.json"

    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        // actionType: SET_CITIES_INDEX,
        type: SET_CITIES_INDEX,
        cities: _data,
      })
    })
  }
}

export default {
  setApiUrl,
  citiesIndex,
}
