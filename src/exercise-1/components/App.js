import React, {Component} from 'react';
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import AboutUs from "./AboutUs/AboutUs";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      curPath: '/'
    }
  }
  render() {
    return (
        <Router className="app">
          <header className="page-header">
            <NavLink
                exact
                to="/"
                activeClassName="active"
            >Home</NavLink>
            <NavLink
                to="/my-profile"
                activeClassName="active"
            >My Profile</NavLink>
            <NavLink
                to="/about-us"
                activeClassName="active"
            >About Us</NavLink>
          </header>
          <Route exact path="/" component={Home}/>
          <Route path="/my-profile" component={MyProfile}/>
          <Route path="/about-us" component={AboutUs}/>
        </Router>
    );
  }
}

export default App;
