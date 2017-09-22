import React from 'react'

class Tgm2 extends React.Component {

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

        <div className="folder folder-both folder-collapse-right">
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
                  <p className="m-b0">Developement lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Commyolk Suspendisse 
                    et justo. Praesent mattis  augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. 
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis 
                    commyolk augue aliquam ornare augue.</p>
                </div>
              </div>
            </div>
            <div className="folder-ctrl">
              <a className='btn-left'><img src="images/16x16/arrow-left.png" alt='' /></a>
              <a className="btn-right"><img src="images/16x16/arrow-right.png" alt='' /></a>
            </div>
          </div>
          <div className="folder folder-right folder-half">
            <ul className="nav nav-tabs">
              <li className="active"><a href="javascript:;">Map</a></li>
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
