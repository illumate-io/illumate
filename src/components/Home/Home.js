import React from "react";
import {Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
const axios = require('axios');

class Home extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    // const token = window.localStorage.getItem('token')
    axios.get('http://localhost:2017/private/tutorUsers', {
      headers: {
        Authorization: 'Bearer ' + this.props.token //the token is a variable which holds the token
      }
    })
      .then(data => {
        console.log(data)
        this.setState({ users: data.data.tutors})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <p>Welcome to illumate</p>
        <CardGroup>
          { this.state.users.map(user => {
            return (
              <Card key={user.user_id}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{user.username}</CardTitle>
                  <CardSubtitle>{user.school}</CardSubtitle>
                  {/*<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>*/}
                  <Button>Book</Button>
                </CardBody>
              </Card>
            )
          })}
        </CardGroup>
      </div>
    )
  }
}

export default Home
