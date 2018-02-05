import React from 'react'
import { connect } from 'react-redux'
import {
  withGoogleMap, GoogleMap, Marker, InfoWindow,
} from 'react-google-maps'
import { Link } from 'react-router'

import { citiesAction } from '../../actions'
import TgmRouter from './TgmRouter'

class _Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = { openItemId: null }
    this.openItem = this.openItem.bind(this)
    this.isOpen   = this.isOpen.bind(this)
  }

  isOpen (which) {
    return this.state.openItemId === which.id ? true : false
  }

  openItem (which) {
    this.setState({ openItemId: which.id })
  }

  render () {
    let markers = []
    this.props.cities.map((city, idx) => {
      if (city.x && city.y) {
        markers.push(
          <Marker key={idx}
                  position={{ lat: city.x, lng: city.y}}
                  onClick={() => { this.openItem(city) }} >
            { this.isOpen(city) && <InfoWindow>
              <div>
                <h5>{ city.name }</h5>
                <Link to={TgmRouter.cityLink(city)}>{city.name}</Link>
              </div>
            </InfoWindow> }
          </Marker>)
      }
    })

    return (
      <GoogleMap defaultZoom={2} defaultCenter={{ lat:6.785283, lng:-69.436403 }} >
        { markers }
      </GoogleMap>
    )
  }
}

class WorldMap extends React.Component {
  constructor (props) {
    super(props)
    // console.log('+++ worldMap constructor:', props)

    this.state = {}

    props.dispatch(citiesAction())

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('+++ +++ WorldMap will receive props:', nextProps, this.props, this.state)
  }

  componentWillUpdate () {
    // console.log('+++ +++ Worldmap will update')
  }

  render () {
    // console.log('+++ +++ WorldMap render:', this.props, this.state)
    if (this.props.cities.length === 0) { return (null) }

    let Map = withGoogleMap(_Map)

    /* setTimeout(() => {
      let map = new google.maps.Map(document.getElementById('worldMap'), {
        zoom: 2,
        center: { lat:6.785283, lng:-69.436403 }, // venezuela
      })
      let markers = []
      if (this.props.cities) {
        this.props.cities.map(city => {
          if (city.x && city.y) {
            markers.push(new google.maps.Marker({
              position: {lat: city.x, lng: city.y},
              map: map,
            }))
          }
        })
      }
    }, 0) */

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Map loadingElement={<div style={{height:`100%`}}/>}
             containerElement={<div style={{height:`100%`}}/>}
             mapElement={<div style={{height:`100%`}}/>} 
             cities={this.props.cities} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cities: state.cities,
  }
}

export default connect(mapStateToProps)(WorldMap)
