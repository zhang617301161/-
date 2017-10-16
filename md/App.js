
import React from "react";

import {Link, IndexLink} from "react-router";

export default class App extends React.Component{
	constructor(props) {
	    super(props)
	}
	
	render(){
		return(
			<div id="container">
				{this.props.type}
				<footer id="footer">
					<ul>
						<li>
							<IndexLink to = "/" activeClassName="active">
							<p className="iconfont">&#xe608;</p>
							首页
							</IndexLink>
						</li>
						<li>
							<Link to = "/kind" activeClassName="active">
							<p className="iconfont">&#xe682;</p>
							分类</Link>
						</li>
						<li>
							<Link to = "/cart" activeClassName="active">
							<p className="iconfont">&#xe68d;</p>
							购物车</Link>
						</li>
						<li>
							<Link to = "/user" activeClassName="active">
							<p className="iconfont">&#xe601;</p>
							我的</Link>
						</li>
						
					</ul>
				</footer>
			</div>			
		)
		
	}	
}