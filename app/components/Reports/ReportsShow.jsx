import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'

class ReportsShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      report: {}
    }
  }

  componentDidMount() {
    let name = this.props.params.reportName
    fetch(config.apiUrl + `/en/reports/view/${name}.json`).then(r => r.json()).then(data => {
      this.setState({ report: data })
    })
  }

  render () {
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
            <div dangerouslySetInnerHTML={{__html: this.state.report.descr}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ReportsShow

