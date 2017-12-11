import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

import { tagsAction } from '../../actions'
import { TgmRouter } from '../App'

class TagsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(tagsAction())
  }

  render () {
    console.log('+++ +++ TagsIndex:', this.props, this.state)

    let tags = []
    this.props.tags.map((tag, index) => {
      tags.push(<li key={index} ><Link to={TgmRouter.tagLink(tag.name_seo)}>{tag.name}</Link></li>)
    })

    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <h5>Tags</h5>
            <ul>{ tags }</ul>
          </Col>
          <Col xs={12} md={6}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.tags,
  }
}

export default connect(mapStateToProps)(TagsIndex)
