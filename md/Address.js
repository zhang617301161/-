import React from "react";
import {Link,hashHistory} from "react-router";

import "./../scss/address.scss"
export default class Address extends React.Component{
	constructor(props) {
	    super(props)
	    
	}
	onclick(){
	//	console.log(11111111111)
		
			var $men = $("#ipt-men").val();
			var $phone = $("#ipt-phone").val();
			var $address = $("#ipt-address").val();
			var $code = $("#zip-code").val();
			var $city = $("#sel_city").html();
			
			var arr = [];
			if($men == "" || $phone == "" || $address == "" || $code == "" ){
				alert("必填项没填写")
			}else if($city == "点击选取省市区县"){
				alert("请选择市区")
			}else if(!(/^1[0-9]{10}$/.test($phone))){
				alert("手机格式错误")
			}else{
				alert("可以了");
			
			//	console.log($men,$phone,$address,$code,$city);
				var data = {"men":$men,"phone":$phone,"address":$address,"code":$code,"cart":$city};
				arr.push(data);
				var arr1 = JSON.stringify(arr);  
			
				localStorage.setItem('Address', arr1, 10);
				//console.log(getCookie('Address'))
				hashHistory.push("/payment");
			}
			
		
	}
	render(){
		$("#home").on("tap",function(){
			
		})
		
		
		return(
			<div className = "type">
			
			<div className="container">
    <header id="header">
      <div className="back">
					<Link to = "/payment" >返回</Link>
					</div>
					<p>
						收货地址
					</p>
					<div id="home" onClick={this.onclick}>保存</div>
    </header>
    <div className="row main">
        <div className="col-md-12">
            <h2 className="top_title"></h2>
            
            <div className="row" >
              		 <input type="text" placeholder="收货人（必填）" id="ipt-men"/>
                    <input type="text" placeholder="电话（必填）" id="ipt-phone"/>
                    <a className="btn btn-info btn-lg active" role="button" id="sel_city">点击选取省市区县</a>
                    <input type="text" placeholder="填写详细地址（必填）" id="ipt-address"/>
                    <input type="text" placeholder="填写邮编（必填）" id="zip-code"/>
            </div>

        </div>
    </div>
   
</div>
</div>
		)
		
	}
	
}
