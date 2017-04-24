
// import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'

import CITIES_INDEX_SUCCESS from '../constants/AppConstants'

import AppDispatcher from '../dispatcher/AppDispatcher'

class CitiesStore extends ReduceStore {
  constructor () {
    super(AppDispatcher)
  }

  getInitialState () {
    return ({})
    // return Immutable.OrderedMap()
  }

  reduce(state, action) {
    switch (action.type) {
      case CITIES_INDEX_SUCCESS:
        return state
      default:
        return state
    }
  }

}

export default new CitiesStore()

