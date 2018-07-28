/**
 * TGM App / App.jsx
 */

import React    from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import config     from 'config'

import store      from '../../stores'
import AppRouter from './AppRouter'
import { Tgm3 } from './'

const routes = [
  { component: Tgm3, path: '/', },
  { component: Tgm3, path: AppRouter.rootPath },
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
      <BrowserRouter>
        <Switch>
          <Route path={AppRouter.cityPath} component={Tgm3} />
          <Route path="/" component={Tgm3} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps)(App)

