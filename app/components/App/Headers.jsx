import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import TgmRouter   from './TgmRouter'
import Breadcrumbs from './Breadcrumbs'

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('+++ +++ Headers will receive props:', this.props, nextProps)
  }

  render () {
    // console.log('+++ +++ Headers render:', this.props, this.state)

    return(
      <div>
        <div className="header header-slim" style={{ zIndex: 2 }} >
          <Link to={TgmRouter.rootPath} >BJJCollective</Link>
        </div>
        <ul className="header" style={{ zIndex: 2 }} >
          <li><Link to="/tgm3">Quests</Link></li>
          <li><Link to="/tgm3/categories">Technique</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <div className="header-2" style={{ zIndex: 2 }} >
          <BjjcBreadcrumbs />
        </div>
      </div>
    )
  }
}

Headers.propTypes = {
}

const mapStateToProps = (store, ownprops) => {
  return {
    path: store.path,
  }
}

export default connect(mapStateToProps)(Headers)
