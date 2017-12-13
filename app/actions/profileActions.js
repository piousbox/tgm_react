
import {
  SET,
} from '../constants'

import TgmApi from '../components/App/TgmApi'

const profileAction = () => {
  return (dispatch, getState) => {
    if (localStorage.getItem('fbAccount')) {
      let fbAccount = JSON.parse(localStorage.getItem('fbAccount'))
      fetch(TgmApi.profile, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: localStorage.getItem('fbAccount'),
      }).then(r => r.json()).then(_data => {
        fbAccount = Object.assign({}, fbAccount, _data)
        dispatch({ type: SET_PROFILE, fbAccount: fbAccount })
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
  return({ type: SET_PROFILE, fbAccount: null }) 
}

export default {
  profileAction, loginAction, logoutAction,
}

