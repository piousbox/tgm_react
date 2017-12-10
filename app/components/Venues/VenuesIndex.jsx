import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {
  Grid, Row, Col,
} from 'react-bootstrap'

import { venuesIndexAction } from '../../actions'
import { TgmRouter, docTitle } from '../App'

class VenuesIndex extends React.Component {
  constructor(props) {
    super(props)

    console.log('+++ venuesIndex constructor:', props)

    this.state = {
      venues: []
    }

    this.props.dispatch(venuesIndexAction({ cityname: props.params.cityname }))

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount () {
    document.title = docTitle(`Venues in ${this.props.params.cityname}`)
  }

  render () {
    console.log('+++ +++ VenuesIndex:', this.props, this.state)

    let venues = []
    this.props.venues.map((venue, index) => {
      venues.push(<li><Link to={TgmRouter.cityVenueLink(this.props.params.cityname, venue.name_seo)}>{venue.name}</Link></li>)
    })

    return (
      <Row>
        <Col xs={12} xsOffset={0} md={6} mdOffset={3}>
          <ul>{ venues }</ul>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    venues: state.venues,
  }
}

export default connect(mapStateToProps)(VenuesIndex)
