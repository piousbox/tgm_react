
import {
  SET_API_URL_STRING,
} from '../constants/AppConstants'

const setApiUrlString = (state = 'none', action) => {
  switch (action.actionType) {
    case SET_API_URL_STRING:
      return action.apiUrl
    default:
      return state
  }
}

export default {
  setApiUrlString,
}


