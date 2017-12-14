import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { citiesAction } from '../../actions'

import TgmRouter from '../App/TgmRouter'

class CitiesList extends React.Component {
  constructor(props) {
    super(props)

    if (!props.cities) {
      this.dispatch(citiesAction())
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps () {
  }

  componentWillUpdate () {
  }

  render () {
    // console.log('+++ +++ CitiesList render:', this.props, this.state)

    let citiesList = []
    if (this.props.cities) {
      this.props.cities.forEach((city, idx) => {
        citiesList.push(<li key={idx} ><Link to={TgmRouter.cityLink(city)}>{city.name}</Link></li>)
      })
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <h5>Cities</h5>
        <ul>{ citiesList }</ul>
        a?b
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cities: state.cities,
  }
}

export default connect(mapStateToProps)(CitiesList)
