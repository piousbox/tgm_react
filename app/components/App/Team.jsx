import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import victor from './images/victor.jpg'
import oleg from './images/oleg.jpg'

class Team extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Our Team</h1>
            <p>We are a distributed, agile team. We operate in several major US cities: presently San Francisco Bay Area, New York, and Chicago. We have a network of contractors that we reach out to for highly specialized tasks.</p>
            <p>Local teams usually work with local clients, so a client in Chicago will talk to our Chicago engineers. The exception to this is if a remote member offers expertise in an area necessary to complete the task.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <img src={victor} />
            <p>Hi, I'm victor</p>
            <p>San Francisco Bay Area</p>
            <p>see http://piousbox.github.io</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm Oleg.</p>
            <p>New York City</p>
            <p>See http://bsdpower.net</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm this other guy from Chicago</p>
            <p>Chicago</p>
            <p>See http://bsdpower.net</p>
          </Col>
          <Col xs={6}>
            <img src={oleg} />
            <p>Hi, I'm this other guy from New York City</p>
            <p>New York City</p>
            <p>See http://bsdpower.net</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Team

