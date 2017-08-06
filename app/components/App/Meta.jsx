import React from 'react'

import Center from '../Center'

import { Link } from 'react-router'

import TgmRouter from './TgmRouter'

class Meta extends React.Component {

  render () {
    console.log("+++ +++ meta:", this.props)

    return (
      <div>
        In city <Link to={TgmRouter.cityLink(this.props.item.cityname)} >{this.props.item.cityname}</Link>
      </div>
    )
  }
}

export default Meta
