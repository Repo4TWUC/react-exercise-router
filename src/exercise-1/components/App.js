import React, {Component} from 'react';
import './App.less';
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import AboutUs from "./AboutUs/AboutUs";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className="app">
        <header className="header">
          <Link to="/" >Home</Link>
          <Link to="/my-profile" >My Profile</Link>
          <Link to="/about-us" >About Us</Link>
        </header>
        <Route exact path="/" component={Home}/>
        <Route path="/my-profile" component={MyProfile}/>
        <Route path="/about-us" component={AboutUs}/>
      </Router>
    );
  }
}

export default App;
