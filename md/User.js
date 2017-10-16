import React from "react";
import {Link,hashHistory} from "react-router";

import "./../scss/user.scss"
export default class Cart extends React.Component{
	constructor(props) {
	    super(props)
	}
	render(){
		
		var userID=localStorage.getItem("userID")
		var arr = [];
				if(userID == undefined){
					arr.push(<form id="formBtn" key={0}>
						  <p>-----用的走秀的接口 需要翻墙哦</p>
						<Link to="/login"><button>登录</button></Link>
						<Link to="/register"><button>注册</button></Link>
					</form>)
					
				}else{
			arr.push(
				<div id="main-user" key={0}>
				<span>欢迎{userID}您的到来使我们蓬荜生辉</span>
					<Link to="/payment"><button>我的订单</button></Link>
					</div>
			)
			
				}
				
		$("#home").on("tap",function(){
			localStorage.removeItem("userID")
			hashHistory.push('/login')
			
		})
		return(
			<div className = "type">
				<div className="header">
					<div className="back">
					<Link to = "/cart" >返回</Link>
					</div>
					<p>
						个人中心
					</p>
					<div id="home">退出</div>
				</div>
				
				<div id="content">
					
					{arr}
				</div>
			</div>
		)
		
	}
	
}
