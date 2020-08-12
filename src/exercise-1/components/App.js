import React, {Component} from 'react';
import Home from "./Home/Home";
import Products from "./Products/Products";
import SingleProducts from "./Products/SingleProducts";
import MyProfile from "./MyProfile/MyProfile";
import AboutUs from "./AboutUs/AboutUs";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect, Switch
} from "react-router-dom";
import './App.scss';

class App extends Component {
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
                to="/products"
                activeClassName="active"
            >Products</NavLink>
            <NavLink
                to="/my-profile"
                activeClassName="active"
            >My Profile</NavLink>
            <NavLink
                to="/about-us"
                activeClassName="active"
            >About Us</NavLink>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route path="/goods" >
              <Redirect to="/products" />
            </Route>
            <Route path="/products/:id" component={SingleProducts} />
            <Route path="/my-profile" component={MyProfile}/>
            <Route path="/about-us" component={AboutUs}/>
            <Route path="*" component={Home} />
          </Switch>
        </Router>
    );
  }
}

export default App;
