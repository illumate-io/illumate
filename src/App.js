import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Page404 from "./components/404/404page";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  onSignIn = () => {
    this.getToken()
  };

  componentDidMount() {
    this.getToken()
  }

  getToken = () => {
    let token = localStorage.getItem('token');
    if (token) {
      this.setState({ isLoggedIn: true })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          { this.state.isLoggedIn ? <NavigationBar/> : null }
          <Switch>
            <Route exact path='/' render={() => (
              this.state.isLoggedIn ? (
                <Redirect to='./home'/>
              ) : (
                <Redirect to='/login'/>
              ))}/>
            <Route path='/signup' render={route => (
              <Signup {...route}/>
            )}/>
            <Route path='/login' render={route => (
              <Login {...route} onSignIn={this.onSignIn}/>
            )}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
