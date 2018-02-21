import React from 'react'

import Clearfix from './Clearfix'

import star     from './images/24x24/star.png'
import unstar   from './images/24x24/unstar.png'
import bubble   from './images/24x24/bubble.png'
import arrow_up from './images/24x24/arrow_up.png'

class Stars extends React.Component {
  render () {
    return (
      <div style={{ height: 24 }} >
        <div className="Stars" style={{ background: `url(${unstar})`, height: '24px', width: '120px', position: 'relative', zIndex: 4, float: 'left' }} >
          <div className="inner" style={{ height: '100%', background: `url(${star})`, position: 'relative', width: '68%', zIndex: 5 }} ></div>
        </div>
        <div style={{ background: `url(${arrow_up})`, width: 24, height: 24, float: 'left' }} ></div>
        <div style={{ background: `url(${bubble})`, width: 24, height: 24, textAlign: 'center', float: 'left' }} >0</div>
        <Clearfix />
      </div>)
  }
}

export default Stars
