import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider, connect } from 'react-redux'
import 'whatwg-fetch'

import config     from 'config'
import PropTypes from 'prop-types'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import AppActions from '../../actions/AppActions'
// import ItemsStore from '../../stores/ItemsStore'
import store      from '../../stores'
import Home from './Home'
import { ReportsIndex, ReportsShow } from '../Reports'
import { GalleriesIndex, GalleriesShow } from '../Galleries'
import { CitiesIndex, CitiesShow } from '../Cities'
import { EventsShow } from '../Events'

/* function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
} */

class App extends React.Component {

  constructor(props) {
    super(props)
    /* store.dispatch({ actionType: 'setApiUrl',
                     apiUrl: config.apiUrl
    }) */
    this.state = {}
  }

  // state = getAppState()

  componentDidMount() {
    // ItemsStore.addChangeListener(this.onChange)
    AppActions.getItems()
    AppActions.setApiUrl()
  }

  componentWillUnmount() {
    // ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    // this.setState(getAppState());
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

            <Route path='/en/cities' component={CitiesIndex} />
            <Route path='/en/cities/travel-to/:cityName' component={CitiesShow} />
            <Route path='/en/cities/travel-to/:cityName/events/:eventName' component={EventsShow} />

          </Route>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  // children: PropTypes.node.isRequired // not actually required at all
  // apiUrl: PropTypes.string.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    // apiUrl: state, // .apiUrl
  }
}

export default App
// export default connect(mapStateToProps)(App)

