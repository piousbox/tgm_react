import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router'

import styles from './_App.scss'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome Home!</h1>
        <ul>
          <li><Link to='/en/cities'>Cities Index</Link></li>
          <li><Link to='/en/cities/travel-to/Chicago'>Travel to Chicago</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
