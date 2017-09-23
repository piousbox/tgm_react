import React from 'react'

class TagsShow extends React.Component {
  rener () {
    return (
      <div><b>tags show</b>
        <div className="folder folder-right folder-half">
          <ul className="nav nav-tabs">
            <li className="active"><a href="javascript:;">Venues</a></li>
            <li className=""><a href="#graphic-design-6" data-toggle="tab" aria-expanded="false"><span className="title-head">Events</span></a></li>
            <li className=""><a href="#developement-6" data-toggle="tab" aria-expanded="false"><span className="title-head">Galleries</span></a></li>
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
                <Row>
                  <Col xs={12} lg={12}>
                    <Panel>
                      <h5>{"Alberto's"}</h5>
                      <p>{"I guess it's quite popular and also there are a lot of good dancers regularing that place. Would recommend, if there is no problem with me coming in there the next time, which will be when?"}</p>
                    </Panel>
                  </Col>
                  <Col xs={12} lg={12}>
                    <Panel>
                      <h5>Santa Clara Dance Studio</h5>
                      <p>That&apos;s fridays. I've never been there, and will post a review as soon as I go there to check it out.</p>
                    </Panel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={12}>
                    <Panel>
                      <h5>Palomar Ballroom</h5>
                      <p>It&apos;s a bit far from where I live, but Santa Cruz is nice (relatively, with sidenotes) and the population that goes to that ballroom is quite nice.</p>
                    </Panel>
                  </Col>
                  <Col xs={12} lg={12}>
                    <Panel>
                      <h5>Agenda Salsa</h5>
                      <p>That&apos;s Wednesdays, which is nice b/c it&apos;s not on Friday. The instruction is so-so, but you can still meet nice people and have fun there.</p>
                    </Panel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={12}>
                    <Panel>
                      <h5>The Starlite Ballroom</h5>
                      <p>Sundays, let&apos;s check it out. Terrible calendar infographic. Cannot be worse I think. Impossible to read. But hey, if the ballroom is okay, I&apos;m in.</p>
                    </Panel>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TagsShow
