import React from 'react'
import { Link } from 'react-router'
import { Panel } from 'react-bootstrap'
import { Center } from '../App'
import Meta from '../Meta'

class VideoEmbed extends React.Component {
  render () {
    return(
      <Panel>
        <Center>
          <h3><Link to={`/en/videos/show/${this.props.video.youtube_id}`}>{ this.props.video.name }</Link></h3>
          <Meta item={this.props.video } />
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video.youtube_id}`} frameBorder="0" allowFullScreen></iframe>
        </Center>
      </Panel>
    )
  }
}

export default VideoEmbed
