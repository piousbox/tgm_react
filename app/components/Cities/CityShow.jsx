import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Nav, NavItem, 
} from 'react-bootstrap'

import { cityAction } from '../../actions'
import AppRouter from '../App/AppRouter'

import {
  Panel,
} from 'react-bootstrap'

import { Newsitem, NewsitemGallery } from 'piousbox-render'
import { VenueWidget } from '../Venues'

class CityShow extends React.Component {
  constructor(props) {
    super(props)
    console.log('+++ +++ CityShow constructor:', props)

    if (!props.city.name) {
      props.dispatch(cityAction(props.match.params.cityname))
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.componentWillUpdate       = this.componentWillUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    console.log('+++ +++ CityShow willReceiveProps:', nextProps)

    if (nextProps.match.params.cityname && nextProps.match.params.cityname !== this.props.city.cityname) { 
      this.props.dispatch(cityAction(nextProps.match.params.cityname))
    }
  }

  componentWillUpdate () {
  }

  render () {
    console.log('+++ +++ CityShow render:', this.props, this.state)

    let newsitems = []
    /* if (this.props.city.newsitems) {
      this.props.city.newsitems.map((item, idx) => {
        newsitems.push(
          <Newsitem key={idx} newsitem={item} />
        )
      })
    } */

    let galleries = []
    if (this.props.city.galleries) {
      this.props.city.galleries.map((gallery, idx) => {
        galleries.push(<NewsitemGallery key={idx} item={gallery} 
          link={AppRouter.cityGalleryLink( this.props.city, gallery )} />)
      })
    }

    return (
      <div className="CityShow" style={{ width: '100%', paddingRight: 10 }}>
        <h3 className='center' >{ this.props.city.name }</h3>
        <h4 className='center' >Galleries</h4>{ galleries }
      </div>
    )

    /* let venues = []
    if (this.props.city.venues) {
      this.props.city.venues.map((venue, idx) => {
        venues.push(<VenueWidget key={idx} venue={ venue } city={this.props.city} />)
      })
    }

    let tags = []
    if (this.props.city.tags) {
      this.props.city.tags.map((tag, idx) => {
        tags.push(<span key={idx} className="tag" >{tag.name}</span>)
      })
    }

    let events = []
    if (this.props.city.events) {
      this.props.city.events.map((event, idx) => {
        events.push( // HEREHERE, make this the eventWidget
          <Panel key={idx}>
            <img src={event.photo} style={{ width: 100, height: 100, background: '#cecece' }} />
            <Link to={AppRouter.cityEventLink(this.props.city.cityname, event.eventname)}>{ event.name }</Link>
          </Panel>)
      })
    }

    return (
      <div className="CityShow" style={{ width: '100%', paddingRight: 10 }}>
        <h3 className='center' >{ this.props.city.name }</h3>
        <h4 className='center' >Galleries</h4>{ galleries }
        <div className="tags"><h4>Tags</h4>{ tags }</div>
        <h4 className='center' >Venues</h4>{ venues }
        <h4 className='center' >Events</h4>{ events }
      </div>
    ) */

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.city,
  }
}

export default connect(mapStateToProps)(CityShow)
