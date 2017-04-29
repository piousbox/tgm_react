import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import config from 'config'
import Center from '../Center'

import {
  SET_CITIES_INDEX,
} from '../../constants/AppConstants'

import CitiesStore from '../../stores/CitiesStore'
// import AppDispatcher from '../../dispatcher/AppDispatcher'
import { citiesIndex } from '../../actions'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], filteredCities: [], citiesIndex: [] }
    this.handleCitiesFilterChange = this.handleCitiesFilterChange.bind(this)
  }
  
  componentWillMount() {
    this.props.dispatch(citiesIndex());
  }

  componentDidMount() {
    /* fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
      this.setState({ cities: data, filteredCities: data })
    }) */
  }

  handleCitiesFilterChange (e) {
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
    /* this.state.filteredCities.forEach( (city, idx) => {
      cities.push(<Col key={idx} xs={4}><Link to={`/en/cities/travel-to/${city.cityname}`}>{city.name}</Link></Col>)
    }) */

    console.log("+++ +++ citiesIndex props:", this.props)

    Object.keys(this.props.citiesIndex).forEach( (idx) => {
      cities.push( <Col key={idx} xs={4}>{this.props.citiesIndex[idx].name}</Col> )
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
        <Row>
          Cities 2: { this.state.cities }
        </Row>
      </Grid>
    )
  }
}

CitiesIndex.propTypes = {
  // citiesIndex: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    citiesIndex: state.citiesIndex,
    cities: state.cities,
  }
}

export default connect(mapStateToProps)(CitiesIndex)


