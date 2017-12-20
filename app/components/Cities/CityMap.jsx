import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { connect } from 'react-redux'

import { Link } from 'react-router'

import { cityAction } from '../../actions'

import AppRouter from '../App/TgmRouter'

class MyInfoWindow extends React.Component {
  render () {
    console.log('+++ +++ MyInfoWindow render:', this.props, this.state)

    return (
      <div className="info-window">
        <div className="info-window-content">
          <h5><a href={AppRouter.cityVenueLink(this.props.city.cityname, this.props.venue.name_seo)}>{this.props.venue.name}</a></h5>
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

    if (!this.props.city.x || !this.props.city.y) {
      return(<div><h5>This city doesn't have coordinates set yet.</h5></div>)
    }

    let markers = []
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
              content: ReactDOMServer.renderToStaticMarkup(<MyInfoWindow venue={venue} city={this.props.city} />)
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
    }, 0)

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <div id="cityMap" style={{ width: '100%', height: '100%' }}></div>
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

























/* class _MyMap extends React.Component {
  render () {
    console.log('+++ +++ _MyMap render:', this.props, this.state)

    let markers = []
    if (this.props.city.venues) {
      this.props.city.venues.map((venue, idx) => {
        if (venue.x && venue.y) {
          markers.push(<Marker key={idx} position={{ lat: venue.x, lng: venue.y }} />)
        }
      })
    }

    return (
      <GoogleMap defaultZoom={12}
                 defaultCenter={{ lat: this.props.city.x, lng: this.props.city.y }} >
        {markers}
      </GoogleMap>
    )
  }
}
let MyMap = withGoogleMap(_MyMap)

class CityMap1 extends React.Component {
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

    if (!this.props.city.x || !this.props.city.y) {
      return(<div><h5>This city doesn't have coordinates.</h5></div>)
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <MyMap city={this.props.city} 
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `400px` }} />}
               mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
} */ 
