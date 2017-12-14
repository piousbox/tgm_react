import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import Center from './../Center'
import styles from './_Newsitems.scss'

import { VideoEmbed, VideoPreview } from '../Videos'

import { Meta, TgmLink } from '../App'

class Newsitem extends React.Component {
  render() {
    // console.log('+++ +++ Newsitem props:', this.props, this.state)

    let newsitem = {}

    if (this.props.newsitem.item_type === 'video') {
      if (this.props.site.play_videos_in_preview) {
        return (<VideoEmbed video={ this.props.newsitem } />)
      } else {
        return (<VideoPreview video={ this.props.newsitem } />)
      }
    }

    let photos = []
    let onePhoto = null
    if (this.props.newsitem.item_type === 'gallery') {
      if (this.props.newsitem.photos) {
        this.props.newsitem.photos.forEach( (photo, idx) => {
          photos.push(<img key={idx} src={ photo.thumb_url } alt='' />)
        })
      }
    } else if (this.props.newsitem.item_type === 'photo') {
      photos.push(<img src={ this.props.newsitem.photos[0].large_url } style={{ width: '100%' }} alt='' />)
    } else if (this.props.newsitem.item_type === 'report') {
      onePhoto = (<img src={ this.props.newsitem.photo_url }
                       style={{ width: '100px', float: 'left', padding: '5px' }} alt='' />)
    }
    
    let descr
    if (this.props.newsitem.descr) {
      descr = (<div dangerouslySetInnerHTML={{ __html: this.props.newsitem.descr }} />)
    }

    return (
      <Panel>
        <h3><TgmLink newsitem={ this.props.newsitem } /></h3>
        <Meta item={ this.props.newsitem } />
        { onePhoto }
        { descr }
        { photos }
        <div style={{ clear: 'both' }} />
      </Panel>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    site: state.site,
  }
}

export default connect(mapStateToProps)(Newsitem)
