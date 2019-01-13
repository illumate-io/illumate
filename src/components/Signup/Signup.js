import React from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import './Signup.css'
const axios = require('axios');

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2017/public/register', {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.confirmPassword
    })
      .then(response =>  {
        console.log('sending data!!!');
        console.log(response);
        console.log(this.props);
        this.props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='container'>
        <h2>Sign Up</h2>
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
            <FormGroup>
              <Label for="examplePassword">Confirm Password</Label>
              <Input type="password"
                     name="password2"
                     id="examplePassword2"
                     placeholder="password placeholder"
                     onChange={(e) => this.setState({ confirmPassword: e.target.value})}/>
            </FormGroup>
            <Button type='submit' onClick={this.submitForm}>Sign up</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Signup
