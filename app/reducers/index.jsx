
import { combineReducers } from 'redux'

import { setApiUrl      } from './utilsReducer'
import { setCitiesIndex } from './citiesReducer'

const combined = combineReducers({
  setApiUrl,
  setCitiesIndex
})

export default combined
