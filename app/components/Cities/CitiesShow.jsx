import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import styles from './_Cities.scss'
import { citiesShow } from '../../actions'
import Newsitems from '../App/Newsitems'


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
  }

  render () {
    console.log('+++ +++ CitiesShow props:', this.props)
    console.log('+++ +++ CitiesShow state:', this.state)

    let reports = []
    let nReports = 0
    if (this.props.city.reports) {
      this.props.city.reports.forEach((n, idx) => {
        reports.push(<li key={idx} ><Link to={`/en/reports/view/${n.name_seo}`}>{n.name}</Link></li>)
      })
      nReports = this.props.city.reports.length
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

    let features = []
    if (this.props.city && this.props.city.features && this.props.city.features.length > 0) {
      this.props.city.features.forEach((f, idx) => {
        if (f.inner_html) {
          features.push(
            <Col xs={3} key={idx} className={ styles.featureWrapper } >
              <div dangerouslySetInnerHTML={{ __html: f.inner_html }} />
            </Col>)
        } else {
          features.push(
            <Col xs={3} key={idx} className={ styles.featureWrapper } >
              <div className={ styles.feature } >
                { f.name }
              </div>
            </Col>)
        }
      })
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} >
            <h1 style={{ textAlign: 'center' }} >{ this.state.city.name }</h1>
          </Col>
        </Row>
        <Row>
          { features }
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

