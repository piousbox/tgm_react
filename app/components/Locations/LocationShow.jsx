import React from 'react'
import { connect } from 'react-redux'

import { setLocation } from '../../actions'
import './js/vanilla.kinetic'

import Draggable from 'react-draggable'

class LocationShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch(setLocation(props.params.locationname))
  }

  /* componentDidMount () {
    console.log('component did mount')
    new VanillaKinetic(document.getElementById("locationMapContainer"), {
      filterTarget: function(target, e) {
        if (!/down|start/.test(e.type)) {
          return !(/area|a|input/i.test(target.tagName));
        }
      }
    })
  }
  render () {
    console.log("+++ +++ rendering Location:", this.props, this.state)

    return(<div id="locationMapContainer">
  <div id="locationMap" style={{ height: this.props.location.background_image_height,
                                 width: this.props.location.background_image_width,
                                 background: `no-repeat url(${this.props.location.background_image_path})` }}>
  </div>
    </div>)
  } */

  render () {
    console.log("+++ +++ LocationShow render:", this.props, this.state)

    let oWidth = 200;
    let oHeight = 200;
    if (document.getElementById('web-design-6')) {
      oWidth = document.getElementById('web-design-6').offsetWidth
      oHeight = document.getElementById('web-design-6').offsetHeight
    }

    return(
      <div style={{ width: this.props.location.background_image_width*2 - oWidth,
                    height: this.props.location.background_image_height*2 - oHeight, 
                    position: 'relative', 
                    top: -this.props.location.background_image_height + oHeight, 
                    left: -this.props.location.background_image_width + oWidth, 
      }}>
        <Draggable bounds="parent" >
          <div id="locationMap" style={{ height: this.props.location.background_image_height,
                                         width: this.props.location.background_image_width,
                                         background: `no-repeat url(${this.props.location.background_image_path})` }}>
          </div>
        </Draggable>
      </div>
    )
  }
}

LocationShow.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    location: state.location,
  }
}

export default connect(mapStateToProps)(LocationShow)
