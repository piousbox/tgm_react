/**
 * TGM App / App.jsx
 */

import React    from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import config    from 'config'

import store     from '../../stores'
import { CONST } from '../../constants'

import AppRouter from './AppRouter'
import { Tgm4 } from './'
import { wrapper } from './Tgm4Wrapper'

import WorldMap    from './WorldMap'
import { 
  CityMap, CitiesList, CityShow
} from '../Cities'

const routes = [
  { component: Tgm4, path: '/', },
  { component: Tgm4, path: AppRouter.rootPath },
  { component: Tgm4, path: AppRouter.cityPath },
  { component: Tgm4, path: AppRouter.cityEventPath },
  { component: Tgm4, path: AppRouter.cityGalleryPath },
  { component: Tgm4, path: AppRouter.cityVenuePath },
]

const delta = {
  leftPane: WorldMap,
  rightPane: CitiesList,
  leftTabs: [
    { key: CONST.worldMap, readable: 'The World', path: AppRouter.rootPath },
  ],
  rightTabs: [
    { key: CONST.cities, readable: 'Cities', path: AppRouter.citiesPath },
  ],
  components: {}
}
delta.components[AppRouter.cityPath] = { key: CONST.city, readable: 'City', component: CityShow, path: AppRouter.cityPath }
delta.components[AppRouter.rootPath] = { key: CONST.worldMap, readable: 'The World', component: WorldMap, path: AppRouter.rootPath }
delta.components[AppRouter.citiesPath] = { key: CONST.cities, readable: 'Cities', component: CitiesList, path: AppRouter.citiesPath }


const wrapped = wrapper(Tgm4, delta)

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange = () => {
  }

  render() {
    // console.log('+++ +++ App render:', this.props, this.state)
    return (
      <BrowserRouter>
        <Switch>
          <Route path={AppRouter.cityPath} component={wrapped} />
          <Route path="/" component={wrapped} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)

