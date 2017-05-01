import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'
import Newsitems from '../App/Newsitems'

import { citiesShow } from '../../actions'

class CitiesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      city: {
        name: props.params.cityname,
      }
    }
    this.props.dispatch(citiesShow({ cityname: props.params.cityname }))
  }

  componentDidMount() {
    // cityName -> cityname
    /* let cityName = this.props.params.cityName
    fetch(`${config.apiUrl}/api/cities/${cityName}.json`).then(r => r.json()).then(data => {
      this.setState({ city: data })
    }) */
  }

  render () {
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
            <Newsitems newsitems={ this.props.city.newsitems } />
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

CitiesShow.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(CitiesShow)

