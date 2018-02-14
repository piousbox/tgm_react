import React from 'react'
import {
  Panel,
} from 'react-bootstrap'
import { Link } from 'react-router'

import { Clearfix } from '../App'
import AppRouter from '../App/AppRouter'

class Stars extends React.Component {
  render () {
    return (
      <div className="Stars">
        <div className="container"></div>
      </div>)
  }
}

class VenueWidget extends React.Component {
  render () {
    // console.log('+++ VenueWidget', this.props, this.state)

    return (
      <Panel className="VenueWidget" >
        { this.props.venue.photo && <img src={this.props.venue.photo} className="thumb" alt='' /> }
        <h3><Link to={AppRouter.cityVenueLink(this.props.city, this.props.venue)}>{ this.props.venue.name }</Link></h3>
        <Stars percentage={80} />
        <div className="subhead">{ this.props.venue.subhead }</div>
        <Clearfix />
      </Panel>
    )
  }
}

export default VenueWidget
