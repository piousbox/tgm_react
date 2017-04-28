
import React       from 'react'
import { Link }    from 'react-router'
import { connect } from 'react-redux'
import { Grid, Row, Col,
} from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

import AppDispatcher from '../../dispatcher/AppDispatcher'

import {
  SET_CITIES_INDEX,
} from '../../constants/AppConstants'

class CitiesIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], filteredCities: [] }
    this.handleCitiesFilterChange = this.handleCitiesFilterChange.bind(this)
  }
  
  componentDidMount() {
    /* fetch(config.apiUrl + "/api/cities.json").then(r => r.json()).then(data => {
      console.log('+++ +++ data is:', data);
      this.setState({ cities: data, filteredCities: data })
    }) */

    console.log("+++ +++ cities index, these props are:", this.props)

    AppDispatcher.dispatch({ type: SET_CITIES_INDEX, cities: { a: 'b', c: 'd' } })

    this.props.dispatch({ type: SET_CITIES_INDEX });

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

CitiesIndex.propTypes = {
  // children: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  // console.log("+++ +++ mapStateToProps in CitiesIndex, with state:", state)

  return {
    cities: state.setCitiesIndex
  }
}

export default connect(mapStateToProps)(CitiesIndex)
