import React from "react";
import {Link,hashHistory} from "react-router";
import "./../scss/cart.scss";
export default class Kind extends React.Component{
	constructor(props) {
	    super(props)
	}

	
	remove(index){
		
				var that = this;
				var inx = index.i;
				var obj =	localStorage.getItem('data');
				var str = JSON.parse(obj); 
			
				console.log(index)
				str.splice(inx,1);
				//console.log(str);
				var str1 = JSON.stringify(str);  
				//console.log(str1);
				localStorage.setItem('data',str1);
				$("#cartMain li").eq(inx).remove();	
				//===============================
				var obj =	localStorage.getItem('data');
				var str = JSON.parse(obj); 
				console.log(obj.length)
				var numSum = 0;
				if(obj.length == 2){
					$("#sumMoney").html("")
					$("#sum").css("display","none");
					$("#cartMain").html("");
				}else{

					for(var j = 0 ;j<str.length;j++){
					var sum = str[j].money
					var sums = sum.split('¥')[1]*str[j].num;
					sums = sums.toFixed(2)
					numSum += Number(sums);
				
					$("#sumMoney").html("")
					$("#sumMoney").html('总价:￥'+numSum)
				}
			
					
				}
			

	}
	jiezhang(){
		localStorage.setItem('nums',1,5);
		hashHistory.push("/payment")
	}
	render(){
		var that = this;
		var arr = [];
		var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
			//console.log(str);
			var numSum = 0;
			if(obj.length == 2){
			}else{
			
				for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
				//console.log(sums);
				sums=Number(sums)
				arr.push(<li key={i}>
				<img src={str[i].src}/>
				<p>{str[i].title}</p>
				<ol><span>颜色：{str[i].yanse}</span><span>尺码：{str[i].chima}</span><span>数量：{str[i].num}
				</span></ol>
				<h1>¥{sums}</h1>
				<button className="remove" onClick={this.remove.bind(that,{i})}>删除</button>
			</li>)
				numSum += sums;
			}
					$("#sumMoney").html('总价:￥'+numSum)
				
		}
			
			
			
		return(
			<div className = "type">
			
				<div className="header">
					<div className="back">
					<Link to = "/user" >返回</Link>
					</div>
					<p>
						购物车
					</p>
					<div id="home"><Link to = "/" >首页</Link></div>
				</div>
				
				<div id="content">
					
				
				<ul id="cartMain">
			
					{arr}
				</ul>
				<div id="div-fooder">
				<button id="sum" onClick={this.jiezhang}>结算</button>
				<h2 id="sumMoney">总价:￥{numSum}</h2>
				</div>
				</div>
			</div>
		)
		
	}
	componentDidMount(){
		var obj =	localStorage.getItem('data');
				var str = JSON.parse(obj); 
				console.log(obj.length)
				var numSum = 0;
				if(obj.length == 2){
					$("#sumMoney").html("")
					$("#sum").css("display","none");
					$("#cartMain").html("");
				}else{

					for(var j = 0 ;j<str.length;j++){
					var sum = str[j].money
					var sums = sum.split('¥')[1]*str[j].num;
					sums = sums.toFixed(2)
					numSum += Number(sums);
				
					$("#sumMoney").html("")
					$("#sumMoney").html('总价:￥'+numSum)
				}
			
	}
				}
	componentDidUpData(){
		var obj =	localStorage.getItem('data');
				var str = JSON.parse(obj); 
				console.log(obj.length)
				var numSum = 0;
				if(obj.length == 2){
					$("#sumMoney").html("")
					$("#sum").css("display","none");
					$("#cartMain").html("");
				}else{

					for(var j = 0 ;j<str.length;j++){
					var sum = str[j].money
					var sums = sum.split('¥')[1]*str[j].num;
					sums = sums.toFixed(2)
					numSum += Number(sums);
				
					$("#sumMoney").html("")
					$("#sumMoney").html('总价:￥'+numSum)
				}
			
	}
				}
	
	
	
}
