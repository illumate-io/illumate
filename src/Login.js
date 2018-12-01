import React from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import './Login.css'

class Login extends React.Component {
  state = {

  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <Form className='col border'>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
            </FormGroup>
            <Button type='submit'>Sign In</Button>
            <p><small>Dont have an account? Please sign up <a href='#'>here</a></small></p>
          </Form>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

export default Login
