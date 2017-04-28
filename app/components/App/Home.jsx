import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from './_App.scss'

import Footer from './Footer'

import {
  SET_API_URL,
} from '../../constants/AppConstants'

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: SET_API_URL,
                          apiUrl: 'this here url' });
  }

  render () {
    return (
      <div>
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
        <div style={{ marginTop: '60px' }}>
          { this.props.children }
          apiUrl: { this.props.apiUrl }
        </div>
        <Footer apiUrl={this.props.apiUrl} />
      </div>
    )
  }
}

Home.propTypes = {
  // children: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  // console.log("+++ +++ mapStateToProps at Home, with state:", state, "ownProps:", ownProps)

  return {
    apiUrl: state.apiUrl
  }
}

export default connect(mapStateToProps)(Home)
