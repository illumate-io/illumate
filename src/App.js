import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    let token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      this.setState({ isLoggedIn: true })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' render={() => (
              this.state.isLoggedIn ? (
                <Redirect to='./home'/>
              ) : (
                <Redirect to='./login'/>
              )
            )}/>
            <Route path='/signup' component={Signup} />
            <Route path='/login' render={(router) =>{
              return <Login {...router} />
            }} />
            <Route path='/home' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
