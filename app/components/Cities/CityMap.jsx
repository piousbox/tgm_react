import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router'

import { cityAction } from '../../actions'

import AppRouter from '../App/TgmRouter'

import { 
  withGoogleMap, GoogleMap, Marker, InfoWindow, 
} from 'react-google-maps'

class _MyMap extends React.Component {
  render () {
    console.log("+++ +++ _MyMap render:", this.props, this.state)

    let markers = []
    this.props.venues.map((venue, idx) => {
      if (venue.x && venue.y) {
        markers.push(
          <Marker key={idx} position={{ lat: venue.x, lng: venue.y }} >
            <InfoWindow>
              <div>
                <h5>{venue.name}</h5>
                <Link to={AppRouter.cityVenueLink(this.props.city, venue)}>{venue.name}</Link>
              </div>
            </InfoWindow>
          </Marker>
        )
      }
    })
    
    return (
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: this.props.city.x, lng: this.props.city.y }} >
        { markers }
      </GoogleMap>
    )
  }
}

class MyInfoWindow extends React.Component {
  render () {
    // console.log('+++ +++ MyInfoWindow render:', this.props, this.state)

    return (
      <div className="info-window">
        <div className="info-window-content">
          <h5><a href={AppRouter.cityVenueLink(this.props.city.cityname, this.props.venue.name_seo)}>{this.props.venue.name}</a></h5>
          <Link href={AppRouter.cityVenueLink(this.props.city, this.props.venue)} 
                to={AppRouter.cityVenueLink(this.props.city, this.props.venue)} >better link?</Link>
        </div>
      </div>
    )
  }
}

class CityMap extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ cityMap constructor:', props)

    if (!props.city.cityname) {
      props.dispatch(cityAction(props.params.cityname))
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate       = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ +++ CityMap willReceiveProps:', nextProps, this.props, this.state)

    if (nextProps.params.cityname !== this.props.params.cityname) {
      nextProps.dispatch(cityAction(nextProps.params.cityname))
    }
  }

  componentWillUpdate () {
  }

  render () {
    console.log('+++ +++ cityMap render:', this.props, this.state)
    if (!this.props.city.x || !this.props.city.y) { return(null) }
    
    let MyMap = withGoogleMap(_MyMap)

    /* let markers = []
    let infoWindows = []
    setTimeout(() => {
      let map = new google.maps.Map(document.getElementById('cityMap'), {
        zoom: 10,
        center: { lat: this.props.city.x, lng: this.props.city.y },
      })
      if (this.props.city.venues) {
        this.props.city.venues.map(venue => {
          if (venue.x && venue.y) {
            let infoWindow = new google.maps.InfoWindow({
              content: unstable_renderSubtreeIntoContainer(<MyInfoWindow venue={venue} city={this.props.city} />)
            })
            infoWindows.push(infoWindow)
            let newMarker = new google.maps.Marker({
              position: {lat: venue.x, lng: venue.y},
              map: map,
            })
            newMarker.addListener('click', () => {
              infoWindows.map(i => i.close())
              infoWindow.open(map, newMarker)
            })
            markers.push(newMarker)
          }
        })
      }
    }, 0) */

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div id="cityMap" style={{ width: '100%', height: '100%' }}>
          <MyMap city={this.props.city}
                 venues={this.props.city.venues}
                 loadingElement={<div style={{ height: `100%` }} />}
                 containerElement={<div style={{ height: `400px` }} />}
                 mapElement={<div style={{ height: `100%` }} />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(CityMap)
