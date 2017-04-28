
import Config from 'config'

import {
  SET_API_URL,

  SET_CITIES_INDEX,
} from '../constants/AppConstants'

const setCitiesIndex = (state = {}, action) => {

  console.log('+++ +++ setCitiesIndex():', action)

  switch (action.type) {

    /* case SET_API_URL:
      console.log("+++ +++ setting api url:", action)
      return action.apiUrl */

    case SET_CITIES_INDEX:
      fetch(Config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
        // console.log('+++ +++ data is:', data);
        // this.setState({ cities: data, filteredCities: data })
      })
      
      return action.apiUrl
      
    default:
      return state
  }
}

export default { setCitiesIndex, }


