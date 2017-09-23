import React from 'react'

import arrowLeft  from './images/16x16/arrow-left.png'
import arrowRight from './images/16x16/arrow-right.png'

class Tgm2Home extends React.Component {

  render () {
    return( 
      <div className="folder folder-left folder-half">
        <ul className="nav nav-tabs">
          <li className="active"><a href="#web-design-6" data-toggle="tab" aria-expanded="false">Map</a></li>
          <li className=""><a href="#graphic-design-6" data-toggle="tab" aria-expanded="false"><span className="title-head">News</span></a></li>
          <li className=""><a href="#developement-6" data-toggle="tab" aria-expanded="false"><span className="title-head">People</span></a></li>
        </ul>
        <div className="tab-wrapper">
          <div className="tab-content">
            <div className="tab-pane" id="web-design-6">
              A
            </div>
            <div className="tab-pane" id="graphic-design-6">
              B
            </div>
            <div className="tab-pane active" id="developement-6">
              C
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tgm2Home
