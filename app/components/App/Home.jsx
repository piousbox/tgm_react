import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import FacebookAuth from 'react-facebook-auth'
import { EmailSignUpForm, AuthGlobals } from 'redux-auth/default-theme'
import { authStateReducer } from 'redux-auth'

import { Grid, Row, Col,
         Nav, NavItem, Navbar,
} from 'react-bootstrap'

import { Link } from 'react-router'
import { connect } from 'react-redux'

import config from 'config'

import Clearfix      from './Clearfix'
import styles        from './_App.scss'
import Features      from './Features'
import Footer        from './Footer'
import { Newsitems  } from '../Newsitems'

import { LinkContainer } from 'react-router-bootstrap'

import { siteShow } from '../../actions'

const loginFbUser = (r) => {
  console.log('+++ +++ todo!')
}

const saveFbUser = (r) => {
  console.log('+++ +++ more todo!')
}

/* const MyFacebookButton = ({ onClick }) => (
   <button onClick={onClick}>
   Login with facebook
   </button>
   ); */

class Home extends React.Component {

  constructor(props) {
    super(props) 
    props.dispatch(siteShow());

    // console.log('+++ +++ Home constructor:', props)
    if (props.site) {
      localStorage.setItem("lang", props.site.lang)
    }
  }

  componentWillMount() {
  }

