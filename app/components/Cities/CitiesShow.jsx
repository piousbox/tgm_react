import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'

class CitiesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      city: {
        name: props.params.cityName,
      }
    }
  }

  componentDidMount() {
    let cityName = this.props.params.cityName
    fetch(`${config.apiUrl}/api/cities/${cityName}.json`).then(r => r.json()).then(data => {
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

    let reports = []
    let nReports = 0
    if (this.state.city.reports) {
      this.state.city.reports.forEach((n, idx) => {
        reports.push(<li key={idx} ><Link to={`/en/reports/view/${n.name_seo}`}>{n.name}</Link></li>)
      })
      nReports = this.state.city.reports.length
    }

    let galleries = []
    let nGalleries = 0
    if (this.state.city.galleries) {
      this.state.city.galleries.forEach((n, idx) => {
        galleries.push(<li key={idx}><Link to={`/en/galleries/${n.slug}`}>{n.name}</Link></li>)
      })
      nGalleries = this.state.city.galleries.length
    }

    let events = []
    let nEvents = 0
    if (this.state.city.events) {
      this.state.city.events.forEach((n, idx) => {
        events.push(<li key={idx}><Link to={`/en/events/${n.slug}`}>{n.name}</Link></li>)
      })
      nEvents = this.state.city.events.length
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} >
            <h1 style={{ textAlign: 'center' }} >{ this.state.city.name }</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2>Newsitems ({nNewsitems})</h2>
            { newsitems }
          </Col>
          <Col xs={6}>
            <h2>Reports ({nReports})</h2>
            <ul>
              { reports }
            </ul>
            <h2>Galleries ({nGalleries})</h2>
            <ul>
              { galleries }
            </ul>
            <h2>Events ({nEvents})</h2>
            <ul>
              { events }
            </ul>
          </Col>               
        </Row>
      </Grid>
    )
  }
}

export default CitiesShow

