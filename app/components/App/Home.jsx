import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import FacebookAuth from 'react-facebook-auth'
import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'
import { authStateReducer } from 'redux-auth'

import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import config from 'config'
import { siteShow } from '../../actions'

import styles        from './_App.scss'
import Features      from './Features'
import Footer        from './Footer'
import WorldMap      from './WorldMap'

import { CitiesList } from '../Cities'

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
    // console.log('+++ +++ Home constructor:', props)

    // props.dispatch(siteShow())
  }

  componentWillMount() {}

  render () {
    // console.log('+++ +++ rendering Home:', this.props)

    // render world map
    // render cities list

    return (
      <Grid>
        <Row>
          <Col xs={12} >
            <div style={{ width: '100%', height: 400 }}>
              <WorldMap />
            </div>
          </Col>
          <Col xs={12} >
            <CitiesList />
          </Col>
        </Row>
      </Grid>
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

