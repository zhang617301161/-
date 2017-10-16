
import React from "react";
import {Link, hashHistory} from "react-router";
import "./../scss/kind2.scss";
export default class Kind2 extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pid:this.props.location.query.pid,
			
			proLists:[]
		}		
	}
	componentWillMount(){
		//console.log(this.state.pid);
		var that = this;
		$.ajax({
					type:"get",
					url:"http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&fcid="+this.state.pid+"&_=1502069811039&callback=?",
					dataType:"josnp",
					success:function(data){
						//console.log(data);
						
						var dataes = data.data.list;
						that.setState({
							
							proLists:dataes,
						
						})
				}						
			})	
		
	}
		toDetail(item_id){

		
			hashHistory.push({
			pathname:"/detail",
			query:{
				item_id:item_id,

				}
			})
	
	}
	render(){
		
		var that = this;
		var i = 0;
		//console.log(1111)
			$(".price").on("tap",function(){
					

					var arr=that.state.proLists;

					
					if(i == "0"){
					for(var j in arr){
						arr[j].price=(arr[j].price).slice(1,10)

					}
					localStorage.setItem("num",2)
						arr.sort(function(a,b){
							return b.price -a.price;						
						})
						
					i = 1;
						
					}else{
						for(var j in arr){
							arr[j].price=(arr[j].price).slice(1,10)
							//arr[j].price = (data[j].price).slice(1,9);
							//console.log(arr[j].price)
						}
							arr.sort(function(a,b){
								return a.price -b.price;						
							})
						//localStorage.removeItem("num");
						i = 0;
					}
					
					for(var j in arr){
							arr[j].price= "￥"+arr[j].price;
						
						}
						
					that.setState({
						proLists:arr								
					})
				})

	
		var datas= this.state.proLists;
		//console.log(datas)
		var array = [];
		for(var i in datas){
				array.push(<li key={i} onClick = {that.toDetail.bind(that,datas[i].iid)}>
							<img src={datas[i].show.img}/>
							<p>{datas[i].title}</p>
							<span>{datas[i].price}</span>
							<i>{datas[i].cfav}人已购买</i>							
						</li>)
		}
		
		$("#headerUl li").on("tap",function(){
			$(this).addClass("active").siblings().removeClass("active");
			
		})
		
	
		
		return (
			<div className = "type">
			 <div id="header">
			 	<ul id ="headerUl">
				 	<li className="active" >流行</li>
				 	<li>热销</li>
				 	<li className="price">价格</li>
				 </ul>
			 </div>
				<div id="content">
					<ul id="contentUl">
						{array}
						
					</ul>
				
				</div>
			</div>
			
		)
	}
}
