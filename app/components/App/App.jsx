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
import { ReportsIndex, ReportsShow } from '../Reports'
import { GalleriesIndex, GalleriesShow } from '../Galleries'
import { CitiesIndex, CitiesShow } from '../Cities'
import { EventsShow } from '../Events'
import VideosShow from '../Videos/VideosShow'
import MainNavigation from './MainNavigation'
import TgmRouter from './TgmRouter'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onChange = () => {
  }

  render() {
    return (
      <Provider store={store} >
        <Router history={browserHistory}>
          <Route path='/' component={MainNavigation} >
            <IndexRoute component={Home} />

            <Route path="/en/reports" component={ReportsIndex}>
              <Route path={TgmRouter.reportsShowPath} component={ReportsShow} />
            </Route>

            <Route path="/en/galleries" component={GalleriesIndex}>
              <Route path={TgmRouter.galleriesShowPath} component={GalleriesShow} />
            </Route>

            <Route path='/en/cities' component={CitiesIndex} citiesIndex={this.props.citiesIndex} />
            <Route path='/en/cities/travel-to/:cityname' component={CitiesShow} />
            <Route path='/en/cities/travel-to/:cityname/events/:eventname' component={EventsShow} />
              
            <Route path='/en/videos/show/:youtube_id' component={VideosShow} />

          </Route>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    citiesIndex: state.citiesIndex,
  }
}

export default connect(mapStateToProps)(App)

