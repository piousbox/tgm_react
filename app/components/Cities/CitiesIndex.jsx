import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'
import Center from '../Center'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], filteredCities: [] }
    this.handleCitiesFilterChange = this.handleCitiesFilterChange.bind(this)
  }
  
  componentDidMount() {
    fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
      this.setState({ cities: data, filteredCities: data })
    })
  }

  handleCitiesFilterChange (e) {
    // this.setState({ citiesFilter: e.target.value })
    let filteredCities = []
    this.state.cities.forEach( (city, idx) => {
      if (city.cityname.toLowerCase().indexOf(e.target.value) !== -1) {
        filteredCities.push( city )
      }
    })
    this.setState((prev, props) => {
      return Object.assign(prev, { filteredCities, })
    })
  }
  
  render() {
    let cities = []
    this.state.filteredCities.forEach( (city, idx) => {
      cities.push(<Col key={idx} xs={4}><Link to={`/en/cities/travel-to/${city.cityname}`}>{city.name}</Link></Col>)
    }) 
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Center>
              <h1 style={{ textAlign: 'center' }} >Cities</h1>
              <input type="text" value={this.state.citiesFilter} onChange={this.handleCitiesFilterChange} />
            </Center>
          </Col>
        </Row>
        <Row>
          { cities }
        </Row>
      </Grid>
    )
  }
}

export default CitiesIndex

