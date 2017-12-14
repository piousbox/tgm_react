import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col,
         Button,
} from 'react-bootstrap'

import Newsitem from './Newsitem'
import Center   from './../Center'
import Clearfix from './../Clearfix'
import styles   from './_Newsitems.scss'

import { siteNewsitemsAction, siteShow } from '../../actions'

class Newsitems extends React.Component {

  constructor(props) {
    super(props)
    this.state = { page: 1, count: null }
    this.props.dispatch(siteNewsitemsAction({ page: this.state.page }))
    this.props.dispatch(siteShow())
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Object.assign({}, this.state, { count: nextProps.site.n_newsitems }))
  }

  gotoPage (page) {
    this.setState(Object.assign({}, this.state, { page: page }))
    this.props.dispatch(siteNewsitemsAction({ page: page }))
  }

  render() {
    // console.log('+++ +++ newsitems props:', this.props, this.state)

    let listitems = []
    let newsitems = this.props.newsitems
    if (newsitems && newsitems.length > 0) {
      let idx = 0
      newsitems.map((n, idx) => {
        listitems.push(
          <Col xs={12} ><Newsitem key={idx} newsitem={ n } /></Col>
        )
        if ((idx+1) % 2 === 0) {
          listitems.push(<Clearfix key={`${idx}-clearfix`} />)
        }
      })
    }
    
    let pagination = []
    let pageNumber = 1
    let activeStyle = { fontWeight: 'bold' }
    const lambda = (pageNum, idx) => {
      pagination.push(
        <Button bsStyle={this.state.page == pageNum ? 'info' : ''} 
                className="btn" onClick={() => {this.gotoPage(pageNum)}}
                style={{ marginRight: '.5em' }}
                key={idx} >{pageNum}</Button>)
    }
    if (this.props.site) {
      for (let i = 0; i < this.props.site.n_newsitems; i += this.props.site.newsitems_per_page) {
        lambda(pageNumber++, i)
      }
    }
    
    return (
      <Row>
        { listitems }
        <Col xs={12}>{ pagination }</Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newsitems: state.newsitems,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Newsitems)
