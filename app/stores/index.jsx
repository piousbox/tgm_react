
import { createStore } from 'redux'

import {
  SET_API_URL,
} from '../constants/AppConstants'

import reducer from '../reducers'

let store = createStore( reducer )

export default store
