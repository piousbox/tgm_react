import React from 'react'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import { connect } from 'react-redux'

class Features extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    console.log('+++ +++ features props:', this.props)
    console.log('+++ +++ features state:', this.state)

    let features = []

    if (this.state.city && this.state.city.features) {
      this.state.city.features.forEach((f, idx) => {
        features.push(<Col key={idx} xs={12/this.props.nFeatures} >feature!</Col>)
      })
    }

    return (<Row>{ features }</Row>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(Features)

      
      
