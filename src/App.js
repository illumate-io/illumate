import React, {Component} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Page404 from "./components/404/404page";

class App extends Component {
  state = {
    isLoggedIn: false,
    token: ''
  };

  onSignIn = () => {
    this.getToken()
  };

  componentDidMount() {
    this.getToken()
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.isLoggedIn !== prevState.isLoggedIn && this.state.token) {
    //   this.setState({isLoggedIn: true})
    // }
    // console.log('previous', prevState)
    // console.log('current', this.state.isLoggedIn)
  }

  getToken = () => {
    let token = window.localStorage.getItem('token');
    if (token) {
      this.setState({ isLoggedIn: true, token }, () => console.log('state change', this.state.isLoggedIn))
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
                <Redirect to='/home'/>
              ) : (
                <Redirect to='/login'/>
              ))}/>
            {/*Public route*/}
            <Route exact path='/signup' render={route => (
              <Signup {...route}/>
            )}/>
            { this.state.isLoggedIn ?
              null
              : <Route exact path='/login' render={route => (
                <Login {...route} onSignIn={this.onSignIn} loggedIn={this.state.isLoggedIn}/>
              )}/>}
            {/*Private route*/}
            <ProtectedRoute isAllowed={this.state.isLoggedIn}
                            path='/home'
                            token={this.state.token}
                            Component={Home}/>
            <ProtectedRoute isAllowed={this.state.isLoggedIn}
                            Component={Profile}
                            token={this.state.token}
                            path='/profile'/>
            <Route component={Page404}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class ProtectedRoute extends React.Component {
  // state = {
  //   isAllowed: this.props.isAllowed
  // }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('stateee', state)
  //   console.log('prooops', props)
  //   // Any time the current user changes,
  //   // Reset any parts of state that are tied to that user.
  //   // In this simple example, that's just the email.
  //   if (props.isAllowed !== state.isAllowed) {
  //     return {
  //       isAllowed: props.isAllowed,
  //     };
  //   }
  //   return null;
  // }


  // componentDidUpdate(prevProps) {
  //   console.log(prevProps)
  //   console.log(this.props.isAllowed)
  //   // Typical usage (don't forget to compare props):
  //   if (this.props.isAllowed !== prevProps.isAllowed) {
  //     console.log('hello', this.props.isAllowed)
  //   }
  // }

  render() {
    const { isAllowed, Component, path, ...props } = this.props;
    // return null
    // console.log(this.props)
    return isAllowed ?
      (
        <Route exact path={path} render={(route) => (
          <Component {...route} {...props}/>
        )}/>
      ) :  null
  }
};

export default App;
