import React from 'react'

class CitiesIndex extends React.Component {

  componentWillMount () {
    console.log('component will mount')
    let url = "http://localhost:3000/api/cities.json"
    let cities
    fetch(url).then(response => {
      return response.json()
    }).then(_data => {
      this.cities = _data
      window.cities = _data
      console.log('cities', window.cities)
    })
  }

  render () {
    console.log('herehere')
    let cities = []
    this.cities.forEach( city => {
      cities.push(<div>city: {city.cityname}</div>)
    })
    return (
      <div>
        <h1>cities list:</h1>
        { this.cities }
      </div>
    )
  }
}

export default CitiesIndex

