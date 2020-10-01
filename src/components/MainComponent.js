import React, { Component } from "react";
import Roster from "./RosterComponent";
import Rules from "./RulesComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Apply from "./ApplyComponent";
import About from "./AboutComponent";
import Resources from './ResourcesComponent';
import Calendar from './CalendarComponent';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Main extends Component {
  
  render() {
    const HomePage = () => {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/roster" component={Roster} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/resources" component={Resources} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }}
}


export default Main;
