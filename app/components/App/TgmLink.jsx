
import React from 'react'
import { Link } from 'react-router'
import TgmRouter from './TgmRouter'

class TgmLink extends React.Component {
  render () {
    if (this.props.newsitem) {
      switch (this.props.newsitem.item_type) {
        case 'gallery':
          return (<Link to={ TgmRouter.galleriesShowLink(this.props.newsitem.galleryname) }>{ this.props.newsitem.name }</Link>)
        case 'report':
          return (<Link to={ TgmRouter.reportsShowLink(this.props.newsitem.reportname) }>{ this.props.newsitem.name }</Link>)
        default:
          return(<div>info not provided</div>)
      }
    } else {
      return (
        <div>Default TgmLink - info not provided</div>
      )
    }
  }
}

export default TgmLink
