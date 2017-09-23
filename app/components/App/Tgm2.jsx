import React from 'react'

import { Grid, Row, Col,
         Panel, 
} from 'react-bootstrap'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'

class Tgm2 extends React.Component {

  constructor(props) {
    super(props)
    this.state = { collapseState: 'left' };

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
          <a href="javascript:;">Home</a> &gt; <a href="#">City San Jose</a> &gt; <a href="#">Tag Dancing Salsa</a>
        </div>

        <div className={ `folder folder-both folder-collapse-${this.state.collapseState}` } >
          <div className="folder folder-left folder-half">
            { this.props.children }
            <div className="folder-ctrl">
              <a className='btn-left'  onClick={this.collapseLeft}  ><img  src={ arrowLeft }  alt='' /></a>
              <a className="btn-right" onClick={this.collapseRight} ><img src={ arrowRight } alt='' /></a>
            </div>
          </div>
          <div className="folder folder-right folder-half">
            right???
          </div>
        </div>
      </div>
    )
  }
}

export default Tgm2
