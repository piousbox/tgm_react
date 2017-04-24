import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import config from 'config'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [] }
  }

  getInitialState() {
    return { cities: [] }
  }

  componentDidMount() {
    fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
      this.setState({ cities: data })
    })
  }

/*
  componentWillMount () {
    console.log('CitiesIndex component will mount')
    let url = "http://localhost:3005/api/cities.json"
    let cities
    fetch(url).then(response => {
      return response.json()
    }).then(_data => {
      window.cities = _data
      console.log('cities', window.cities)
      this.cities = _data
    })
  }
*/

  render() {
    let cities = []
    this.state.cities.forEach( city => {
      cities.push(<Col xs={4}><Link to={`/en/cities/travel-to/${city.cityname}`}>{city.name}</Link></Col>)
    }) 
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: 'center' }} >Cities</h1>
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

