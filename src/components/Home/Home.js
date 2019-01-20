import React from "react";
const axios = require('axios');

class Home extends React.Component {

  componentDidMount() {
    const token = window.localStorage.getItem('token')
    axios.get('http://localhost:2017/private/users', {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <div>Welcome to Illumate</div>
      </>
    )
  }
}

export default Home
