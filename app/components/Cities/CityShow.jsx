import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { cityAction } from '../../actions'
import AppRouter from '../App/AppRouter'

import {
  Panel,
} from 'react-bootstrap'

import { Newsitem } from '../Newsitems'

class CityShow extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ CityShow constructor:', props)

    if (!props.city || !props.city.name) {
      props.dispatch(cityAction(props.params.cityname))
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate       = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ +++ CityShow willReceiveProps:', nextProps, this.props, this.state)

    if (nextProps.routeParams && nextProps.routeParams.cityname && nextProps.routeParams.cityname !== this.props.params.cityname) { 
      this.props.dispatch(cityAction(nextProps.routeParams.cityname))
    }
  }

  componentWillUpdate () {
  }

  render () {
    console.log('+++ +++ CityShow render:', this.props, this.state)

    let newsitems = []
    /* if (this.props.city.newsitems) {
      this.props.city.newsitems.map((item, idx) => {
        newsitems.push(
          <Newsitem key={idx} newsitem={item} />
        )
      })
    } */

    let venues = []
    if (this.props.city.venues) {
      this.props.city.venues.map((venue, idx) => {
        venues.push(
          <Panel key={idx} style={{ color: 'black' }} >
            <Link to={AppRouter.cityVenueLink(this.props.city, venue)}>{ venue.name }</Link>
          </Panel>
        )
      })
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <h3 className='center' >{ this.props.city.name }</h3>
        <h4 className='center' >News</h4>{ newsitems }
        <h4 className='center' >Venues</h4>{ venues }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(CityShow)
