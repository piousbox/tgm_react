import React from 'react'
import _ from 'underscore'

import Map, { Marker, InfoWindow } from 'google-maps-react-pi'
import styles from './_Maps.scss'

class CitiesShowMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className={styles.map} >
        <Map google={window.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Name of the Place</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default CitiesShowMap
