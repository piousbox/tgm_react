import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Nav
} from 'react-bootstrap'

import styles from './_Cities.scss'
import { citiesShow } from '../../actions'
import Newsitems from '../App/Newsitems'
import CitiesShowMap from './CitiesShowMap'

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

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, {city: nextProps.city}))
  }
  
  render () {
    let reports = []
    if (this.props.city.reports) {
      this.props.city.reports.forEach((n, idx) => {
        reports.push(<li key={idx} ><Link to={`/en/reports/show/${n.reportname}`}>{n.name}</Link></li>)
      })
    }

    let galleries = []
    if (this.state.city.galleries) {
      this.state.city.galleries.forEach((n, idx) => {
        galleries.push(<li key={idx}><Link to={`/en/galleries/show/${n.galleryname}`}>{n.name}</Link></li>)
      })
    }

    let events = []
    if (this.state.city.events) {
      this.state.city.events.forEach((n, idx) => {
        events.push(<li key={idx}><Link to={`/en/events/show/${n.slug}`}>{n.name}</Link></li>)
      })
    }

    let venues = []
    if (this.state.city.venues) {
      this.state.city.venues.forEach((n, idx) => {
        venues.push(
          <li key={idx}>
            <Link to={`/en/cities/travel-to/${this.state.city.cityname}/venues/show/${n.name_seo}`}>{n.name}</Link>
            <div dangerouslySetInnerHTML={{ __html: n.description }} />
          </li>
        )
      })
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
            <Nav bsStyle="pills">
              <li><Link to={`/en/cities/travel-to/${this.state.city.cityname}/reports`}>Reports</Link></li>
              <li><a href="#">Galaleries</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Venues</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">People</a></li>
            </Nav>
            <div className="description" dangerouslySetInnerHTML={{ __html: this.props.city.description }} />
          </Col>
        </Row>
        <Row>
          { features }
        </Row>
        <Row>
          <Col xs={6}>
            <CitiesShowMap city={this.props.city} />
            <Newsitems newsitems={ this.props.city.newsitems } />
          </Col>
          <Col xs={6}>
            <h2>Reports ({reports.length})</h2>
            <ul>
              { reports }
            </ul>
            <h2>Galleries ({galleries.length})</h2>
            <ul>
              { galleries }
            </ul>
            <h2>Events ({events.length})</h2>
            <ul>
              { events }
            </ul>
            <h2> Venues ({venues.length})</h2>
            <ul>
              { venues }
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
    // galleries: state.galleries, // Let's have galleries inside the city for now.
  }
}

export default connect(mapStateToProps)(CitiesShow)

