import React from 'react'

import Breadcrumbs from './Breadcrumbs'
import FbConnect   from './FbConnect'
import Headers     from './Headers'
import Meta        from './Meta'
import Stars       from './Stars'
import Tgm3        from './Tgm3'
import AppRouter   from './AppRouter'

let docTitle = (g) => {
  return `${g} - The Moby Travel Guide`
}

class Center extends React.Component {
  render () {
    return (<div style={{ textAlign: 'center' }} >{ this.props.children }</div>)
  }
}

export default {
  Breadcrumbs,

  docTitle,

  FbConnect,

  Headers,

  Meta,

  Stars,

  Tgm3,
  TgmLink,
  AppRouter,
  
}
