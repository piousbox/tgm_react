import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'
import arrowUp    from './images/16x16/arrow-top.png'
import arrowDown  from './images/16x16/arrow-bottom.png'

import { 
  GoogleMap, Marker, withGoogleMap,
} from 'react-google-maps'

import { CONST } from '../../constants'

import AppRouter   from './AppRouter'
import FbConnect   from './FbConnect'
import Headers     from './Headers'

class Tgm4 extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ tgm4 constructor:', props)

    let nextState = {
      collapseState: 'center',
      collapseFooter: 'up',
    }

    this.state = nextState

    this.collapseLeft              = this.collapseLeft.bind(this)
    this.collapseRight             = this.collapseRight.bind(this)
    this.collapseUp                = this.collapseUp.bind(this)
    this.collapseDown              = this.collapseDown.bind(this)
    this.showLeft                  = this.showLeft.bind(this)
    this.showRight                 = this.showRight.bind(this)
    this.onWindowResize            = this.onWindowResize.bind(this)
    this.rerender                  = this.rerender.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate       = this.componentWillUpdate.bind(this)
  }
  
  onWindowResize () {
    if (this.props.params.locationname) { this.props.dispatch(setLocation(this.props.params.locationname)) }
  }

  rerender () {
    this.forceUpdate()
  }

  collapseLeft () {
    if (this.state.collapseState === 'left') {
      /* nothing */
    } else if (this.state.collapseState === 'center') {
      this.setState({ collapseState: 'left' })
    } else if (this.state.collapseState === 'right') {
      this.setState({ collapseState: 'center' })
    }
    this.rerender()
  }

  collapseRight () {
    if (this.state.collapseState === 'right') {
      /* nothing */
    } else if (this.state.collapseState === 'center') {
      this.setState({ collapseState: 'right' })
    } else if (this.state.collapseState === 'left') {
      this.setState({ collapseState: 'center' })
    }
    this.rerender()
  }

  collapseUp () {
    if (this.state.collapseFooter === 'up') {
      // nothing
    } else if (this.state.collapseFooter === 'down') {
      this.setState({ collapseFooter: 'up' })
    }
    this.rerender()
  }

  collapseDown () {
    if (this.state.collapseFooter === 'down') {
      // nothing
    } else if (this.state.collapseFooter === 'up') {
      this.setState({ collapseFooter: 'down' })
    }
    this.rerender()
  }

  componentWillReceiveProps (nextProps) {}

  componentWillUpdate (nextProps) {}
  
  componentDidMount () { window.addEventListener('resize', this.onWindowResize) }
  componentWillUnmount () { window.removeEventListener('resize', this.onWindowResize) }

  showLeft (what) {
    this.setState({ showLeft: what })
  }

  showRight (what) {
    this.setState({ showRight: what })
  }

  render () {
    console.log('+++ +++ Tgm4 render:', this.props, this.state)
    
    let leftTabs = []
    this.props.leftTabs.map((i, idx) => {
      leftTabs.push(
        <li style={{ cursor: 'pointer' }} key={idx} className={this.state.showLeft === i.key ? 'active' : ''}>
          <Link to={i.path}>{i.readable}</Link>
        </li>)
    })
      
    let rightTabs = []
    this.props.rightTabs.map((i, idx) => {
      rightTabs.push(<li key={idx} className={this.state.showRight === i.key ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); this.showRight(i.key) }}>{i.readable}</a></li>)
    })

    return(
      <div className="container">
        { /* <Headers /> */ }

        <div className={ `folder folder-both folder-collapse-${this.state.collapseState} footer-${this.state.collapseFooter}` } >
          <div className="folder folder-left folder-half">
            <ul className="nav nav-tabs">
              { leftTabs }
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content">
                <div className="tab-pane active" id="leftPane" style={{ overflow: 'hidden' }} >
                  <this.props.leftPane />
                </div>
              </div>
            </div>
            <div className="folder-ctrl">
              <a className='btn-left'  onClick={this.collapseLeft}  ><img src={ arrowLeft }  alt='' /></a>
              <a className="btn-right" onClick={this.collapseRight} ><img src={ arrowRight } alt='' /></a>
            </div>
          </div>
          <div className="folder folder-right folder-half">
            <ul className="nav nav-tabs">
              { rightTabs }
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content" >
                <div className="tab-pane active" style={{ overflowY: 'auto', overflowX: 'hidden' }} >
                  <this.props.rightPane />
                </div>
              </div>
            </div>
          </div>
          <div className="folder-footer">
            <div className="folder-footer-ctrl">
              <a className="btn-up"   onClick={this.collapseUp}   ><img src={ arrowUp }   alt='' /></a>
              <a className="btn-down" onClick={this.collapseDown} ><img src={ arrowDown } alt='' /></a>
            </div>            
            <div className="folder-footer-content">
              <FbConnect />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Tgm4.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    path: state.path,
  }
}

export default connect(mapStateToProps)(Tgm4)
