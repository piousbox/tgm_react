import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Redirect, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
// import 'whatwg-fetch'

import config     from 'config'
// import PropTypes from 'prop-types'

import store      from '../../stores'

// import MainNavigation from './MainNavigation'
// import Profile from './Profile'
import AppRouter from './AppRouter'

/* import { 
  CitiesIndex, CitiesShow, Cities2Show, CitiesWrapper,
} from '../Cities'
import { EventsShow } from '../Events'
import { 
  GalleriesIndex, GalleriesShow, GalleriesPhotoShow, 
} from '../Galleries'
import { ReportsIndex, ReportsShow 
} from '../Reports'
import { UsersShow } from '../Users'
import { VenuesIndex, VenuesShow,
} from '../Venues'
import VideosShow from '../Videos/VideosShow'
import { TagsIndex, TagShow } from '../Tags' */

import { Tgm3 } from './'

// import { citiesIndex, profileAction } from '../../actions'

const routes = [
  { component: Tgm3, path: '/', },
  { component: Tgm3, path: AppRouter.cityPath },
  { component: Tgm3, path: AppRouter.cityEventPath },
  { component: Tgm3, path: AppRouter.cityGalleryPath },
  { component: Tgm3, path: AppRouter.cityVenuePath },
]

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  onChange = () => {
  }

  render() {
    // console.log('+++ +++ App render:', this.props, this.state)
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

// App.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)

