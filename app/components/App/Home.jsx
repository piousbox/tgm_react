import React from 'react'
import ReactDOM from 'react-dom'

import { Grid, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router'

import styles from './_App.scss'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>welcome home!</h1>
        <Link to='/en/cities/travel-to/Chicago'>Travel to Chicago</Link>
      </div>
    )
  }
}

export default Home
