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
import styles      from './_App.scss'
import Footer3      from './Footer3'
import Leaderboard from './Leaderboard'
import {
  SET_API_URL,
} from '../../constants/AppConstants'
import { profileAction } from '../../actions'
import TgmRouter from './TgmRouter'

const MyFacebookButton = ({ onClick }) => (
  <button onClick={onClick}>f</button>
);

class MainNavigation extends React.Component {

  constructor (props) {
    super(props)
    if (localStorage.getItem('fbAccountId')) {
      this.state = { profile: { id: localStorage.getItem('fbAccountId') } }
    } else {
      this.state = { profile: {} }
    }
  }

  componentWillMount(nextProps) {
    // this.props.dispatch({ type: SET_API_URL, apiUrl: config.apiUrl });
    // console.log("+++ +++ MainNavigation nextProps?:", nextProps)
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
      <div>
      <div className="site_container">
        <div className="header_top_bar_container clearfix">
				  <div className="header_top_bar">
					  <form className="search" action="search.html" method="get">
						  <input type="text" name="s" placeholder="Search..." value="Search..." className="search_input hint" />
						    <input type="submit" className="search_submit" value="" />
					  </form>
					  <ul className="social_icons clearfix">
						  <li>
							  <a target="_blank" href="http://facebook.com/QuanticaLabs" className="social_icon facebook" title="facebook">&nbsp;</a>
						  </li>
						  <li>
							  <a target="_blank" href="https://twitter.com/QuanticaLabs" className="social_icon twitter" title="twitter">&nbsp;</a>
						  </li>
						  <li>
							  <a href="mailto:contact@pressroom.com" className="social_icon mail" title="mail">&nbsp;</a>
						  </li>
						  <li>
							  <a href="http://themeforest.net/user/QuanticaLabs/portfolio" className="social_icon envato" title="envato">&nbsp;</a>
						  </li>
					  </ul>
					  <div className="latest_news_scrolling_list_container">
						  <ul>
							  <li className="category">LATEST</li>
							  <li className="left"><a href="#"></a></li>
							  <li className="right"><a href="#"></a></li>
							  <li className="posts">
								  <ul className="latest_news_scrolling_list">
									  <li>
										  <a href="post.html" title="">Climate Change Debate While Britain Floods</a>
									  </li>
									  <li>
										  <a href="post.html" title="">The Public Health Crisis Hiding in Our Food</a>
									  </li>
									  <li>
										  <a href="post.html" title="">Nuclear Fusion Closer to Becoming a Reality</a>
									  </li>
								  </ul>
							  </li>
							  <li className="date">
								  <abbr title="04 Apr 2014" className="timeago current">04 Apr 2014</abbr>
								  <abbr title="04 May 2014" className="timeago">04 May 2014</abbr>
								  <abbr title="04 June 2014" className="timeago">04 June 2014</abbr>
							  </li>
						  </ul>
					  </div>
				  </div>
			  </div>
			  <div className="header_container">
				  <div className="header clearfix">
					  <div className="logo">
						  <h1><a href="home.html" title="Pressroom">Pressroom</a></h1>
						  <h4>News and Magazine Template</h4>
					  </div>
					  <div className="placeholder">728 x 90</div>
				  </div>
			  </div>
			  <div className="menu_container clearfix">
				  <nav>
				    <ul className="sf-menu">
					    <li className="submenu selected">
						    <a href="#" title="Home">
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
						    <a href="#" title="Pages">
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
					    <li className="submenu mega_menu_parent">
						    <a href="#" title="Mega Menu">
							    Mega Menu
						    </a>
						    <ul>
							    <li className="submenu">
								    <a href="blog.html" title="Latest Posts">
									    Latest Posts
								    </a>
								    <ul className="mega_menu blog">
									    <li className="post">
										    <a href="post.html" title="New Painkiller Rekindles Addiction Concerns">
											    <img src='images/samples/330x242/image_08.jpg' alt='img' />
										    </a>
										    <h5><a href="post.html" title="New Painkiller Rekindles Addiction Concerns">New Painkiller Rekindles Addiction Concerns</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post.html" title="High Altitudes May Aid Weight Control">
											    <img src='images/samples/330x242/image_11.jpg' alt='img' />
										    </a>
										    <h5><a href="post.html" title="High Altitudes May Aid Weight Control">High Altitudes May Aid Weight Control</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post.html" title="Build on Brotherhood, Club Lives Up to Name">
											    <img src='images/samples/330x242/image_06.jpg' alt='img' />
										    </a>
										    <h5><a href="post.html" title="Build on Brotherhood, Club Lives Up to Name">Build on Brotherhood, Club Lives Up to Name</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
								    </ul>
							    </li>
							    <li className="submenu">
								    <a href="blog.html" title="Recent Galleries">
									    Recent Galleries
								    </a>
								    <ul className="mega_menu blog">
									    <li className="post">
										    <a href="post_gallery.html" title="Build on Brotherhood, Club Lives Up to Name">
											    <span className="icon gallery"></span>
											    <img src='images/samples/330x242/image_03.jpg' alt='img' />
										    </a>
										    <h5><a href="post_gallery.html" title="Build on Brotherhood, Club Lives Up to Name">Build on Brotherhood, Club Lives Up to Name</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post_gallery.html" title="High Altitudes May Aid Weight Control">
											    <span className="icon gallery"></span>
											    <img src='images/samples/330x242/image_05.jpg' alt='img' />
										    </a>
										    <h5><a href="post_gallery.html" title="High Altitudes May Aid Weight Control">High Altitudes May Aid Weight Control</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post_gallery.html" title="New Painkiller Rekindles Addiction Concerns">
											    <span className="icon gallery"></span>
											    <img src='images/samples/330x242/image_04.jpg' alt='img' />
										    </a>
										    <h5><a href="post_gallery.html" title="New Painkiller Rekindles Addiction Concerns">New Painkiller Rekindles Addiction Concerns</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
								    </ul>
							    </li>
							    <li className="submenu">
								    <a href="blog.html" title="Recent Reviews">
									    Recent Reviews
								    </a>
								    <ul className="mega_menu blog">
									    <li className="post">
										    <a href="post_review.html" title="New Painkiller Rekindles Addiction Concerns">
											    <span className="icon"><span>8.7</span></span>
											    <img src='images/samples/330x242/image_07.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review.html" title="New Painkiller Rekindles Addiction Concerns">New Painkiller Rekindles Addiction Concerns</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post_review_2.html" title="High Altitudes May Aid Weight Control">
											    <span className="icon"><span>9.5</span></span>
											    <img src='images/samples/330x242/image_09.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review_2.html" title="High Altitudes May Aid Weight Control">High Altitudes May Aid Weight Control</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post">
										    <a href="post_review.html" title="Build on Brotherhood, Club Lives Up to Name">
											    <span className="icon"><span>7.8</span></span>
											    <img src='images/samples/330x242/image_14.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review.html" title="Build on Brotherhood, Club Lives Up to Name">Build on Brotherhood, Club Lives Up to Name</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post first">
										    <a href="post_review.html" title="Nuclear Fusion Closer to Becoming a Reality">
											    <span className="icon"><span>8.0</span></span>
											    <img src='images/samples/330x242/image_13.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review.html" title="Nuclear Fusion Closer to Becoming a Reality">Nuclear Fusion Closer to Becoming a Reality</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post first">
										    <a href="post_review_2.html" title="The Public Health Crisis Hiding in Our Food">
											    <span className="icon"><span>9.1</span></span>
											    <img src='images/samples/330x242/image_02.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review_2.html" title="The Public Health Crisis Hiding in Our Food">The Public Health Crisis Hiding in Our Food</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
									    <li className="post first">
										    <a href="post_review_2.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">
											    <span className="icon"><span>6.7</span></span>
											    <img src='images/samples/330x242/image_01.jpg' alt='img' />
										    </a>
										    <h5><a href="post_review_2.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">Study Linking Illnes and Salt Leaves Researchers Doubtful</a></h5>
										    <ul className="post_details simple">
											    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
											    <li className="date">
												    10:11 PM, Feb 02
											    </li>
										    </ul>
									    </li>
								    </ul>
							    </li>
							    <li className="submenu">
								    <a href="blog.html" title="Most Read">
									    Most Read
								    </a>
								    <div className="mega_menu row">
									    <div className="column column_1_2">
										    <ul className="blog small">
											    <li className="post">
												    <a href="post.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">
													    <img src='images/samples/100x100/image_06.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">Study Linking Illnes and Salt Leaves Researchers Doubtful</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_health.html" title="HEALTH">HEALTH</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
											    <li className="post">
												    <a href="post.html" title="Syrian Civilians Trapped For Months Continue To Be Evacuated">
													    <img src='images/samples/100x100/image_12.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Syrian Civilians Trapped For Months Continue To Be Evacuated">Syrian Civilians Trapped For Months Continue To Be Evacuated</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_world.html" title="WORLD">WORLD</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
											    <li className="post">
												    <a href="post.html" title="Built on Brotherhood, Club Lives Up to Name">
													    <img src='images/samples/100x100/image_02.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Built on Brotherhood, Club Lives Up to Name">Built on Brotherhood, Club Lives Up to Name</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
										    </ul>
									    </div>
									    <div className="column column_1_2">
										    <ul className="blog small">
											    <li className="post">
												    <a href="post.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">
													    <img src='images/samples/100x100/image_04.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">Study Linking Illnes and Salt Leaves Researchers Doubtful</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_health.html" title="HEALTH">HEALTH</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
											    <li className="post">
												    <a href="post.html" title="Syrian Civilians Trapped For Months Continue To Be Evacuated">
													    <img src='images/samples/100x100/image_10.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Syrian Civilians Trapped For Months Continue To Be Evacuated">Syrian Civilians Trapped For Months Continue To Be Evacuated</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_world.html" title="WORLD">WORLD</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
											    <li className="post">
												    <a href="post.html" title="Built on Brotherhood, Club Lives Up to Name">
													    <img src='images/samples/100x100/image_07.jpg' alt='img' />
												    </a>
												    <div className="post_content">
													    <h5>
														    <a href="post.html" title="Built on Brotherhood, Club Lives Up to Name">Built on Brotherhood, Club Lives Up to Name</a>
													    </h5>
													    <ul className="post_details simple">
														    <li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
														    <li className="date">
															    10:11 PM, Feb 02
														    </li>
													    </ul>
												    </div>
											    </li>
										    </ul>
									    </div>
								    </div>
							    </li>
						    </ul>
					    </li>
					    <li className="submenu">
						    <a href="#" title="Post Formats">
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
								    <a href="#" title="Blog 1 column">
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
								    <a href="#" title="Blog 2 columns">
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
						    <a href="#" title="Categories">
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

export default connect(mapStateToProps)(MainNavigation)
