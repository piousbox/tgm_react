import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'
import { browserHistory } from 'react-router'

import config from 'config'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'
import arrowUp    from './images/16x16/arrow-top.png'
import arrowDown  from './images/16x16/arrow-bottom.png'

import { 
  GoogleMap, Marker, withGoogleMap,
} from 'react-google-maps'

import {
  citiesAction,
  cityAction,

  pathAction,
} from '../../actions'

import { CONST } from '../../constants'

import Breadcrumbs from './Breadcrumbs'
import FbConnect   from './FbConnect'
import Headers     from './Headers'
import TgmRouter   from './TgmRouter'
import WorldMap    from './WorldMap'

import { 
  CityMap, CitiesList, CityShow
} from '../Cities'
import {
  EventShow,
} from '../Events'
import Report2          from '../Reports/Reports2Show'
import { Videos }       from '../Videos'
import { VenueShow }    from '../Venues'

class Tgm3 extends React.Component {
  constructor(props) {
    super(props)
    // console.log('+++ +++ tgm3 constructor:', props)

    let nextState = { collapseState: 'center',
                      collapseFooter: 'up',
                      showLeft: CONST.worldMap, // map
                      showRight: CONST.news,
                      leftFolds: [ { key: CONST.worldMap, readable: 'Map' },
                                   { key: CONST.cityMap, readable: 'City Map' },
                                   { key: CONST.venueMap, readable: 'Venue Map' },
                                   { key: CONST.eventMap, readable: 'Event Map' },
                      ],
                      rightFolds: [
                        { key: CONST.news, readable: 'News' },
                        { key: CONST.cities, readable: 'Cities' },
                        { key: CONST.city, readable: 'City' }, 
                        { key: CONST.venue, readable: 'Venue' },
                        { key: CONST.eventShow, readable: 'Event' },
                      ],
    };

    this.state = nextState

    props.dispatch(pathAction(props.params))

    if (props.params.eventname) {
      nextState.showLeft = CONST.eventMap
      nextState.showRight = CONST.eventShow
    }

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
    // if (this.props.params.locationname) { this.props.dispatch(setLocation(this.props.params.locationname)) }
    // this.forceUpdate()
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

  componentWillReceiveProps (nextProps) {
    // console.log('+++ +++ Tgm3 willReceiveProps:', this.props, nextProps, this.state)

    if (nextProps.routeParams.venuename && nextProps.routeParams.venuename !== this.props.params.venuename) {
      console.log('+++ +++ set to render venue')
      this.setState({ showLeft: CONST.cityMap, showRight: CONST.venue })

    } else if (nextProps.routeParams.eventname && nextProps.routeParams.eventname !== this.props.params.eventname) {
        this.setState({ showLeft: CONST.eventMap, showRight: CONST.eventShow })
      
    } else if (nextProps.routeParams.cityname && nextProps.routeParams.cityname !== this.props.params.cityname) {
      console.log('+++ +++ set to render city')
      this.setState({ showLeft: CONST.cityMap, showRight: CONST.city })
    } else {
      // nothing!
      // set to render cities
      // this.setState({ showLeft: CONST.worldMap, showRight: CONST.cities })
    }
  }

  componentWillUpdate (nextProps) {
    // console.log('+++ +++ Tgm3 componentWillUpdate:', nextProps, this.props, this.state)
  }
  
  componentDidMount () { window.addEventListener('resize', this.onWindowResize) }
  componentWillUnmount () { window.removeEventListener('resize', this.onWindowResize) }

  showLeft (what) {
    this.setState({ showLeft: what })
    /* switch (what) {
      case 'chapters':
        browserHistory.push('/tgm3')
        // this.props.dispatch(setChapters())
        break
      default:
        // nothing
    } */
  }

  showRight (what) {
    this.setState({ showRight: what })
  }

  render () {
    // console.log('+++ +++ Tgm3 render:', this.props, this.state)
    
    let leftPane = (<div><Panel>default leftPane</Panel></div>)
    switch (this.state.showLeft) {
      case CONST.worldMap:
        leftPane = (<WorldMap />)
        break
      case CONST.cityMap:
      case CONST.venue:
        leftPane = (<CityMap params={this.props.params} />)
        break
      case CONST.eventMap:
        leftPane = (<CityMap params={this.props.params} />)
        break
      default:
        null
    }

    let rightPane = (<Panel>default rightPane</Panel>)
    switch (this.state.showRight) {
      case CONST.cities:
        rightPane=(<CitiesList />)
        break
      case CONST.city:
        rightPane=(<CityShow params={this.props.params} />)
        break
      case CONST.venue:
        rightPane=(<VenueShow params={this.props.params} />)
        break
      case CONST.eventShow:
        rightPane=(<EventShow params={this.props.params} />)
        break
      default:
        null
    }

    let leftFolds = []
    this.state.leftFolds.map((i, idx) => {
      leftFolds.push(<li style={{ cursor: 'pointer' }} key={idx} className={this.state.showLeft === i.key ? 'active' : ''}>
              <a href="#" onClick={(e) => { e.preventDefault(); this.showLeft(i.key) }}>{i.readable}</a></li>)
    })
      
    let rightFolds = []
    this.state.rightFolds.map((i, idx) => {
      rightFolds.push(<li key={idx} className={this.state.showRight === i.key ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); this.showRight(i.key) }}>{i.readable}</a></li>)
    })

    return(
      <div className="container">
        <Headers />

        <div className={ `folder folder-both folder-collapse-${this.state.collapseState} footer-${this.state.collapseFooter}` } >
          <div className="folder folder-left folder-half">
            <ul className="nav nav-tabs">
              { leftFolds }
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content">
                <div className="tab-pane active" id="leftPane" style={{ overflow: 'hidden' }} >
                  { leftPane }
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
              { rightFolds }
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content" >
                <div className="tab-pane active" style={{ overflowY: 'auto', overflowX: 'hidden' }} >
                  { rightPane }
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

Tgm3.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    cities: state.cities,
    city: state.city,

    leftPane: state.leftPane,

    path: state.path,
    profile: state.profile,

    rightPane: state.rightPane,

    videos: state.videos,
  }
}

export default connect(mapStateToProps)(Tgm3)
