import React from 'react'

import AppRouter   from './AppRouter'
import FbConnect   from './FbConnect'
import Headers     from './Headers'
import Meta        from './Meta'
import Stars       from './Stars'

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

  docTitle,

  FbConnect,

  Headers,

  Meta,

  Stars,
}
