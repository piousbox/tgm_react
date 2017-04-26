
import { createStore } from 'redux'

import {
  SET_API_URL,
} from '../constants/AppConstants'

// import rootReducer from '../reducers'

// docs say to use only one store in the app...
// import CitiesStore from './CitiesStore'
// import ItemsStore from './ItemsStore'

/*
export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
} */

// a reducer
function setApiUrl (state = 'none-set', action) {

  console.log("+++ +++ setApiUrl() reducer is called with state:", state, "action:", action, 'and:', SET_API_URL)

  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

let store = createStore( setApiUrl )

export default store
