import React from "react";
import {Link,hashHistory} from "react-router";
import "./../scss/payment.scss";
export default class Payment extends React.Component{
	constructor(props) {
	    super(props);
	    this.state={
	    	proList:[],
	    }
	     
	}
	tjdd(){
		var shdz = $(".shdz").html();
		if(shdz == null){
			hashHistory.push("/cashier")
		}else{
			alert("请填写收货地址");
			hashHistory.push("/address")
		}

		
	}
	componentWillMount(){
		var that = this;
			var objs = localStorage.getItem("Address");
		var datas = JSON.parse(objs);
		//console.log(datas);
		that.setState({
				proList :datas
				
			})
	
	}





	render(){
		var nums = localStorage.getItem('nums');
		var arr = [];
		if(nums == 0){
			var obj = localStorage.getItem("address");
		var data = JSON.parse(obj);
		//console.log(data);
	
		var sum = data[0].money
		var sums = sum.split('¥')[1]*data[0].num;
		sums = sums.toFixed(2)
		//console.log(sums)
		arr.push(<li key={0}>
							<img src={data[0].src}/>
							<p>{data[0].title}</p>
							<ol><span>颜色：{data[0].yanse}</span><span>尺码：{data[0].chima}</span><span>数量：x{data[0].num}
							</span></ol>
							<h1>{data[0].money}</h1>
							
						</li> )
		$(".sum-shop").html('￥'+sums)
			
		}else{
			
		var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
	
			var numSum = 0;
			for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
			
				sums=Number(sums)
				arr.push(<li key={i}>
				<img src={str[i].src}/>
				<p>{str[i].title}</p>
				<ol><span>颜色：{str[i].yanse}</span><span>尺码：{str[i].chima}</span><span>数量：{str[i].num}
				</span></ol>
				<h1>¥{sums}</h1>
		
			</li>)
				numSum += sums;
			}
					$(".sum-shop").html('￥'+numSum)
		}
		
		var array = [];
		var datas = this.state.proList;

		if(datas == undefined){
			array.push(<span key={0} className="shdz">请填写收货地址</span>)
		}else{
			array.push(
				<div key={0}>
				
				<span>收件人:{datas[0].men}</span> <span>{datas[0].phone}</span>
		<p>{datas[0].cart}{datas[0].address}</p>
		</div>
			)
		}
	
	
		return(
			<div id="container">
			<div className = "type">
				<div id="header">
				<div className="back">
					<Link to = "/" >返回</Link>
					</div>
					<p>
						订单确认
					</p>
					<Link to = "/" ><div id="home" >取消订单</div></Link>
			
				</div>
				
				<div id="content">
				
					<Link to="/address"><div id="address"><b></b>
					{array}
					<b></b></div></Link>
					<ul id="goods-list"> 
						{arr}
						<li><strong>配送方式:</strong><i>全国包邮</i></li>
						<li><strong>快递运费:</strong><i>¥0.00</i></li>
						<li><strong>价格合计:</strong><i className="sum-shop"></i></li>
						<input id="ipt-payment" type="text" placeholder="给卖家留言"/>
					</ul>
					<div className="time">
						<span >剩余付款时间:</span>
					    <span id="t_d">00天</span>
					    <span id="t_h">00时</span>
					    <span id="t_m">00分</span>
					    <span id="t_s">00秒</span>
					 </div>
					<div id="payment-box">
						<span>应付款:</span><i className="sum-shop"></i>
						<button id="tjdd" onClick={this.tjdd}>提交订单</button>
					</div>
				</div>
			</div>
		</div>
		)
		
	}
	

componentDidMount(){
		function GetRTime(){
    var EndTime= new Date('2017/08/15 10:50:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
 			if(s<10 && m>10){
 				document.getElementById("t_s").innerHTML = "0" + s + "秒";
 				document.getElementById("t_m").innerHTML = m + "分";
 			}else if(m<10 && s>10){
 				document.getElementById("t_m").innerHTML = "0" + m + "分";
		    	document.getElementById("t_s").innerHTML = s + "秒";
 			}else if(s<10 && m<10){
 				document.getElementById("t_m").innerHTML = "0" +m + "分";
 				document.getElementById("t_s").innerHTML =  "0" + s + "秒";
 			}else{
 				 document.getElementById("t_m").innerHTML = m + "分";
		   		 document.getElementById("t_s").innerHTML = s + "秒";
 			}
 
 		 	//document.getElementById("t_d").innerHTML = d + "天";
		   // document.getElementById("t_h").innerHTML = h + "时";
		  
 	
 
   
  }
   this.timess = setInterval(GetRTime,1000);
  
  var nums = localStorage.getItem('nums');
  if(nums == 0){
			var obj = localStorage.getItem("address");
		var data = JSON.parse(obj);
		//console.log(data);
	
		var sum = data[0].money
		var sums = sum.split('¥')[1]*data[0].num;
		sums = sums.toFixed(2)

		$(".sum-shop").html('￥'+sums)			
		}else{
				var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
		
			var numSum = 0;
			for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
	
				sums=Number(sums)
				numSum += sums;
			}
					$(".sum-shop").html('￥'+numSum)
		}	
}
	componentDidUpdate(){
		
		function GetRTime(){
    var EndTime= new Date('2017/08/15 10:50:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
 			if(s<10 && m>10){
 				document.getElementById("t_s").innerHTML = "0" + s + "秒";
 				document.getElementById("t_m").innerHTML = m + "分";
 			}else if(m<10 && s>10){
 				document.getElementById("t_m").innerHTML = "0" + m + "分";
		    	document.getElementById("t_s").innerHTML = s + "秒";
 			}else if(s<10 && m<10){
 				document.getElementById("t_m").innerHTML = "0" +m + "分";
 				document.getElementById("t_s").innerHTML =  "0" + s + "秒";
 			}else{
 				 document.getElementById("t_m").innerHTML = m + "分";
		   		 document.getElementById("t_s").innerHTML = s + "秒";
 			}
 
 		 	//document.getElementById("t_d").innerHTML = d + "天";
		   // document.getElementById("t_h").innerHTML = h + "时";
		  
 	
 
   
  }
  this.times = setInterval(GetRTime,1000);
  
  var nums = localStorage.getItem('nums');
  if(nums == 0){
			var obj = localStorage.getItem("address");
		var data = JSON.parse(obj);
		//console.log(data);
	
		var sum = data[0].money
		var sums = sum.split('¥')[1]*data[0].num;
		sums = sums.toFixed(2)
	
		$(".sum-shop").html('￥'+sums)			
		}else{
				var obj =	localStorage.getItem('data');
			var str = JSON.parse(obj); 
		
			var numSum = 0;
			for(var i = 0 ;i<str.length;i++){
				var sum = str[i].money
				var sums = sum.split('¥')[1]*str[i].num;
				sums = sums.toFixed(2)
				
				sums=Number(sums)
				numSum += sums;
			}
					$(".sum-shop").html('￥'+numSum)
		}	
}
	componentWillUnmount(){
		clearInterval(this.times);
			clearInterval(this.timess)
	}
	
}

