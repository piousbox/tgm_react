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

    if (this.props.newsitem.item_type === 'video') {
      return (<VideoPreview video={ this.props.newsitem } />)
    }

    let photos = []
    if (this.props.newsitem.item_type === 'gallery') {
      if (this.props.newsitem.photos) {
        this.props.newsitem.photos.forEach( (photo, idx) => {
          photos.push(<img key={idx} src={ photo.thumb_url } alt='' />)
        })
      }
    } else if (this.props.newsitem.item_type === 'photo') {
      photos.push(<img src={ this.props.newsitem.photos[0].large_url } style={{ width: '100%' }} alt='' />)
    }
    
    let descr = []
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
