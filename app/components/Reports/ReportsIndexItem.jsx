import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

import { reportsShow } from '../../actions'

import Leaderboard from '../App/Leaderboard'
import LargeSquare from '../App/LargeSquare'

class ReportsIndexItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      report: {}
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  render () {
    console.log('+++ +++ render ReportsIndexItem:', this.props)

    return (
      <Panel>
        { this.props.report.name }
      </Panel>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // reports: state.reports,
  }
}

export default connect(mapStateToProps)(ReportsIndexItem)

