import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'
import { authStateReducer } from 'redux-auth'
import { Link, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import FacebookAuth from 'react-facebook-auth'
import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'

import config from 'config'
import styles      from './_App.scss'
import Footer3      from './Footer3'
import Leaderboard from './Leaderboard'
import { profileAction } from '../../actions'
import TgmRouter from './TgmRouter'

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>f</button>
);

class MainNavigation extends React.Component {

  constructor (props) {
    super(props)
    if (localStorage.getItem('fbAccountId')) {
      this.state = { profile: { id: localStorage.getItem('fbAccountId') } }
    } else {
      this.state = { profile: {} }
    }
  }

  componentWillMount(nextProps) {
    // this.props.dispatch({ type: SET_API_URL, apiUrl: config.apiUrl });
    // console.log("+++ +++ MainNavigation nextProps?:", nextProps)
  }

  render () {
    // console.log('+++ +++ MainNavigation render:', this.props, this.state)

    let profilePic = null
    if (this.props.profile.id) {
      profilePic = (<img src={`//graph.facebook.com/${this.props.profile.id}/picture`} alt='' />)
    } else if (this.state.profile.id) {
      profilePic = (<img src={`//graph.facebook.com/${this.state.profile.id}/picture`} alt='' />)
    } 
    let fbLogin = (<FacebookAuth appId={config.fbAppId} fields="name,email,picture" 
                                 callback={(response) => {this.props.dispatch(profileAction(response))}} 
                                 component={MyFacebookButton} />)

    let lang = this.props.profile.lang
    
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">{ config.siteTitle }</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight>
              { config.citiesEnabled ?    <li><Link to='/en/cities'>Cities</Link></li>                 : null }
              { config.tagsEnabled ?      <li><Link to={TgmRouter.tagsLink()}>Tags</Link></li>         : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }
              { config.reportsEnabled ?   <li><Link to={TgmRouter.reportsLink}>Reports</Link></li>     : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }

              { /* <li><Link to="/en/profile">Profile</Link></li>
              <li>{ profilePic }</li>
              <li>{ lang }</li>
              <li>{ fbLogin }</li> */ }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Leaderboard />
        { this.props.children }
        { /* <Footer apiUrl={this.props.apiUrl} domain={this.props.domain} /> */ }
        <Footer3 />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    apiUrl: state.apiUrl,
    domain: state.domain,
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(MainNavigation)
