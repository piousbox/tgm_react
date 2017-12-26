import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router'
import { Provider, connect } from 'react-redux'
import 'whatwg-fetch'

import config     from 'config'
import PropTypes from 'prop-types'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import store      from '../../stores'

import Home from './Home'

import MainNavigation from './MainNavigation'
import Profile from './Profile'
import AppRouter from './AppRouter'

import { 
  CitiesIndex, CitiesShow, Cities2Show, CitiesWrapper,
} from '../Cities'
import { EventsShow } from '../Events'
import { 
  GalleriesIndex, GalleriesShow, GalleriesPhotoShow, 
} from '../Galleries'
import { ReportsIndex, ReportsShow 
} from '../Reports'
import { TagsShow } from '../Tags/TagsShow'
import { UsersShow } from '../Users'
import { VenuesIndex, VenuesShow,
} from '../Venues'
import VideosShow from '../Videos/VideosShow'
import Location from '../Locations/LocationShow'

import { TagsIndex, TagShow } from '../Tags'
import {
  Tgm3, Tgm2Home,
} from './'

import { citiesIndex, profileAction } from '../../actions'

const routes = [
  { component: Tgm3, path: '/', },
  { component: Tgm3, path: AppRouter.cityPath },
  { component: Tgm3, path: AppRouter.cityVenuePath },
  { component: Tgm3, path: AppRouter.cityEventPath },

  // { component: Tgm2, path: AppRouter.citiesPath },
  /* { path: '/',
    component: Tgm2,
    indexRoute: { component: Home },
    childRoutes: [

      { path: '/en/cities', component: CitiesIndex },
      { path: AppRouter.cityWrapperPath, component: CitiesWrapper, childRoutes: [
        { path: AppRouter.cityPath, component: CitiesShow },
        { path: AppRouter.cityGalleriesPath, component: GalleriesIndex },
        { path: AppRouter.cityReportsPath, component: ReportsIndex },
        { path: AppRouter.cityUsersPath, component: UsersShow },
        { path: AppRouter.cityVenuePath, component: VenuesShow },
        { path: AppRouter.cityVenuesPath, component: VenuesIndex },
      ]},
      { path: AppRouter.cityEventPath, component: EventsShow },
      
      { path: '/en/profile', component: Profile },
      
    ],
  }, */
]

class App extends React.Component {

  constructor(props) {
    super(props)
    // this.props.dispatch(citiesIndex())
    // this.props.dispatch(profileAction())
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange = () => {
  }

  render() {
    // console.log('+++ +++ App props:', this.props, this.state)

    return (
      <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cities,
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(App)

