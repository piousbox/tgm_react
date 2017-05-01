import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link, Redirect } from 'react-router'
import { connect } from 'react-redux'

import styles from './_App.scss'
import Footer from './Footer'
import Leaderboard from './Leaderboard'

import config from 'config'
import {
  SET_API_URL,
} from '../../constants/AppConstants'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { LinkContainer } from 'react-router-bootstrap'

class MainNavigation extends React.Component {

  componentWillMount() {
    this.props.dispatch({ type: SET_API_URL, apiUrl: config.apiUrl });
  }

  render () {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">T.G.M</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight>
              <li><Link to="/">Home</Link></li>
              <li><Link to='/en/cities'>Cities</Link></li>
              <li><Link to='/en/galleries'>Galleries</Link></li>              
              <li><Link to='/en/reports'>Reports</Link></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ marginTop: '60px' }}>
          <Leaderboard />

          { this.props.children }
        </div>
        <Footer apiUrl={this.props.apiUrl} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    apiUrl: state.apiUrl,
  }
}

export default connect(mapStateToProps)(MainNavigation)
