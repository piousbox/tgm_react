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
import Home    from './Home'
import { CityMap, CitiesList, CityShow, CityWrapper } from '../Cities'


/* const routes = [
  { component: Home, path: '/', },
  { component: Home, path: AppRouter.rootPath },
  { component: CityShow, path: AppRouter.cityPath },

  { component: EventShow, path: AppRouter.cityEventPath },
  { component: GalleryShow, path: AppRouter.cityGalleryPath },
  { component: VenueShow, path: AppRouter.cityVenuePath },
] */

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
          <Route path={AppRouter.cityPath} component={CityWrapper} />
          <Route path="/" component={Home} exact />
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

