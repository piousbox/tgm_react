import React from 'react'

import Center from '../Center'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

import { connect } from 'react-redux'

import { citiesIndex, profileAction } from '../../actions'

import TgmApi from './TgmApi'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = { profile: {},
                   cities: [],
    }
  }

  componentDidMount(nextProps) {
    console.log("+++ +++ profile nextProps:", nextProps)
  }

  componentWillReceiveProps(nextProps) {
    console.log('+++ +++ profile will receive props:', nextProps)
    this.setState(Object.assign({}, this.state, { profile: this.props.profile }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(TgmApi.updateProfile, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        user_profile: this.state.profile,
        accessToken:  this.state.profile.accessToken,
      })
    }).then(r => r.json()).then(_data => {
      console.log('+++ +++ updated profile:', _data)
    })
  }

  handleCityChange  = (e) => { this.state.profile.current_city_id = e.target.value }
  handleAboutChange = (e) => { this.state.profile.about           = e.target.value }

  render() {
    console.log("+++ +++ Profile render props:", this.props)
    console.log("+++ +++ Profile render state:", this.state)

    let citiesOptions = []
    if (Object.keys(this.props.cities).length > 0) {
      this.props.cities.forEach((city, idx) => {
        citiesOptions.push(<option key={idx} value={city.id} >{ city.name }</option>)
      })
    }

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            Profile
            <form onSubmit={this.handleSubmit}>
              <ul>
                <li>
                  <img src={`//graph.facebook.com/${this.props.profile.id}/picture`} alt='' />
                </li>
                <li>City:
                  <select value={this.state.profile.current_city_id} onChange={this.handleCityChange} >
                    <option selected={!this.state.profile.current_city_id} disabled>Choose City...</option>
                    { citiesOptions }
                  </select>
                </li>
                <li>About:
                  <textarea rows="4" cols="5" value={this.state.profile.about} onChange={this.handleAboutChange} />
                </li>
              </ul>
              <input type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
    cities:  state.cities,
  }
}

export default connect(mapStateToProps)(Profile)

