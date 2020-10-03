import React, { Component } from "react";
import Roster from "./RosterComponent";
import Rules from "./RulesComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Apply from "./ApplyComponent";
import About from "./AboutComponent";
import Resources from "./ResourcesComponent";
import Calendar from "./CalendarComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
	render() {
		return (
			<div>
					<Header />
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/calendar" component={Calendar} />
						<Route path="/about" component={About} />
						<Route path="/rules" component={Rules} />
						<Route path="/roster" component={Roster} />
						<Route path="/apply" component={Apply} />
						<Route path="/resources" component={Resources} />
						<Redirect to="/home" />
					</Switch>
					<Footer />
			</div>
		);
	}
}

export default Main;
