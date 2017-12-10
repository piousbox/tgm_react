import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'
import { docTitle } from '../App'

import { venuesShow } from '../../actions'

class VenuesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      venues: {},
      venue: {},
    }
    this.props.dispatch(venuesShow({ venuename: props.params.venuename }))

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ venuesShow received props:", nextProps)

    this.setState(Object.assign({}, this.state, {venue: nextProps.venue }))
  }

  componentDidMount() {
    if (this.state.venue) {
      document.title = docTitle(`${this.props.venue.name} - in ${this.props.params.cityname}`)
    }
  }

  render () {
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

VenuesShow.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    venue: state.venue,
  }
}

export default connect(mapStateToProps)(VenuesShow)

