import React from 'react'
import { connect } from 'react-redux'

import { cityAction } from '../../actions'

class CityMap extends React.Component {
  constructor(props) {
    super(props)

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps () {
    // console.log('+++ 1')
  }

  componentWillUpdate () {
    // console.log('+++ 2')
  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%' }}>
      city map here
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(CityMap)
