
import React from "react";
import {Link} from "react-router";

import "./../scss/loginOrRegister.scss";
import MyAjax from "./MyAjax.js";
export default class Register extends React.Component{
	constructor(props) {
	    super(props)
	}
	render(){
		$("#btn").on("tap",function(){
					//正则验证是否符合要求
					var userID = $("#userID").val();
					var password = $("#password").val();
					var password1 = $("#password1").val();
					if(userID == "" || password == ""){
						alert("信息不完整")
					}else if(password != password1){
						alert("两次密码不同")
						
					}else{
						var userObj= {
							url:"http://datainfo.duapp.com/shopdata/userinfo.php",
							data:{
								status:"register",
								userID:userID,
								password:password
							},
							dataType:"JSON"
						}
						
						MyAjax.zeptoAjax(userObj,function(data){
							if(data == "0"){
								alert("用户名重名")
							}else if(data == "1"){
								alert("注册成功")
							}else{
								alert("注册失败")
							}
						})
					}
				})
		return(
			<div className = "type">
				<div className="header">
					<div className="back">
					<Link to = "/user" >返回</Link>
					</div>
					<p>
						注册
					</p>
					<div id="home"><Link to = "/login" >登录</Link></div>
				</div>
				
				<div id="content">
					
					<form id="formLogin">
					<input type="text" id="userID" placeholder="请输入用户名"/>
					<input type="password" id="password"  placeholder="请输入密码"/>
					<input type="password" id="password1"  placeholder="请再次输入密码"/>
						<button id="btn">注册</button>
					</form>
				</div>
			</div>
		)
		
	}
	
}



