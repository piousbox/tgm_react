import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'
import { connect } from 'react-redux'

import { galleriesShow } from '../../actions'
import Center from '../Center'
import styles from './_Galleries.scss'

class GalleriesShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = { gallery: {} }
    this.props.dispatch(galleriesShow({ galleryname: props.params.galleryname }))
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, {photos: nextProps.gallery.photos }))
    document.title = nextProps.gallery.name
  }

  render () {
    // console.log("+++ +++ galleriesShow props:", this.props, this.state)

    let thumb_photos = []
    if (this.state.photos) {
      this.state.photos.forEach((photo, idx) => {
        thumb_photos.push(
          <span key={idx} >
            <img src={photo.thumb_url} alt='' />
          </span>)
      })
    }

    let large_photos = []
    if (this.state.photos) {
      this.state.photos.forEach((photo, idx) => {
        large_photos.push(
          <Panel key={idx} >
            <div className={ styles.largePhotos }>
              <img src={photo.large_url} alt='' />
            </div>
          </Panel>)
      })
    }
    
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h2><Center>{ this.props.gallery.name }</Center></h2>
            <div dangerouslySetInnerHTML={{__html: this.props.gallery.description}} />
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
