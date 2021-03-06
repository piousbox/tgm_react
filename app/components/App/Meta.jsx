import React from 'react'

import { Link } from 'react-router'

import AppRouter from './AppRouter'

class Meta extends React.Component {

  render () {
    // console.log("+++ +++ Meta render:", this.props, this.state)

    return (
      <div>
        { /* this.props.item.cityname ? <span>&nbsp;In city <Link to={AppRouter.cityLink(this.props.item.cityname)} >{this.props.item.cityname}</Link></span> : null */ }
        { /* this.props.item.tagname ? <span>&nbsp;Tag <Link to={AppRouter.tagLink(this.props.item.tagname)} >{this.props.item.tagname}</Link></span> : null */ }
        &nbsp;On <u>{this.props.item.created_at}</u>
        &nbsp;By <u>{this.props.item.username}</u>
      </div>
    )
  }
}

export default Meta
