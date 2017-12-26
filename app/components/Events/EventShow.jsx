import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { eventAction } from '../../actions'

class EventShow extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(eventAction(props.params.eventname))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.eventname && this.props.params.eventname !== nextProps.params.eventname) {
      this.props.dispatch(eventAction(nextProps.params.eventname))
    }
  }

  render () {
    console.log('+++ +++ EventShow render:', this.props, this.state)
    if (!this.props.event) { return (null) }

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    event: state.event,
  }
}

export default connect(mapState)(EventShow)

