import React from 'react'

import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'

class Tgm2 extends React.Component {

  constructor(props) {
    super(props)
    this.state = { collapseState: 'right' };

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
                <div className="tab-pane" id="web-design-6">
                  <p className="m-b0">Web design <a href="#">lorem ipsum</a> dolor sit amet, consectetuer adipiscing elit.
                    Praesent mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                </div>
                <div className="tab-pane" id="graphic-design-6">
                  <p className="m-b0"><strong><em>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</em></strong><br />
                    Praesent Suspendisse 
                    et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                </div>
                <div className="tab-pane active" id="developement-6">
                  <Row>
                    <Col sm={6}>
                      <p className="m-b0">Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit. Commyolk Suspendisse et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue aliquam ornare augue.</p>
                    </Col>
                    <Col sm={6}>
                      abba?
                    </Col>
                  </Row>
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
                <div className="tab-pane" id="web-design-6">
                  { this.props.children }
                </div>
                <div className="tab-pane" id="graphic-design-6">
                  <p className="m-b0"><strong><em>Graphic Design lorem ipsum dolor sit amet, consectetuer adipiscing elit.</em></strong><br />
                    Praesent Suspendisse 
                    et justo. mattis commyolk augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                </div>
                <div className="tab-pane active" id="developement-6">
                  <Panel>abba?</Panel>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                  <p className="m-b0">
                    Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tgm2
