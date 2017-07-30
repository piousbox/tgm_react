import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import FacebookAuth from 'react-facebook-auth'
import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'
import { authStateReducer } from 'redux-auth'

import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import styles from './_App.scss'
import Footer from './Footer'
import Newsitems from './Newsitems'

import Leaderboard from './Leaderboard'

import {
  SET_API_URL,
} from '../../constants/AppConstants'

import { LinkContainer } from 'react-router-bootstrap'

import { siteNewsitemsIndex } from '../../actions'

const loginFbUser = (r) => {
  console.log('+++ +++ todo!')
}

const saveFbUser = (r) => {
  console.log('+++ +++ more todo!')
}

/* const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login with facebook
  </button>
); */

class Home extends React.Component {

  constructor(props) {
    super(props) 
    this.props.dispatch(siteNewsitemsIndex());
  }

  componentWillMount() {
  }

  render () {
    console.log('+++ +++ rendering Home:', this.props)

    let newsitems = []
    if (this.props.siteNewsitems) {
      this.props.siteNewsitems.forEach((item, idx) => {
        newsitems.push(<li key={idx} >{item.name}</li>)
      })
    }

    return (
      <div style={{ marginTop: '60px' }}>
        <Grid>
          <Row>
            { /* Feature cities? */ }
          </Row>

          <Row>
            <Col xs={12}>
              <Newsitems newsitems={ this.props.siteNewsitems } nAds={3} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
    siteNewsitems: state.siteNewsitems,
  }
}

export default connect(mapStateToProps)(Home)

