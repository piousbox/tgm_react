import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import styles from './_App.scss'
import Footer from './Footer'

import {
  SET_API_URL,
} from '../../constants/AppConstants'

import AppDispatcher from '../../dispatcher/AppDispatcher'
import { LinkContainer } from 'react-router-bootstrap'

import { siteNewsitemsIndex } from '../../actions'

class Home extends React.Component {

  constructor(props) {
    super(props) 
    this.props.dispatch(siteNewsitemsIndex());
  }

  componentWillMount() {
    this.props.dispatch({ type: SET_API_URL, apiUrl: config.apiUrl });
  }

  render () {
    let newsitems = []
    if (this.props.siteNewsitems) {
      this.props.siteNewsitems.forEach((item, idx) => {
        newsitems.push(<li key={idx} >{item.name}</li>)
      })
    }

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
          Newsitems:
          <ul>{ newsitems }</ul>

          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
          { this.props.children }

          <br /><br /><br />
          <br /><br /><br />
          <br /><br /><br />
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
  return {
    apiUrl: state.apiUrl,
    siteNewsitems: state.siteNewsitems,
  }
}

// export default Home
export default connect(mapStateToProps)(Home)

