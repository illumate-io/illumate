import React from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import './Login.css'
import {Link, Redirect} from "react-router-dom";
const axios = require('axios');

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  submitForm = (e) => {
    e.preventDefault()
    axios.post('http://localhost:2017/public/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        this.setLog()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setLog() {
    return <Redirect to='./home'/>
  }

  render() {
    return (
      <div className='container'>
        <h2>Login</h2>
        <div className='row'>
          <Form className='offset-md-4 col-md-4 border'>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email"
                     name="email"
                     id="exampleEmail"
                     placeholder="with a placeholder"
                     onChange={(e) => this.setState({ email: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password"
                     name="password"
                     id="examplePassword"
                     placeholder="password placeholder"
                     onChange={(e) => this.setState({ password: e.target.value})}/>
            </FormGroup>
            <Button type='submit' onClick={this.submitForm}>Sign In</Button>
            <p><small>Dont have an account? Please sign up <Link to='./signup'>here</Link></small></p>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
