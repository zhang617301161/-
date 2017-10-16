import React from "react";
import {Link,hashHistory} from "react-router";
import "./../scss/search.scss";
export default class Screen extends React.Component{
	constructor(props) {
	    super(props);
	    
	}
//	componentWillMount(){

		
//}

	componentDidMount(){
		
		
		 $(".big-but").on("keyup",function(){
		// console.log($(".big-but").val());
		 var value = $(".big-but").val();
	
		 if(value == ""){
		 	$("#quxiao").css("display","block");
			$("#sousuo").css("display","none");
		 }else{
		 	 $("#quxiao").css("display","none");
		  $("#sousuo").css("display","block");
		 	
		 }
		 
		 	var val = encodeURI($(".big-but").val());
		 		//console.log(val);
		 	var url = 'https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%22'+val+'%22%7D&_=1502450029535&callback=?';
		 	$.ajax({
            url:url,
            type:"GET",
            success:function (data) { 
                //var jsonObj = JSON.parse(res);
               // console.log(data);
				var data = data.data.tips;
				$("#b2").html("");
				for (let i=0;i<data.length;i++) {
					$("#b2").append("<li><i>"+data[i].title+"</i></li>");
					//console.log(data[i].props.length)
					for (var j=0;j<data[i].props.length;j++) {
						
						$("#b2 li").eq(i).append("<span>"+data[i].props[j].title+"</span>");
					}
					
					
				}
				
				 $("#b2 li").on("tap",function(){
						var  val = $(this).find("i").html();
						//console.log(val);
						//console.log(11111111111)
							hashHistory.push({
										pathname:"/searchs",
										state:{
											val:val
										}
							})
						
					})
			}
		 	
		 })
	})
	$("#sousuo").on("tap",function(){
		
		var val = $(".big-but").val();
		//console.log(val);
		hashHistory.push({
						pathname:"/searchs",
						state:{
							val:val
						}
			})
	})
		
}
	fanhui(){
	 history.go(-1) 
}
//https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%2255%22%7D&_=1502438009679&callback=jsonp7
//https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%2299%22%7D&_=1502438047201&callback=jsonp10
//https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%22  %E5%A5%97%E8%A3%85  %22%7D&_=1502449878092&callback=jsonp16
//https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%22  %E9%9E%8B%E5%AD%90  %22%7D&_=1502449950827&callback=jsonp32
//https://search.mogujie.com/jsonp/searchTipsMLS/1?data=%7B%22keyword%22%3A%22  %E5%BA%8A           %22%7D&_=1502450029535&callback=jsonp40
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=%25E         5%25 BA%258A%25E4%25B8%258A%25E5%259B%259B%25E4%25BB%25B6%25E5%25A5%2597            &_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502499217145&callback=jsonp1	
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=%25E         5%25 A5%2597%25E8%25A3%2585%25E5%25A5%25B3%25E9%259F%25A9%25E7%2589%2588            &_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502499358344&callback=jsonp1
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=%25E         8%25 A1%25A3%25E6%259C%258D                                                         &_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502499293229&callback=?
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=             %25E5%25BA%258A           &_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502503083456&callback=jsonp1	
                                                                                                            //               %25E5%25BA%258A
//http://list.meilishuo.com/search?frame=0&page=1&sort=sell&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq=            %25E5%25BA%258A           &_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502505157185&callback=jsonp3

render(){
	
		
		return(
			<div className = "type">
				<div id="header">
					<div id="logo">
						
					</div>
					<div id="search">
						<ol>
							<i className="iconfont">&#xe86e;</i>
							<input className="big-but" type="text" placeholder="套装"/>
							
						</ol>
					</div>
					<div id="sousuo">搜索</div>
					<div id="quxiao" onClick={this.fanhui}><a >取消</a></div>
				</div>
				
				<div id="content">
					<ul id="b2">
						
					
					</ul>
				</div>
			</div>
		)
		
		
		
	}
	
	
}
