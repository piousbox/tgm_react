import React from 'react'
import { connect } from 'react-redux'

import { cityAction } from '../../actions'

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

    if (!this.props.city.x && !this.props.city.y) {
      return(<div><h5>This city doesn't have coordinates set yet.</h5></div>)
    }

    setTimeout(() => {
      let map = new google.maps.Map(document.getElementById('cityMap'), {
        zoom: 10,
        center: { lat: this.props.city.x, lng: this.props.city.y },
      })
      /* let markers = []
      if (this.props.cities) {
        this.props.cities.map(city => {
          if (city.x && city.y) {
            markers.push(new google.maps.Marker({
              position: {lat: city.x, lng: city.y},
              map: map,
            }))
          }
        })
      } */
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
