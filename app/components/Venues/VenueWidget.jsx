import React from 'react'
import {
  Panel,
} from 'react-bootstrap'
import { Link } from 'react-router'

import AppRouter from '../App/AppRouter'
import Stars     from '../App/Stars'

class VenueWidget extends React.Component {
  render () {
    // console.log('+++ VenueWidget', this.props, this.state)

    let tags = []
    this.props.venue.tags.map((tag, idx) => {
      tags.push(<span key={idx} ><Link to={AppRouter.tagLink(tag)}>{ tag.name }</Link></span>)
    })

    return (
      <Panel className="VenueWidget" >
        <div style={{ border: '1px solid gray', width: 100, height: 100, float: 'left', clear: 'both' }}>
          { this.props.venue.photo && <img src={this.props.venue.photo} alt='' /> }
        </div>
        <div style={{ marginLeft: '110px' }} >
          <h3 style={{ margin: 0 }} >
            <Link to={AppRouter.cityVenueLink(this.props.city, this.props.venue)}>{ this.props.venue.name }</Link>
          </h3> 
          <Stars percentage={80} />
          { tags.length > 0 && <div className="Tags">Tags: { tags }</div> }
          <div className="subhead">{ this.props.venue.subhead }</div>
        </div>
      </Panel>
    )
  }
}

export default VenueWidget
