import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'

class CitiesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { city: {} }
  }

  componentDidMount() {
    let cityName = this.props.params.cityName
    fetch(`${config.apiUrl}/api/cities/${cityName}.json`).then(r => r.json()).then(data => {
      window.data = data
      this.setState({ city: data })
    })
  }

  render () {
    let newsitems = []
    let nNewsitems = 0
    if (this.state.city.newsitems) {
      this.state.city.newsitems.forEach((n, idx) => {
        newsitems.push(<div key={idx}>{n.descr}</div>)
      })
      nNewsitems = this.state.city.newsitems.length
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} >
            <h1 style={{ textAlign: 'center' }} >{this.props.params.cityName}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Newsitems ({nNewsitems})</h2>
            { newsitems }
          </Col>
          <Col xs={6}>
            Reports
            Galleries
            Events
          </Col>               
        </Row>
      </Grid>
    )
  }
}

export default CitiesShow

