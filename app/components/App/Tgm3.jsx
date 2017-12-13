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

  setPath,
} from '../../actions'

import { CONST } from '../../constants'

import Breadcrumbs from './Breadcrumbs'
import FbConnect from './FbConnect'
import Headers from './Headers'
import TgmRouter from './TgmRouter'

import Report2          from '../Reports/Reports2Show'
import { Videos }       from '../Videos'

const MyMapComponent = withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={1}
               defaultCenter={{ lat: -34.397, lng: 150.644 }} >
      { props.children }
    </GoogleMap>)
})

const CityMap = withGoogleMap((props) => {
  return (
    <GoogleMap defaultZoom={4}
               defaultCenter={{ lat: 30, lng: 100 }}>
      { props.children }
    </GoogleMap>)
})

class Tgm3 extends React.Component {
  constructor(props) {
    super(props)

    let nextState = { collapseState: 'center',
                      collapseFooter: 'up',
                      showLeft: CONST.map, // map
                      showRight: CONST.cities,
                      leftFolds: [ {key: CONST.map, readable: 'Map' },
                                   {key: CONST.cityMap, readable: 'City Map'}, ],
                      rightFolds: [ { key: CONST.cities, readable: 'Cities' },
                                    { key: CONST.news, readable: 'News' }, ],
    };

    if (this.props.params.cityname) {
      props.dispatch(cityAction(this.props.params.cityname))
    } else {
      props.dispatch(citiesAction())
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
    this.componentWillReceiveProps = this.componentWillReceiveProps(this)
  }
  
  onWindowResize () {
    if (this.props.params.locationname) { this.props.dispatch(setLocation(this.props.params.locationname)) }
  }

  rerender () {
    if (this.props.params.locationname) { this.props.dispatch(setLocation(this.props.params.locationname)) }
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
    // console.log('+++ +++ Tgm3 will receive props:', this.props, nextProps)    
    this.props.dispatch(setPath(nextProps.props.params))
    if (nextProps.props.params.locationname && this.props.params.locationname !== nextProps.props.params.locationname) {
      this.props.dispatch(setLocation(nextProps.params.locationname))
    }
  }

  componentWillUpdate (nextProps) {
    // console.log('+++ +++ Tgm3 componentWillUpdate:', this.props, nextProps, this.state)
    let nextState = { leftFolds: this.state.leftFolds, rightFolds: this.state.rightFolds }

    // badge
    if (nextProps.params.badgename && nextProps.params.badgename !== this.props.params.badgename) {
      [ CONST.quest, CONST.videos ].map((elem) => {
        if (this.state.rightFolds.indexOf(elem) === -1) {
          nextState.rightFolds.push( elem )
        }
      })
      if (this.state.leftFolds.indexOf(CONST.location) === -1) {
        nextState.leftFolds.push(CONST.location)
      }
      this.setState(Object.assign({}, nextState, {showLeft: CONST.chapter, showRight: CONST.quest }))
      this.props.dispatch(setLocation(nextProps.params.locationname))
      this.props.dispatch(setBadge(nextProps.params.badgename))

    // location
    } else if (nextProps.params.locationname && nextProps.params.locationname !== this.props.params.locationname) {
      this.props.dispatch(setLocation(nextProps.params.locationname))
      this.state.showLeft = CONST.location
      if (this.state.leftFolds.indexOf(CONST.location) === -1) {
        this.state.leftFolds.push( CONST.location )
      }

    // chapter
    } else if (nextProps.params.chaptername && nextProps.params.chaptername !== this.props.params.chaptername) {
      this.setState({ showLeft: CONST.chapter })
      this.props.dispatch(setChapter(nextProps.params.chaptername))
      if (this.state.leftFolds.indexOf(CONST.chapter) === -1) {
        this.state.leftFolds.push(CONST.chapter)
      }
    }
  }
  
  componentDidMount () { window.addEventListener('resize', this.onWindowResize) }
  componentWillUnmount () { window.removeEventListener('resize', this.onWindowResize) }

  showLeft (what) {
    this.setState({ showLeft: what })
    switch (what) {
      case 'chapters':
        browserHistory.push('/tgm3')
        // this.props.dispatch(setChapters())
        break
      default:
        // nothing
    }
  }

  showRight (what) {
    this.setState({ showRight: what })
  }

  render () {
    console.log('+++ +++ Tgm3 render:', this.props, this.state)
    
    let citiesMarkers = []
    let citiesList = []
    if (this.props.cities) {
      this.props.cities.map((city, index) => {
        citiesList.push(<li><Link to={TgmRouter.cityLink(city)}>{city.name}</Link></li>)
        if (city.x && city.y) {
          citiesMarkers.push(<Marker position={{ lat: city.x, lng: city.y }} />)
        }
      })
    }

    let leftPane = (<div><Panel>default leftPane</Panel></div>)
    switch (this.state.showLeft) {
      case CONST.map:
        // HEREHERE
        leftPane = (
          <MyMapComponent mapElement={<div style={{ height: '100%' }} />} 
                          loadingElement={<div style={{ height: '100%' }} />} 
                          containerElement={<div style={{ height: '100%' }} />} >
            { citiesMarkers }
          </MyMapComponent>)
        break
      case CONST.cityMap:
        leftPane = (<CityMap city={this.props.city} />)
        break
      default:
        if (this.props.blocation && this.props.blocation) {
          // console.log('+++ rendering this blocation:', this.props.blocation)
          leftPane = (<LocationShow location={this.props.blocation} />)
        }
    }

    let rightPane = (<Panel>default rightPane</Panel>)
    switch (this.state.showRight) {
      case CONST.cities:
        // HEREHERE
        rightPane = (<Panel>
            <h5>Cities</h5>
            <ul>{ citiesList }</ul>
        </Panel>)
        break
      default:
        // nothing
    }

    let leftFolds = []
    this.state.leftFolds.map((i, idx) => {
      leftFolds.push(<li style={{ cursor: 'pointer' }} key={idx} className={this.state.showLeft === i.key ? 'active' : ''}>
              <a onClick={() => { this.showLeft(i.key) }}>{i.readable}</a></li>)
    })
      
    let rightFolds = []
    this.state.rightFolds.map((i, idx) => {
      rightFolds.push(<li key={idx} className={this.state.showRight === i.key ? 'active' : ''}>
                <a href="javascript:;" onClick={() => { this.showRight(i.key) }}>{i.readable}</a></li>)
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
              { /* <FbConnect /> */ }
              fb connect and stuff
            </div>
          </div>
        </div>
        { /* <div style={{ display: 'none' }}>{ this.props.children }</div> */ }
      </div>
    )
  }
}

Tgm3.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    badge: state.badge,
    blocation: state.blocation, // b to not conflict, but this is actually a location... badge is a location.

    chapter: state.chapter,
    chapters: state.chapters,
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
