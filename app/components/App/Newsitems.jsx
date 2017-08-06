import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Newsitem from './Newsitem'
import Center from './../Center'
import styles from './_Newsitems.scss'

import Leaderboard from './Leaderboard'

class Newsitems extends React.Component {
  render() {

    let nAds = 0
    if (this.props.nAds && this.props.nAds > 0) {
      nAds = this.props.nAds
    }

    let listitems = []
    if (this.props.newsitems && this.props.newsitems.length > 0) {
      let idx = 0
      this.props.newsitems.forEach((n) => {
        listitems.push(
          <li key={idx++} className={ styles.newsitem }>
            <Newsitem newsitem={ n } />
          </li>)

        if (Math.random() < 0.5 && nAds) {
          listitems.push(<Leaderboard key={idx++} />)
          nAds--
        }
      })
    }
    
    return (
      <ul>{ listitems }</ul>
    )
  }
}

export default Newsitems
