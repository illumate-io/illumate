import React from 'react';
const axios = require('axios')

class Profile extends React.Component {
  state = {
    username: '',
    school: '',
    email: '',
    type: ''
  }

  componentDidMount() {
    const id = window.localStorage.getItem('id');

    axios.get('http://localhost:2017/private/user/' + id, {
      headers: {
        Authorization: 'Bearer ' + this.props.token, //the token is a variable which holds the token
      }
    })
    .then(data => {
      const { user } = data.data
      this.setState({
        username: user.username,
        school: user.school,
        email: user.email,
        type: user.type
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    if (!this.props.token) {
      this.props.history.push('/login')
    }
    return (
      <div>
        <h2>Profile</h2>
        <p>Name: {this.state.username}</p>
        <p>School: {this.state.school}</p>
        <p>Email: {this.state.email}</p>
        <p>Type: {this.state.type}</p>
      </div>
    )
  }
}


export default Profile
