import React from 'react'

import VideoPreview from './VideoPreview'

class VideosIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    let videos = []
    if (this.props.videos) {
      this.props.videos.map((video, index) => {
        videos.push(<VideoPreview video={video} />)
      })
    }

    return (
      <div>
        { videos }
      </div>
    )
  }
}

export default VideosIndex
