import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Center from './../Center'

class Newsitems extends React.Component {
  render () {
    let listitems = []
    this.props.newsitems.forEach( (n, idx) => {
      listitems.push(
        <li key={idx} >
          <div>{ n.name }</div>
          <div>{ n.descr }</div>
        </li>)
    })
    return(
      <Grid>
        <Row>
          <Col xs={12}>
            <Center><h3>Newsitems</h3></Center>
            <ul>{ listitems }</ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Newsitems
