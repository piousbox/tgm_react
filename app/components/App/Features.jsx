import React from 'react'

import { Grid, Row, Col,
         Panel,
} from 'react-bootstrap'

import { connect } from 'react-redux'
import { Link }    from 'react-router'

import AppRouter from './AppRouter'

class Features extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    // console.log('+++ +++ features props:', this.props, this.state)

    const perRowXs = 1
    const perRowMd = 2
    const perRowLg = 2

    let features = []
    let panel
    let panelStyle = { minHeight: '200px' }
    if (this.props.features) {
      this.props.features.forEach((f, idx) => {
        if (f.link_path) {
          panel = (
            <Panel style={panelStyle}>
              <h3><a href={f.link_path} >{ f.name }</a></h3>
              { f.photo_url ? <img src={f.photo_url} alt='' /> : null }
            </Panel>)
        } else if (f.reportname) {
          panel = (
            <Panel style={panelStyle}>
              <h3><Link to={AppRouter.reportLink(f.reportname)}  >{ f.name }</Link></h3>
              <img src={f.photo_url} alt={f.name} />
              <br />
              { f.subhead }
            </Panel>)
        } else if (f.galleryname) {
          panel = (
            <Panel style={panelStyle}>
              <h3><Link to={AppRouter.galleryPhotoLink(f.galleryname)}  >{ f.name }</Link></h3>
              <img src={f.photo_url} alt={f.name} />
              <br />
              { f.subhead }
            </Panel>)
        }
        features.push(<Col key={idx} md={12/perRowMd} lg={12/perRowLg} xs={12/perRowXs} >{ panel }</Col>)
      })
    }

    return (<Row>{ features }</Row>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(Features)

      
      
