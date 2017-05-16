import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'

import { galleriesShow } from '../../actions'

import Center from '../Center'

class GalleriesShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gallery: {} }
    this.props.dispatch(galleriesShow({ galleryname: props.params.galleryname }))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, photos: nextProps.gallery.photos })
  }

  render () {
    console.log("+++ +++ galleriesShow props:", this.props)
    console.log("+++ +++ galleriesShow state:", this.state)

    let thumb_photos = []
    if (this.state.photos) {
      this.state.photos.forEach((photo, idx) => {
        thumb_photos.push(
          <span>
            <img src={photo.thumb_url} alt='' />
          </span>)
      })
    }

    let large_photos = []
    if (this.state.photos) {
      this.state.photos.forEach((photo, idx) => {
        large_photos.push(
          <div>
            <img src={photo.large_url} alt='' />
            <br /><br />
          </div>)
      })
    }
    
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><Center>{ this.props.gallery.name }</Center></h2>
            { thumb_photos }
            <hr />
            <Center>
              { large_photos }
            </Center>
          </Col>
        </Row>
      </Grid>
    )
  }
}

GalleriesShow.propTypes = {
}

const mapStateToProps = (state, ownprops) => {
  return {
    gallery: state.gallery,
  }
}

export default connect(mapStateToProps)(GalleriesShow)
