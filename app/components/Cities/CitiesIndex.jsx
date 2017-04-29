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
    this.state = { cities: [], filteredCities: [], citiesIndex: [] }
    this.handleCitiesFilterChange = this.handleCitiesFilterChange.bind(this)
  }
  
  componentWillMount() {
    this.props.dispatch(citiesIndex());
  }

  componentDidMount() {
    // console.log("+++ +++ props are:", this.props)
    this.setState({ citiesIndex: this.props.citiesIndex })
  }

  handleCitiesFilterChange (e) {
    let filteredCities = []
    this.props.citiesIndex.forEach( (city) => {
      if (city.cityname.toLowerCase().indexOf(e.target.value) !== -1) {
        filteredCities.push( city )
      }
    })
    this.setState((prev, props) => {
      return Object.assign({}, prev, { 
        citiesIndex: filteredCities,
      })
    })
  }
  
  render() {
    let cities = []
    Object.keys(this.state.citiesIndex).forEach( (idx) => {
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
  }
}

export default connect(mapStateToProps)(CitiesIndex)


