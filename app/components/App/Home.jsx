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

import Clearfix      from './Clearfix'
import styles        from './_App.scss'
import Features      from './Features'
import Footer        from './Footer'
import { Newsitem  } from '../Newsitem'

import {
  SET_API_URL,
} from '../../constants/AppConstants'

import { LinkContainer } from 'react-router-bootstrap'

import { siteShow } from '../../actions'

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
    props.dispatch(siteShow());

    console.log('+++ +++ Home constructor:', props)
    if (props.site) {
      localStorage.setItem("lang", props.site.lang)
    }
  }

  componentWillMount() {
  }

  render () {
    // console.log('+++ +++ rendering Home:', this.props)

    let newsitems = []
    let tempRow = []
    if (this.props.site.newsitems) {
      this.props.site.newsitems.forEach((item, idx) => {
        newsitems.push(
          <Col key={idx} xs={12} sm={12} md={6} lg={6}>
            <Newsitem newsitem={item} />
          </Col>
        )
        if ((idx+1) % 2 === 0) {
          newsitems.push(<Clearfix />)
        }
      })
    }

    return (
      <div style={{ marginTop: '60px' }}>
        <Grid>
          <Features features={this.props.site.features} />
          { newsitems }
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
    site: state.site,
  }
}

export default connect(mapStateToProps)(Home)

