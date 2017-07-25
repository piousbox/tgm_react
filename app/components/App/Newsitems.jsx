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

    let ad1 = null
    if (nAds) {
      ad1 = (<Leaderboard />)
      nAds--
    }

    let listitems = []
    if (this.props.newsitems && this.props.newsitems.length > 0) {
      let idx = 0
      this.props.newsitems.forEach((n) => {
        listitems.push(
          <li key={idx++} className={ styles.newsitem }>
            <Newsitem newsitem={ n } />
          </li>)

        if (Math.random() < 0.7 && nAds) {
          listitems.push(<Leaderboard key={idx++} />)
          nAds--
        }
      })
    }
    
    return (
      <div>
        { ad1 }
        <Center><h3>News ({ listitems.length })</h3></Center>
        <ul>{ listitems }</ul>
      </div>
    )
  }
}

export default Newsitems
