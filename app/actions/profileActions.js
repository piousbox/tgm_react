
import {
  SET,
} from '../constants'

import AppApi from '../components/App/AppApi'

const profileAction = () => {
  return (dispatch, getState) => {
    if (localStorage.getItem('fbAccount')) {
      let fbAccount = JSON.parse(localStorage.getItem('fbAccount'))
      fetch(AppApi.profile, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: localStorage.getItem('fbAccount'),
      }).then(r => r.json()).then(_data => {
        fbAccount = Object.assign({}, fbAccount, _data)
        dispatch({ type: SET.profile, fbAccount: fbAccount })
      })
    }
    dispatch({ type: SET.profile, fbAccount: null })
  }
}

const loginAction = (r2) => {
  return (dispatch, getState) => {
    localStorage.setItem('fbAccount', JSON.stringify(r2))
    dispatch(profileAction())
  }
}

const logoutAction = () => {
  localStorage.removeItem('fbAccount')
  return({ type: SET.profile, fbAccount: null }) 
}

export default {
  profileAction, loginAction, logoutAction,
}

