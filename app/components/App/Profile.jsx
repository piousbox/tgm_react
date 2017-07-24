import React from 'react'

import Center from '../Center'

import { Grid, Row, Col,
         Panel,
         Button,
} from 'react-bootstrap'

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
          <Col xs={12} md={6} mdOffset={3} xsOffset={0}>
            <Panel>
              <Center><h1>My Profile</h1></Center>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col xs={3}>
                    <img src={`//graph.facebook.com/${this.props.profile.id}/picture`} alt='' />
                  </Col>
                  <Col xs={9}>
                    { this.state.profile.name }
                    <br />
                    { this.state.profile.email }
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <b>About me:</b><br />
                    <textarea style={{ width: '100%'}} rows="4" value={this.state.profile.about} onChange={this.handleAboutChange} />
                  </Col>
                  <Col xs={12}>
                    <b>Current City:</b><br />
                    <select value={this.state.profile.current_city_id} onChange={this.handleCityChange} >
                      <option selected={!this.state.profile.current_city_id} disabled>Choose City...</option>
                      { citiesOptions }
                    </select>
                  </Col>
                  <Col xs={3} xsOffset={9} >
                    <Button bsStyle="primary" type="submit" value="Submit" >Submit</Button>
                  </Col>
                </Row>
              </form>
            </Panel>
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

