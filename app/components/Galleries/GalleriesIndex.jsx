import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Grid, Row, Col,
         Panel,
 } from 'react-bootstrap'

import config from 'config'
import Center from '../Center'
import { galleriesIndex } from '../../actions'
import GalleriesIndexItem from './GalleriesIndexItem'

class GalleriesIndex extends React.Component {

  constructor(props) {
    super(props)
    console.log('+++ +++ GalleriesIndex constructor:', props)

    this.state = {
      galleries: props.galleries,
    }
    props.dispatch(galleriesIndex({ cityname: props.params.cityname }))
  }

  componentWillReceiveProps(nextProps) {
    console.log("+++ +++ galleriesIndex will receive props:", nextProps, this.props)
    this.setState(Object.assign({}, this.state, {galleries: nextProps.galleries }))
  }

  render () {
    console.log('+++ +++ GalleriesIndex render:', this.props, this.state)

    let galleries = []
    if (this.state.galleries) {
      this.state.galleries.forEach((n, idx) => {
        galleries.push(<GalleriesIndexItem key={idx} gallery={n} />)
      })
    }

    return (
      <div>
        { galleries }
      </div>
    )
  }
}

GalleriesIndex.propTypes = {
  params: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    galleries: state.city.galleries,
  }
}

export default connect(mapStateToProps)(GalleriesIndex)

