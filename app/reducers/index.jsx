
import { combineReducers } from 'redux'

import { setApiUrlString } from './utilsReducer'

const combinedApp = combineReducers({
  setApiUrlString,
})

export default combinedApp
