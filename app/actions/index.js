
/*
 * tgm_react appActions.js
 */

// import ReduxThunk from 'redux-thunk'

import AppDispatcher from '../dispatcher/AppDispatcher'

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,

  SET_API_URL,

  SET_CITIES_INDEX,
  SET_CITIES_SHOW,
  SET_CITY,

  SET_GALLERY,

  SET_REPORT,

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
    
    if (state.citiesIndex.length > 0) {
      dispatch({
        type: SET_CITIES_INDEX,
        cities: state.citiesIndex
      })
    } else {
      fetch(url).then(r => r.json()).then(_data => {

        console.log('+++ +++ _data is:', _data)

        dispatch({
          type: SET_CITIES_INDEX,
          cities: _data,
        })
      })
    }
  }
}

const citiesShow = (args) => {
  return (dispatch, getState) => {
    let state = getState()
    let url = `${config.apiUrl}/api/cities/view/${args.cityname}.json`
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ citiesShow() data:", _data)
      dispatch({
        type: SET_CITY,
        cityname: args.cityname,
        city: _data.city,
        galleries: _data.galleries,
      })
    })
  }
}

const galleriesShow = (args) => {
  console.log("+++ +++ start action galleriesShow:", args)

  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/galleries/view/${args.galleryname}.json`
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ galleriesShow() data:", _data)
      dispatch({
        type: SET_GALLERY,
        galleryname: args.galleryname,
        gallery: _data.gallery,
      })
    })
  }
}

const reportsShow = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/reports/view/${args.reportname}.json`
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ reportsShow data:", _data)
      dispatch({
        type: SET_REPORT,
        report: _data.report,
      })
    })
  }
}

const siteNewsitemsIndex = () => {
  return (dispatch, getState) => {
    let state = getState()
    let url = `${config.apiUrl}/api/sites/view/travel-guide.mobi.json`
    
    fetch(url).then(r => r.json()).then(_data => {
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
  citiesShow,

  galleriesShow,

  reportsShow,

  siteNewsitemsIndex,
}
