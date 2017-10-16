
import React from "react";
import {Link,hashHistory} from "react-router";

import "./../scss/loginOrRegister.scss";
import MyAjax from "./MyAjax.js";
export default class Login extends React.Component{
	constructor(props) {
	    super(props)
	}
	render(){
		
		
		
		$("#btn").on("tap",function(){
				console.log(111111111)
					var userID = $("#userID").val();
					var password = $("#password").val();
					
					if(userID == "" || password == ""){
						alert("信息不完整")
					}else{
						
						var userObj= {
							url:"http://datainfo.duapp.com/shopdata/userinfo.php",
							data:{
								status:"login",
								userID:userID,
								password:password
							},
							dataType:"JSON"
						}
						
						MyAjax.zeptoAjax(userObj,function(data){
							if(data == "0"){
								alert("用户名错误")
							}else if(data == "2"){
								alert("密码错误")
							}else{
								alert("登录成功")
								//存储一个登录状态

								localStorage.setItem("userID",userID)
								hashHistory.push('/');
								$("#formLogin").html("欢迎你");
							
							
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
						登录
					</p>
					<div id="home"><Link to = "/register" >注册</Link></div>
				</div>
				
				<div id="content">
					
					<form id="formLogin">
					<input id="userID" type="text" placeholder="用户名"/>
							<input  id="password" type="password" placeholder="密码"/>
								<button id="btn">登录</button>
					</form>
				</div>
			</div>
		)
		
	}
	
}



