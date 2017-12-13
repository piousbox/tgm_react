
import Breadcrumbs from './Breadcrumbs'
import Clearfix    from './Clearfix'
import FbConnect   from './FbConnect'
import Headers     from './Headers'
import Meta        from './Meta'
import Tgm2        from './Tgm2'
import Tgm3        from './Tgm3'
import TgmLink     from './TgmLink'
import TgmRouter   from './TgmRouter'

const docTitle = (g) => {
  return `${g} - The Moby Travel Guide`
}

export default {

  Breadcrumbs,

  Clearfix,

  docTitle,
  documentTitle: docTitle,

  FbConnect,

  Headers,

  Meta,

  Tgm2,
  Tgm3,
  TgmLink,
  TgmRouter,
  
}
