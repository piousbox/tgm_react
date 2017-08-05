import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

// import { reportsShow } from '../../actions'

import Leaderboard from '../App/Leaderboard'
import LargeSquare from '../App/LargeSquare'

class ReportsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      reports: []
    }
    // this.props.dispatch(reportsShow({ reportname: props.params.reportname }))
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ reportsIndex received props:", nextProps)

    this.setState(Object.assign({}, this.state, {report: nextProps.report }))
  }

  render () {
    console.log('+++ +++ render ReportsIndex:', this.props)

    return (
      <Grid>
        <Row>
          Reports, pls?
        </Row>
      </Grid>
    )
  }
}

ReportsIndex.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    reports: state.reports,
  }
}

export default connect(mapStateToProps)(ReportsIndex)

