import React from 'react'
import { connect } from 'react-redux'

import { cityAction } from '../../actions'

import { Newsitem } from '../Newsitems'

class CityShow extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ CityShow constructor:', props)

    if (!props.city) {
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
    this.props.city.newsitems.map((item, idx) => {
      newsitems.push(
        <Newsitem newsitem={item} />
      )
    })

    let venues = []
    this.props.city.venues.map((venue, idx) => {
      venues.push(
        <Panel>{venue.name}</Panel>
      )
    })

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <h3 className='center' >{ this.props.city.name }</h3>
        <h4 className='center' >News</h4>{ newsitems }
        <h4 className='center' >Events</h4>{ events }
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
