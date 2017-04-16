
import styles from './_App.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import img_ror   from '../../images/400x200/ror.jpg'
import img_node  from '../../images/400x200/nodejs.jpg'
import img_react from '../../images/400x200/react.jpg'

import img_angular   from '../../images/400x200/angular.jpg'
import img_wordpress from '../../images/400x200/wordpress.jpg'
import img_php       from '../../images/400x200/php.jpg'

import img_uiux   from '../../images/400x200/uiux.jpg'
import img_mvp    from '../../images/400x200/mvp_prototyping.jpg'
import img_devops from '../../images/400x200/devops.jpg'

import Service from './Service'

/*
 * RoR
 * node.js
 * react.js

 * angular.js
 * wordpress
 * cakephp

 * ui/ux
 * mvp
 * devops
*/

class Services extends React.Component {
  ror = { descr: [ "Our preferred framework for rapid prototyping and non-real-time applications is Ruby on Rails. We use it for constructing APIs, providing backend for websites, generating static websites, and many other purposes." ],
          image: img_ror,
          title: "Ruby on Rails"
  };
  node = { descr: [ "Node.js and Socket.js are our tools of choice for implementing real-time applications, event-driven applications, and some microservices. Node is generally our go-to technology for implementing websockets." ],
           image: img_node,
           title: "Node.js"
  };
  react = { descr: [ "React.js is our preferred frontend technology. While we have extensive experience in Angular.js and Backbone.js, in 2017 we feel that the winner for starting new frontend projects is react.js. We still support existing codebases written in Angular.js and Backbone.js, however." ],
            image: img_react,
            title: "React.js"
  };

  php = { descr: [ "PHP may not be glamorous but it certainly gets the job done! And with the number of sites being powered by Wordpress, it is a market segment certainly not to be missed.",
                    ],
          image: img_php,
          title: 'PHP'
  };
  wordpress = { descr: [ "We offer Wordpress plugin development, eCommerce site building, as well as building custom PHP applications in CakePHP or a framework of your choice. We will also update and expand on your existing PHP codebase, and implement features necessary for your business to grow." ],
                image: img_wordpress,
                title: 'Wordpress'
  };
  angular = { descr: [ "We have extensive experience developing and maintaining Angular applications." ],
              image: img_angular,
              title: 'Angular.js'
  };
  
  mvp = { descr: [ "We specialize in MVP prototyping. We will iteratively develop an application for you that will prove (or disprove) your business concept in minimal time and budget. Once you have that, you can decide to pivot or continue iterating on that idea. We do this initial critical step for you." ],
          image: img_mvp,
          title: 'MVP Prototyping'
  };
  uiux = { descr: [ "We offer iterative work on UI/UX to match your spec. You have an idea, you need visuals for it, talk to us and we'll build the visuals for you." ],
           image: img_uiux,
           title: "UI/UX Prototyping"
  };
  devops = { descr: ["We provide maintainable deployment/automation schemes that make it easy for you to keep the codebase live.",
                     "Additionally, we solve specific questions regarding performance, resilience, and scaling of applications."],
             image: img_devops,
             title: 'Devops'
  };
    
  componentDidMount () {
  }

  render () {
    return (
      <div className={styles.services} id="services" ><Grid >
        <Row >
          <Col xs={10} xsOffset={1} >
            <h1 style={{ textAlign: 'center' }} >Services</h1>
            <p>We do web application development, integration with external services, deployments, automation, wireframing and prototyping, as well as monitoring and scaling of existing applications. We will also go refactoring/rewriting of an existing application and migrating it from old codebase to nice and shiny new paradigm.</p>
          </Col>
        </Row>
        <Row >
          <Col xs={12} md={4} ><Service image={this.ror.image}   title={this.ror.title}   descr={this.ror.descr}  /></Col>
          <Col xs={12} md={4} ><Service image={this.node.image}  title={this.node.title}  descr={this.node.descr}  /></Col>
          <Col xs={12} md={4} ><Service image={this.react.image} title={this.react.title} descr={this.react.descr} /></Col>
        </Row>
        <Row>
          <Col xs={12} md={4} ><Service image={this.php.image} title={this.php.title} descr={this.php.descr} /></Col>
          <Col xs={12} md={4} ><Service image={this.wordpress.image} title={this.wordpress.title} descr={this.wordpress.descr} /></Col>
          <Col xs={12} md={4} ><Service image={this.angular.image} title={this.angular.title} descr={this.angular.descr} /></Col>
        </Row>
        <Row >
          <Col xs={12} md={4} ><Service image={this.uiux.image} title={this.uiux.title} descr={this.uiux.descr} /></Col>
          <Col xs={12} md={4} ><Service image={this.mvp.image} title={this.mvp.title} descr={this.mvp.descr} /></Col>
          <Col xs={12} md={4} ><Service image={this.devops.image} title={this.devops.title} descr={this.devops.descr} /></Col>
        </Row>
      </Grid></div>
    )
  }
}

export default Services
