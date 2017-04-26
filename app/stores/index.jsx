
//
// I don't need thunk...
//

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import BaseStore from './BaseStore'
import CitiesStore from './CitiesStore'
import ItemsStore from './ItemsStore'

export default () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}
