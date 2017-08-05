import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Nav, NavItem,
         Panel,
         Button,
} from 'react-bootstrap'

import scrollToElement from 'scroll-to-element'

import styles         from './_Cities.scss'
import CitiesShowMap  from './CitiesShowMap'

import { citiesShow } from '../../actions'

import Newsitems      from '../App/Newsitems'
import Leaderboard    from '../App/Leaderboard'

import VideoPreview   from '../Videos/VideoPreview'

import LargeSquare    from '../App/LargeSquare'

class CitiesWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      city: {
        name: props.params.cityname,
      }
    }
    this.props.dispatch(citiesShow({ cityname: props.params.cityname }))
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, {city: nextProps.city}))
  }

  showPeople = () => {
    this.setState(Object.assign({}, this.state, { users: this.props.city.users }))
  }

  handleSelect = (e) => {
    switch (e) {
      case 'cityNews':
        scrollToElement(`#${e}`)
        break
    }
  }
  
  render () {
    console.log('+++ +++ citiesWrapper props:', this.props)

    let nEvents = this.props.city.n_events
    let events = []
    if (this.state.city.events) {
      this.state.city.events.forEach((n, idx) => {
        events.push(<li key={idx}><Link to={`/en/events/show/${n.slug}`}>{n.name}</Link></li>)
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
              <Panel>
                { f.name }
                { f.subhead }
              </Panel>
            </Col>)
        }
      })
    }

    let nGalleries = this.props.city.n_galleries
    let galleries = []
    if (this.state.city.galleries) {
      this.state.city.galleries.forEach((n, idx) => {
        galleries.push(<li key={idx}><Link to={`/en/galleries/show/${n.galleryname}`}>{n.name}</Link></li>)
      })
    }

    let nNews = this.props.city.n_newsitems

    let nPeople = this.props.city.n_users
    let people = []
    if (this.state.users) {
      this.state.users.forEach((user, idx) => {
        people.push(<li key={idx}>{user.name}</li>)
      })
    }

    let nReports = this.props.city.n_reports
    let reports = []
    if (this.props.city.reports) {
      this.props.city.reports.forEach((n, idx) => {
        reports.push(<li key={idx} ><Link to={`/en/reports/show/${n.reportname}`}>{n.name}</Link></li>)
      })
    }

    let nVenues = this.props.city.n_venues
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
    
    let videos = []
    let nVideos = this.props.city.n_videos
    if (this.props.city && this.props.city.videos) {
      this.props.city.videos.forEach((v, idx) => {
        videos.push(<div key={idx}><VideoPreview video={v} /></div>)
      })
    }

    return (
      <Grid>
        <Row>
          <Col xs={12} >
            <Leaderboard />
            <h1 style={{ textAlign: 'center' }} >{ this.state.city.name }</h1>
            <Nav bsStyle="pills" onSelect={this.handleSelect}>
              <NavItem eventKey={'cityNews'}>News ({nNews})</NavItem>
              <li><Link to={`/en/cities/travel-to/${this.state.city.cityname}/reports`}>Reports ({nReports})</Link></li>
              <li><a href="#">Galleries ({nGalleries})</a></li>
              <li><a href="#">Videos ({nVideos})</a></li>
              <li><a href="#">Venues ({nVenues})</a></li>
              <li><a href="#">Events ({nEvents})</a></li>
              <li><a onClick={this.showPeople}>People ({nPeople})</a></li>
            </Nav>
            <div className="expandable"><ul>{people}</ul></div>
          </Col>
        </Row>
        <Row>{ features }</Row>
        <Row>{ this.props.children }</Row>
      </Grid>
    )
  }
}

CitiesWrapper.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
    // galleries: state.galleries, // Let's have galleries inside the city for now.
  }
}

export default connect(mapStateToProps)(CitiesWrapper)

