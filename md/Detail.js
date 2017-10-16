import React from "react";
import {Link,hashHistory} from "react-router";
import MyAjax from "./MyAjax.js";

import "./../scss/detail.scss";
export default class Detail extends React.Component{
	constructor(props) {
	    super(props)
	    //console.log(this.props.location.query.item_id)
	    this.state={
	    	item_id:this.props.location.query.item_id,
	    	proList : [],
	    	proLists:[],
	    	proListes:[],
	    	proListImg:[],
	    	mask:[],
	    	listt:[],
	    	listtt:[] 
	    	
	    }

	}
	componentWillMount(){
		var that = this;
			$.ajax({
			type:"get",
			url:"http://m.meilishuo.com/jsonp/mls.h5_pintuan/v1?activityId=1bl51a&itemId="+this.state.item_id+"&_=1501847979707&callback=?",
			dataType:"josnp",
			success:function(data){
				console.log(data.data)
				var datas = data.data.skuInfo;
				var lists = data.data.skuInfo.props[0];
				var listss = data.data.skuInfo.props[1];
				var dataImg = data.data.detailInfo.detailImage[0].list;
				//console.log(dataImg)
				var dataes = data.data.columns;
				var data = data.data.itemInfo.topImages;
				//var masks = data.data.skuInfo.props;
			that.setState({
				proList :data,
				proLists :datas,
				proListes :dataes,
				proListImg :dataImg,
				listt:lists,
				listtt:listss
				
				//mask:masks
			})
			
		}		
	})
}

