import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

import { tagAction } from '../../actions'

import { VideosIndex } from '../Videos'

class TagShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(tagAction(this.props.params.tagname))

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ tagShow will receive props')
    if (nextProps.params.tagname !== this.props.params.tagname) {
      this.props.dispatch(tagAction(nextProps.params.tagname))
    }
  }

  componentWillUpdate () {
    // console.log('+++ tagShow will update')
  }

  render () {
    console.log('+++ tag show:', this.props, this.state)

    return (
      <div>
        { this.props.tag ? <h5>Tag {this.props.tag.name}</h5> : null }
        { this.props.tag ? <VideosIndex videos={this.props.tag.videos} /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tag: state.tag,
  }
}

export default connect(mapStateToProps)(TagShow)
