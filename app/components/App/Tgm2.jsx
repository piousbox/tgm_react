import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'

import Report2 from '../Reports/Reports2Show'

class Tgm2 extends React.Component {

  constructor(props) {
    super(props)
    this.state = { collapseState: 'right',
    };

    this.collapseLeft = this.collapseLeft.bind(this)
    this.collapseRight = this.collapseRight.bind(this)
  }
  
  collapseLeft () {
    if (this.state.collapseState === 'left') {
      /* nothing */
    } else if (this.state.collapseState === 'center') {
      this.setState({ collapseState: 'left' })
    } else if (this.state.collapseState === 'right') {
      this.setState({ collapseState: 'center' })
    }
  }

  collapseRight () {
    if (this.state.collapseState === 'right') {
      /* nothing */
    } else if (this.state.collapseState === 'center') {
      this.setState({ collapseState: 'right' })
    } else if (this.state.collapseState === 'left') {
      this.setState({ collapseState: 'center' })
    }
  }

  render () {
    console.log('+++ tgm2:', this.props, this.state)

    let leftPane = null
    if (this.props.leftPane) {
      if (this.props.leftPane.modelName === 'Report') {
        leftPane = <Report2 report={this.props.leftPane} />
      }
    }
    
    return(
      <div className="container">
        
        <div className="header header-slim">
          <a href="#">T.G.M</a>
        </div>
        <ul className="header" >
          <li><a href="#">Cities</a></li>
          <li><a href="#">Tags</a></li>
          <li><a href="#">News</a></li>
        </ul>
        
        <div className="header-2">
          <a href="javascript:;">Home</a> &gt; <a href="#">Tags</a> &gt; <a href="#">Dancing</a> &gt; <a href="#">Salsa</a>
        </div>

        <div className={ `folder folder-both folder-collapse-${this.state.collapseState}` } >
          <div className="folder folder-left folder-half">
            <ul className="nav nav-tabs">
              <li className=""><a href="#web-design-6" data-toggle="tab" aria-expanded="false">Map</a></li>
              <li className="active"><a href="#graphic-design-6" data-toggle="tab" aria-expanded="false"><span className="title-head">News</span></a></li>
              <li className=""><a href="#developement-6" data-toggle="tab" aria-expanded="false"><span className="title-head">People</span></a></li>
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content">
                <div className="tab-pane active" id="web-design-6">
                  { leftPane }
                </div>
              </div>
            </div>
            <div className="folder-ctrl">
              <a className='btn-left'  onClick={this.collapseLeft}  ><img  src={ arrowLeft }  alt='' /></a>
              <a className="btn-right" onClick={this.collapseRight} ><img src={ arrowRight } alt='' /></a>
            </div>
          </div>
          <div className="folder folder-right folder-half">
            <ul className="nav nav-tabs">
              <li className="active"><a href="javascript:;">Venues</a></li>
              <li className=""><a href="#graphic-design-6" data-toggle="tab" aria-expanded="false"><span className="title-head">News</span></a></li>
              <li className=""><a href="#developement-6" data-toggle="tab" aria-expanded="false"><span className="title-head">People</span></a></li>
            </ul>
            <div className="tab-wrapper">
              <div className="tab-content">
                <div className="tab-pane active">
                  { this.state.rightPane }
                  <Panel>
                    <h5>{"Alberto's"}</h5>
                    <p>{"I guess it's quite popular and also there are a lot of good dancers regularing that place. Would recommend, if there is no problem with me coming in there the next time, which will be when?"}</p>
                  </Panel>
                  <Panel>
                    <h5>Santa Clara Dance Studio</h5>
                    <p>That&apos;s fridays. I've never been there, and will post a review as soon as I go there to check it out.</p>
                  </Panel>
                  <Panel>
                    <h5>Palomar Ballroom</h5>
                    <p>It&apos;s a bit far from where I live, but Santa Cruz is nice (relatively, with sidenotes) and the population that goes to that ballroom is quite nice.</p>
                  </Panel>
                  <Panel>
                    <h5>Agenda Salsa</h5>
                    <p>That&apos;s Wednesdays, which is nice b/c it&apos;s not on Friday. The instruction is so-so, but you can still meet nice people and have fun there.</p>
                  </Panel>
                  <Panel>
                    <h5>The Starlite Ballroom</h5>
                    <p>Sundays, let&apos;s check it out. Terrible calendar infographic. Cannot be worse I think. Impossible to read. But hey, if the ballroom is okay, I&apos;m in.</p>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Tgm2.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    leftPane: state.leftPane,
    rightPane: state.rightPane,
  }
}

export default connect(mapStateToProps)(Tgm2)
