import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link } from 'react-router'

import styles from './_App.scss'

import Footer from './Footer'

class Home extends React.Component {
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
        </div>
        <Footer apiUrl={this.props.apiUrl} />
      </div>
    )
  }
}

Home.propTypes = {
  children: PropTypes.object.isRequired
}

export default Home
