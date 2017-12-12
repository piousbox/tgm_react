import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import bg from './images/bg1.png'

import ig from './images/social/instagram.png'
import fb from './images/social/facebook.png'
import uu from './images/social/youtube.png'

import config from 'config'

import { siteShow } from '../../actions'

import { Link } from 'react-router'
import TgmRouter from './TgmRouter'

import es from './images/flags/es.png'
import ru from './images/flags/ru.png'
import en from './images/flags/en.png'
import pt from './images/flags/pt.png'

import {
  DO_LOGOUT,
} from '../../constants/AppConstants'

import { connect } from 'react-redux'

class Footer2 extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(siteShow())
  }

  logout = () => {
    this.props.dispatch({ type: DO_LOGOUT })
  }

  render () {
    // console.log('+++ +++ Footer2:', this.props, this.state)

    let langs = []
    if (this.props.site && this.props.site.langs) {
      this.props.site.langs.forEach( lang => {
        let flag = null
        switch (lang) {
          case 'es':
            flag = es
            break
          case 'ru':
            flag = ru
            break
          case 'pt':
            flag = pt
            break
          case 'en':
          default:
            flag = en
        }            
        langs.push(<li key={lang} ><Link to={TgmRouter.siteLink(lang)}><img src={flag} alt={lang} /></Link></li>)
      })
    }

    return (
      <div style={{ backgroundImage: `url(${bg})`, marginTop: '1em' }} >
        <Grid >
          <Row>
            <Col xs={12} style={{ padding: '10px' }} >
              2017 &copy; Wasya Co
              <br />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    profile: state.profile,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Footer2)

      
      
