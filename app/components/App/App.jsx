import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
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
          <Route path='/' component={Home} apiUrl={this.props.apiUrl} off={5} >

            <Route path="/en/reports" component={ReportsIndex}>
              <Route path='/en/reports/view/:reportName' component={ReportsShow} />
            </Route>

            <Route path="/en/galleries" component={GalleriesIndex}>
              <Route path='/en/galleries/view/:galleryName' component={GalleriesShow} />
            </Route>

            <Route path='/en/cities' component={CitiesIndex} citiesIndex={this.props.citiesIndex} />
            <Route path='/en/cities/travel-to/:cityName' component={CitiesShow} />
            <Route path='/en/cities/travel-to/:cityName/events/:eventName' component={EventsShow} />

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
    apiUrl: state.apiUrl,
    citiesIndex: state.citiesIndex
  }
}

export default connect(mapStateToProps)(App)

