import React from 'react'
import ReactDOM from 'react-dom'

class CitiesShow extends React.Component {
  render () {
    return (
      <div>cities show: {this.props.params.cityName}</div>
    )
  }
}

export default CitiesShow

