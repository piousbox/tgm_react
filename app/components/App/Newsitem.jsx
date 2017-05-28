import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Center from './../Center'
import styles from './_Newsitems.scss'

import TgmLink from './TgmLink'

class Newsitem extends React.Component {
  render() {
    let newsitem = {}
    let photos = []

    if (this.props.newsitem.photos) {
      this.props.newsitem.photos.forEach( (photo, idx) => {
        photos.push( <img src={ photo.thumb_url } alt='' /> )
      })
    }

    return (
      <div>
        <p><TgmLink newsitem={ this.props.newsitem } /></p>
        { photos }
      </div>
    )
  }
}

export default Newsitem
