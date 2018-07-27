import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import { Center } from '../App'

import { venueAction } from '../../actions'

class VenueShow extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ VenueShow constructor:', props)

    this.state = {
      venue: {},
    }

    /* if (!props.venue || !props.venue.name) {
      props.dispatch(venueAction(props.params.venuename))
    } */
    if (props.params.venuename) {
      props.dispatch(venueAction(props.params.venuename))
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ VenueShow willReceiveProps:", nextProps, this.props, this.state)
    if (nextProps.params.venuename && nextProps.params.venuename !== this.props.params.venuename) {
      this.props.dispatch(venueAction(nextProps.params.venuename))
    }
    // this.setState({venue: nextProps.venue }) // trash
  }

  componentDidMount() {
    if (this.state.venue) {
      document.title = `${this.props.venue.name} - in ${this.props.params.cityname}`
    }
  }

  render () {
    console.log('+++ +++ VenueShow render:', this.props, this.state)
    if (!this.props.venue) { return(null) }

    return (
      <div>
        <Center>
          <h1>{ this.props.venue.name }</h1>
        </Center>
        <div dangerouslySetInnerHTML={{__html: this.props.venue.description}} />
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

