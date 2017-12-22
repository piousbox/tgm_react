import React from 'react'
import { connect } from 'react-redux'
import { 
  StripeProvider, Elements, CardElement,
  injectStripe,
} from 'react-stripe-elements'

import {
  Button, Modal,
  Row, Col,
} from 'react-bootstrap'

import avatar     from './images/avatars/2.jpg'
import star       from './images/32x32/star.png'

import FacebookAuth from 'react-facebook-auth'

import { profileAction, loginAction, logoutAction } from '../../actions'

import config from 'config'

import Center from '../Center'

import TgmApi from './TgmApi'

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>F</button>
)

class FbConnect extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(profileAction())
    this.state = { 
      profile: {},
    }
  }

  render () {
    console.log("+++ +++ rendering FbConnect:", this.props, this.state)

    let loggedIn = !!(this.props.profile && this.props.profile.name)

    let fbLogin = (<FacebookAuth appId={config.fbAppId} fields="name,email,picture" 
                                 callback={(response) => {this.props.dispatch(loginAction(response))}} 
                                 component={MyFacebookButton} />)

    if (loggedIn) {
      return (
        <div style={{ display: 'inline-block' }}>

          <img className="avatar" src={ avatar } alt='' />
          <h5>What's up { this.props.profile.name }</h5>
          <button onClick={ () => {this.props.dispatch(logoutAction())} }>Logout</button>
        </div>
      )
    } else {
      return (
        <div style={{ display: 'inline-block' }}>
          { fbLogin }
        </div>
      )
    }

  }
}

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(FbConnect)
