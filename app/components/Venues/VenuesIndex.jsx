import React from 'react'
import { connect } from 'react-redux'

import { venuesIndexAction } from '../../actions'

class VenuesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: []
    }
    if (this.props.city) {
      this.props.dispatch(venuesIndexAction({ cityname: this.props.city.cityname }))
    }
  }

  render () {
    console.log('+++ +++ VenuesIndex:', this.props, this.state)

    return (
      <div>Venues index</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(VenuesIndex)
