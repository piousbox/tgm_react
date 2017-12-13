import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Grid, Row, Col,
         Nav, NavItem, Navbar
} from 'react-bootstrap'
import { authStateReducer } from 'redux-auth'
import { Link, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import FacebookAuth from 'react-facebook-auth'
import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'

import config from 'config'

import styles       from './_App.scss'
import Footer3      from './Footer3'
import Leaderboard  from './Leaderboard'
import HeaderTopBar from './HeaderTopBar'
import {
  SET_API_URL,
} from '../../constants/AppConstants'
import { profileAction } from '../../actions'
import TgmRouter from './TgmRouter'

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>f</button>
);

class MainNavigationPressroom extends React.Component {

  constructor (props) {
    super(props)
    if (localStorage.getItem('fbAccountId')) {
      this.state = { profile: { id: localStorage.getItem('fbAccountId') } }
    } else {
      this.state = { profile: {} }
    }
  }

  componentWillMount(nextProps) {
    // console.log("+++ +++ MainNavigationPressroom componentWillMount:", nextProps)
    document.title = config.siteTitle
  }

  render () {
    // console.log('+++ +++ MainNavigation render:', this.props, this.state)

    let profilePic = null
    if (this.props.profile.id) {
      profilePic = (<img src={`//graph.facebook.com/${this.props.profile.id}/picture`} alt='' />)
    } else if (this.state.profile.id) {
      profilePic = (<img src={`//graph.facebook.com/${this.state.profile.id}/picture`} alt='' />)
    } 
    let fbLogin = (<FacebookAuth appId={config.fbAppId} fields="name,email,picture" 
                                 callback={(response) => {this.props.dispatch(profileAction(response))}} 
                                 component={MyFacebookButton} />)

    let lang = this.props.profile.lang
    
    return (
      <div >
      <div className="site_container">
        { /* <div className="header_top_bar_container clearfix"><HeaderTopBar /></div> */ }
			  <div className="header_container">
				  <div className="header clearfix">
					  <div className="logo">
						  <h1 style={{ margin: 0, fontFamily: 'serif' }} ><a href="home.html" title="Pressroom">Piousbox</a></h1>
						  <h4>{config.siteSubtitle}</h4>
					  </div>
					  <div className="placeholder">728 x 90</div>
				  </div>
			  </div>
			  <div className="menu_container clearfix">
				  <nav>
				    <ul className="sf-menu">
					    <li className="selected"><a href="#" title="Home">Home</a></li>

              { config.citiesEnabled ?    <li><Link to='/en/cities'>Cities</Link></li>                 : null }
              { config.tagsEnabled ?      <li><Link to={TgmRouter.tagsLink()}>Tags</Link></li>         : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }
              { config.reportsEnabled ?   <li><Link to={TgmRouter.reportsLink}>Reports</Link></li>     : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }
				    </ul>
				  </nav>
				  <div className="mobile_menu_container">
					  <a href="#" className="mobile-menu-switch">
						  <span className="line"></span>
						  <span className="line"></span>
						  <span className="line"></span>
					  </a>
					  <div className="mobile-menu-divider"></div>
					  <nav>
					    <ul className="mobile-menu">
						    <li className="submenu selected">
							    <a href="home.html" title="Home">
								    Home
							    </a>
							    <ul>
								    <li className="selected">
									    <a href="home.html" title="Home Style 1">
										    Home Style 1
									    </a>
								    </li>
								    <li>
									    <a href="home_2.html" title="Home Style 2">
										    Home Style 2
									    </a>
								    </li>
								    <li>
									    <a href="home_3.html" title="Home Style 3">
										    Home Style 3
									    </a>
								    </li>
								    <li>
									    <a href="home_4.html" title="Home Style 3">
										    Home Style 4
									    </a>
								    </li>
								    <li>
									    <a href="home_5.html" title="Home Style 5">
										    Home Style 5
									    </a>
								    </li>
								    <li>
									    <a href="home_6.html" title="Home Style 6">
										    Home Style 6
									    </a>
								    </li>
								    <li>
									    <a href="home_7.html" title="Home Style 7">
										    Home Style 7
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="about.html" title="Pages">
								    Pages
							    </a>
							    <ul>
								    <li>
									    <a href="about.html" title="About Style 1">
										    About Style 1
									    </a>
								    </li>
								    <li>
									    <a href="about_2.html" title="About Style 2">
										    About Style 2
									    </a>
								    </li>
								    <li>
									    <a href="default.html" title="Default">
										    Default
									    </a>
								    </li>
								    <li>
									    <a href="404.html" title="404 Not Found">
										    404 Not Found
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="post.html" title="Post Formats">
								    Post Formats
							    </a>
							    <ul>
								    <li>
									    <a href="post.html" title="Post Default">
										    Post Default
									    </a>
								    </li>
								    <li>
									    <a href="post_gallery.html" title="Post Gallery">
										    Post Gallery
									    </a>
								    </li>
								    <li>
									    <a href="post_small_image.html" title="Post Small Image">
										    Post Small Image
									    </a>
								    </li>
								    <li>
									    <a href="post_video.html" title="Post Video YouTube">
										    Post Video Youtube
									    </a>
								    </li>
								    <li>
									    <a href="post_video_2.html" title="Post Video Vimeo">
										    Post Video Vimeo
									    </a>
								    </li>
								    <li>
									    <a href="post_soundcloud.html" title="Post Soundcloud">
										    Post Soundcloud
									    </a>
								    </li>
								    <li>
									    <a href="post_review.html" title="Post Review Style 1">
										    Post Review Style 1
									    </a>
								    </li>
								    <li>
									    <a href="post_review_2.html" title="Post Review Style 2">
										    Post Review Style 2
									    </a>
								    </li>
								    <li>
									    <a href="post_quote.html" title="Post Quote Style 1">
										    Post Quote Style 1
									    </a>
								    </li>
								    <li>
									    <a href="post_quote_2.html" title="Post Quote Style 2">
										    Post Quote Style 2
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="blog.html" title="Blog">
								    Blog
							    </a>
							    <ul>
								    <li>
									    <a href="blog_small_slider.html" title="Blog Small Slider">
										    Blog Small Slider
									    </a>
								    </li>
								    <li className="submenu">
									    <a href="blog.html" title="Blog 1 column">
										    Blog 1 Column
									    </a>
									    <ul>
										    <li>
											    <a href="blog.html" title="Blog With Right Sidebar">
												    Blog With Right Sidebar
											    </a>
										    </li>
										    <li>
											    <a href="blog_left_sidebar.html" title="Blog With Left Sidebar">
												    Blog With Left Sidebar
											    </a>
										    </li>
									    </ul>
								    </li>
								    <li className="submenu">
									    <a href="blog_2_columns.html" title="Blog 2 columns">
										    Blog 2 Columns
									    </a>
									    <ul>
										    <li>
											    <a href="blog_2_columns.html" title="Right Sidebar">
												    Right Sidebar
											    </a>
										    </li>
										    <li>
											    <a href="blog_2_columns_left_sidebar.html" title="Left Sidebar">
												    Left Sidebar
											    </a>
										    </li>
									    </ul>
								    </li>
								    <li>
									    <a href="blog_3_columns.html" title="Blog 3 Columns">
										    Blog 3 Columns
									    </a>
								    </li>
								    <li>
									    <a href="search.html?s=Maecenas+Mauris" title="Search Page Template">
										    Search Page Template
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="authors.html" title="Authors">
								    Authors
							    </a>
							    <ul>
								    <li>
									    <a href="authors.html" title="Authors List">
										    Authors List
									    </a>
								    </li>
								    <li>
									    <a href="author.html" title="Author Single">
										    Author Single
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="category_health.html" title="Categories">
								    Categories
							    </a>
							    <ul>
								    <li>
									    <a href="category_health.html" title="Health">
										    Health
									    </a>
								    </li>
								    <li>
									    <a href="category_science.html" title="Science">
										    Science
									    </a>
								    </li>
								    <li>
									    <a href="category_sports.html" title="Sports">
										    Sports
									    </a>
								    </li>
								    <li>
									    <a href="category_world.html" title="World">
										    World
									    </a>
								    </li>
								    <li>
									    <a href="category_lifestyle.html" title="Lifestyle">
										    Lifestyle
									    </a>
								    </li>
							    </ul>
						    </li>
						    <li className="submenu">
							    <a href="contact.html" title="Contact">
								    Contact
							    </a>
							    <ul className="expand_left_contact">
								    <li>
									    <a href="contact.html" title="Contact Style 1">
										    Contact Style 1
									    </a>
								    </li>
								    <li>
									    <a href="contact_2.html" title="Contact Style 2">
										    Contact Style 2
									    </a>
								    </li>
							    </ul>
						    </li>
					    </ul>
					  </nav>
				  </div>
        </div>
      </div>
                

        { /* <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">{ config.siteTitle }</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight>
              { config.citiesEnabled ?    <li><Link to='/en/cities'>Cities</Link></li>                 : null }
              { config.tagsEnabled ?      <li><Link to={TgmRouter.tagsLink()}>Tags</Link></li>         : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }
              { config.reportsEnabled ?   <li><Link to={TgmRouter.reportsLink}>Reports</Link></li>     : null }
              { config.galleriesEnabled ? <li><Link to={TgmRouter.galleriesLink}>Galleries</Link></li> : null }
            </Nav>
          </Navbar.Collapse>
        </Navbar> */ }

        { this.props.children }
        <Footer3 />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    apiUrl: state.apiUrl,
    domain: state.domain,
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(MainNavigationPressroom)
