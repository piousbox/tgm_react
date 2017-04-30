
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

  SET_SITE_NEWSITEMS,

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
    let state = getState()
    let url = config.apiUrl + "/api/cities.json"

    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET_CITIES_INDEX,
        cities: _data,
      })
    })
  }
}

const siteNewsitemsIndex = () => {
  return (dispatch, getState) => {
    let state = getState()
    let url = `${config.apiUrl}/api/sites/show/travel-guide.mobi.json`
    
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ dispatching SET_SITE_NEWSITEMS with:", _data)

      dispatch({
        type: SET_SITE_NEWSITEMS,
        siteNewsitems: _data.site.newsitems,
      })
    })
  }
}

export default {
  setApiUrl,
  citiesIndex,

  siteNewsitemsIndex,
}
