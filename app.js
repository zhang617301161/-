

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute} from "react-router";

import "./scss/main.scss";

import App from "./md/App.js";
import Home from "./md/Home.js";
import Kind from "./md/Kind.js";
import Cart from "./md/Cart.js";
import User from "./md/User.js";
import Search from "./md/Search.js";

import Kind1 from "./md/Kind1.js";
import Kind2 from "./md/Kind2.js";
import Login from "./md/Login.js";
import Detail from "./md/Detail.js";
import Payment from "./md/Payment.js";
import Register from "./md/Register.js";
import Address from "./md/Address.js";
import Cashier from "./md/Cashier.js";
import Searchs from "./md/searchs.js";
ReactDOM.render((<Router  history = {hashHistory}>
				    <Router path = "/" component = {App}>
			    	<IndexRoute components = {{type:Home}} />
			    	<Router path = "kind" components = {{type:Kind}} />
			    	<Router path = "cart" components = {{type:Cart}} />
			    	<Router path = "user" components = {{type:User}} />    	
					</Router>
					<Router path = "/detail" component = {Detail}></Router>
					<Router path = "/search" component = {Search}></Router>
					<Router path = "/Kind1" component = {Kind1}></Router>
					<Router path = "/Kind2" component = {Kind2}></Router>
					<Router path = "/login" component = {Login}></Router>
					<Router path = "/register" component = {Register}></Router>
					<Router path = "/payment" component = {Payment}></Router>
					<Router path = "/address" component = {Address}></Router>
					<Router path = "/cashier" component = {Cashier}></Router>
					<Router path = "/searchs" component = {Searchs}></Router>
				</Router>
),document.getElementById("app"))
