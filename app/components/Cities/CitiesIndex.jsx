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

import { citiesIndex } from '../../actions'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], filteredCities: [] }
    this.handleCitiesFilterChange = this.handleCitiesFilterChange.bind(this)
    this.props.dispatch(citiesIndex())
  }
  
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cities: nextProps.cities })
  }

  handleCitiesFilterChange(e) {
    let filteredCities = []
    this.props.cities.forEach( (city) => {
      if (city.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
        filteredCities.push( city )
      }
    })
    this.setState((prev, props) => {
      return Object.assign({}, prev, { 
        cities: filteredCities,
      })
    })
  }
  
  render() {
    if (this.state.cities.length === 0) {
      this.state.cities = this.props.cities
    }    

    let cities = []
    Object.keys(this.state.cities).forEach( (idx) => {
      cities.push(
        <Col key={idx} xs={4}>
          <Link to={`/en/cities/travel-to/${this.state.cities[idx].cityname}`} >
            { this.state.cities[idx].name }
          </Link>
        </Col>)
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

CitiesIndex.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cities,
  }
}

export default connect(mapStateToProps)(CitiesIndex)


