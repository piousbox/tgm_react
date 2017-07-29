import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

import { reportsShow } from '../../actions'

class ReportsShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      report: {}
    }
    this.props.dispatch(reportsShow({ reportname: props.params.reportname }))
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ reportsShow received props:", nextProps)

    this.setState(Object.assign({}, this.state, {report: nextProps.report }))
  }

  render () {
    console.log('+++ +++ render ReportsShow:', this.props)

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Center>
              <h1>{ this.state.report.name }</h1>
            </Center>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={2}>
            <div dangerouslySetInnerHTML={{__html: this.state.report.description}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

ReportsShow.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    report: state.report,
  }
}

export default connect(mapStateToProps)(ReportsShow)

