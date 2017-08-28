import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import Newsitem from './Newsitem'
import Center from './../Center'
import styles from './_Newsitems.scss'

import Leaderboard from './Leaderboard'

class Newsitems extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cursor: 0, count: null }
  }

  componentWillReceiveProps(nextProps) {
    console.log('+++ +++ newsitems will receive props:', nextProps)
    this.setState(Object.assign({}, this.state, { count: nextProps.site.n_newsitems }))
  }

  render() {
    console.log('+++ +++ newsitems props:', this.props)
    console.log('+++ +++ newsitems state:', this.state)

    let nAds = 0
    if (this.props.nAds && this.props.nAds > 0) {
      nAds = this.props.nAds
    }

    let listitems = []
    if (this.props.newsitems && this.props.newsitems.length > 0) {
      let idx = 0
      this.props.newsitems.forEach((n, _) => {
        listitems.push(
          <Newsitem key={idx++} newsitem={ n } />
        )
        
        if (Math.random() < 0.5 && nAds) {
          listitems.push(<Leaderboard key={idx++} />)
          nAds--
        }
      })
    }
    
    let pagination = []
    let pageNumber = 1;
    for (let i = 0; i < this.state.count; i += 10) {
      pagination.push(<span><button onClick={() => {gotoPage(pageNumber)}}>{pageNumber++}</button></span>)
    }
    
    return (
      <div>
        { pagination }
        { listitems }
        { pagination }
      </div>
    )
  }
}

export default Newsitems
