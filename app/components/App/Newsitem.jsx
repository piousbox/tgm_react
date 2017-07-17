import React from 'react'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import Center from './../Center'
import styles from './_Newsitems.scss'

import TgmLink from './TgmLink'
import VideoPreview   from '../Videos/VideoPreview'

import Meta from '../Meta'

class Newsitem extends React.Component {
  render() {
    let newsitem = {}
    let photos = []
    let descr = []

    if (this.props.newsitem.item_type === 'video') {
      return (<VideoPreview video={ this.props.newsitem } />)
    }

    if (this.props.newsitem.photos) {
      this.props.newsitem.photos.forEach( (photo, idx) => {
        photos.push( <img src={ photo.thumb_url } alt='' /> )
      })
    }
    
    if (this.props.newsitem.descr) {
      descr = this.props.newsitem.descr
    }

    return (
      <Panel>
        <h3><TgmLink newsitem={ this.props.newsitem } /></h3>
        <Meta item={ this.props.newsitem } />
        { descr }
        { photos }
      </Panel>
    )
  }
}

export default Newsitem
