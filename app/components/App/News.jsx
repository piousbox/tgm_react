import React from 'react'
import { connect } from 'react-redux'
import {
  Grid, Row, Col, Panel,
} from 'react-bootstrap'
import { Link } from 'react-router'

import { featureCitiesAction, newsAction } from '../../actions'
import AppRouter from './AppRouter'
import { Newsitem } from '../Newsitems'

class News extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(newsAction())
    props.dispatch(featureCitiesAction())
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // console.log('+++ News will receive props:', nextProps, this.props, this.state)
    // nextProps.dispatch(newsAction())
  }

  render () {
    // console.log('+++ +++ News render:', this.props, this.state)
    if (this.props.newsitems.length === 0) { return (null) }

    let news = []
    this.props.newsitems.map((item, idx) => {
      // news.push(<div key={idx} ><h5>{item.name}</h5>{ item.descr }</div>)
      news.push(<Newsitem key={idx} newsitem={item} />)
    })

    let featureCities = []
    this.props.featureCities.map((city, idx) => {
      featureCities.push(
        <Col sm={3} key={idx}>
          <Panel>
            <h3><Link to={AppRouter.cityLink(city)}>{city.name}</Link></h3>
          </Panel>
        </Col>)
    })

    return (
      <div className="Homepage" style={{ paddingRight: 10 }} >
        <Row>{ featureCities }</Row>
        { news }
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    newsitems: state.newsitems,
    featureCities: state.featureCities,
  }
}

export default connect(mapState)(News)
