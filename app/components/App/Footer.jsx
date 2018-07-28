import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap'

import bg from './images/bg1.png'

import ig from './images/social/instagram.png'
import fb from './images/social/facebook.png'
import uu from './images/social/youtube.png'

import config from 'config'

import { siteShow } from '../../actions'

import { Link } from 'react-router'
import AppRouter from './AppRouter'

import es from './images/flags/es.png'
import ru from './images/flags/ru.png'
import en from './images/flags/en.png'
import pt from './images/flags/pt.png'

import {
  DO_LOGOUT,
} from '../../constants'

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
        langs.push(<li key={lang} ><Link to={AppRouter.siteLink(lang)}><img src={flag} alt={lang} /></Link></li>)
      })
    }

    return (
      <div className="footer_container">
				<div className="footer clearfix">
					<div className="row">
						<div className="column column_1_3">
							<h4 className="box_header">About PressRoom</h4>
							<p className="padding_top_bottom_25">Maecenas mauris elementum, est morbi interdum cursus at elite imperdiet libero. Proin odios dapibus integer an nulla augue pharetra cursus.</p>
							<div className="row">
								<div className="column column_1_2">
									<h5>PressRoom Ltd.</h5>
									<p>
										33 Farlane Street<br />
										25-100 Keilor East,<br />
										Australia
									</p>
								</div>
								<div className="column column_1_2">
									<h5>Phone &amp; Fax</h5>
									<p>
										Phone: 1-800-64-38<br />
										Fax: 1-800-64-39
									</p>
								</div>
							</div>
							<h4 className="box_header page_margin_top">Get In Touch With Us</h4>
							<ul className="social_icons dark page_margin_top clearfix">
								<li>
									<a target="_blank" title="" href="http://facebook.com/QuanticaLabs" className="social_icon facebook">&nbsp;</a>
								</li>
								<li>
								  <a target="_blank" title="" href="https://twitter.com/QuanticaLabs" className="social_icon twitter">&nbsp;</a>
								</li>
								<li>
									<a title="" href="mailto:contact@pressroom.com" className="social_icon mail">&nbsp;</a>
								</li>
								<li>
									<a title="" href="#" className="social_icon skype">&nbsp;</a>
								</li>
								<li>
									<a title="" href="http://themeforest.net/user/QuanticaLabs?ref=QuanticaLabs" className="social_icon envato">&nbsp;</a>
								</li>
								<li>
									<a title="" href="#" className="social_icon instagram">&nbsp;</a>
								</li>
								<li>
									<a title="" href="#" className="social_icon pinterest">&nbsp;</a>
								</li>
							</ul>
						</div>
						<div className="column column_1_3">
							<h4 className="box_header">Latest Posts</h4>
							<div className="vertical_carousel_container clearfix">
								<ul className="blog small vertical_carousel autoplay-1 scroll-1 navigation-1 easing-easeInOutQuint duration-750">
									<li className="post">
										<a href="post_gallery.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">
											<span className="icon small gallery"></span>
											<img src='images/samples/100x100/image_06.jpg' alt='img' />
										</a>
										<div className="post_content">
											<h5>
												<a href="post_gallery.html" title="Study Linking Illnes and Salt Leaves Researchers Doubtful">Study Linking Illnes and Salt Leaves Researchers Doubtful</a>
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
									<li className="post">
										<a href="post.html" title="Nuclear Fusion Closer to Becoming a Reality">
											<img src='images/samples/100x100/image_13.jpg' alt='img' />
										</a>
										<div className="post_content">
											<h5>
												<a href="post.html" title="Nuclear Fusion Closer to Becoming a Reality">Nuclear Fusion Closer to Becoming a Reality</a>
											</h5>
											<ul className="post_details simple">
												<li className="category"><a href="category_science.html" title="SCIENCE">SCIENCE</a></li>
												<li className="date">
													10:11 PM, Feb 02
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="column column_1_3">
							<h4 className="box_header">Latest Galleries</h4>
							<div className="horizontal_carousel_container big page_margin_top">
								<ul className="blog horizontal_carousel visible-1 autoplay-0 scroll-1 navigation-1 easing-easeInOutQuint duration-750">
									<li className="post">
										<a href="post_gallery.html" title="Struggling Nuremberg Sack Coach Verbeek">
											<span className="icon gallery"></span>
											<img src='images/samples/330x242/image_03.jpg' alt='img' />
										</a>
										<h5 className="with_number">
											<a href="post_gallery.html" title="Struggling Nuremberg Sack Coach Verbeek">Struggling Nuremberg Sack Coach Verbeek</a>
											<a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
										</h5>
										<ul className="post_details simple">
											<li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
											<li className="date">
												10:11 PM, Feb 02
											</li>
										</ul>
									</li>
									<li className="post">
										<a href="post_gallery.html" title="Built on Brotherhood, Club Lives Up to Name">
											<span className="icon gallery"></span>
											<img src='images/samples/330x242/image_14.jpg' alt='img' />
										</a>
										<h5 className="with_number">
											<a href="post_gallery.html" title="Built on Brotherhood, Club Lives Up to Name">Built on Brotherhood, Club Lives Up to Name</a>
											<a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
										</h5>
										<ul className="post_details simple">
											<li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
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
										<h5 className="with_number">
											<a href="post_gallery.html" title="New Painkiller Rekindles Addiction Concerns">New Painkiller Rekindles Addiction Concerns</a>
											<a className="comments_number" href="post_gallery.html#comments_list" title="2 comments">2<span className="arrow_comments"></span></a>
										</h5>
										<ul className="post_details simple">
											<li className="category"><a href="category_sports.html" title="SPORTS">SPORTS</a></li>
											<li className="date">
												10:11 PM, Feb 02
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row page_margin_top_section">
						<div className="column column_3_4">
							<ul className="footer_menu">
								<li>
									<h4><a href="category_world.html" title="World">World</a></h4>
								</li>
								<li>
									<h4><a href="category_health.html" title="Health">Health</a></h4>
								</li>
								<li>
									<h4><a href="category_sports.html" title="Sports">Sports</a></h4>
								</li>
								<li>
									<h4><a href="category_science.html" title="Science">Science</a></h4>
								</li>
								<li>
									<h4><a href="category_lifestyle.html" title="Lifestyle">Lifestyle</a></h4>
								</li>
							</ul>
						</div>
						<div className="column column_1_4">
							<a className="scroll_top" href="#top" title="Scroll to top">Top</a>
						</div>
					</div>
					<div className="row copyright_row">
						<div className="column column_2_3">
							&copy; Copyright <a href="http://quanticalabs.com" title="QuanticaLabs" target="_blank">QuanticaLabs</a> - PressRoom Template. 
              <a href="https://themeforest.net/cart/add_items?item_ids=9066845&ref=QuanticaLabs" title="PressRoom Template" target="_blank">Click here to buy it</a> 
						</div>
						<div className="column column_1_3">
							<ul className="footer_menu">
								<li>
									<h6><a href="about.html" title="About">About</a></h6>
								</li>
								<li>
									<h6><a href="authors.html" title="Authors">Authors</a></h6>
								</li>
								<li>
									<h6><a href="contact.html" title="Contact Us">Contact Us</a></h6>
								</li>
							</ul>
						</div>
					</div>
				</div>
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

      
      
