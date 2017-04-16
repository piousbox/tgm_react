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
import { ReportsShow } from '../Reports'

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
      <div style={{ backgroundImage: `url(${bg})` }} >

        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/en' component={Home} />
          <Route path='/en/reports/view/:report_name' component={ReportsShow} />
          <Route path='/en/galleries/view/:gallery_name' component={GalleriesShow} />
          <Route path='/en/cities/travel-to/:city_name/events/:event_name' component={EventsShow} />
        </Router>

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
