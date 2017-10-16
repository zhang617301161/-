import React from "react";
import "./../scss/home.scss";
import {Link, hashHistory} from "react-router";
import MyAjax from "./MyAjax.js"
export default class Home extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	    	proList : [],
	    	proLists : [],
	    	proListes : [],
	    	proListess : []
	    }
	   
	}
componentWillMount(){
		this._isMounted = true
		var that = this;
		$.ajax({
			type:"get",
			url:"http://mce.mogujie.com/jsonp/multiget/3?pids=43542&_=1501758276752&callback=?",
			dataType:"josnp",
			success:function(data){
				var dataImg = data.data[43542].list
				
				//console.log(data)
	
			that.setState({
				proList :dataImg
				
			})
		}			
	})
		//轮播下面一排
		$.ajax({
			type:"get",
			url:"http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C13730%2C59540%2C42287&callback=?",
			dataType:"josnp",
			success:function(data){
				//console.log(data)
				var data = data.data[13730].list;
			that.setState({
				proLists :data				
			})
		}		
	})
		//超值拼团
		$.ajax({
			type:"get",
			url:"http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C13730%2C59540%2C42287&callback=?",
			dataType:"josnp",
			success:function(data){
				//console.log(data)
				var data = data.data[59540].list;
			that.setState({
				proListes :data				
			})
		}		
	})
	//最下面一排

			
		$.ajax({
			type:"get",
			url:"http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&sort=new&_=1501850866739&callback=?",
			dataType:"josnp",
			success:function(data){
				console.log(data)
				var datas = data.data.list;
			that.setState({
				proListess :datas				
			})
		}		
	})
		
}

componentWillUnmount() {
        this._isMounted = false
}

//http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C13730%2C59540%2C42287&callback=jsonp5868_6348_13730_59540_42287
//
	toDetail(item_id){
		console.log(item_id)
		hashHistory.push({
			pathname:"/detail",
			query:{
				item_id:item_id,

			}
		})
	}
	
	
shuaxin(){
	 history.go(0) 
}
//onclickCorol(){
//	var that =this;
//	console.log($(".endTitle p").html())
//	console.log("11111")
//	 $(this).addClass("active").siblings().removeClass("active");
//}

onscroll(){
	console.log("滚动了")
}



	render(){
		
		var that = this;
		//轮播
		var data = this.state.proList;		
		
		var arr = [];
		for(var i in data){
			arr.push(<div key={i} className="swiper-slide" id="imgDiv">
						<img src={data[i].image}/>
						</div>)
		}
		//轮播下面一排
		var data1 = this.state.proLists;
		
		//console.log(data1);
		var arrar = [];
		for(var j in data1){
			arrar.push(<div key={j} id="lunboDown">
						<img src={data1[j].image}/>
						<p>{data1[j].title}</p>
						</div>)
		}
		//超值拼团
		var data2 = this.state.proListes;
		//console.log(data2)
		var arrars = [];
		for(var n in data2){
			arrars.push(<li key={n} onClick = {that.toDetail.bind(that,data2[n].item_id)}>
								<img src={data2[n].image}/>
								<div id = "liDiv">
									<p>{data2[n].title}</p>
									<span>￥{data2[n].price}</span>
									<i>￥{data2[n].discountPrice}</i><br/>
									<ol>2人开团-已团{data2[n].pintuanItemSale}件</ol>
									<button>去开团</button>								
								</div>
							
							</li>)
		}
		//最下面
		var data3 = this.state.proListess;
		var arrarss = [];
		for(var v in data3){
			arrarss.push(<li key={v} onClick = {that.toDetail.bind(that,data3[v].iid)}>
								<img src={data3[v].show.img}/>
								<p>{data3[v].title}</p>
								<span>{data3[v].price}</span><em><img src="./img/stat.png"/></em>
								<i>{data3[v].cfav}</i>
								
							
							</li>)
			}
		$(".endTitle p").on("tap",function(){
			$(this).addClass("active").siblings().removeClass("active");
		
	
		//console.log(data2)
		
		})
		
		
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&sort=pop&_=1501850320828&callback=
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=4a1218f0-b035-4b54-b497-e337430bf9bd&sort=pop&_=1501848565385&callback=
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=4a1218f0-b035-4b54-b497-e337430bf9bd&sort=new&_=1501849984550&callback=
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=4a1218f0-b035-4b54-b497-e337430bf9bd&sort=sell&_=1501850004557&callback=
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&sort=new&_=1501894661369&callback=jsonp6
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&sort=sell&_=1501894688397&callback=jsonp7
		//========================================================
		$("#content").on("onWheel",function(){
			console.log("滚动了")
		})
		
		return(
			<div className = "type">
				<div id="header">
					<div id="logo" onClick = {this.shuaxin}>
						
					</div>
					<div id="search">
						<Link to="/search"><ol>
							<i className="iconfont" >&#xe86e;</i>
							套装
						</ol>
						</Link>
					</div>
					<div id="chat"></div>
				</div>
				
				<div id="content">
						<div className="swiper-container" id="homeBanner">
						<div className="swiper-wrapper" id="homeWrapper">
						{arr}
						</div>
						<div className="swiper-pagination"></div>
					</div>
					
					<div id="bannerList">					
						{arrar}
					</div>
					
					<div id="mainNav">
						<div className="mainTittle">
							<span>超值拼团</span>
							<span>全部拼团></span>
						</div>
						<ul id="ulNav">
							{arrars}
						</ul>
					</div>
					
					<div id="navEnd">
						<div className="endTitle">
							<p className=" active" >流行</p><p>新款</p>
							<p >精选</p>
						</div>
						
						<ul id="ulEnd">
							{arrarss}
							
						
						</ul>
					
					</div>
					
					
					
				</div>
			</div>
		)
						
		
	}
	
	componentDidUpdate(){
		var mySwiper = new Swiper("#homeBanner",{
							pagination:".swiper-pagination",
							autoplay:3000,
							loop:true,
							autoplayDisableOnInteraction:false
						});
		
	}
	
}


