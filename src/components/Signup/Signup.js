import React from "react";
import { Form, FormGroup, Input, Label, Button, Alert } from "reactstrap";
import './Signup.css'
const axios = require('axios');

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    school: '',
    type: '',
    error: false
  };

  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2017/public/register', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.confirmPassword,
      school: this.state.school,
      type: this.state.type
    })
      .then(response =>  {
        this.props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
        this.setState({error: true})
      });
  };

  render() {
    return (
      <div className='container'>
        <h2>Sign Up</h2>
        {this.state.error && <Alert color="danger">Email has already been used</Alert>}
        <div className='row'>
          <Form className='offset-md-4 col-md-4 border'>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input type="text"
                     name="Username"
                     id="Username"
                     placeholder="enter your username"
                     onChange={(e) => this.setState({ username: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email"
                     name="email"
                     id="email"
                     placeholder="enter your email"
                     onChange={(e) => this.setState({ email: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password"
                     name="password"
                     id="password"
                     placeholder="enter your password"
                     onChange={(e) => this.setState({ password: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="password2">Confirm Password</Label>
              <Input type="password"
                     name="password2"
                     id="password2"
                     placeholder="confirm password"
                     onChange={(e) => this.setState({ confirmPassword: e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="school">School</Label>
              <Input type="text"
                     name="school"
                     id="school"
                     onChange={(e) => this.setState({ school: e.target.value})}/>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" value={"student"} onClick={(e) => this.setState({type: e.target.value})}/>{' '}
                  Student
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" value={"Tutor"} onClick={(e) => this.setState({type: e.target.value})}/>{' '}
                  Tutor
                </Label>
              </FormGroup>
            </FormGroup>
            <Button type='submit' onClick={this.submitForm}>Sign up</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Signup