	lilist(index){
//		console.log(index.t)
		var index = index.t;
		$("#yanse li").eq(index).addClass("active").siblings().removeClass("active")
	}
	lilists(index){
//		console.log(index.v)
		var index = index.v;
		$("#chicun li").eq(index).addClass("actives").siblings().removeClass("actives")
	}
	onclick(){
			var that = this;
			var love = localStorage.getItem("love");		
			var userId = localStorage.getItem("userID");
			
			
			if(love == 0){
				if(userId == undefined){
				alert("请登录")
					hashHistory.push('/login');
			}else{
				
			var color1 = $("#yanse li").attr("class");
			var color2 = $("#chicun li").attr("class");
			console.log(color1,color2)
			if(color1 == undefined || color2 == undefined){
				alert("没有选择颜色和尺码")
			
			}else{
				var obj =	localStorage.getItem('data');
				var str = JSON.parse(obj); 
				var yanse = $("#yanse .active").html();
				var chima = $("#chicun .actives").html();
				var num =  $("#sums").html();
				var money =  $("#money").html();
				var src = $("#imgSum")[0].currentSrc;
		
				var title = $("#title-cart").html();
				console.log(yanse,chima,sums,src,title,money);
				var array = [];
				if(str == null){
					array.push({'yanse':yanse,'chima':chima,'num':num,'money':money,'title':title,'src':src});
					var str1 = JSON.stringify(array);  
					localStorage.setItem('data',str1);
					console.log(str1)
				}else{
					str.push({'yanse':yanse,'chima':chima,'num':num,'money':money,'title':title,'src':src});
					var str1 = JSON.stringify(str);  
					localStorage.setItem('data',str1);
					console.log(str1)
				}
				alert("添加购物车成功");
				$("#mask").css("display","none")
				
			}
		}
	}else{
		
		if(userId == undefined){
				alert("请登录")
					hashHistory.push('/login');
			}else{
				
			var color1 = $("#yanse li").attr("class");
			var color2 = $("#chicun li").attr("class");
			console.log(color1,color2)
			if(color1 == undefined || color2 == undefined){
				alert("没有选择颜色和尺码")
			
			}else{
				var arr = [];
				var yanse = $("#yanse .active").html();
				var chima = $("#chicun .actives").html();
				var num =  $("#sums").html();
				var money =  $("#money").html();
				var src = $("#imgSum")[0].currentSrc;
		
				var title = $("#title-cart").html();
				console.log(yanse,chima,sums,src,title,money);
				
				arr.push({'yanse':yanse,'chima':chima,'num':num,'money':money,'title':title,'src':src});
				var str = JSON.stringify(arr);  
				localStorage.setItem('address',str);
				
				localStorage.setItem('nums',0,5);
				hashHistory.push("/payment");
				$("#mask").css("display","none")
			}		
		}
	}
}
	render(){
		var that = this;
		var dataImg = this.state.proList;	
		var arr = [];
		for(var i in dataImg){
			arr.push(<div key={i} className="swiper-slide" id="imgDiv">
						<img src={dataImg[i]}/>
						</div>)
		}
		//标题
		var datas = this.state.proLists;	
		var arrs = [];
		//console.log(datas)
		
			arrs.push(<p key={0}>{datas.title}</p>)
			arrs.push(<span  key={1}>{datas.priceRange}</span>)
		//============================
		var dataes = this.state.proListes;
		var arres = [];
		for(var j in dataes){
			arres.push(<span key={j}>{dataes[j]}</span>)
		}
		//=======================
		var dataimg = this.state.proListImg;
		var arrimg = [];
		for(var n in dataimg){
			arrimg.push(<img key={n} src={dataimg[n]}/>)
		}
		//添加购物车的遮罩层
		var maskarr = [];
		maskarr.push(<img id="imgSum" key={0} src={dataImg[0]}/>)
		maskarr.push(<div className="right" key={1}>
								<p id="title-cart">{datas.title}</p>
								<i id="money">{datas.priceRange}</i>
								<span>请选择颜色</span>
								<b id="chahao">×</b>
							</div>)
		var lists = this.state.listt;

		var lisarr = [];
		
		for(var t in lists.list){
			lisarr.push(<li key={t} onClick={this.lilist.bind(this,{t})}>{lists.list[t].name}</li>);
		}
		var listss = this.state.listtt;


		var lisarrr = [];
	
		for(var v in listss.list){
			lisarrr.push(<li key={v} onClick={this.lilists.bind(this,{v})}>{listss.list[v].name}</li>);
		}
		
		$("#cartLi").on("tap",function(){
			var userId = localStorage.setItem("love",0);
			$("#mask").css("display","block")
			
		})
		$("#chahao").on("tap",function(){
			$("#mask").css("display","none")
		})
		$("#shops").on("tap",function(){
			var userId = localStorage.setItem("love",1);
			$("#mask").css("display","block")
		})
	
		$("#remove").on("tap",function(event){
		event.stopPropagation(); 
			var sums = $("#sums").html();
			if(sums == 1){
				sums = 1;
			}else{
				sums--;
			}
			$("#sums").html(sums);
		})
		$("#add").on("tap",function(){
			var sums = $("#sums").html();	
				sums++;			
			$("#sums").html(sums);
		})
		
		
		

		return(
			<div id="container">
			<div className = "type">
						
				<div id="content">
				
				<Link to="/cart"><div id = "fixed-cart"><img src="../img/cart.png"/></div></Link>
          
			       <div className="swiper-container" id="homeBanners">
						<div className="swiper-wrapper" id="homeWrapper">
						{arr}
						</div>
						<div className="swiper-pagination">		
						</div>
					</div>
					
					<div id="tittle"> {arrs}</div>
					
					<div id="xiaoliang">{arres}</div>
					
					<div id="main-Img"> {arrimg}</div>
					
					<div id="mask">
						<div id="mask-header">
							{maskarr}
						</div>
						<div id="mask-content">
						<ol>规格:</ol>
							<ul id="yanse">
								{lisarr}
							</ul>
							<ol>尺寸:</ol>
							<ul id="chicun">
							{lisarrr}
							</ul>
							<ol>数量:</ol>
							<ul id="shuliang">
							
							<li id="remove">-</li><li id="sums">1</li><li id="add">+</li>
							</ul>
						</div>
					<button id="btn" onClick = {this.onclick}>确定</button>
					</div>
					
				
				</div>
				<div id="footer" className="footer">
					<ul>
						<li>客服</li>
						<li>店铺</li>
						<li>收藏</li>
						<li id="cartLi" >购物车</li>
						<li id="shops">购买</li>
					</ul>
				</div>
			</div>
		</div>
		)
		
	}
	componentDidUpdate(){
		var mySwiper = new Swiper("#homeBanners",{
							pagination:".swiper-pagination",
							paginationType: 'fraction',
							slidesPerView: 'auto',
					        paginationClickable: true,
					        spaceBetween: 30
						});
		
	}
}
