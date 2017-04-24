import React    from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'

import 'whatwg-fetch'

import styles     from './_App.scss'
import bg         from './images/noisy_grid.png'
import AppActions from '../../actions/AppActions'
import ItemsStore from '../../stores/ItemsStore'
import Home from './Home'
import { ReportsIndex, ReportsShow } from '../Reports'
import { GalleriesIndex, GalleriesShow } from '../Galleries'
import { CitiesIndex, CitiesShow } from '../Cities'
import { EventsShow } from '../Events'

function getAppState() {
  return {
    items: ItemsStore.getAll()
  };
}

class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}>

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
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
