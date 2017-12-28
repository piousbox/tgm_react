
/*
 * tgm_react (of bjjc) appActions.js
 */

// import ReduxThunk from 'redux-thunk'

import AppDispatcher from '../dispatcher/AppDispatcher'

import {
  CONST,

  DO_LOGOUT,

  SET,

  SET_GALLERY,
  SET_GALLERIES,

  SET_REPORT,
  SET_REPORTS,

} from '../constants'

import config from 'config'

import TgmApi from '../components/App/TgmApi'

const setLocation = (locationName) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/locations/${locationName}.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET_LOCATION,
        location: _data,
      })
    })
  }
}

const citiesAction = () => {
  return (dispatch, getState) => { 
    let state = getState()
    let url = `${config.apiUrl}/api/cities.json`
    
    if (state.cities.length > 0) {
      dispatch({
        type: SET.cities,
        cities: state.cities
      })
    } else {
      fetch(url).then(r => r.json()).then(_data => {
        dispatch({
          type: SET.cities,
          cities: _data,
        })
      })
    }
  }
}

const cityAction = (args) => {
  return (dispatch, getState) => {
    let state = getState()
    let url
    if (typeof args === 'string' ) {
      url = `${config.apiUrl}/api/cities/view/${args}.json`
    } else if (typeof args === 'object') {
      url = `${config.apiUrl}/api/cities/view/${args.cityname}.json`
    }
    console.log('+++ url:', url)

    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET.city,
        cityname: args.cityname,
        city: _data.city,
        galleries: _data.galleries,
      })
    })
  }
}

// e
const eventAction = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/events/view/${args}.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET.event,
        event: _data.event,
      })
    })
  }
}

// g
const galleriesIndex = (args) => {
  return (dispatch, getState) => {
    let url
    if (args.cityname) {
      url = `${config.apiUrl}/api/galleries.json?domain=${config.domain}&cityname=${args.cityname}`
    } else {
      url = `${config.apiUrl}/api/galleries.json?domain=${config.domain}`
    }
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET.galleries,
        galleries: _data,
      })
    })
  }
}

const galleriesShow = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/galleries/view/${args.galleryname}.json`
    fetch(url).then(r => r.json()).then(_data => {
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

// n
const newsAction = (args={page:1}) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/sites/view/${config.domain}/newsitems/${args.page}`
    fetch(url).then(r => r.json()).then(_data => {
      // console.log('+++ newsAction got data:', _data)
      dispatch(Object.assign({ type: SET.news }, _data))
    })
  }
}

const reportsShow = (args) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/reports/view/${args.reportname}.json`
    fetch(url).then(r => r.json()).then(_data => {
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
      dispatch({
        type: SET_REPORTS,
        reports: _data,
      })
    })
  }
}

const pathAction = (params) => {
  return (dispatch, getState) => {
    dispatch({ type: SET.path, params, })
  }
}

// @deprecated, use newsAction
/* const siteNewsitemsAction = (args = {}) => {
  return (dispatch, getState) => {
    let state = getState()
    let url = `${config.apiUrl}/api/sites/view/${config.domain}/newsitems/${args.page}.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET_SITE_NEWSITEMS,
        newsitems: _data.newsitems,
      })
    })
  }
} */

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

const tagAction = (tagname) => {
  return (dispatch) => {
    let url = `${config.apiUrl}/api/tags/view/${tagname}.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({ type: SET.tag, tag: _data })
    })
  }
}

const tagsAction = () => {
  return (dispatch) => {
    let url = `${config.apiUrl}/api/sites/view/${config.domain}/tags.json`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({ type: SET.tags, tags: _data })
    })
  }
}

// v
const venueAction = (args) => {
  return (dispatch, getState) => {
    let url
    if (typeof args === 'object') {
      url = `${config.apiUrl}/api/venues/view/${args.venuename}.json`
    } else {
      url = `${config.apiUrl}/api/venues/view/${args}.json`
    }
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET.venue,
        venue: _data.venue,
      })
    })
  }
}

const venuesAction = (arg) => {
  return (dispatch, getState) => {
    let url = `${config.apiUrl}/api/venues.json?cityname=${arg.cityname}`
    fetch(url).then(r => r.json()).then(_data => {
      dispatch({
        type: SET.venues,
        venues: _data.venues,
      })
    })
  }
}


import { profileAction, loginAction, logoutAction } from './profileActions'

export default {
  citiesAction,
  cityAction,

  eventAction,

  galleriesIndex,
  galleriesShow,

  loginAction,
  logoutAction,
  profileAction,

  myReportsAction,
  myGalleriesAction,

  newsAction,

  pathAction,

  reportsShow,
  reportsIndex,

  setLocation,

  siteShow,
  // siteNewsitemsAction,

  tagAction,
  tagsAction,

  venueAction,
  venuesAction,

}
