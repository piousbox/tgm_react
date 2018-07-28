import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { citiesAction } from '../../actions'

import AppRouter from '../App/AppRouter'

class CitiesList extends React.Component {
  constructor(props) {
    super(props)
    // console.log('+++ CitiesList constructor:', props)

    if (props.cities.length === 0) {
      props.dispatch(citiesAction())
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ CitiesList willReceiveProps:', nextProps, this)
    if (nextProps.cities.length === 0) {
      this.dispatch(citiesAction())
    }
  }

  componentWillUpdate () {}

  render () {
    console.log('+++ +++ CitiesList render:', this.props, this.state)

    let cities = []
    if (this.props.cities.length > 0) {
      this.props.cities.forEach((city, idx) => {
        cities.push(<div className="item" key={idx} ><Link to={AppRouter.cityLink(city)}>{city.name}</Link></div>)
        if ((idx+1)%8 === 0) {
          cities.push(<div className="clearfix" />)
        }
      })
    }

    return (
      <div className="CitiesList" >
        <h5>Cities</h5>
        <div className="items">{ cities }</div>
        <div style={{ clear: 'both' }} />
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
