import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Newsitem from './Newsitem'
import Center from './../Center'
import styles from './_Newsitems.scss'

class Newsitems extends React.Component {
  render() {
    let listitems = []
    if (this.props.newsitems && this.props.newsitems.length > 0) {
      this.props.newsitems.forEach( (n, idx) => {
        listitems.push(
          <li key={idx} className={ styles.newsitem }>
            <Newsitem newsitem={ n } />
          </li>)
      })
    }
    
    return (
      <div>
        <Center><h3>News ({ listitems.length })</h3></Center>
        <ul>{ listitems }</ul>
      </div>
    )
  }
}

export default Newsitems
