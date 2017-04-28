import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from './_App.scss'
import Home from './Home'

class MainNavigation extends React.Component {
  render () {
    console.log('+++ +++ props in MainNavigation:', this.props)

    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>T.G.M</Navbar.Brand>
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
    )
  }
}

Home.propTypes = {
  // children: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    // apiUrl: state, // .apiUrl
  }
}

export default connect(mapStateToProps)(MainNavigation)