  render () {
    // console.log('+++ +++ rendering Home:', this.props)

    return (
      <div className="page">
        <div style={{ float: 'right', color: 'black' }} >What's going on here?</div>div>

				<div className="page_layout clearfix">
					<div className="row">
						<div className="column column_2_3">
							<div className="row">
								<ul className="blog big">
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_10.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_05.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post_small_image.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post_small_image.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post_gallery.html">
											<span className="icon gallery" style={{ display: 'block' }}></span>
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_03.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post_gallery.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post_gallery.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post_gallery.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_09.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post_small_image.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post_small_image.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_12.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
									<li className="post">
										<a title="Built on Brotherhood, Club Lives Up to Name" href="post_gallery.html">
											<span className="icon gallery" style={{ display: 'block' }}></span>
											<img alt="img" src="http://static.local/piousbox.com/images/samples/330x242/image_13.jpg" style={{ display: 'block' }} />
										</a>
										<div className="post_content">
											<h2 className="with_number">
												<a title="Built on Brotherhood, Club Lives Up to Name" href="post_gallery.html">Built on Brotherhood, Club Lives Up to Name</a>
												<a title="2 comments" href="post_gallery.html#comments_list" className="comments_number">2<span className="arrow_comments"></span></a>
											</h2>
											<ul className="post_details">
												<li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
											<p>Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
											<a title="Read more" href="post_gallery.html" className="read_more"><span className="arrow"></span><span>READ MORE</span></a>
										</div>
									</li>
								</ul>
							</div>
							<ul className="pagination clearfix page_margin_top_section">
								<li className="left"><a title="" href="#">&nbsp;</a></li>
								<li className="selected"><a title="" href="#">1</a></li>
								<li><a title="" href="#">2</a></li>
								<li>
									<a title="" href="#">
										3
									</a>
								</li>
								<li className="right"><a title="" href="#">&nbsp;</a></li>
              </ul>
			      </div>
			      <div className="column column_1_3 page_margin_top">
			        <div className="tabs no_scroll clearfix ui-tabs ui-widget ui-widget-content ui-corner-all">
			          <ul className="tabs_navigation clearfix ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
			            <li className="half-width ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabIndex="0" aria-controls="sidebar-most-read" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
			              <a title="Most Read" href="#sidebar-most-read" className="ui-tabs-anchor" role="presentation" tabIndex="-1" id="ui-id-1">
			                Most Read
			              </a>
			              <span></span>
			            </li>
			            <li className="half-width ui-state-default ui-corner-top" role="tab" tabIndex="-1" aria-controls="sidebar-most-commented" aria-labelledby="ui-id-2" aria-selected="false" aria-expanded="false">
			              <a title="Commented" href="#sidebar-most-commented" className="ui-tabs-anchor" role="presentation" tabIndex="-1" id="ui-id-2">
			                Commented
			              </a>
			              <span></span>
			            </li>
			          </ul>
			          <div id="sidebar-most-read" aria-labelledby="ui-id-1" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" aria-hidden="false" style={{ display: 'block' }}>
			            <ul className="blog rating page_margin_top clearfix">
			              <li className="post">
			                <a title="Nuclear Fusion Closer to Becoming a Reality" href="post_small_image.html">
			                  <img alt="img" src="http://static.local/piousbox.com/images/samples/510x187/image_12.jpg" style={{ display: 'block' }} />
			                </a>
			                <div className="post_content">
			                  <span data-value="6 257" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">6</span></span></span></span></span><span className="odometer-formatting-mark"> </span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span></div></span>
			                  <h5><a title="New Painkiller Rekindles Addiction Concerns" href="post_small_image.html">New Painkiller Rekindles Addiction Concerns</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '100%', height: '148px' }} className="value_bar_container">
                        <div className="value_bar animated_element duration-2000 animation-width width animation-1"></div></div></li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="5 062" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-formatting-mark"> </span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">6</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span></div></span>
			                  <h5><a title="New Painkiller Rekindles Addiction Concerns" href="post.html">New Painkiller Rekindles Addiction Concerns</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '80.9014%', height: '148px;' }} className="value_bar_container">
                        <div className="value_bar animated_element duration-2000 animation-width width animation-1" ></div>
                      </div>
                    </li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="4 778" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">4</span></span></span></span></span><span className="odometer-formatting-mark"> </span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">8</span></span></span></span></span></div></span>
			                  <h5><a title="Seeking the Right Chemistry, Drug Makers Hunt for Mergers" href="post.html">Seeking the Right Chemistry, Drug Makers Hunt for Mergers</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SPORTS" href="category_sports.html">SPORTS</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '76.3625%', height: "148px" }} className="value_bar_container">
                        <div className="value_bar animated_element duration-2000 animation-width width animation-1" ></div>
                      </div>
                    </li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="754" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">4</span></span></span></span></span></div></span>
			                  <h5><a title="Study Linking Illnes and Salt Leaves Researchers Doubtful" href="post_small_image.html">Study Linking Illnes and Salt Leaves Researchers Doubtful</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SCIENCE" href="category_science.html">SCIENCE</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '12.0505%', height: '148px' }} className="value_bar_container">
                        <div className="value_bar animated_element duration-2000 animation-width width animation-1"></div>
                      </div>
                    </li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="52" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span></div></span>
			                  <h5><a title="Syrian Civilians Trapped for Months Continue to be Evacuated" href="post_quote.html">Syrian Civilians Trapped for Months Continue to be Evacuated</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SCIENCE" href="category_science.html">SCIENCE</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '5%', height: '148px;' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1" ></div></div></li>
			            </ul>
			            <a href="#" className="more page_margin_top">SHOW MORE</a>
			          </div>
			          <div id="sidebar-most-commented" aria-labelledby="ui-id-2" className="ui-tabs-panel ui-widget-content ui-corner-bottom" role="tabpanel" style={{ display: 'none' }} aria-hidden="true">
			            <ul className="blog rating page_margin_top clearfix">
			              <li className="post">
			                <a title="Nuclear Fusion Closer to Becoming a Reality" href="post_soundcloud.html">
			                  <img alt="img" src="http://static.local/piousbox.com/images/samples/510x187/image_02.jpg" style={{ display: 'block' }} />
			                </a>
			                <div className="post_content">
			                  <span data-value="70" className="number animated_element fadeIn progress odometer odometer-theme-default animation-1"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">7</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
			                  <h5><a title="New Painkiller Rekindles Addiction Concerns" href="post_soundcloud.html">New Painkiller Rekindles Addiction Concerns</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '100%', height: '20px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1" ></div></div></li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="62" className="number animated_element fadeIn progress odometer odometer-theme-default animation-1" ><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">6</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span></div></span>
			                  <h5><a title="New Painkiller Rekindles Addiction Concerns" href="post.html">New Painkiller Rekindles Addiction Concerns</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '88.5714%', height: '20px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1"></div></div></li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="30" className="number animated_element fadeIn progress odometer odometer-theme-default animation-1" ><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">3</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
			                  <h5><a title="Seeking the Right Chemistry, Drug Makers Hunt for Mergers" href="post_quote_2.html">Seeking the Right Chemistry, Drug Makers Hunt for Mergers</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SPORTS" href="category_sports.html">SPORTS</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '42.8571%', height: '20px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1"></div></div></li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="25" className="number animated_element odometer odometer-theme-default fadeIn animation-1"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
			                  <h5><a title="Study Linking Illnes and Salt Leaves Researchers Doubtful" href="post_small_image.html">Study Linking Illnes and Salt Leaves Researchers Doubtful</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SCIENCE" href="category_science.html">SCIENCE</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '35.7143%', height: '20px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1" ></div></div></li>
			              <li className="post">
			                <div className="post_content">
			                  <span data-value="4" className="number animated_element odometer odometer-theme-default fadeIn animation-1" ><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">0</span></span></span></span></span></div></span>
			                  <h5><a title="Syrian Civilians Trapped for Months Continue to be Evacuated" href="post_quote.html">Syrian Civilians Trapped for Months Continue to be Evacuated</a></h5>
			                  <ul className="post_details simple">
			                    <li className="category"><a title="SCIENCE" href="category_science.html">SCIENCE</a></li>
			                  </ul>
			                </div>
			                <div style={{ width: '5.71429%', height: '20px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-width width animation-1"></div></div></li>
			            </ul>
			            <a href="#" className="more page_margin_top">SHOW MORE</a>
			          </div>
			        </div>
			        <h4 className="box_header page_margin_top_section">Latest Posts</h4>
			        <div className="vertical_carousel_container clearfix">
			          <a title="prev" href="#" className="slider_control up slider_control_0" style={{ display: 'block' }}></a>
                <div className="caroufredsel_wrapper caroufredsel_wrapper_vertical_carousel style-1" >
                  <ul className="blog small vertical_carousel autoplay-1 scroll-1 navigation-1 easing-easeInOutQuint duration-750 pr_preloader_vl_0 style-2" >
			            <li className="post" >
			              <a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html">
			                <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_12.jpg" style={{ display: 'block' }} />
			              </a>
			              <div className="post_content">
			                <h5>
			                  <a title="Syrian Civilians Trapped For Months Continue To Be Evacuated" href="post.html">Syrian Civilians Trapped For Months Continue To Be Evacuated</a>
			                </h5>
			                <ul className="post_details simple">
			                  <li className="category"><a title="WORLD" href="category_world.html">WORLD</a></li>
			                  <li className="date">
			                    10:11 PM, Feb 02
			                  </li>
			                </ul>
			              </div>
			            </li><li className="post" >
			              <a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">
			                <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_02.jpg" style={{ display: 'block' }} />
			              </a>
			              <div className="post_content">
			                <h5>
			                  <a title="Built on Brotherhood, Club Lives Up to Name" href="post_small_image.html">Built on Brotherhood, Club Lives Up to Name</a>
			                </h5>
			                <ul className="post_details simple">
			                  <li className="category"><a title="SPORTS" href="category_sports.html">SPORTS</a></li>
			                  <li className="date">
			                    10:11 PM, Feb 02
			                  </li>
			                </ul>
			              </div>
			            </li><li className="post" >
			              <a title="Nuclear Fusion Closer to Becoming a Reality" href="post.html">
			                <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_13.jpg" style={{ display: 'block' }} />
			              </a>
			              <div className="post_content">
			                <h5>
			                  <a title="Nuclear Fusion Closer to Becoming a Reality" href="post.html">Nuclear Fusion Closer to Becoming a Reality</a>
			                </h5>
			                <ul className="post_details simple">
			                  <li className="category"><a title="SCIENCE" href="category_science.html">SCIENCE</a></li>
			                  <li className="date">
			                    10:11 PM, Feb 02
			                  </li>
			                </ul>
			              </div>
			            </li><li className="post">
			              <a title="Study Linking Illnes and Salt Leaves Researchers Doubtful" href="post_gallery.html">
			                <span className="icon small gallery" style={{ display: 'block' }}></span>
			                <img alt="img" src="http://static.local/piousbox.com/images/samples/100x100/image_06.jpg" style={{ display: 'block' }} />
			              </a>
			              <div className="post_content">
			                <h5>
			                  <a title="Study Linking Illnes and Salt Leaves Researchers Doubtful" href="post_gallery.html">Study Linking Illnes and Salt Leaves Researchers Doubtful</a>
			                </h5>
			                <ul className="post_details simple">
			                  <li className="category"><a title="HEALTH" href="category_health.html">HEALTH</a></li>
			                  <li className="date">
			                    10:11 PM, Feb 02
			                  </li>
			                </ul>
			              </div>
			            </li></ul></div><a title="next" href="#" className="slider_control down slider_control_0" style={{ display: 'block' }}></a>
			        </div>
			        <h4 className="box_header page_margin_top_section">Top Authors</h4>
			        <ul className="authors rating clearfix">
			          <li className="author">
			            <a title="Debora Hilton" href="author.html" className="thumb">
			              <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_01.jpg" />
			              <span data-value="34" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">3</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">4</span></span></span></span></span></div></span><div style={{ height: '100px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			            </a>
			            <div className="details">
			              <h5><a title="Debora Hilton" href="author.html">Debora Hilton</a></h5>
			              <h6>EDITOR</h6>
			            </div>
			          </li>
			          <li className="author">
			            <a title="Anna Shubina" href="author.html" className="thumb">
			              <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_02.jpg" />
			              <span data-value="25" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">5</span></span></span></span></span></div></span><div style={{ height: '73.52px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1"></div></div>
			            </a>
			            <div className="details">
			              <h5><a title="Anna Shubina" href="author.html">Anna Shubina</a></h5>
			              <h6>EDITOR</h6>
			            </div>
			          </li>
			          <li className="author">
			            <a title="Liam Holden" href="author.html" className="thumb">
			              <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_03.jpg" />
			              <span data-value="9" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">9</span></span></span></span></span></div></span><div style={{ height: '26.47px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			            </a>
			            <div className="details">
			              <h5><a title="Liam Holden" href="author.html">Liam Holden</a></h5>
			              <h6>PUBLISHER</h6>
			            </div>
			          </li>
			          <li className="author">
			            <a title="Heather Dale" href="author.html" className="thumb">
			              <img alt="img" src="http://static.local/piousbox.com/images/samples/Team_100x100/image_04.jpg" />
			              <span data-value="2" className="number animated_element progress odometer odometer-theme-default"><div className="odometer-inside"><span className="odometer-digit"><span className="odometer-digit-spacer">8</span><span className="odometer-digit-inner"><span className="odometer-ribbon"><span className="odometer-ribbon-inner"><span className="odometer-value">2</span></span></span></span></span></div></span><div style={{ height: '5.88px' }} className="value_bar_container"><div className="value_bar animated_element duration-2000 animation-height height animation-1" ></div></div>
			            </a>
			            <div className="details">
			              <h5><a title="Heather Dale" href="author.html">Heather Dale</a></h5>
			              <h6>ILLUSTRATOR</h6>
			            </div>
			          </li>
			        </ul>
			      </div>
			    </div>
			  </div>
        { /* <Grid>
             <Row>
             <Col xs={12} xsOffset={0}
             md={6} mdOffset={0} mdPush={6} >
             <Features features={this.props.site.features} />
             </Col>
             <Col xs={12} xsOffset={0}
             md={6} mdPull={6} >
             <Newsitems />
             </Col>
             </Row>
             </Grid> */ }
			</div>
    )
  }
}

Home.propTypes = {
}

function mapStateToProps(state, ownProps) {
  return {
    apiUrl: state.apiUrl,
    site: state.site,
  }
}

export default connect(mapStateToProps)(Home)

