
import React from 'react'
import { Link } from 'react-router'
import TgmRouter from './TgmRouter'

class TgmLink extends React.Component {
  render () {
    if (this.props.newsitem) {
      return (        
        <Link to={ TgmRouter.galleriesShowLink(this.props.newsitem.galleryname) }>{ this.props.newsitem.name }</Link>
      )
    } else {
      return (
        <div>Default TgmLink - info not provided</div>
      )
    }
  }
}

export default TgmLink
