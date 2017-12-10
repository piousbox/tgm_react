import React from 'react'
import { connect } from 'react-redux'

import {
  Grid, Row, Col,
} from 'react-bootstrap'

import { venuesIndexAction } from '../../actions'

class VenuesIndex extends React.Component {
  constructor(props) {
    super(props)

    console.log('+++ venuesIndex constructor:', props)

    this.state = {
      venues: []
    }
    this.props.dispatch(venuesIndexAction({ cityname: props.params.cityname }))
  }

  render () {
    console.log('+++ +++ VenuesIndex:', this.props, this.state)

    let venues = []
    this.props.venues.map((venue, index) => {
      venues.push(<li>{venue.name}</li>)
    })

    return (
      <Grid>
        <Row>
          <Col xs={12} xsOffset={0} md={6} mdOffset={3}>
            <ul>{ venues }</ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    venues: state.venues,
  }
}

export default connect(mapStateToProps)(VenuesIndex)
