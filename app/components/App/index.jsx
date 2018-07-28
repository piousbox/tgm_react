import React from 'react'

import AppRouter   from './AppRouter'
import Breadcrumbs from './Breadcrumbs'
import FbConnect   from './FbConnect'
import Headers     from './Headers'
import Meta        from './Meta'
import Stars       from './Stars'
import Tgm3        from './Tgm3'
import Tgm4        from './Tgm4'

let docTitle = (g) => {
  return `${g} - The Moby Travel Guide`
}

class Center extends React.Component {
  render () {
    return (<div style={{ textAlign: 'center' }} >{ this.props.children }</div>)
  }
}

export {
  AppRouter,

  Breadcrumbs,

  docTitle,

  FbConnect,

  Headers,

  Meta,

  Stars,

  Tgm3,
  Tgm4,
}
