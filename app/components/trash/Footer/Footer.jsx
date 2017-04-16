
import React    from 'react'
import ReactDOM from 'react-dom'
import Moment from 'moment'
let moment = Moment

import { Grid, Row, Col, 
         Panel, Button, 
         FormGroup, FieldGroup, FormControl } from 'react-bootstrap'

import styles       from './_Footer.scss'
import facebook     from "./images/facebook.png"
import github       from "./images/github.png"
import google_plus  from "./images/google_plus.png"
import instagram    from "./images/instagram.png"
import linkedin     from "./images/linkedin.png"
import youtube      from "./images/youtube.png"
import bg           from './images/bg1.png'
import bgTriangular from './images/triangular.png'
import f0_bg        from './images/weather.png'

class Footer0 extends React.Component {
  render () {
    return (
      <footer style={{ backgroundImage: `url(${f0_bg})` }} >
      &nbsp;
      </footer>
    )
  }
}

class Footer1 extends React.Component {
  constructor () {
    super();
    this.state = {
      data: [],
      name: 'this name'
    };
  }

  componentDidMount () {
    fetch("http://crossorigin.me/http://blog.wasya.co/?feed=json").then( (response) => {
      return response.json()
    }).then( (json) => {
      json = json.slice(0, 3)
      window.data = json;
      this.setState({data: json});
    });
  }

  /* static FieldGroup = function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  } */

  render() {
    var blogTitles = [];

    // @TODO: HEREHERE
    this.state.data.forEach(function(blogItem) {
      blogTitles.push(
        <div key={blogItem.title}>
          <hr />
          <h4 ><a href="#" dangerouslySetInnerHTML={{__html: blogItem.title}} ></a></h4>
          <i>{moment(blogItem.date).format('YYYY-MM-DD')}</i><p dangerouslySetInnerHTML={{__html: blogItem.excerpt}} ></p>
        </div>);
    });

    return (
      <footer className={styles.footer} style={{ backgroundImage: `url(${bg})`, paddingTop: '3em' }} id="blog" >
        <Grid >
          <Row className="show-grid" >
            <Col xs={12} sm={6} >
              <Panel>
                <h2>From our Blog</h2>
                {blogTitles}
                <hr />
                <div className={styles.center} ><a href="http://blog.wasya.co">Read More</a></div>
              </Panel>
            </Col>
            <Col xs={12} sm={6} >
              <ul className={styles.socialMediaIcons}>
                <li key={1}><img src={instagram} /></li>
                <li key={2}><img src={facebook} /></li>
                <li key={3}><img src={github} /></li>
                <li key={4}><img src={google_plus} /></li>
                <li key={5}><img src={linkedin} /></li>
                <li key={6}><img src={youtube} /></li>
              </ul>
              <br /><br />
              <Panel>
                <h2>Keep in Touch!</h2>
                <p>Subscribe to our occasional newsletter.</p>
                <form>
                  <input type="text" name="subscribe" placeholder="Your email" />&nbsp;&nbsp;
                  <Button type="submit" bsStyle="primary" bsSize="small" >Subscribe</Button>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
} 

class Footer2 extends React.Component {
  render () {
    var year = (new Date()).getFullYear();

    return (
      <footer className={styles.footer2} style={{ backgroundImage: `url(${bgTriangular})` }}>
        <Grid>
          <Row>
            <Col xs={6} xsOffset={6}>
              <span className="pull-right" >Wasya co &copy; {year}<br />v0.0.6 - spec driven</span>
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div style={{ textAlign: 'center' }} >New York City &nbsp; | &nbsp; Chicago &nbsp; | &nbsp; Los Angeles &nbsp; | &nbsp; San Francisco</div>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

class Footer3 extends React.Component {
  render () {
    return (
      <div>hello! footer 3</div>
    )
  }
}

export { Footer0, Footer1, Footer2, Footer3 }
