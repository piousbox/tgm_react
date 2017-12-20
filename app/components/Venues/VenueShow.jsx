import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

import { venueAction } from '../../actions'

class VenueShow extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ VenueShow constructor:', props)

    this.state = {
      venues: {},
      venue: {},
    }

    if (!props.venue || !props.venue.name) {
      props.dispatch(venueAction(props.params.venuename))
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ VenueShow received props:", nextProps)

    this.setState(Object.assign({}, this.state, {venue: nextProps.venue }))
  }

  componentDidMount() {
    if (this.state.venue) {
      document.title = `${this.props.venue.name} - in ${this.props.params.cityname}`
    }
  }

  render () {
    console.log('+++ +++ VenueShow render:', this.props, this.state)

    return (
      <div>
        <Center>
          <h1>{ this.state.venue.name }</h1>
        </Center>
        <div dangerouslySetInnerHTML={{__html: this.state.venue.description}} />
      </div>
    )
  }
}

VenueShow.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    venue: state.venue,
  }
}

export default connect(mapStateToProps)(VenueShow)

