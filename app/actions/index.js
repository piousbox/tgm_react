
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
  SET_GALLERIES,

  SET_MY_GALLERIES,
  SET_MY_REPORTS,

  SET_PROFILE,

  SET_REPORT,
  SET_REPORTS,

  SET_SITE,

  SET_VENUE,

} from '../constants/AppConstants';

import config from 'config'

const setApiUrl = () => {
  return {
    type: SET_API_URL,
    apiUrl: config.apiUrl,
  }
}

const profileAction = (input) => {
  return({ type: SET_PROFILE, profile: input })
}

const citiesIndex = () => {
  return (dispatch, getState) => { 
    let state = getState()
    let url = config.apiUrl + "/api/cities.json"
    
    if (state.cities.length > 0) {
      dispatch({
        type: SET_CITIES_INDEX,
        cities: state.cities
      })
    } else {
      fetch(url).then(r => r.json()).then(_data => {
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

const galleriesIndex = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/galleries.json?cityname=${args.cityname}`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET_GALLERIES,
        galleries: _data,
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

const myGalleriesAction = (args) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_GALLERIES,
    })
  }
}

const myReportsAction = (args) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_MY_REPORTS,
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

const reportsIndex = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/reports.json?cityname=${args.cityname}`
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ reportsIndex got data:", _data)
      dispatch({
        type: SET_REPORTS,
        reports: _data,
      })
    })
  }
}

const venuesShow = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/venues/view/${args.venuename}.json`
    fetch(url).then(r => r.json()).then(_data => {
      console.log("+++ +++ got venue data:", _data)
      dispatch({
        type: SET_VENUE,
        venue: _data.venue,
      })
    })
  }
}

const siteShow = () => {
  return (dispatch, getState) => {
    let state = getState()
    let url = `${config.apiUrl}/api/sites/view/${config.domain}.json`
    
    if (Object.keys(state.site).length > 0) {
      // ;
    } else {
      fetch(url).then(r => r.json()).then(_data => {
        dispatch({
          type: SET_SITE,
          site: _data.site,
        })
      })
    }
  }
}

export default {

  citiesIndex,
  citiesShow,

  galleriesIndex,
  galleriesShow,

  profileAction,

  myReportsAction,
  myGalleriesAction,

  reportsShow,
  reportsIndex,

  setApiUrl,
  siteShow,

  venuesShow,
}
