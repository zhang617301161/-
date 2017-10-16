import React from "react";
import {Link,hashHistory} from "react-router";

import "./../scss/user.scss"
export default class Cashier extends React.Component{
	constructor(props) {
	    super(props)
	}
change(index){
	console.log(index);
	$(".change").eq(index).addClass("choice-color").siblings().removeClass("choice-color");
}
	render(){
			
	
		return(
			<div className = "type">
				<div className="header shouyintai" >
					<div className="back backs">
					<Link to = "/payment" >返回</Link>
					</div>
					<p>
						收银台
					</p>
					<div id="home"></div>
				</div>
				
				<div id="content">
					<ul id="Choice">
						<li className="choice-color change" onClick={this.change.bind(this,0)}><img src="img/zfb.png"/>支付宝付款 <span >√</span></li>
						<li className="change" onClick={this.change.bind(this,1)}><img src="img/wx.jpg"/>微信付款<span>√</span></li>
						<li className="change" onClick={this.change.bind(this,2)}><img src="img/yhk.png"/>银行卡付款<span>√</span></li>
					</ul>
					
				</div>
				<footer>
					<span id="add-sum"> </span>
					<button>付款</button>
				</footer>
				
				
				
			</div>
		)
		
	}
	componentDidMount(){
		
  
  var nums = localStorage.getItem('nums');
		if(nums == 0){
			var obj = localStorage.getItem("address");
		var data = JSON.parse(obj);
		//console.log(data);
		
		var sum = data[0].money
		var sums = sum.split('¥')[1]*data[0].num;
		sums = sums.toFixed(2)
		console.log(sums);
		$("#add-sum").html('￥'+sums)
		}else{
			var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
			console.log(obj.length);
			var numSum = 0;
			for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
				console.log(sums);
				sums=Number(sums);
				numSum += sums;
			}
			$("#add-sum").html('支付:￥'+numSum)
		
		}
			
}
	componentDidUpdate(){
	
 var nums = localStorage.getItem('nums');
		if(nums == 0){
			var obj = localStorage.getItem("address");
		var data = JSON.parse(obj);
		//console.log(data);
		
		var sum = data[0].money
		var sums = sum.split('¥')[1]*data[0].num;
		sums = sums.toFixed(2)
		console.log(sums);
		$("#add-sum").html('￥'+sums)
		}else{
			var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
			console.log(obj.length);
			var numSum = 0;
			for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
				console.log(sums);
				sums=Number(sums);
				numSum += sums;
			}
			$("#add-sum").html('支付:￥'+numSum)
		
		
		}	
}
	
}
