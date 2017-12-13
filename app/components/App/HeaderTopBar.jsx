import React from 'react'

class HeaderTopBar extends React.Component {
  render () {
    return (
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
    )
  }
}

export default HeaderTopBar
