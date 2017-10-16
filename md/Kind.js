import React from "react";
import "./../scss/kind.scss"
import {Link, hashHistory} from "react-router";

export default class More extends React.Component{
	constructor(props) {
	   super(props)
	    //console.log(this.props.location.query.item_id)
	    this.state={
	    	//item_id:this.props.location.query.item_id,
	    	proList : [],

	    }
	}
	componentWillMount(){
		var that = this;
		$.ajax({
			type:"get",
			url:"https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1501917831006&callback=?",
			dataType:"josnp",
			success:function(data){
				//console.log(data)
				var datas = data.value;
			that.setState({
				proList :datas,
				
			})
				
			
			
		}		
	})
		
		
	}
	shuaxin(){
	 history.go(0) 
	}
	toDetail(pid){
		console.log(pid)
		
		if(pid == "10062770" || pid == "10057112" || pid == "10063910" ){
			hashHistory.push({
			pathname:"/kind2",
			query:{
				pid:pid,

				}
			})
		}else{
			hashHistory.push({
			pathname:"/kind1",
			query:{
				pid:pid,

			}
			})
		}

		
	}
	//https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1501917831006&callback=?
	render(){
		var that = this;
		var data = this.state.proList;	
		//console.log(data);
		var arr=[];
		var arrs = ["23020","23023","23021","23022","23019","23027","23018","23017","43814","52689","23525","23025","10062770","23523","10057112","10063910"]
		for(var i in data){
			arr.push(<li key={i} onClick = {that.toDetail.bind(that,arrs[i])}>
						<img src={data[i].image}/>
						<p>{data[i].title}</p>
						</li> )
			
			
			
//			var str = data[i].link;
//			var substr = str.split("pid=",2);
//			console.log(substr[1].slice(0,5)) 
		
		}
		
		return(
			<div className = "type">
				<div id="header">
					<div id="logo" onClick = {this.shuaxin}>
						
					</div>
					<div id="search">
						<Link to="/search"><ol>
							<i className="iconfont">&#xe86e;</i>
							套装
						</ol></Link>
					</div>
					<div id="chat"></div>
				</div>
				
				<div id="content">
				<span id="spanK">本周流行</span>
					<ul id="kindNav">
					
					{arr}
					
					</ul>
				
				</div>
			</div>
		)
		
	}
	
}
