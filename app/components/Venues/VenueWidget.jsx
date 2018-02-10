import React from 'react'
import {
  Panel,
} from 'react-bootstrap'
import { Link } from 'react-router'

import { TgmRouter as AppRouter } from '../App'

class VenueWidget extends React.Component {
  render () {
    console.log('+++ VenueWidget', this.props, this.state)

    return (
      <Panel style={{ color: 'black' }} >
        { this.props.venue.photo && <img src={this.props.venue.photo} alt='' /> }
        <Link to={AppRouter.cityVenueLink(this.props.city, this.props.venue)}>{ this.props.venue.name }</Link>
      </Panel>
    )
  }
}

export default VenueWidget
