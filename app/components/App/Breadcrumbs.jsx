import React from 'react'
import { Link }    from 'react-router'
import { connect } from 'react-redux'

import TgmRouter from './TgmRouter'

class Breadcrumbs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    console.log('+++ +++ Breadcrumbs will receive props:', this.props, nextProps)
  }

  render () {
    console.log('+++ +++ Breadcrumbs render:', this.props, this.state)
    // if (!this.props.path) { return(<span />) }

    let links = []
    let key = 0
    links.push(<Link key={key++} to={ TgmRouter.rootPath }><i className="fa fa-2x fa-home" /></Link>)
    links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)

    if (this.props.path.locationname) {
      links.push(<span key={key++} >Locations</span>)
      links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)
      
      links.push(<Link key={key++} to={ TgmRouter.locationLink(this.props.path.locationname) }>{ this.props.path.locationname }</Link>)
      if (this.props.path.badgename) {
        links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)
        links.push(<Link key={key++} to={ TgmRouter.locationBadgeLink(this.props.path.locationname, this.props.path.badgename) }>{ this.props.path.badgename }</Link>)
      }
    }

    if (this.props.path === '/categories') {
      links.push(<Link key={key++} to={ TgmRouter.categoryLink({path: ''})}>Categories</Link>)
    }

    return (<div>{ links }</div>)
  }
}

Breadcrumbs.propTypes = {
}

const mapStateToProps = (store, ownprops) => {
  return {
    path: store.path,
  }
}

export default connect(mapStateToProps)(Breadcrumbs)
