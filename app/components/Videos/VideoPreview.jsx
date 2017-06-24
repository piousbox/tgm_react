import React from 'react'
import { Link } from 'react-router'

class VideoPreview extends React.Component {
  render () {
    return(
      <div>
        <h3><Link to={`/en/videos/show/${this.props.video.youtube_id}`}>{ this.props.video.name }</Link></h3>
        <img src={`https://img.youtube.com/vi/${this.props.video.youtube_id}/0.jpg`} alt=''/>
      </div>
    )
  }
}

export default VideoPreview
