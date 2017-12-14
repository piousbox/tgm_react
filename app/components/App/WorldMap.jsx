import React from 'react'
import { connect } from 'react-redux'

import { citiesAction } from '../../actions'

class WorldMap extends React.Component {
  constructor (props) {
    super(props)
    console.log('+++ worldMap constructor:', props)

    this.state = {}

    props.dispatch(citiesAction())

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUpdate () {
  }

  render () {
    console.log('+++ +++ WorldMap render:', this.props, this.state)

    setTimeout(() => {
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
    }, 0)

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div id="worldMap" style={{ width: '100%', height: '100%' }}></div>
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
