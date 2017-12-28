import React from 'react'
import { connect } from 'react-redux'

import { newsAction } from '../../actions'
import { Newsitem } from '../Newsitems'

class News extends React.Component {
  constructor(props) {
    super(props)
    props.dispatch(newsAction())
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

    return (
      <div>
        <h4>news</h4>
        { news }
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    newsitems: state.newsitems,
  }
}

export default connect(mapState)(News)
