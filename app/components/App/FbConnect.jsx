import React from 'react'
import { connect } from 'react-redux'

import avatar     from './images/avatars/2.jpg'

class FbConnect extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return(<div style={{ display: 'inline-block' }}>
  <img className="avatar" src={ avatar } alt='' />
  <h5>What's up avatar</h5>
  abba, aba
    </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(FbConnect)
