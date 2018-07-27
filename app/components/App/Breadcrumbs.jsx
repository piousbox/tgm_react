import React from 'react'
import { Link }    from 'react-router'
import { connect } from 'react-redux'

import AppRouter from './AppRouter'

class Breadcrumbs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    // console.log('+++ +++ Breadcrumbs will receive props:', this.props, nextProps)
  }

  render () {
    // if (!this.props.path) { return(<span />) }
    // console.log('+++ +++ Breadcrumbs render:', this.props, this.state)

    let links = []
    let key = 0
    links.push(<Link key={key++} to={ AppRouter.rootPath }><i className="fa fa-2x fa-home" /></Link>)
    links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)

    if (this.props.path.locationname) {
      links.push(<span key={key++} >Locations</span>)
      links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)
      
      links.push(<Link key={key++} to={ AppRouter.locationLink(this.props.path.locationname) }>{ this.props.path.locationname }</Link>)
      if (this.props.path.badgename) {
        links.push(<span key={key++} >&nbsp;&gt;&nbsp;</span>)
        links.push(<Link key={key++} to={ AppRouter.locationBadgeLink(this.props.path.locationname, this.props.path.badgename) }>{ this.props.path.badgename }</Link>)
      }
    }

    if (this.props.path === '/categories') {
      links.push(<Link key={key++} to={ AppRouter.categoryLink({path: ''})}>Categories</Link>)
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
