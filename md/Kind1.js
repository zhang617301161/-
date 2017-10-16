import React from "react";
import "./../scss/kind.scss"
import {Link, hashHistory} from "react-router";
export default class Kind1 extends React.Component{
	constructor(props) {
	    super(props)
	     this.state={
	    	pid:this.props.location.query.pid,
	    	proList : [],
	    	proLists:[],
	    	proListes:[],
	    	proListImg:[]
	    
	    }
	}
	componentWillMount(){
		
		var that = this;

			//console.log(this.state.pid);
	
				
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&fcid=10063910&_=1502069811039&callback=?
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&fcid=10057112&_=1502069863142&callback=?
//http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=0d0e6302-cfaf-4357-a241-8ddf6554ca41&fcid=10058482&_=1502069882153&callback=?
				if(this.state.pid == "43814" ||this.state.pid == "52689"){
					$.ajax({
					type:"get",
					url:"https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid="+this.state.pid+"&_=1501919288900&callback=?",
					dataType:"josnp",
					success:function(data){
						
						var title = data.value.category_1.info.title;
						var dataes = data.value.category_1.list;
						//console.log(data);
						
								
						that.setState({
							proList :title,	
							proLists:dataes,
						
						})
						
						
				}
			
				
				
			
			})	
					
					
				}else{
					$.ajax({
					type:"get",
					url:"https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid="+this.state.pid+"&_=1501919288900&callback=?",
					dataType:"josnp",
					success:function(data){
						
						var title = data.value.category_1.info.title;
						var dataes = data.value.category_1.list;
						//console.log(data);
						var titles = data.value.category_2.info.title;
						var datas = data.value.category_2.list;
								
						that.setState({
							proList :title,	
							proLists:dataes,
							proListes :titles,	
							proListImg:datas,
						})
						
				}
			
				
				
			
			})	
			
				
		
		}		
	
}
	toDetail(pid){
			hashHistory.push({
			pathname:"/kind2",
			query:{
				pid:pid,

				}
			})		
	}
	
		
	render(){
		var that = this;
		var title = this.state.proList;
		
		var tittle=[];
		tittle.push(<span key={0}>{title}</span>);
		//---------------------
		var dataes = this.state.proLists;
		var arr = [];
		var a=[];
		for(var i in dataes){
			var link1 = dataes[i].link;
			var substr = link1.split("fcid=",8);
			var ni = substr[1].slice(0,8)
			a.push(ni);
			
			arr.push(<li key={i} onClick = {that.toDetail.bind(that,a[i])}>
							<img src={dataes[i].image}/>
							<p>{dataes[i].title}</p>
						</li>)
			
		
						
		}
		var titles = this.state.proListes;
		
		var tittles=[];
		tittles.push(<span key={1}>{titles}</span>);
		//---------------------
		var datas = this.state.proListImg;
		console.log(datas);
		var arrs = [];
		var b=[];
		for(var j in datas){
			var link2 = datas[j].link;

			var substr1 = link2.split("fcid=",8);
			var nii = substr1[1].slice(0,8)
			b.push(nii);
			
			arrs.push(<li key={j} onClick = {that.toDetail.bind(that,b[j])}>
							<img src={datas[j].image}/>
							<p>{datas[j].title}</p>
						</li>)
			
		}
		
		
		return(
				<div className = "type">
				
				<div id="content">
					
					<ul id="ulNav">
					{tittle}
						{arr}
					</ul>
					
					
					<ul id="ulNavs">
					{tittles}
						{arrs}
					</ul>
				
				</div>
				
			</div>
		)
		

		
		
		
	}
	
}
