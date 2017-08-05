import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect,
         IndexRoute
} from 'react-router'
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
import TgmRouter from './TgmRouter'

import { CitiesIndex, CitiesShow, CitiesWrapper } from '../Cities'
import { EventsShow } from '../Events'
import { GalleriesIndex, GalleriesShow, GalleriesPhotoShow } from '../Galleries'
import { ReportsIndex, ReportsShow } from '../Reports'
import { VenuesShow } from '../Venues'
import VideosShow from '../Videos/VideosShow'

import { citiesIndex, profileAction } from '../../actions'

const routes = {
  path: '/',
  component: MainNavigation,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/en/profile', component: Profile },
    { path: '/en/cities', component: CitiesIndex },
    { path: TgmRouter.cityWrapperPath, component: CitiesWrapper, childRoutes: [
      { path: TgmRouter.cityReportsPath, component: ReportsIndex },
    ]},
    { path: TgmRouter.cityEventPath, component: EventsShow },
    { path: TgmRouter.cityVenuePath, component: VenuesShow },

    { path: TgmRouter.galleriesPath, component: GalleriesIndex, childRoutes: [
      { path: TgmRouter.galleryPath, component: GalleriesShow },  
    ]},
    { path: TgmRouter.galleryPhotoPath, component: GalleriesPhotoShow },

    { path: '/en/reports/', component: ReportsIndex, childRoutes: [
      { path: TgmRouter.reportPath, component: ReportsShow },
    ]},
    { path: TgmRouter.videoPath, component: VideosShow },
  ],
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(citiesIndex())
    this.props.dispatch(profileAction())
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange = () => {
  }

  render() {
    // console.log('+++ +++ App props:', this.props)
    // console.log('+++ +++ App state:', this.state)

    return (
      <Provider store={store} >
        <Router history={browserHistory} routes={routes} >
          { /* <Route path='/' component={MainNavigation} >
            <IndexRoute component={Home} />
            
            <Route path="/en/profile" component={Profile} />
            
            <Route path='/en/cities' component={CitiesIndex} cities={this.props.cities} />
            <Route path='/en/cities/travel-to/:cityname' component={CitiesShow} />
            <Route path='/en/cities/travel-to/:cityname/events/show/:eventname' component={EventsShow} />
            <Route path='/en/cities/travel-to/:cityname/venues/show/:venuename' component={VenuesShow} />
            
            <Route path="/en/galleries" component={GalleriesIndex}>
              <Route path={TgmRouter.galleriesShowPath} component={GalleriesShow} />
            </Route>
            
            <Route path="/en/reports" component={ReportsIndex}>
              <Route path={TgmRouter.reportsShowPath} component={ReportsShow} />
            </Route>
            
            <Route  path='/en/videos/show/:youtube_id' component={VideosShow} />
          </Route> */ }
        </Router>
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

