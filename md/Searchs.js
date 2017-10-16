
import React from "react";

import {Link,hashHistory} from "react-router";
import "./../scss/searchs.scss";
export default class Searchs extends React.Component{
	constructor(props) {
	    super(props)
	    this.state={
	    	proList : []
	    }
	}
	componentWillMount(){
		var that = this;
		var value =encodeURI(encodeURI(this.props.location.state.val));
		//console.log(value);
		$.ajax({
			type:"get",
			url:"http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-search&tag=&maxPrice=&minPrice=&wxPrice=&uq="+value+"&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&_=1502499293229&callback=?",
				
			dataType:"josnp",
			success:function(data){
			//	console.log(data)
		var datas = data.data.list;
			that.setState({
				proList :datas				
			})
		}		
	})
		
		
		
	}
	
toDetails(item_id){
		console.log(item_id)
		hashHistory.push({
			pathname:"/detail",
			query:{
				item_id:item_id,

			}
		})
	}	
 componentDidMount() {
  
     document.body.addEventListener('scroll', this.orderScroll.bind(this)); 
     
 }
 
 orderScroll() {
 //	let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
   // let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
  //  let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
   var scrollTop = document.body.scrollTop;
    //if((clientHeight+scrollTop)==(scrollHeight)){ //如果滚动到底部 
    
   // }
     console.log(scrollTop);
 }
	
	onclick(index){
		$("#searchUL li").eq(index).addClass("active").siblings().removeClass("active");
	}
	render(){
		var that = this;
		var datas = this.state.proList;
		console.log(datas);
		
			var array = [];
		for(var i in datas){
				array.push(<li key={i} onClick = {that.toDetails.bind(that,datas[i].iid)}>
							<img src={datas[i].show.img}/>
							<p>{datas[i].title}</p>
							<span>{datas[i].price}</span>
							<i>{datas[i].cfav}人已购买</i>							
						</li>)
		}
		
		

		return(
			<div className = "type">
				<div id="header" className="searchH">
			
				<div id="logo" >
						
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
				<ul id="searchUL">
						<li className="active"  onClick={this.onclick.bind(this,0)}>流行</li>
						<li onClick={this.onclick.bind(this,1)}>热销</li>
						<li onClick={this.onclick.bind(this,2)}>价格</li>
					</ul>
				<ul id = "list-search">
				{array}
				</ul>
			
				</div>
			</div>
		)
		
	}
	
}

