import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  render() {
    let token = localStorage.getItem('token');
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' render={() => (
              token ? (
                <Redirect to='./home'/>
              ) : (
                <Redirect to='/login'/>
              ))}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/login' render={route => (
              <Login {...route}/>
            )}/>
            <Route path='/home' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
